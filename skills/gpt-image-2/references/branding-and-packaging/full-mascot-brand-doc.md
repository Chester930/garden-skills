# 18+ 模塊吉祥物全流程品牌設計文檔模板

本文件用於生成"一張超大畫布、把吉祥物從 DNA 分析到落地應用的整套設計文檔拍扁到一張圖"的視覺。

典型用途：

- 設計公司給客戶的 brand book / IP guideline 提案圖
- 設計師作品集封面（一張圖秀完整設計流程）
- IP 上線前的"design rationale"看板
- 教學示例：「一個吉祥物從概念到落地」全過程
- 投標 / 比稿用的能力展示圖

特徵（與現有 `mascot-brand-kit.md` 的區別）：

| 維度 | `mascot-brand-kit.md`（已有） | 本模板（新增） |
|---|---|---|
| 模塊數 | 4-6 個區塊 | **18-24 個模塊** |
| 視角 | 主形象 + 三視圖 + 表情 + 應用 | **DNA 分析 → moodboard → 探索草圖 → 線稿 → 3D → 配色 → 材質 → 設計系統 → 數字應用 → 實物應用 → 終稿** |
| 用途 | IP 介紹頁 / 周邊 catalog | **完整 brand book / 設計提案 / 投標稿** |
| 渲染密度 | 中等 | 極高（接近 brand book PDF 的整頁拼合） |

## 適用範圍

- 18+ 模塊吉祥物全流程設計文檔
- 完整 brand book / IP guideline 一圖概覽
- 設計公司投標 / 提案 hero 圖
- 「設計過程可視化」教學板

## 何時使用

- 用戶提到"完整品牌設計流程 / brand guideline / IP design book"
- 用戶希望出"包含設計推導過程"而不僅是結果
- 客戶需要一張圖涵蓋「DNA → 草圖 → 線稿 → 3D → 應用」全部環節

不要使用：

- 僅需 IP 形象集合 → 用 `branding-and-packaging/mascot-brand-kit.md`
- 僅需通用品牌識別（logo / 色 / 字 / 應用）→ 用 `branding-and-packaging/brand-identity-board.md`
- 單角色三視圖 / 表情 → 用 `portraits-and-characters/character-sheet.md`
- IP 周邊商品圖 → 用 `branding-and-packaging/character-merch-board.md`

## 缺失信息優先提問順序

1. 品牌 / IP 名 + 行業（茶飲 / 教育 / 數碼 / 文創…）
2. 吉祥物主形態（動物 / 人形 / 擬物 / 食物 / 抽象）
3. 主色 + 副色（如不指定按行業默認）
4. 渲染風格（**3D Pixar 寫實卡通 / 扁平 2D / Q 版 chibi / 擬人**）
5. 模塊密度（18 / 24 / 自定義清單）
6. 必須出現的應用場景（plush 玩偶 / 包裝 / app icon / 門店 / 等）

## 主模板：18 模塊吉祥物全流程品牌設計文檔

📖 描述

3 列 × 6 行 = 18 個等大模塊，每個模塊自成一段設計流程。整體像把一份 18 頁 brand book PDF 的每頁縮成一格拼到一張大圖裏。

📝 提示詞

```json
{
  "type": "18-panel brand identity and character design document",
  "goal": "生成一張完整記錄吉祥物從 DNA 分析到落地應用全流程的設計文檔大圖，可作爲 brand book 一圖概覽或設計提案 hero 圖",
  "brand": {
    "name": "{argument name=\"brand name\" default=\"沐陽 MUYANG TEA\"}",
    "industry": "{argument name=\"industry\" default=\"tea shop\"}",
    "tagline": "{argument name=\"tagline\" default=\"溫暖一杯,陪你慢慢喝\"}",
    "colors": [
      "{argument name=\"primary color\" default=\"yellow\"}",
      "{argument name=\"secondary color\" default=\"green\"}",
      "white",
      "brown",
      "dark green"
    ]
  },
  "character": {
    "description": "{argument name=\"character description\" default=\"3D rendered cute Shiba Inu mascot wearing a green apron, big sparkly eyes, plush soft body, friendly smile\"}",
    "rendering_style": "{argument name=\"render style\" default=\"Pixar-quality 3D, soft subsurface scattering, glossy plush texture\"}"
  },
  "layout": {
    "grid": "3 columns by 6 rows",
    "panel_count": 18,
    "panel_borders": "thin light-gray dividers, generous white margin between cells",
    "global_typography": "section titles in bilingual Chinese + English, small body text, panel numbers 01-18 prominently labeled",
    "background": "{argument name=\"page background\" default=\"clean off-white paper\"}"
  },
  "sections": [
    {
      "id": "01",
      "title": "01 品牌DNA分析 / BRAND DNA ANALYSIS",
      "elements": ["small logo lockup", "5 color swatches with HEX codes", "6 brand keyword icons", "small target audience donut chart"]
    },
    {
      "id": "02",
      "title": "02 概念構思 / CONCEPT MOODBOARD",
      "elements": ["5 inspiration photo references", "4 mood / vibe icons", "1 design equation diagram (e.g. 茶 + 狗 + 溫暖 = MUYANG)"]
    },
    {
      "id": "03",
      "title": "03 形態研究 / FORM STUDY",
      "elements": ["4 logo anatomy icons", "4 evolution steps from primitive shape to refined silhouette", "4 final silhouette variants"]
    },
    {
      "id": "04",
      "title": "04 概念探索 / CONCEPT EXPLORATION",
      "elements": ["12 quick line-art character sketches with subtle pose / expression variation"]
    },
    {
      "id": "05",
      "title": "05 精細線稿 / REFINED LINE ART",
      "elements": ["3 rows showing front and side line-art with proportion guides, head-body ratio markers, and grid alignment"]
    },
    {
      "id": "06",
      "title": "06 細節精修 / DETAIL REFINEMENT",
      "elements": ["2 large full-body 3D renders with annotation labels", "4 circular close-up callouts (eyes, paw, apron stitch, tail)"]
    },
    {
      "id": "07",
      "title": "07 表情設定 / EXPRESSION SHEET",
      "elements": ["11 3D rendered head expressions: happy, sad, surprised, sleepy, angry, shy, proud, worried, laughing, wink, neutral"]
    },
    {
      "id": "08",
      "title": "08 姿勢庫 / POSE LIBRARY",
      "elements": ["9 full-body 3D rendered poses: waving, bowing, holding tea, jumping, sitting, sleeping, presenting, running, hugging cup"]
    },
    {
      "id": "09",
      "title": "09 轉身視圖 / TURNAROUND VIEW",
      "elements": ["5 full-body 3D renders at 0°/45°/90°/135°/180°", "5 matching line-art turnaround views below"]
    },
    {
      "id": "10",
      "title": "10 色彩開發 / COLOR DEVELOPMENT",
      "elements": ["5 rows of 5-color palettes (primary, accent, monochrome, seasonal, dark mode)", "short color psychology paragraph"]
    },
    {
      "id": "11",
      "title": "11 材質規格 / MATERIAL SPECIFICATION",
      "elements": ["5 texture swatches (plush, vinyl, ceramic, fabric, plastic)", "property sliders (softness / glossiness / transparency)", "4 manufacturing process icons"]
    },
    {
      "id": "12",
      "title": "12 色彩應用 / COLOR APPLICATION",
      "elements": ["4 mascot color variant renders", "2 light-mode and dark-mode renders", "4 contrast rating circles (AAA / AA / A / fail)"]
    },
    {
      "id": "13",
      "title": "13 構造指南 / CONSTRUCTION GUIDE",
      "elements": ["1 line-art geometry construction diagram (with circles / triangles / proportion lines)", "1 grid alignment diagram"]
    },
    {
      "id": "14",
      "title": "14 設計系統規則 / DESIGN SYSTEM RULES",
      "elements": ["minimum size icons (16px / 24px / 48px)", "clear-space diagram with X-height markers", "4 do/don't usage examples"]
    },
    {
      "id": "15",
      "title": "15 資產變體 / ASSET VARIANTS",
      "elements": ["3 size variants (S / M / L)", "3 line-art variants", "3 simplified flat icon-style heads"]
    },
    {
      "id": "16",
      "title": "16 數字應用 / DIGITAL APPLICATIONS",
      "elements": ["1 app icon mockup", "2 social avatar mockups", "small UI element row (button / loader / badge)", "3-step animation cycle thumbnails"]
    },
    {
      "id": "17",
      "title": "17 實物應用 / PHYSICAL APPLICATIONS",
      "elements": ["1 plush toy mockup", "1 product packaging mockup", "1 merchandise (tote / mug) mockup", "1 storefront / signage mockup"]
    },
    {
      "id": "18",
      "title": "18 最終主視覺 / FINAL RENDERING",
      "elements": ["1 large hero-size 3D render of mascot in signature pose holding brand product", "logo lockup", "file format / deliverable list"]
    }
  ],
  "global_style": {
    "rendering": "premium design agency presentation board, mixing 3D character renders, line art, photo mockups, charts, and infographic typography",
    "color_tone": "calm, professional, off-white background with brand colors as accents",
    "panel_density": "each panel completely filled but not cluttered; consistent label position (top-left) and small body text",
    "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4 portrait poster (e.g. A2 print)\"}"
  },
  "constraints": {
    "must_keep": [
      "18 個模塊編號清晰、雙語標題",
      "吉祥物造型在所有 3D 模塊中保持完全一致",
      "整體像 brand book 一頁拼合，而不是 18 張獨立海報",
      "每個模塊的子元素數量精確（11 表情 / 9 姿勢 / 5 轉身 / 等）"
    ],
    "avoid": [
      "模塊間風格漂移（一個模塊 3D 寫實、另一個忽然手繪）",
      "省略編號或雙語標題",
      "把表情 / 姿勢 / 轉身畫成同一姿勢複製",
      "應用 mockup 不像真實物體（如 plush 看起來像截圖）"
    ]
  }
}
```

### 參數策略

- **必問**：brand name + industry、character description、render style、primary/secondary colors
- **可默認**：tagline、page background、aspect ratio
- **可隨機**：表情庫 / 姿勢庫的具體 11 / 9 項內容（按 IP 性格自動）

### 自動補全策略

- 用戶只說"吉祥物"+ 行業 → 自動按行業語義生成形象（茶飲 → 柴犬 / 兔子；科技 → 機器人 / 像素小怪；母嬰 → 萌獸 / 雲朵小人）
- 不指定 11 表情 / 9 姿勢具體內容 → 用模板裏的標準集
- 不指定材質 / 應用場景 → 按行業默認（餐飲強調包裝 / 玩偶；科技強調 app icon / UI）

## 變體 1：24 模塊完整 IP guideline（適合大客戶提案）

把上面 18 模塊基礎上再加 6 個模塊，覆蓋 IP 商業化更深維度。

📝 提示詞

```json
{
  "type": "24-panel mascot IP commercialization guideline",
  "extra_sections_after_18": [
    {
      "id": "19",
      "title": "19 聯名場景 / CO-BRANDING SCENARIOS",
      "elements": ["4 聯名 mockup（與不同行業品牌跨界）"]
    },
    {
      "id": "20",
      "title": "20 節慶主題包 / SEASONAL VARIATIONS",
      "elements": ["4 節慶變體（春節 / 中秋 / 聖誕 / 萬聖節）"]
    },
    {
      "id": "21",
      "title": "21 表情包 / STICKER PACK",
      "elements": ["16 chibi 表情貼紙網格"]
    },
    {
      "id": "22",
      "title": "22 周邊商品矩陣 / MERCH MATRIX",
      "elements": ["6 周邊類目（公仔 / 文具 / 服飾 / 家居 / 數碼 / 食品）"]
    },
    {
      "id": "23",
      "title": "23 內容平臺應用 / SOCIAL CONTENT KIT",
      "elements": ["1 公衆號頭圖 + 1 視頻封面 + 1 朋友圈九宮格 + 1 直播間背景"]
    },
    {
      "id": "24",
      "title": "24 商業化路徑 / COMMERCIALIZATION ROADMAP",
      "elements": ["timeline with 4 phases: 上線 / 周邊 / 聯名 / IP 授權"]
    }
  ]
}
```

### 何時選這個變體

- 大客戶 IP 比稿
- 提案需要展示「不僅會設計，還懂商業化」
- 想一圖秀完整 IP 商業藍圖

## 變體 2：極簡 9 模塊快速 brand kit

適合中小客戶預算、不需要全流程，但要比單圖豐富。

📝 提示詞

```json
{
  "type": "9-panel quick mascot brand kit",
  "layout": { "grid": "3 columns by 3 rows", "panel_count": 9 },
  "sections": [
    "01 LOGO + COLOR",
    "02 主形象 3D HERO",
    "03 表情 6 個",
    "04 姿勢 4 個",
    "05 三視圖",
    "06 配色調色板",
    "07 字體規範",
    "08 應用 mockup（包裝 + app icon）",
    "09 終稿主視覺"
  ]
}
```

### 何時選這個變體

- 客戶預算有限 / 時間緊
- 一圖 = 一份 mini 設計文檔（朋友圈級別可讀）
- 試稿階段先出這版，確認方向再升級 18 / 24 模塊

## 變體 3：純設計推導版（無 3D，全是草圖 + 線稿）

適合學院派 / 文創 / 手作品牌，強調「設計思考過程」。

📝 提示詞

```json
{
  "type": "18-panel mascot design rationale (sketch-first edition)",
  "rendering_override": "ALL panels in pencil sketch + ink line + watercolor wash; NO 3D renders even in 06/08/09; final panel 18 may upgrade to ink-color illustration",
  "vibe": "designer's working notebook scanned and laid out as a document",
  "extra_visual_elements": ["coffee stain", "tape strips", "handwritten margin notes"]
}
```

### 何時選這個變體

- 文創 / 出版 / 手作 / 學院派品牌
- 想強調「人手設計、有溫度」
- 對接獨立設計師 / 插畫師作品集

## 避免事項

- ❌ 模塊編號缺失或順序錯亂（18 個模塊的編號是模板的靈魂）
- ❌ 讓吉祥物造型在不同模塊漂移（必須嚴格保持同一形態）
- ❌ 表情 / 姿勢 / 轉身的數量不精確（11 / 9 / 5 是經過驗證的視覺密度）
- ❌ 把 mockup 區畫成貼圖拼貼而非真實材質渲染
- ❌ 全圖 18 模塊共用一種字號 → hierarchy 崩塌；section 標題必須比 body 大 ≥ 1.6×
- ❌ 整體像 18 張獨立海報拼貼 → 應該有共享背景 + 一致 margin + 一致標題樣式
- ❌ 在畫質有限時硬上 24 模塊 → 單格細節會塌陷，建議 18 模塊爲上限
