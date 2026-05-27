# 長頁面 Landing Page / Case Study UI 樣機模板

本文件用於生成"完整的一整頁 SaaS / 營銷 / case study 落地頁 UI 樣機"——把多個 section（hero / strategy / performance / social proof / CTA）從上到下拼到一張超長圖裏。

典型用途：

- SaaS 產品官網首頁 mockup
- 營銷 case study 長頁面（投後報告 / KPI 復盤）
- 增長 / agency 業務介紹頁
- Y Combinator 風格 demo day 項目頁
- 客戶提案稿 / 投資人 deck 的網頁化展示

特徵（與現有 UI 模板的區別）：

| 模板 | 視覺範圍 | 適用場景 |
|---|---|---|
| `chat-interface-scene.md` | 單屏聊天界面 | iMessage / 微信 / 羣聊 |
| `social-interface-mockup.md` | 單屏社交動態詳情 | Twitter / 小紅書 / 微博 |
| `live-commerce-ui.md` | 單屏直播 UI 疊加 | 抖音 / 淘寶直播 |
| `product-card-overlay.md` | 單屏 hero / 詳情主圖 | 電商詳情頁主圖 |
| **本模板** | **完整長頁面**（5-7 個 section 縱向拼接） | **SaaS / 營銷長頁面 / case study** |

## 適用範圍

- SaaS 落地頁 / 產品官網首頁
- 營銷 case study 長頁面
- 增長復盤報告 web 版
- 投資人 / 客戶提案的網頁樣機
- Agency 業務介紹長頁面

## 何時使用

- 用戶提到"落地頁 / landing page / case study / 一整頁 / 長頁面 / 網站 mockup"
- 用戶希望出"從上到下完整 section 結構"而不是單屏截圖
- 客戶需要看到「hero → 數據 → 時間線 → 社交證明 → CTA」完整營銷敘事

不要使用：

- 單屏 UI 截圖 → 用 `chat-interface-scene` / `social-interface-mockup` / `live-commerce-ui`
- 僅 hero section → 用 `poster-and-campaigns/banner-hero.md`
- 真實可交互的 HTML 網頁 → 應當生成 HTML 代碼而非圖片

## 缺失信息優先提問順序

1. 業務類型（SaaS / agency / 課程 / case study / 投後報告）
2. 品牌 / 主標 + 一句話定位
3. 是「營銷 case study」（要展示數據 + 客戶 logo）還是「產品官網首頁」（要展示功能 + 截圖）
4. 配色基調（**深色 + 霓虹 / 純白 + 強色 accent / 淺米色商務 / 玻璃擬態**）
5. 必須出現的核心數據（GMV / 播放量 / 客戶數 / 增長率）
6. 是否要客戶 logo 牆 / 推薦語 / CTA 表單
7. 比例（**3:4 / 9:16 長截圖 / 整張 desktop 截圖**）

## 主模板：營銷 case study 長頁面 mockup

📖 描述

一張超長截圖，從上到下 6-7 個獨立 section，整體用統一深色 + 霓虹 accent，每個 section 都長得像真實落地頁裏會出現的模塊。

📝 提示詞

```json
{
  "type": "UI/UX landing page mockup",
  "goal": "生成一張高仿真的營銷 case study 長頁面截圖，可以作爲提案稿、投後報告或作品集封面",
  "theme": "{argument name=\"theme\" default=\"dark mode, sleek modern aesthetic, glassmorphism, neon purple and blue glowing accents\"}",
  "viewport": {
    "width": "{argument name=\"viewport width\" default=\"desktop 1440px width\"}",
    "scroll_capture": "{argument name=\"capture style\" default=\"full-page screenshot, vertical scroll captured into one tall image\"}",
    "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4 portrait long page\"}"
  },
  "header": {
    "logo": "{argument name=\"brand name\" default=\"goViralX\"}",
    "nav_items": ["Home", "Case Studies", "Pricing", "Contact"],
    "top_right_cta": "{argument name=\"top cta\" default=\"Login\"}",
    "top_right_tag": "{argument name=\"top right tag\" default=\"VIRAL CAMPAIGN CASE STUDY\"}"
  },
  "layout": {
    "section_count": 6,
    "section_separation": "subtle horizontal divider, 80-120px vertical breathing room",
    "sections": [
      {
        "name": "Hero",
        "position": "top",
        "headline": "{argument name=\"hero headline\" default=\"How We Created 10M+ Viral Impact\"}",
        "subheadline": "{argument name=\"hero subhead\" default=\"3 天引爆全網, 助力品牌實現指數級增長\"}",
        "stats_row": {
          "count": 4,
          "labels": ["{argument name=\"stat label 1\" default=\"總播放量\"}", "{argument name=\"stat label 2\" default=\"互動率\"}", "{argument name=\"stat label 3\" default=\"轉化諮詢\"}", "{argument name=\"stat label 4\" default=\"執行周期\"}"],
          "values": ["{argument name=\"stat value 1\" default=\"10,240,000+\"}", "{argument name=\"stat value 2\" default=\"18.7%\"}", "{argument name=\"stat value 3\" default=\"3,200+\"}", "{argument name=\"stat value 4\" default=\"72小時\"}"]
        },
        "visual": "{argument name=\"hero visual\" default=\"cinematic shot of a person in a hoodie looking at glowing digital screens and graphs, large play button overlay\"}"
      },
      {
        "name": "Strategy",
        "title": "{argument name=\"strategy title\" default=\"Our 3-Day Execution Strategy\"}",
        "layout_type": "vertical timeline",
        "steps_count": 3,
        "elements_per_step": ["timeline node circle", "step title", "3 bullet points", "video thumbnail with play button", "description box"],
        "step_titles": ["Day 1: Asset Production", "Day 2: Multi-Platform Launch", "Day 3: Amplification & PR"]
      },
      {
        "name": "Performance",
        "title": "{argument name=\"perf title\" default=\"Data-Driven Performance\"}",
        "left_column": {
          "stat_cards_count": 4,
          "values": ["10M+", "43%", "28,000+", "3,200+"],
          "labels": ["Total Views", "Engagement", "New Followers", "Leads"]
        },
        "right_column": {
          "charts_count": 2,
          "chart_1": "line graph showing 7-day growth peaking at Day 3, x-axis days 1-7, y-axis views, glowing line",
          "chart_2": "horizontal segmented bar chart showing platform distribution (TikTok 52%, Instagram 24%, X 15%, YouTube 9%)"
        }
      },
      {
        "name": "Keys to Success",
        "title": "{argument name=\"keys title\" default=\"The 3 Keys to Viral Success\"}",
        "cards_count": 3,
        "card_elements": ["glowing icon (fire / target / antenna)", "card title", "2-line description", "VIEW DETAIL link with arrow"]
      },
      {
        "name": "Social Proof",
        "title": "{argument name=\"sp title\" default=\"TRUSTED BY CREATORS & BRANDS\"}",
        "left_column": {
          "logos_count": 8,
          "grid": "2x4",
          "brands": ["{argument name=\"logo 1\" default=\"SHEIN\"}", "SHOPLINE", "Blueglass", "instacart", "lemon8", "mi", "CIDER", "bellroy"]
        },
        "right_column": {
          "testimonial_cards_count": 2,
          "elements": ["large quotation mark", "italic quote text", "author avatar circle", "author name + title (e.g. SaaS Founder, Growth Manager)"]
        }
      },
      {
        "name": "Call to Action",
        "title": "{argument name=\"cta title\" default=\"READY TO GO VIRAL?\"}",
        "interactive_elements": [
          "text input field with placeholder '{argument name=\"input placeholder\" default=\"Your work email\"}'",
          "glowing button with text '{argument name=\"call to action text\" default=\"獲取專屬增長方案 ->\"}'"
        ],
        "visual": "{argument name=\"cta visual\" default=\"3D render of a rocket ship taking off with purple and blue flames\"}"
      }
    ]
  },
  "footer": {
    "logo": "{argument name=\"brand name\" default=\"goViralX\"}",
    "columns": ["Product", "Company", "Resources", "Legal"],
    "social_icons": ["X", "LinkedIn", "YouTube", "Instagram"],
    "copyright": "© 2026 {argument name=\"brand name\" default=\"goViralX\"}. All rights reserved."
  },
  "global_style": {
    "rendering": "production-quality web UI mockup, sharp pixel-perfect typography, realistic component spacing, modern web design",
    "typography": "modern sans-serif (Inter / Space Grotesk feel), strong size hierarchy across sections",
    "color_tone": "{argument name=\"color tone\" default=\"dark navy / charcoal background, neon purple + electric blue accents, white-90% body text\"}",
    "components": "rounded corners 12-16px, soft glassmorphism cards, subtle shadows, accent gradient buttons",
    "browser_chrome": "{argument name=\"chrome\" default=\"none, just the page itself\"}"
  },
  "constraints": {
    "must_keep": [
      "6 個 section 從上到下順序清晰、可獨立識別",
      "每個 section 的內部組件都符合常規網頁設計（卡片 / 網格 / 時間線 / chart）",
      "數據可讀、字體清晰、對比度足夠",
      "整體看起來像真實可滾動的網頁截圖，而不是 PPT 拼貼"
    ],
    "avoid": [
      "section 之間沒有視覺分隔（容易混在一起）",
      "把 chart 畫成示意圖而非真實數據可視化",
      "logo 牆的品牌名變得不可讀",
      "CTA 按鈕顏色與全頁配色衝突",
      "Hero 佔據 80%+ 高度（導致下面 section 被壓扁）"
    ]
  }
}
```

### 參數策略

- **必問**：brand name + 業務定位、core data values、配色基調
- **可默認**：nav items、footer columns、stat labels（按業務類型推薦）
- **可隨機**：客戶 logo 牆的具體品牌（按行業匹配真實存在的品牌名）、推薦語 quote 內容

### 自動補全策略

- 用戶只說"營銷 case study 落地頁"→ 默認深色 + 霓虹方案 + 6 section 標準結構
- 用戶給了核心數據（如「3 天 1000 萬播放」）→ 自動反推 stat label / chart / strategy timeline
- 用戶沒說客戶 logo → 按行業生成 8 個真實存在的品牌名（不要造假名）

## 變體 1：SaaS 產品官網首頁（feature-driven）

📝 提示詞

```json
{
  "type": "SaaS product homepage mockup",
  "section_count": 7,
  "sections": [
    "Hero (headline + subhead + CTA + dashboard screenshot)",
    "Logo Strip (8 customer logos)",
    "Feature Grid (3x2 = 6 features with icon + title + description)",
    "How It Works (3-step process)",
    "Product Screenshot Showcase (1 large dashboard image)",
    "Pricing (3 tiers comparison table)",
    "Testimonials + CTA"
  ],
  "theme": "{argument name=\"theme\" default=\"clean white + accent blue, modern startup\"}",
  "must_have": "1 prominent product UI screenshot embedded in Hero, 1 dashboard image in showcase section"
}
```

### 何時選這個變體

- 用戶做的是 SaaS 產品官網而非 case study
- 需要展示「產品長什麼樣」（截圖嵌套截圖）
- 需要 pricing table

## 變體 2：投資人 / 客戶 deck 網頁化版

📝 提示詞

```json
{
  "type": "investor / client pitch deck rendered as one long landing page",
  "section_count": 8,
  "sections": [
    "Hero (problem statement)",
    "Solution Overview",
    "Market Size (chart)",
    "Product Demo (screenshots)",
    "Traction (key metrics + growth chart)",
    "Team (4 avatars + roles)",
    "Roadmap (4 phases timeline)",
    "Ask + Contact"
  ],
  "theme": "professional, premium, slightly editorial, soft shadow + light grid background",
  "tone": "credible, ambitious, data-backed"
}
```

### 何時選這個變體

- 創業者要做 demo day 提案的網頁化版
- 把 Keynote deck 轉成可分享的網頁樣機
- 需要"傳統 deck"的所有要素（market / team / ask）

## 變體 3：玻璃擬態 + 漸變（流行 2026 風格）

📝 提示詞

```json
{
  "type": "glassmorphism landing page",
  "theme_override": {
    "background": "deep purple-to-pink gradient with floating blur orbs",
    "cards": "frosted glass effect (backdrop-blur 20px), 1px white border at 20% opacity",
    "accents": "neon green and hot pink glow",
    "typography": "ultra-bold sans-serif headlines, very thin weight body"
  },
  "section_count": 5,
  "sections": ["Hero", "Feature Cards 3x", "Stats", "Testimonials", "CTA"],
  "vibe": "Y2K x Apple Vision Pro x Linear.app"
}
```

### 何時選這個變體

- 設計驅動型品牌 / AI 工具 / 創意產品
- 需要在 SNS 引發設計師轉發
- 客戶希望做「視覺驚豔」而非「企業穩重」

## 避免事項

- ❌ section 之間分隔不清 → 必須有 80-120px 留白 + 顏色 / 背景微差
- ❌ 把圖表畫成純裝飾（必須看起來像真實數據曲線）
- ❌ logo 牆強行造假品牌名（用真實知名品牌或明確標註「示例」）
- ❌ CTA 按鈕顏色和品牌色衝突 → 應該是品牌色的 accent 版本
- ❌ Hero 區域過大壓扁後續 section（hero ≤ 35% 總高度）
- ❌ 全頁只用一種字號 → 必須有 ≥ 4 級 hierarchy（H1 / H2 / Body / Caption）
- ❌ 把模板裏的佔位文字（"VIEW DETAIL"）原樣保留 → 應根據業務替換成真實文案
- ❌ 輸出比例選錯（如 1:1 會裝不下完整長頁面，建議 3:4 / 9:16）
