# 化妝品 / 護膚品包裝模板

本文件用於"化妝品 / 護膚品瓶身、盒裝、套裝"包裝設計視覺：

- 單瓶護膚品包裝設計
- 化妝品系列套裝包裝
- 禮盒裝包裝
- 美妝電商主圖（含包裝）

特徵：

- 強調瓶身形態 + 標籤 + 材質
- 強調材質質感（玻璃 / 磨砂 / 金屬蓋）
- 通常含品牌名 + 產品名 + 容量
- 配色克制，高級感
- 單瓶或系列展示

## 適用範圍

- 護膚品 / 化妝品包裝設計
- 美妝禮盒
- 美妝電商主圖

## 何時使用

- 用戶提到"護膚品 / 化妝品 / 包裝設計 / 瓶子"
- 用戶希望產品包裝的視覺

不要使用：

- 食品 / 飲料標籤（用 `beverage-label-design.md`）
- 禮盒攝影（用 `product-visuals/packaging-showcase.md`）
- 單品白底圖（用 `product-visuals/white-background-product.md`）

## 缺失信息優先提問順序

1. 品牌名 + 風格定位（高奢 / 極簡 / 文藝 / Y2K）
2. 產品類型（精華 / 面霜 / 潔面 / 香水）
3. 瓶身材質（玻璃 / 磨砂玻璃 / PETG / 陶瓷）
4. 主色 1-2 個
5. 單品 / 套裝
6. 容量

## 主模板：單瓶護膚精華包裝設計

📖 描述

整體一張圖，主體爲一支護膚精華瓶 + 外盒，背景爲簡潔場景。

📝 提示詞

```json
{
  "type": "護膚精華單瓶包裝設計",
  "goal": "生成一張可作爲產品發布主圖 / 包裝提案 / 電商主圖的化妝品包裝視覺",
  "brand": {
    "name": "{argument name=\"brand name\" default=\"LUMEN\"}",
    "positioning": "{argument name=\"positioning\" default=\"科學護膚 + 極簡\"}"
  },
  "product": {
    "name": "{argument name=\"product name\" default=\"光子修護精華\"}",
    "subtitle": "{argument name=\"product subtitle\" default=\"PHOTON REPAIR SERUM\"}",
    "volume": "{argument name=\"volume\" default=\"30ml\"}",
    "form": "{argument name=\"bottle form\" default=\"圓柱形玻璃瓶 + 滴管\"}",
    "key_ingredient": "{argument name=\"ingredient\" default=\"5% 煙酰胺\"}"
  },
  "design": {
    "bottle_material": "{argument name=\"bottle material\" default=\"磨砂透明玻璃\"}",
    "label_material": "{argument name=\"label material\" default=\"啞光不乾膠 + 燙銀字\"}",
    "primary_color": "{argument name=\"primary color\" default=\"#0F4C81 深藍\"}",
    "accent_color": "{argument name=\"accent color\" default=\"啞銀\"}",
    "typography": "{argument name=\"typography\" default=\"現代 sans + 中文小字號\"}"
  },
  "outer_box": {
    "enabled": "{argument name=\"outer box\" default=\"true\"}",
    "shape": "{argument name=\"box shape\" default=\"立方體硬紙盒\"}",
    "finish": "{argument name=\"box finish\" default=\"啞光紙 + 燙銀 logo\"}"
  },
  "scene": {
    "background": "{argument name=\"background\" default=\"米白色絲綢 + 柔光\"}",
    "props": "{argument name=\"props\" default=\"一片透明亞克力板 + 幾滴水珠\"}",
    "lighting": "{argument name=\"lighting\" default=\"高級感軟光 + 頂部主光\"}"
  },
  "format": {
    "aspect_ratio": "{argument name=\"aspect ratio\" default=\"4:5\"}",
    "composition": "瓶子主體居中偏右 + 外盒在後側"
  },
  "constraints": {
    "must_keep": [
      "瓶身材質質感真實（玻璃應有反光與折射）",
      "標籤字體清晰可讀",
      "整體配色 ≤ 3 種",
      "高級感、克制"
    ],
    "avoid": [
      "標籤字體 > 2 種",
      "背景過亮壓過產品",
      "瓶身比例失真",
      "出現廉價塑料感（如果不是有意）"
    ]
  }
}
```

### 參數策略

- 必問：品牌名、產品類型、瓶身形態
- 可默認：材質、配色、外盒、場景
- 可隨機：道具細節

### 自動補全策略

- 用戶給品牌定位 + 產品類型時：自動展開瓶身 / 標籤 / 配色 / 場景
- 高奢 = 黑金 / 極簡 = 白藍 / 文藝 = 米色木質 / Y2K = 高飽和
- 默認 4:5 豎版

## 變體 1：化妝品系列套裝

📝 提示詞

```json
{
  "type": "化妝品系列套裝",
  "product": {
    "form": "5 件套（潔面 + 化妝水 + 精華 + 面霜 + 防曬）"
  },
  "design": {
    "consistency_rule": "5 件包裝嚴格統一系統：相同瓶身比例 + 相同字體 + 相同配色"
  },
  "scene": {
    "composition": "5 件按高度排開 + 居中"
  },
  "constraints": {
    "must_feel": "套裝級 + 系列識別度"
  }
}
```

## 變體 2：禮盒裝

📝 提示詞

```json
{
  "type": "化妝品禮盒裝",
  "outer_box": {
    "enabled": true,
    "shape": "扁長方形禮盒（半開）",
    "finish": "絲絨包面 + 燙金 logo + 緞帶"
  },
  "scene": {
    "background": "深色背景 + 聚光"
  },
  "constraints": {
    "must_feel": "節日 / 禮物級"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "化妝品包裝自動補全",
  "mode": "auto-fill",
  "rule": "用戶給品牌 + 產品類型 + 風格定位，自動決定瓶身 / 標籤 / 外盒 / 場景",
  "constraints": {
    "must_feel": "可發產品發布會"
  }
}
```

## 避免事項

- 不要讓產品名 + 容量字號差異過大
- 不要讓標籤字體超過 2 種
- 不要讓瓶身比例失真
- 不要讓背景過亮壓過產品
- 不要讓品牌 logo 出現在不顯眼位置
- 不要讓"高奢定位"的產品出現廉價材質
