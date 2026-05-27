# Excel 文件讀取

> ⚠️ **使用本文檔前請注意**：本文檔應在實際處理 Excel 文件之前閱讀，以了解正確的 pandas 讀取方法。請配合 excel_analysis.md 一起使用。

使用 pandas 讀取 Excel 文件的核心方法。

## 快速入門

**最常用的讀取方式**：
```python
import pandas as pd

# 讀取第一個工作表（或指定工作表）
df = pd.read_excel("data.xlsx", sheet_name="Sheet1")

# 只讀取前幾行查看結構
df_preview = pd.read_excel("data.xlsx", nrows=10)

# 只讀取需要的列（提高性能）
df = pd.read_excel("data.xlsx", usecols=["列1", "列2", "列3"])
```

## 讀取單個工作表

```python
import pandas as pd

# 讀取指定工作表
df = pd.read_excel("data.xlsx", sheet_name="Sheet1")

# 查看前幾行
print(df.head())

# 基本統計信息
print(df.describe())
```

## 讀取整個工作簿的所有工作表

```python
import pandas as pd

# 讀取所有工作表
excel_file = pd.ExcelFile("workbook.xlsx")

for sheet_name in excel_file.sheet_names:
    df = pd.read_excel(excel_file, sheet_name=sheet_name)
    print(f"\n{sheet_name}:")
    print(df.head())
```

## 讀取特定列

```python
import pandas as pd

# 只讀取指定列（提高性能）
df = pd.read_excel("data.xlsx", usecols=["column1", "column2", "column3"])
```

## 性能優化選項

- 使用 `usecols` 只讀取需要的列
- 使用 `dtype` 參數指定列類型以加快讀取速度
- 根據文件類型選擇合適的引擎：`engine='openpyxl'` 或 `engine='xlrd'`

## 處理大文件

對於非常大的 Excel 文件，避免一次性讀取整個文件：
- 使用 `nrows` 參數限制讀取的行數
- 先讀取前若干行了解數據結構
- 按需分批處理數據
