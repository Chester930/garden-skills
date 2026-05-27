# Excel 數據分析

> ⚠️ **使用本文檔前請注意**：本文檔應在實際分析 Excel 數據之前閱讀，以了解正確的 pandas 分析方法。請先閱讀 excel_reading.md 學習如何讀取數據。

使用 pandas 對 Excel 數據進行常規分析操作。

## 快速參考

| 任務 | 常用方法 | 代碼示例 |
|------|----------|----------|
| 按條件過濾 | 布爾索引 | `df[df['sales'] > 10000]` |
| 分組聚合 | groupby | `df.groupby('region')['sales'].sum()` |
| 排序 | sort_values | `df.sort_values('sales', ascending=False)` |
| 計算新列 | 直接賦值 | `df['profit'] = df['revenue'] - df['cost']` |
| 統計匯總 | describe | `df.describe()` |

## 分組聚合（GroupBy）

```python
import pandas as pd

df = pd.read_excel("sales.xlsx")

# 按列分組並聚合
sales_by_region = df.groupby("region")["sales"].sum()
print(sales_by_region)

# 多列分組和多重聚合
result = df.groupby(["region", "product"]).agg({
    "sales": "sum",
    "quantity": "count",
    "price": "mean"
})
```

## 數據過濾

```python
# 按條件過濾行
high_sales = df[df["sales"] > 10000]

# 多條件過濾
filtered = df[(df["sales"] > 10000) & (df["region"] == "North")]

# 使用 isin 過濾
selected = df[df["product"].isin(["A", "B", "C"])]
```

## 派生指標計算

```python
# 計算新列
df["profit_margin"] = (df["revenue"] - df["cost"]) / df["revenue"]

# 百分比計算
df["growth_rate"] = (df["current"] - df["previous"]) / df["previous"] * 100

# 累計求和
df["cumulative_sales"] = df["sales"].cumsum()
```

## 排序

```python
# 按單列排序
df_sorted = df.sort_values("sales", ascending=False)

# 按多列排序
df_sorted = df.sort_values(["region", "sales"], ascending=[True, False])
```

## 數據透視表

```python
# 創建數據透視表
pivot = pd.pivot_table(
    df,
    values="sales",
    index="region",
    columns="product",
    aggfunc="sum",
    fill_value=0
)

print(pivot)
```

## 統計分析

```python
# 基本統計
print(df.describe())

# 特定列統計
print(df["sales"].mean())
print(df["sales"].median())
print(df["sales"].std())

# 計數統計
print(df["category"].value_counts())
```

## 數據合併

```python
# 垂直合併多個 DataFrame
combined = pd.concat([df1, df2], ignore_index=True)

# 按公共列合併（類似 SQL JOIN）
merged = pd.merge(sales, customers, on="customer_id", how="left")
```

## 數據清洗

```python
# 刪除重複行
df = df.drop_duplicates()

# 處理缺失值
df = df.fillna(0)  # 填充爲 0
df = df.dropna()   # 刪除含缺失值的行

# 去除空格
df["name"] = df["name"].str.strip()

# 類型轉換
df["date"] = pd.to_datetime(df["date"])
df["amount"] = pd.to_numeric(df["amount"], errors="coerce")
```
