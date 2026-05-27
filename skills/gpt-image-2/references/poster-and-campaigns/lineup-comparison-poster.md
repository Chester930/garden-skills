# 系列產品 / 型號 Lineup 對比信息圖海報模板

本文件用於生成"以單一品牌的全產品線 / 全型號 / 全 SKU 爲主體，按等級 / 系列 / 類目分行排列，配 legend / icon key / 賣點 chart"的奢華 catalog 風信息圖海報。

典型用途：

- 樂器品牌全 lineup 海報（PRS / Fender / Gibson / Boss…）
- 汽車品牌車型譜系海報（Porsche / Audi / Ford…）
- 鐘錶 / 鏡頭 / 筆 / 高端硬件品類系列對比
- 收藏家級海報 / 博物館級品牌致敬圖
- 年度 catalog 或 anniversary 海報
- 經銷商門店牆面掛圖

特徵（與現有 poster / infographics 模板的區別）：

| 模板 | 用途 |
|---|---|
| `infographics/comparison-infographic.md`（已有） | A vs B / 套餐檔位 / 誤區對比（≤ 6 項） |
| `infographics/legend-heavy-infographic.md`（已有） | 高密度科普 / 因果鏈 / 演化（不強調產品 lineup） |
| **本模板**（新增） | **30+ 個 SKU 同時展示，按 tier × series 矩陣排列，含圖例** |

**核心特徵**：30-50 張產品 thumbnail 同時出現，靠 tier key + icon legend + tonal chart 讓讀者一眼看懂"我應該買哪一型"。

## 適用範圍

- 單品牌 30+ SKU 的 lineup 致敬海報
- 經銷商門店掛圖 / 收藏家海報
- 年度 catalog 一圖概覽
- 周年 / anniversary 紀念海報
- B2B 招商「我們有多少 SKU」展示

## 何時使用

- 用戶提到"全 lineup / 全產品譜系 / 全型號 / 收藏家海報 / catalog 一圖"
- 單品牌產品數量 ≥ 20
- 用戶想強調「品牌歷史 / 產品線廣 / 選擇豐富」

不要使用：

- ≤ 6 個產品的對比 → 用 `infographics/comparison-infographic.md`
- 單產品多角度 → 用 `product-visuals/exploded-view-poster.md`
- 單產品高級影棚圖 → 用 `product-visuals/premium-studio-product.md`
- 多品牌混合對比 → 不適用（本模板強調單品牌）

## 缺失信息優先提問順序

1. 品牌名 + 類目（PRS 吉他 / 保時捷汽車 / 萬寶龍鋼筆…）
2. 總 SKU 數（20-50 較合適，超過 60 單格塌陷）
3. 分行依據（tier 等級 / series 系列 / 年代 / 價位…）
4. 是否需要 icon key / tonal key / spec key（影響頂部圖例數）
5. 配色基調（**dark luxury / 白底 minimal / 復古沙金**）
6. 比例（默認 3:4 豎版）
7. 是否包含品牌籤名 / 印章 / seal 裝飾

## 主模板：奢華 lineup 對比信息圖海報

📖 描述

豎版海報，header（主標 + 副標 + 籤名 + 雙印章）+ 頂部 3 個 legend key + 中部 6-8 行產品矩陣（按 tier 分行），每行左側標 tier 名、右側排 6-7 個產品卡。

📝 提示詞

```json
{
  "type": "luxury vintage lineup comparison infographic poster",
  "goal": "生成一張奢華 catalog 風的品牌全產品線對比海報，30+ SKU 同時呈現，配等級 / 圖標 / 風格圖例",
  "subject": "{argument name=\"subject description\" default=\"a highly detailed, vertically oriented PRS electric guitar lineup chart designed like a premium museum poster or collector's reference board\"}",
  "style": {
    "overall": "{argument name=\"overall style\" default=\"ornate, dark, glossy, high-contrast, gold-foil typography, elegant wood-and-metal textures, symmetrical grid layout, premium catalog aesthetic, subtle vintage patina, ultra sharp graphic design\"}"
  },
  "branding": {
    "main_headline": "{argument name=\"main headline\" default=\"THE LEGENDARY LINEAGE OF PRS GUITARS\"}",
    "subheadline": "{argument name=\"subheadline\" default=\"EVERY ICON. EVERY LINE. ONE HERITAGE.\"}",
    "signature": "{argument name=\"signature\" default=\"Paul Reed Smith\"}",
    "left_seal": "{argument name=\"left seal\" default=\"PAUL REED SMITH GUITARS\"}",
    "right_seal": "{argument name=\"right seal\" default=\"MADE IN MARYLAND U.S.A.\"}"
  },
  "palette": {
    "background": "{argument name=\"background palette\" default=\"black and deep charcoal with dark figured wood accents\"}",
    "primary": "{argument name=\"primary color\" default=\"antique gold\"}",
    "secondary": "{argument name=\"secondary color\" default=\"cream\"}",
    "accent_colors": ["deep green", "teal", "royal blue", "purple", "gold", "burgundy"]
  },
  "layout": {
    "format": "{argument name=\"format\" default=\"single-page vertical poster\"}",
    "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4 portrait\"}",
    "header": {
      "position": "top",
      "elements": [
        "large central title",
        "small tagline below",
        "script signature",
        "2 circular emblems in upper left and upper right",
        "{argument name=\"legend count\" default=\"3\"} horizontal legend boxes under the title"
      ]
    },
    "sections": [
      {
        "title": "{argument name=\"key 1 title\" default=\"PRESTIGE TIER KEY\"}",
        "position": "upper left below title",
        "count": 6,
        "labels": ["{argument name=\"tier 1\" default=\"SE\"}", "{argument name=\"tier 2\" default=\"S2\"}", "{argument name=\"tier 3\" default=\"CE\"}", "{argument name=\"tier 4\" default=\"CORE\"}", "{argument name=\"tier 5\" default=\"WOOD LIBRARY\"}", "{argument name=\"tier 6\" default=\"PRIVATE STOCK\"}"]
      },
      {
        "title": "{argument name=\"key 2 title\" default=\"PICKUP ICON KEY\"}",
        "position": "upper center-right below title",
        "count": 7,
        "labels": ["HH", "HSH", "P-90", "SOAP", "58/15", "TCI", "Bass"]
      },
      {
        "title": "{argument name=\"key 3 title\" default=\"TONAL CHARACTER KEY\"}",
        "position": "upper right below title",
        "count": 7,
        "labels": ["Warm / Vintage", "Balanced / All-around", "Bright / Articulate", "High Gain / Modern", "Blues / Classic Rock", "Metal / Progressive", "Funk / Soul / Clean"]
      },
      {
        "title": "{argument name=\"row 1 label\" default=\"CORE\"}",
        "position": "first main row left label",
        "count": 7,
        "labels": ["{argument name=\"row 1 model 1\" default=\"Custom 24\"}", "McCarty 594", "DGT (David Grissom)", "Custom 22", "Hollowbody II", "SC 594", "row category panel"]
      },
      {
        "title": "{argument name=\"row 2 label\" default=\"S2\"}",
        "position": "second main row left label",
        "count": 6,
        "labels": ["S2 Custom 24", "S2 McCarty 594", "S2 Standard 24", "S2 Vela", "S2 Singlecut", "S2 Mira"]
      },
      {
        "title": "{argument name=\"row 3 label\" default=\"SE\"}",
        "position": "third main row left label",
        "count": 6,
        "labels": ["SE Custom 24", "SE Standard 24", "SE Paul's Guitar", "SE Santana", "SE Hollowbody II", "SE Mark Holcomb"]
      },
      {
        "title": "{argument name=\"row 4 label\" default=\"CE\"}",
        "position": "fourth main row left label",
        "count": 6,
        "labels": ["CE 24", "CE 22", "CE 24 Semi-Hollow", "CE 24 Floyd", "CE 24 Satin", "CE Bass"]
      },
      {
        "title": "{argument name=\"row 5 label\" default=\"BOLT-ON SERIES\"}",
        "position": "fifth main row left label",
        "count": 6,
        "labels": ["NF 53", "Silver Sky", "NF 3", "NF 53 Satin", "DGT Bolt-On", "Studio"]
      },
      {
        "title": "{argument name=\"row 6 label\" default=\"PRIVATE STOCK\"}",
        "position": "sixth main row left label",
        "count": 6,
        "labels": ["Dragon I", "Frostbite", "#4004", "The Tree of Life", "#8731", "PS DGT"]
      }
    ],
    "footer": {
      "position": "bottom",
      "elements": ["small badge at lower left", "centered company line", "right-side script signature"]
    }
  },
  "content_grid": {
    "total_models_shown": "{argument name=\"total model count\" default=\"37\"}",
    "card_design": "{argument name=\"card design\" default=\"each product card contains a guitar render, model name, year, small pickup icons, a short descriptive blurb, and origin/wood specs at the bottom\"}",
    "row_side_panels": 6
  },
  "visual_details": {
    "products": "{argument name=\"product description\" default=\"front-facing electric guitars with varied body shapes and highly polished figured maple tops, metallic and transparent finishes, some solid colors, some natural wood\"}",
    "typography": "all caps serif headlines, small serif body text, script signature accents",
    "borders": "thin decorative gold rules around every panel and the full poster",
    "lighting": "studio-lit products against dark panel backgrounds",
    "render_quality": "clean infographic precision with realistic product renders"
  },
  "camera": "straight-on flat poster view, no perspective distortion, centered composition",
  "quality": "ultra detailed, print-ready, high-resolution editorial infographic, luxury brand poster",
  "constraints": {
    "must_keep": [
      "30+ 個產品 thumbnail 必須可讀且方向統一（同一視角）",
      "tier 行左側 label 清晰",
      "頂部 3 key（tier / pickup / tonal）必須可對應到產品卡上的小 icon",
      "籤名 / 印章 / 主標 / 副標都必須出現",
      "整體一致深色 + 金 / 沙白配色"
    ],
    "avoid": [
      "產品方向不統一（一個正面一個 45° 一個仰拍）",
      "label 不對齊導致行不像 catalog",
      "30+ 產品擠在 1:1 方圖裏 → 必須豎版 3:4 或更長",
      "色彩超過 4 主色 + 6 accent",
      "產品名拼寫錯誤（lineup 海報核心是產品名，必須正確）"
    ]
  }
}
```

### 參數策略

- **必問**：brand name、product category、6 個 tier 名 + 每行的產品名清單
- **可默認**：style overall（按品類自動）、palette、aspect ratio
- **可隨機**：description blurb（按產品自動）、card 上的 spec 文字

### 自動補全策略

- 用戶給"PRS 吉他全 lineup" → 用模板默認 6 行 × 6-7 SKU 結構
- 用戶給"汽車品牌"+ 幾個車型 → 自動按"轎車 / SUV / 跑車 / EV"分行
- 不指定 legend 數 → 默認 3 個（tier / 核心 spec / 性格）

## 變體 1：淺色極簡 minimal（適合科技 / 設計品牌）

📝 提示詞

```json
{
  "type": "minimal lineup comparison poster, light edition",
  "style_override": {
    "overall": "clean white / light gray background, thin sans-serif typography, no gold foil, no ornate borders, only thin hairlines",
    "palette": "off-white background, soft gray dividers, single accent color from brand (e.g. orange / blue / green)"
  },
  "use_case": "Apple / Tesla / Bose / 設計驅動品牌"
}
```

### 何時選這個變體

- 科技 / 設計品牌（不適合奢華金箔）
- 想要極簡 / 現代感
- 單一 accent 強對比

## 變體 2：橫版 timeline 譜系版（按年代分行）

📝 提示詞

```json
{
  "type": "horizontal lineup chronology poster",
  "format_override": "horizontal poster, 16:9 or 21:9",
  "row_grouping_by": "decade (1950s / 60s / 70s / 80s / 90s / 2000s / 2010s / 2020s)",
  "use_case": "品牌 anniversary 海報 / 演變史"
}
```

### 何時選這個變體

- 品牌周年 / 歷史海報
- 想強調「時間軸 + 演變」而非「等級 + 選擇」
- 橫屏展示（展覽 / 門店牆）

## 變體 3：3 系列對比表（適合 SKU 較少 / 入門-旗艦對比）

📝 提示詞

```json
{
  "type": "3-tier lineup comparison table poster",
  "row_count": 3,
  "rows": ["BASIC / 入門", "PRO / 進階", "ULTRA / 旗艦"],
  "columns_per_row": 4,
  "extra_columns": ["spec table per tier with checkmarks / dashes"],
  "use_case": "新品發布 / 價位段對比 / B2C 選購指南"
}
```

### 何時選這個變體

- SKU 數 ≤ 12
- 用戶更需要「性能對比」而非「lineup 全景」
- 適合官網 / 落地頁 / 銷售物料

## 避免事項

- ❌ 30+ SKU 擠在 1:1 方圖 → 必須豎版長圖或橫版寬圖
- ❌ 產品方向 / 視角不統一 → catalog 感立即崩塌
- ❌ tier label 用與正文相同字號 → 行無法快速識別
- ❌ legend key 與產品 thumb 上的 icon 對不上（圖例失效）
- ❌ 產品 thumb 之間間距不均勻 → 視覺雜亂
- ❌ 產品名拼寫錯誤（catalog 類海報核心信息）
- ❌ 配色 ≥ 6 主色（應控制在 1 主背景 + 1 主字色 + 1 accent + 至多 6 行 accent）
- ❌ 把模板裏的"PRS Guitars"原樣保留而你的品牌不是 PRS → 必須替換 brand name 與所有產品名
