# 便當格 / 模塊化信息圖模板

本文件用於生成"便當格 / Bento grid / 高密度模塊化"信息圖：

- 小紅書"高密度信息大圖"（避坑指南 / 完全攻略 / 多維測評）
- 公衆號 / Notion 式知識卡片
- 產品功能 overview 圖
- 多維度測評 / 多 SKU 對比一圖流
- 年終總結 / 季度回顧的儀錶盤

特徵：

- 由 6-9 個尺寸不一的矩形模塊組成（像 Apple iOS widget 排布）
- 每個模塊獨立承載一個信息單元（一組數據 / 一個截圖 / 一個要點）
- 大模塊作視覺錨點，小模塊補充細節
- 模塊內圓角統一、留白節制、信息密度高
- 整體配色統一，用色塊區分模塊功能

## 適用範圍

- 高密度知識 / 乾貨 / 攻略圖
- 多模塊產品介紹圖
- 多維測評圖
- 年度 / 季度 review 圖
- Notion / 儀錶盤式視覺

## 何時使用

- 用戶提到 "bento / 便當格 / widget / 模塊化 / 高密度信息大圖 / 一圖流 / 乾貨圖 / Notion 風"
- 用戶希望"一張圖說清楚多個維度"
- 用戶希望視覺像 Apple Newsroom / iOS widget / Notion dashboard

不要使用：

- 用戶要的是單一主體的信息圖（用 `infographics/legend-heavy-infographic.md`）
- 用戶要的是手繪 / 筆記本風（用 `infographics/hand-drawn-infographic.md`）
- 用戶要的是步驟流程（用 `infographics/step-by-step-infographic.md`）
- 用戶要的是技術架構圖（用 `technical-diagrams/system-architecture.md`）

## 缺失信息優先提問順序

1. 主題（一句話能說清的，比如"2026 年最值得入手的 8 款國產相機"）
2. 模塊數（6 / 8 / 9，建議 8）
3. 主標題 + 副標
4. 配色基調（極簡黑白 / 莫蘭迪 / Apple 淺灰 / 暗色科技 / 暖系）
5. 比例（小紅書 3:4 / 公衆號 16:9 / 1:1）
6. 是否需要"主推薦 / TOP 1"那個特別強調的大模塊

## 主模板：便當格高密度信息圖

📖 描述

一張圖被劃分爲 6-9 個尺寸不一的圓角矩形模塊，整體像 iOS widget 屏幕排布，每個模塊承載一個獨立信息單元。

📝 提示詞

```json
{
  "type": "便當格 / Bento grid 高密度模塊化信息圖",
  "goal": "生成一張'像 Apple newsroom / iOS widget / Notion dashboard'的多模塊信息圖，一圖說清多個維度",
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect_ratio\" default=\"3:4 portrait\"}",
    "background": "{argument name=\"background\" default=\"warm off-white #F5F2EC\"}",
    "global_corner_radius": "{argument name=\"global_corner_radius\" default=\"24px\"}",
    "module_gap": "{argument name=\"module_gap\" default=\"16px\"}"
  },
  "header": {
    "main_title": "{argument name=\"main_title\" default=\"2026 年最值得入手的 8 款國產相機\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"全畫幅 / APS-C / 視頻向 / 復古相機一站式選\"}",
    "title_position": "top-left, large bold sans-serif"
  },
  "palette": {
    "primary": "{argument name=\"primary\" default=\"deep ink #1A1A1A\"}",
    "accent": "{argument name=\"accent\" default=\"vermilion #E94B3C\"}",
    "module_tints": [
      "soft sand #EBE3D5",
      "muted sage #C7D3C0",
      "dusty blue #B4C5D6",
      "warm peach #F2D4C4"
    ],
    "rule": "module backgrounds rotate among the tints; primary used for text; accent used at most twice"
  },
  "layout": {
    "style": "{argument name=\"layout_style\" default=\"asymmetric bento\"}",
    "module_count": "{argument name=\"module_count\" default=\"8\"}",
    "grid": "irregular: 1 hero module (large, 2x2 footprint) + 4-7 supporting modules of mixed 1x1 / 1x2 / 2x1 sizes",
    "alignment": "all modules share the same corner radius and gap; module edges align to an invisible grid"
  },
  "modules": [
    {
      "id": "M1-hero",
      "size": "large (2x2)",
      "role": "TOP 1 / 主推薦",
      "content": "封面級展示：大圖 + 推薦理由 + ★★★★★ 評分 + 簡要 spec"
    },
    {
      "id": "M2",
      "size": "medium (1x2)",
      "role": "對比維度 1",
      "content": "比如「重量對比」：bar chart + 數字標註 + 冠軍那一項高亮"
    },
    {
      "id": "M3",
      "size": "small (1x1)",
      "role": "關鍵數字",
      "content": "一個超大數字 + 簡短說明，比如「8 臺」「¥4,999 起」"
    },
    {
      "id": "M4",
      "size": "small (1x1)",
      "role": "圖標說明",
      "content": "一組 4-6 個簡潔圖標 + 極短標籤（如「適用場景」）"
    },
    {
      "id": "M5",
      "size": "medium (2x1)",
      "role": "排行榜 / 列表",
      "content": "TOP 3 文字列表，前面帶 1/2/3 大數字 badge"
    },
    {
      "id": "M6",
      "size": "small (1x1)",
      "role": "引用 / 賣點",
      "content": "一句金句 / kol 引用 + 引號裝飾"
    },
    {
      "id": "M7",
      "size": "medium (1x2)",
      "role": "細節展示",
      "content": "產品特寫局部 + 1-2 個 callout 標籤"
    },
    {
      "id": "M8",
      "size": "small (1x1)",
      "role": "Footer / 提示",
      "content": "「滑到下一頁 →」/ 二維碼 / 來源標註"
    }
  ],
  "module_internal_style": {
    "padding": "16-24px inside each module",
    "typography": "sans-serif (Inter / Helvetica Neue / 思源黑); module title in bold, body smaller",
    "rule": "each module is self-contained and could stand alone",
    "imagery": "small product photos / icons / micro-charts; never let a module become pure text"
  },
  "constraints": {
    "must_keep": [
      "所有模塊統一圓角",
      "模塊間留固定 gap",
      "每個模塊都有自己的 micro-title",
      "至少有 1 個模塊包含視覺化數據（chart / 大數字）",
      "整圖配色不超過 5 種主色"
    ],
    "avoid": [
      "所有模塊尺寸一模一樣（變成網格表）",
      "模塊緊貼沒有留白",
      "模塊內信息密度過低（變成空 widget）",
      "模塊邊框使用粗描邊 (>2px)",
      "用漸變 / 玻璃質感模糊 bento 的極簡感"
    ]
  }
}
```

### 參數策略

- **必問**：`main_title`、`module_count`
- **可默認**：`aspect_ratio`（3:4）、`palette`（warm off-white + vermilion 強調）、`global_corner_radius`、`module_gap`
- **可隨機**：`module_tints` 的具體順序、每個模塊的具體內容（如果用戶沒指定，自動按主題推斷）

### 自動補全策略

- 用戶只給主題時：自動決定 8 個模塊、推斷模塊角色（TOP 1 / 關鍵數字 / 圖標 / 排行 / 賣點 / 細節 / footer）
- 用戶說"小紅書風" → palette 選 warm off-white + 暖強調色，aspect 3:4
- 用戶說"科技 / 數碼風" → palette 選深灰 + 霓虹強調，aspect 1:1 或 3:4
- 用戶說"金融 / 嚴肅" → palette 選 mono + 單一深色強調，aspect 16:9

## 變體 1：iOS widget 屏風格

```json
{
  "modify": {
    "background": "iOS 系統壁紙漸變（深藍紫 → 黑）",
    "module_backgrounds": "frosted glass + 淺描邊",
    "module_corner_radius": "32px (更圓)",
    "typography": "SF Pro Display + SF Symbols 風格圖標",
    "vibe": "像截了 iPhone 主屏然後所有 widget 都裝滿信息"
  }
}
```

適用：數碼 / 應用推薦 / 產品介紹。

## 變體 2：Notion dashboard 風

```json
{
  "modify": {
    "background": "純白 #FFFFFF",
    "module_backgrounds": "極淡灰 #F7F6F3 + 1px 淺灰邊框",
    "module_corner_radius": "8px (方正)",
    "module_padding": "更大",
    "typography": "Inter / Söhne, 極細字重爲主",
    "vibe": "極簡、低調、像 Notion 頁面截圖"
  }
}
```

適用：知識管理、生產力、SaaS 工具介紹。

## 變體 3：高密度小紅書"避坑指南"風

```json
{
  "modify": {
    "module_count": "9-12",
    "background": "warm cream + 顆粒紙質感",
    "module_tints": ["mint", "peach", "lavender", "lemon"],
    "accent": "tomato red 用作「⚠️ 避坑」標籤",
    "typography": "稍微加點圓體 / 手寫字增加親切感",
    "vibe": "信息塞滿、顏色更跳、有 emoji / 標籤"
  }
}
```

適用：小紅書避坑指南、新手攻略、必看清單。

## 避免事項

- 模塊尺寸全部一樣 → 變成 grid 表格，失去 bento 的"輕重緩急"
- 模塊沒有 micro-title → 失去"獨立信息單元"語義
- 全圖都是文字模塊 → 失去視覺衝擊
- 模塊之間沒有留白或留白不一致 → 視覺吵
- 配色超過 5 種主色 → 整體感崩
- 強行塞入 hero 模塊當裝飾但內容空 → 浪費視覺權重
- 模塊邊框 >2px → 像電子表格不像 bento
