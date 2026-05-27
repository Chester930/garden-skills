# Kb Retriever Skill — 本地知識庫檢索

> 讓 AI Agent 高效回答基於**本地多格式知識庫目錄**的問題。靠分層索引導航 + 漸進式檢索完成，不把整文件塞進 context。

[English](./README.md) · [返回集合首頁](../../README.zh-CN.md)

![Kb Retriever Skill](../../dist/imgs/kb-retriever-skill.png)

## 這個 Skill 幹什麼

把 Agent 指向一個本地的混合格式知識庫目錄（Markdown / PDF / Excel 等），用自然語言提問。Skill 會：

1. **走分層索引**：沿着每層目錄的 `data_structure.md`，判斷答案大概率在哪些文件裏。
2. **強制先學習再處理**：碰到 PDF / Excel 時，必須先讀對應的 `references/*.md`，按推薦工具去處理，不允許蠻力直接讀。
3. **漸進式檢索**：先 `grep` 定位，再用 offset/limit 局部讀取，避免整文件加載。
4. **最多 5 輪迭代**：每輪根據已讀到的內容收緊關鍵詞，直到信息足夠回答。

---

## 核心特性

- ✅ **多格式支持**：Markdown / 文本、PDF、Excel——按文件類型可擴展。
- ✅ **分層索引**：每層目錄都帶一份 `data_structure.md`，組成一棵索引樹供 Agent 導航。
- ✅ **漸進式檢索**：grep 優先 + 窗口讀取，從不整文件加載，大語料下也能控制住 token。
- ✅ **強制學習機制**：PDF / Excel 的處理必須先讀對應 references。
- ✅ **有界迭代**：最多 5 輪，帶明確終止條件。

---

## Skill 結構

```
skills/kb-retriever/
├── SKILL.md                            主技能（frontmatter name: kb-retriever）
├── README.md  /  README.zh-CN.md       本文檔
├── references/
│   ├── pdf_reading.md                  PDF 處理指南（pdftotext / pdfplumber / pypdf）
│   ├── excel_reading.md                pandas 讀取 Excel 的方法（nrows / dtype 等）
│   └── excel_analysis.md               Excel 的過濾 / 聚合 / 派生指標方法
└── scripts/
    └── convert_pdf_to_images.py        當文本抽取失敗時把 PDF 轉圖像的兜底腳本
```

---

## 準備你的知識庫

本 Skill **不自帶**知識庫——需要你自己提供。兩種方式：

### 默認路徑

在調用 Agent 的工作區根目錄放一個 `knowledge/`：

```
your-project/
├── .claude/skills/  或  .agents/skills/
│   └── kb-retriever/             ← 本 Skill 目錄
└── knowledge/                    ← ← ← 你的知識庫
    ├── data_structure.md         （根級索引，模板見下）
    ├── <領域-1>/
    │   ├── data_structure.md
    │   └── ...
    └── <領域-2>/
        └── ...
```

### 自定義路徑

在你的問題裏直接告訴 Agent，例如"用 `./docs` 這個目錄回答"或"我的知識庫在 `/data/kb`"，Skill 會改用你指定的路徑。

如果默認 `knowledge/` 不存在、用戶也沒指定路徑，Skill 會主動詢問而不是瞎猜。

### `data_structure.md` 模板

每個被索引的目錄都建議放一份：

```markdown
# [目錄名稱]

## 用途
本目錄是幹什麼的、什麼場景下應該被檢索。

## 文件說明
- file1.pdf —— 內容是什麼、時間 / 版本範圍
- file2.xlsx —— 表結構概要、關鍵列
- subdir/ —— 子目錄用途

## 數據範圍
時間範圍、版本、數據來源等幫助 Agent 排序優先級的信息。
```

---

## 檢索是怎麼進行的

### 1. 分層索引導航

每層目錄都先讀 `data_structure.md`，挑出與問題最相關的子目錄或文件，**再遞歸向下**——不會一次性鋪開整棵樹。

### 2. 先學習，再處理（PDF / Excel）

候選集合裏出現 PDF 或 Excel 時，**必須**先讀對應的 references：

```
✅ 讀 references/pdf_reading.md  /  excel_reading.md  /  excel_analysis.md
✅ 理解推薦的工具與參數
✅ 用該工具完成轉換 / 抽取
⏭️  現在才能開始檢索
```

禁止行爲：

- ❌ 沒讀 `pdf_reading.md` 就直接處理 PDF
- ❌ 沒讀 `excel_reading.md` / `excel_analysis.md` 就直接處理 Excel
- ❌ 跳過文件處理直接對原始 PDF / Excel 檢索

### 3. 漸進式檢索

- 不讀整文件。
- 先用 `grep` 定位關鍵詞。
- 只讀匹配處的窗口（`limit` ≈ 200–500 行）。
- 最多 5 輪，每輪收緊關鍵詞。

### 4. 按文件類型選工具

| 格式 | 工具 | 注意 |
|---|---|---|
| Markdown / 文本 | `grep` + 窗口 `read_file` | 必須 offset/limit，不要整文件讀。 |
| PDF | `pdftotext input.pdf output.txt` → 對結果文本 `grep` | **必須輸出到文件**，不要走 stdout。超大 PDF 用 `-f / -l` 控制頁範圍。 |
| Excel | pandas，先 `nrows` 學結構，再帶條件讀取 | 先識別關鍵列（id / time / category），再查詢。 |

### 5. 迭代循環

每輪：

1. 生成 / 更新關鍵詞
2. 選擇尚未充分檢索的候選文件
3. 執行 grep / 局部讀取
4. 分析返回的片段
5. 判斷信息是否夠回答 → 夠則停止；不夠進入下一輪。

終止條件：信息足夠 ✅ 或 達到 5 輪 ⏱️。

---

## 最佳實踐

### 推薦

1. 永遠先從 `data_structure.md` 開始。
2. 碰到 PDF / Excel 之前**先**讀匹配的 `references/*.md`。
3. 從最相關的文件開始檢索，必要時才擴展範圍。
4. 用 `offset` + `limit` 精確控制讀取窗口。
5. PDF 先抽取到文件再 grep，**不要**把二進制塞進 context。

### 避免

1. ❌ 一次性讀取大文件
2. ❌ 沒讀 references 就處理 PDF / Excel
3. ❌ `pdftotext input.pdf -`（stdout）—— 喫 token
4. ❌ 一次性讀取整張 Excel
5. ❌ 在所有目錄裏盲目搜索

---

## 常見問題

**Q1：爲什麼要強制先讀 `references/*.md`？**
保證 Agent 用對的工具配對的參數——否則它要麼把整個文件塞進 context，要麼挑了個慢 / 壞掉的方法。

**Q2：超大 PDF 怎麼辦？**
按頁範圍抽取（`pdftotext -f 1 -l 10`），對結果文本 grep，然後只讀匹配頁面附近的內容。

**Q3：知識庫可以放別處嗎？**
可以，問問題時明確告訴 Agent 路徑即可（"用 `/data/my-kb` 回答"）。

**Q4：怎麼提高檢索準確率？**
使用更具體的關鍵詞、縮小時間 / 文件名範圍、用領域術語而非通用詞彙。

---

## 工具依賴

本 Skill 假定 Agent 可以使用：

- `grep` —— 文本搜索
- `read_file` —— 帶 offset / limit 的窗口讀取
- `pdftotext`（poppler）或 `pdfplumber` —— PDF 文本抽取
- `pandas` —— Excel 讀取 / 分析

`scripts/convert_pdf_to_images.py` 是兜底腳本，給那種文本抽取一無所獲的掃描版 PDF 用。

---

## 許可證

MIT
