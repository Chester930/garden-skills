# 中式電商一圖全銷售看板模板

本文件用於生成"一張超大豎圖，把電商平臺主圖 + 詳情頁 + 賣點 + 使用步驟 + 場景 + 包裝信息 + TVC 分鏡全部塞進同一張圖"的複合銷售視覺。

典型用途：

- 淘寶 / 天貓 / 京東詳情頁主推位「上架前一圖過審」
- 抖音 / 快手電商詳情頁豎屏單圖
- 招商提案 / 客戶審稿一圖概覽
- 賣家做新品全套素材的"母版"，後續切割成主圖 / 詳情頁 / 視頻腳本
- 跨境電商對內傳達「一份完整產品營銷策略」

特徵（與現有 product-visuals 模板的區別）：

| 模板 | 信息密度 | 功能 |
|---|---|---|
| `white-background-product.md`（已有） | 低 | 單品多角度純白底 |
| `premium-studio-product.md`（已有） | 中 | 高級影棚商業大片 |
| `lifestyle-product-scene.md`（已有） | 中 | 生活方式場景 |
| `packaging-showcase.md`（已有） | 中 | 禮盒 / 包裝展示 |
| `exploded-view-poster.md`（已有） | 高 | 產品爆炸視圖 + callout |
| **本模板**（新增） | **極高** | **5-7 個銷售模塊 + TVC 分鏡表全在一張圖** |

**關鍵區別**：本模板不是"產品視覺海報"，而是"詳情頁 + 主圖 + 賣點 + 使用 + 場景 + 視頻腳本的設計 master 看板"。

## 適用範圍

- 中式電商詳情頁全套設計 master 看板
- 新品上線一圖過審稿
- 賣家「招商 + 審稿 + 內傳」全場景使用
- 食品 / 美妝 / 日用 / 健康類（信息密度高的品類）
- 「主圖 + 詳情頁 + 視頻腳本」一體化提案

## 何時使用

- 用戶提到"詳情頁設計 / 電商主圖 + 詳情頁一起 / 一圖過審 / 全套銷售看板"
- 用戶希望出"包含使用步驟 + 場景 + TVC 分鏡"的複合視覺
- 中式電商食品 / 美妝 / 母嬰 / 日用品類（信息密度天然高）

不要使用：

- 單品白底主圖 → 用 `white-background-product.md`
- 高級商業大片 → 用 `premium-studio-product.md`
- 僅 TVC 9 格分鏡 → 用 `storyboards-and-sequences/product-tvc-storyboard.md`
- 海外 e-commerce 單圖（信息密度低）→ 用 `product-card-overlay.md` 或 `banner-hero.md`

## 缺失信息優先提問順序

1. 產品類目 + 品牌 + 產品名（必問，是看板的靈魂）
2. 包裝外觀（外盒顏色 / 字體 / logo / 內含物）
3. 配色基調（暗色奢華食品 / 淺色清爽美妝 / 暖色母嬰 / 冷色科技）
4. 必須出現的核心賣點（4-6 條，決定中部 feature panel 內容）
5. 使用方式 / 衝泡步驟（決定 HOW TO MAKE 區域）
6. 應用場景（早餐 / 辦公 / 健身 / 睡前 等 4 選）
7. 是否需要底部 TVC 分鏡表（默認是）

## 主模板：5+1 模塊電商一圖全銷售看板

📖 描述

豎版超長畫布，分上 / 中 / 下 + 底部分鏡表四大區，包含 5 個銷售模塊 + 1 個 TVC 分鏡帶。

📝 提示詞

```json
{
  "type": "Chinese e-commerce product marketing board",
  "goal": "生成一張同時包含主圖 / 詳情頁 / 賣點 / 使用步驟 / 場景 / 攜帶便利 / TVC 分鏡的複合銷售看板，可作爲詳情頁 master / 招商稿 / 賣家內傳素材",
  "product": {
    "category": "{argument name=\"product category\" default=\"instant grain powder drink\"}",
    "brand": "{argument name=\"brand\" default=\"五穀磨房\"}",
    "name": "{argument name=\"product name\" default=\"核桃芝麻黑豆粉\"}",
    "packaging": "{argument name=\"packaging description\" default=\"matte black retail box with gold Chinese typography and a large swirling bowl graphic on the front, plus individual black sachets inside\"}",
    "net_weight": "{argument name=\"net weight\" default=\"320g (32g×10袋)\"}"
  },
  "style": {
    "overall": "{argument name=\"overall style\" default=\"premium dark food advertising layout\"}",
    "color_palette": ["black", "deep brown", "warm gold", "beige", "walnut brown"],
    "lighting": "dramatic studio lighting with glossy highlights and warm rim light",
    "mood": "{argument name=\"mood\" default=\"luxurious, nourishing, healthy, appetizing\"}"
  },
  "layout": {
    "format": "single tall composite board divided into 5 major sections plus a bottom storyboard table",
    "aspect_ratio": "{argument name=\"aspect ratio\" default=\"portrait, approximately 9:16\"}",
    "grid": "top area split into left main image and right detail page; middle area split into preparation guide and feature panel; lower area split into lifestyle scenarios and sachet carry section; bottom is a full-width tabular storyboard",
    "sections": [
      {
        "title": "主圖 / Main image",
        "position": "top-left",
        "count": 8,
        "labels": [
          "{argument name=\"brand\" default=\"五穀磨房\"}",
          "{argument name=\"product name\" default=\"核桃芝麻黑豆粉\"}",
          "32g×10袋 獨立包裝",
          "{argument name=\"main keyword 1\" default=\"五黑穀物\"}",
          "{argument name=\"main keyword 2\" default=\"香濃醇厚\"}",
          "{argument name=\"main keyword 3\" default=\"獨立小袋\"}",
          "{argument name=\"main keyword 4\" default=\"即衝即飲\"}",
          "product box and drink cup hero composition"
        ]
      },
      {
        "title": "詳情頁 / Details page",
        "position": "top-right",
        "count": 5,
        "labels": ["{argument name=\"ingredient 1\" default=\"黑芝麻\"}", "{argument name=\"ingredient 2\" default=\"黑豆\"}", "{argument name=\"ingredient 3\" default=\"黑米\"}", "{argument name=\"ingredient 4\" default=\"核桃\"}", "{argument name=\"ingredient 5\" default=\"穀物粉\"}"]
      },
      {
        "title": "{argument name=\"feature title\" default=\"香濃細膩 順滑好喝\"}",
        "position": "mid-right",
        "count": 4,
        "labels": [
          "{argument name=\"feature 1\" default=\"一衝即飲 營養美味\"}",
          "{argument name=\"feature 2\" default=\"粉質細膩 Fine powder\"}",
          "{argument name=\"feature 3\" default=\"濃香醇厚 Rich & Smooth\"}",
          "{argument name=\"feature 4\" default=\"營養代餐 Nutritious\"}"
        ]
      },
      {
        "title": "{argument name=\"how to title\" default=\"衝泡方式 HOW TO MAKE\"}",
        "position": "mid-left lower",
        "count": 3,
        "labels": [
          "{argument name=\"step 1\" default=\"1 倒入一袋粉(32g)\"}",
          "{argument name=\"step 2\" default=\"2 加入200ml 熱水或牛奶\"}",
          "{argument name=\"step 3\" default=\"3 攪拌均勻 即可享用\"}"
        ]
      },
      {
        "title": "{argument name=\"scenario title\" default=\"一杯好穀物 輕鬆好生活\"}",
        "position": "lower-left",
        "count": 4,
        "labels": [
          "{argument name=\"scenario 1\" default=\"元氣早餐\"}",
          "{argument name=\"scenario 2\" default=\"辦公室下午茶\"}",
          "{argument name=\"scenario 3\" default=\"健身代餐\"}",
          "{argument name=\"scenario 4\" default=\"睡前暖飲\"}"
        ]
      },
      {
        "title": "{argument name=\"convenience title\" default=\"獨立小袋 隨身攜帶\"}",
        "position": "lower-right",
        "count": 3,
        "labels": ["獨立小袋 便攜衛生", "鎖住新鮮 防潮防氧化", "1袋1杯 精準份量"]
      },
      {
        "title": "視頻推廣廣告 / TVC 視頻提示詞 + 分鏡頭腳本",
        "position": "bottom full width",
        "count": 7,
        "labels": [
          "鏡頭1 開場-產品展示",
          "鏡頭2 食材特寫",
          "鏡頭3 倒粉入杯",
          "鏡頭4 衝泡攪拌",
          "鏡頭5 飲用場景",
          "鏡頭6 產品賣點",
          "鏡頭7 結尾口號"
        ]
      }
    ]
  },
  "scene_elements": {
    "ingredients": [
      { "name": "{argument name=\"ingredient 1\" default=\"black sesame\"}", "form": "small black seeds in a round bowl" },
      { "name": "{argument name=\"ingredient 2\" default=\"black beans\"}", "form": "glossy whole beans in a round bowl" },
      { "name": "{argument name=\"ingredient 3\" default=\"black rice\"}", "form": "dark long grains in a round bowl" },
      { "name": "{argument name=\"ingredient 4\" default=\"walnuts\"}", "form": "walnut halves in a round bowl" },
      { "name": "{argument name=\"ingredient 5\" default=\"grain powder\"}", "form": "light beige powder in a round bowl" }
    ],
    "serving": {
      "drink": "{argument name=\"drink description\" default=\"thick gray-brown sesame walnut bean beverage with smooth surface swirl\"}",
      "cup": "transparent glass cup with handle",
      "utensil": "metal spoon stirring or resting inside drink"
    },
    "supporting_props": ["walnuts on table", "scattered black beans", "grain stalks or wheat stems", "dark tabletop", "ingredient bowls", "open package showing 5 visible sachets"]
  },
  "text_treatment": {
    "headline_font": "bold elegant Chinese display type in metallic gold",
    "body_font": "clean sans serif Chinese with occasional English subtitles",
    "accent": "thin gold divider lines and circular ingredient frames"
  },
  "camera_and_composition": {
    "product_shots": "front-facing hero box, angled sachet display box, close-up beverage macro",
    "food_photography": "high-detail commercial food styling, shallow depth of field, crisp texture emphasis"
  },
  "quality": "ultra-detailed commercial design mockup, polished e-commerce key visual plus details page plus ad storyboard, 4K",
  "constraints": {
    "must_keep": [
      "5 個銷售模塊 + 1 個 TVC 分鏡帶都必須出現且可識別",
      "每個模塊有自己的小標題 + 編號或圖標",
      "包裝 / 商品在不同模塊中保持一致外觀",
      "中文文案在主標 / 副標 / 賣點 hierarchy 清晰"
    ],
    "avoid": [
      "把詳情頁區畫成純文字（必須有原料圖 / icon）",
      "5 個模塊之間沒有視覺邊界",
      "TVC 分鏡帶畫成文字列表而非縮略圖 + 標註",
      "把所有文案疊到主圖區導致主圖不像主圖",
      "原料 / 商品在不同區域改變包裝顏色"
    ]
  }
}
```

### 參數策略

- **必問**：product brand + name、packaging description、5 個原料 / 成分 / 賣點關鍵詞
- **可默認**：style overall（按品類自動）、scenario / step / feature 文案（按品類自動套話術）
- **可隨機**：supporting props 細節、TVC 7 鏡頭具體文案

### 自動補全策略

- 用戶只說"做一個 XX 的電商詳情頁一圖全套"→ 默認按食品 / 美妝 / 母嬰自動選 dark / light / warm 色系
- 沒指定原料 5 項 → 按產品品類自動列（如奶粉 → 5 種奶源；護膚 → 5 種成分；健身代餐 → 5 種穀物）
- 沒指定 TVC 鏡頭 → 用模板裏的 7 鏡頭標準結構

## 變體 1：淺色清爽美妝 / 護膚板（替換風格）

📝 提示詞

```json
{
  "type": "Chinese e-commerce skincare product marketing board",
  "style_override": {
    "overall": "clean light premium beauty layout",
    "color_palette": ["off-white", "soft beige", "rose gold", "pastel pink", "champagne"],
    "lighting": "bright airy soft daylight with subtle highlights",
    "mood": "fresh, clean, hydrating, premium"
  },
  "section_replacements": {
    "ingredients_section": "5 active ingredient icons (玻尿酸 / 煙酰胺 / 神經酰胺 / 視黃醇 / VC)",
    "feature_section": "4 efficacy claims (保溼 / 美白 / 抗皺 / 修護)",
    "scenario_section": "4 use moments (晨間 / 通勤 / 妝前 / 夜間修護)",
    "how_to_section": "3-step routine (潔面 → 塗抹 → 按摩)"
  }
}
```

### 何時選這個變體

- 美妝 / 護膚 / 個護品類
- 客戶要"日系清爽 / 韓系治癒"風
- 不需要食品類的"暗色 + 金"奢華感

## 變體 2：母嬰 / 兒童 / 暖色系

📝 提示詞

```json
{
  "type": "Chinese e-commerce baby/child product marketing board",
  "style_override": {
    "overall": "warm friendly child-safe layout with rounded corners and soft illustrations",
    "color_palette": ["cream", "soft yellow", "baby blue", "pastel pink", "wood brown"],
    "lighting": "warm natural daylight, gentle shadows",
    "mood": "safe, gentle, healthy, trustworthy"
  },
  "extra_section": {
    "title": "媽媽放心 / 安全認證",
    "elements": ["歐盟認證", "無添加", "0 防腐劑", "寶寶可用"]
  }
}
```

### 何時選這個變體

- 母嬰 / 兒童 / 孕產品類
- 必須強調「安全 / 認證 / 無添加」
- 暖色 + 圓潤視覺

## 變體 3：3C / 數碼 / 工具品類（少文字 + 多技術參數）

📝 提示詞

```json
{
  "type": "Chinese e-commerce 3C / digital product marketing board",
  "style_override": {
    "overall": "tech minimal dark layout with neon accents",
    "color_palette": ["matte black", "graphite", "cyan", "white"],
    "mood": "high-tech, precise, professional"
  },
  "section_replacements": {
    "ingredients_section": "spec table (CPU / RAM / Battery / Connectivity / Weight)",
    "feature_section": "4 tech feature pills with icons",
    "scenario_section": "4 user scenarios (辦公 / 出差 / 創作 / 遊戲)",
    "how_to_section": "skip; replace with 6 product angle close-ups"
  }
}
```

### 何時選這個變體

- 數碼 / 工具 / 電子產品
- 客戶希望"少抒情 + 多參數 + 強科技感"

## 避免事項

- ❌ 把所有 5+1 模塊擠在 1:1 方圖裏 → 必須用 9:16 / 3:4 長圖才裝得下
- ❌ 主圖區寫滿文字 → 主圖就是主圖，文字應在賣點區
- ❌ 模塊之間沒有視覺邊界（線 / 色塊 / 留白）→ 整圖變成糊一團
- ❌ TVC 分鏡帶畫成純文本列表 → 必須有 7 張 thumbnail 縮略圖 + 編號 + 標題
- ❌ 包裝 / 商品在不同模塊改變顏色 / 字體 → 一致性是這類看板的命脈
- ❌ 配色 ≥ 6 主色 → 必須控制在 3-4 主色 + 1 accent
- ❌ 全圖字體 ≥ 4 種 → 標題 + 正文 + 1 個手寫 accent 即可
- ❌ 讓模型"自己想 5 個原料" 而你的產品確實有特定成分 → 必須在 prompt 中明確列出
