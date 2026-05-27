# PDF 讀取與分析

> ⚠️ **使用本文檔前請注意**：本文檔應在實際處理 PDF 文件之前完整閱讀，以選擇最合適的工具和方法。不要在未閱讀本文檔的情況下盲目嘗試處理 PDF。

用於從 PDF 文件中提取文本、表格和元數據的方法。

## 快速決策表

| 場景 | 推薦工具 | 原因 | 命令/代碼示例 |
|------|----------|------|--------------|
| 純文本提取（最常見） | pdftotext 命令 | 最快最簡單 | `pdftotext input.pdf output.txt` |
| 需要保留布局 | pdftotext -layout | 保持原始排版 | `pdftotext -layout input.pdf output.txt` |
| 需要提取表格 | pdfplumber | 表格識別能力強 | `page.extract_tables()` |
| 需要元數據 | pypdf | 輕量級 | `reader.metadata` |
| 掃描PDF（圖片） | OCR (pytesseract) | 無其他選擇 | 先轉圖片再OCR |

## 文本提取優先級

**推薦優先級（從高到低）**：
1. **pdftotext 命令行工具**（最快，適合大多數 PDF）
2. pdfplumber（適合需要保留布局或提取表格）
3. pypdf（輕量級，適合簡單提取）
4. OCR（僅用於掃描PDF或無法直接提取文本的情況）

## 快速開始：使用 pdftotext（推薦）

> ⚠️ **重要**：必須將輸出保存到文件，不要直接輸出到終端（stdout），否則會佔用大量 token！

```bash
# ✅ 正確：提取文本到文件（最快最簡單）
pdftotext input.pdf output.txt

# ✅ 正確：保留布局並輸出到文件
pdftotext -layout input.pdf output.txt

# ✅ 正確：提取特定頁面到文件
pdftotext -f 1 -l 5 input.pdf output.txt  # 第1-5頁

# ❌ 錯誤：不要使用 stdout（會佔用大量 token）
# pdftotext input.pdf -
```

**使用流程**：
1. 使用 pdftotext 提取文本到臨時文件
2. 使用 grep 或 Read 工具對生成的文本文件進行檢索
3. 只讀取匹配部分的上下文，而非全文

如果需要在 Python 中處理：

```python
from pypdf import PdfReader

# 讀取 PDF
reader = PdfReader("document.pdf")
print(f"Pages: {len(reader.pages)}")

# 提取文本
text = ""
for page in reader.pages:
    text += page.extract_text()
```

## Python 庫

### pypdf - 基本文本提取

```python
from pypdf import PdfReader

reader = PdfReader("document.pdf")

# 提取全部文本
for page in reader.pages:
    text = page.extract_text()
    print(text)

# 提取元數據
meta = reader.metadata
print(f"Title: {meta.title}")
print(f"Author: {meta.author}")
print(f"Subject: {meta.subject}")
print(f"Creator: {meta.creator}")
```

### pdfplumber - 帶布局的文本和表格提取

#### 提取文本（保留布局）

```python
import pdfplumber

with pdfplumber.open("document.pdf") as pdf:
    for page in pdf.pages:
        text = page.extract_text()
        print(text)
```

#### 提取表格

```python
with pdfplumber.open("document.pdf") as pdf:
    for i, page in enumerate(pdf.pages):
        tables = page.extract_tables()
        for j, table in enumerate(tables):
            print(f"Table {j+1} on page {i+1}:")
            for row in table:
                print(row)
```

#### 高級表格提取（轉爲 DataFrame）

```python
import pandas as pd

with pdfplumber.open("document.pdf") as pdf:
    all_tables = []
    for page in pdf.pages:
        tables = page.extract_tables()
        for table in tables:
            if table:  # 檢查表格非空
                df = pd.DataFrame(table[1:], columns=table[0])
                all_tables.append(df)

# 合併所有表格
if all_tables:
    combined_df = pd.concat(all_tables, ignore_index=True)
    combined_df.to_excel("extracted_tables.xlsx", index=False)
```

#### 帶坐標的精確文本提取

```python
import pdfplumber

with pdfplumber.open("document.pdf") as pdf:
    page = pdf.pages[0]
    
    # 提取所有字符及其坐標
    chars = page.chars
    for char in chars[:10]:  # 前10個字符
        print(f"Char: '{char['text']}' at x:{char['x0']:.1f} y:{char['y0']:.1f}")
    
    # 按邊界框提取文本 (left, top, right, bottom)
    bbox_text = page.within_bbox((100, 100, 400, 200)).extract_text()
```

#### 複雜表格的高級設置

```python
import pdfplumber

with pdfplumber.open("complex_table.pdf") as pdf:
    page = pdf.pages[0]
    
    # 自定義表格提取設置
    table_settings = {
        "vertical_strategy": "lines",
        "horizontal_strategy": "lines",
        "snap_tolerance": 3,
        "intersection_tolerance": 15
    }
    tables = page.extract_tables(table_settings)
    
    # 可視化調試
    img = page.to_image(resolution=150)
    img.save("debug_layout.png")
```

### pypdfium2 - 快速渲染和文本提取

```python
import pypdfium2 as pdfium

# 加載 PDF
pdf = pdfium.PdfDocument("document.pdf")

# 提取文本
for i, page in enumerate(pdf):
    text = page.get_text()
    print(f"Page {i+1} text length: {len(text)} chars")
```

#### 將 PDF 頁面渲染爲圖片

```python
import pypdfium2 as pdfium
from PIL import Image

pdf = pdfium.PdfDocument("document.pdf")

# 渲染單頁
page = pdf[0]  # 第一頁
bitmap = page.render(
    scale=2.0,  # 高分辨率
    rotation=0  # 不旋轉
)

# 轉換爲 PIL Image
img = bitmap.to_pil()
img.save("page_1.png", "PNG")

# 處理多頁
for i, page in enumerate(pdf):
    bitmap = page.render(scale=1.5)
    img = bitmap.to_pil()
    img.save(f"page_{i+1}.jpg", "JPEG", quality=90)
```

## 命令行工具

### pdftotext (poppler-utils)

> ⚠️ **性能優化**：始終輸出到文件，避免佔用 token

```bash
# ✅ 提取文本到文件
pdftotext input.pdf output.txt

# ✅ 保留布局提取到文件
pdftotext -layout input.pdf output.txt

# ✅ 提取特定頁面到文件
pdftotext -f 1 -l 5 input.pdf output.txt  # 第1-5頁

# ✅ 提取帶坐標的文本到 XML 文件（用於結構化數據）
pdftotext -bbox-layout document.pdf output.xml

# ❌ 避免：不要省略輸出文件名（會輸出到 stdout）
# pdftotext input.pdf
```

### 高級圖片轉換 (pdftoppm)

```bash
# 轉換爲 PNG，指定分辨率
pdftoppm -png -r 300 document.pdf output_prefix

# 轉換特定頁面範圍，高分辨率
pdftoppm -png -r 600 -f 1 -l 3 document.pdf high_res_pages

# 轉換爲 JPEG，指定質量
pdftoppm -jpeg -jpegopt quality=85 -r 200 document.pdf jpeg_output
```

### 提取嵌入圖片 (pdfimages)

```bash
# 提取所有圖片
pdfimages -j input.pdf output_prefix

# 列出圖片信息（不提取）
pdfimages -list document.pdf

# 以原始格式提取
pdfimages -all document.pdf images/img
```

## OCR 提取（掃描PDF）

```python
# 需要: pip install pytesseract pdf2image
import pytesseract
from pdf2image import convert_from_path

# PDF 轉圖片
images = convert_from_path('scanned.pdf')

# OCR 每一頁
text = ""
for i, image in enumerate(images):
    text += f"Page {i+1}:\n"
    text += pytesseract.image_to_string(image)
    text += "\n\n"

print(text)
```

## 處理加密 PDF

```python
from pypdf import PdfReader

try:
    reader = PdfReader("encrypted.pdf")
    if reader.is_encrypted:
        reader.decrypt("password")
    
    # 解密後可正常提取文本
    for page in reader.pages:
        text = page.extract_text()
        print(text)
except Exception as e:
    print(f"Failed to decrypt: {e}")
```

```bash
# 使用 qpdf 解密（需要知道密碼）
qpdf --password=mypassword --decrypt encrypted.pdf decrypted.pdf

# 檢查加密狀態
qpdf --show-encryption encrypted.pdf
```

## 批量處理

```python
import os
import glob
from pypdf import PdfReader
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def batch_extract_text(input_dir):
    """批量提取文本"""
    pdf_files = glob.glob(os.path.join(input_dir, "*.pdf"))
    
    for pdf_file in pdf_files:
        try:
            reader = PdfReader(pdf_file)
            text = ""
            for page in reader.pages:
                text += page.extract_text()
            
            output_file = pdf_file.replace('.pdf', '.txt')
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(text)
            logger.info(f"Extracted text from: {pdf_file}")
            
        except Exception as e:
            logger.error(f"Failed to extract text from {pdf_file}: {e}")
            continue
```

## 性能優化

1. **文件輸出優先**：始終將 pdftotext 輸出保存到文件，然後用 grep/Read 檢索，避免直接輸出到終端佔用大量 token
2. **大型PDF**：使用流式方式逐頁處理，避免一次性加載整個文件
3. **文本提取**：`pdftotext` 最快；pdfplumber 適合結構化數據和表格
4. **圖片提取**：`pdfimages` 比渲染頁面快得多
5. **內存管理**：逐頁或分塊處理大文件

## 快速參考

| 任務 | 最佳工具 | 命令/代碼 |
|------|----------|-----------|
| 提取文本 | pdfplumber | `page.extract_text()` |
| 提取表格 | pdfplumber | `page.extract_tables()` |
| 命令行提取 | pdftotext | `pdftotext -layout input.pdf` |
| OCR 掃描PDF | pytesseract | 先轉圖片再OCR |
| 提取元數據 | pypdf | `reader.metadata` |
| PDF轉圖片 | pypdfium2 | `page.render()` |

## 可用包

- **pypdf** - 基本操作（BSD 許可）
- **pdfplumber** - 文本和表格提取（MIT 許可）
- **pypdfium2** - 快速渲染和提取（Apache/BSD 許可）
- **pytesseract** - OCR（Apache 許可）
- **pdf2image** - PDF轉圖片
- **poppler-utils** - 命令行工具（GPL-2 許可）
