# 角色 IP × 周邊商品板模板

本文件用於生成"以單一動漫 / VTuber / 二次元角色爲核心，疊加品牌 logo + 包裝 + 周邊 + SNS profile + 推廣 banner"的複合視覺板。

典型用途：

- VTuber 出道 / 周年 / 新企劃介紹圖
- 同人 / 個人 IP 上線宣傳圖
- 二次元品牌（candy / bakery / cafe / 雜貨店）店鋪聯動圖
- 角色周邊一圖集合
- IP 房間生活方式商品 catalog
- 社交媒體宣傳圖（一圖涵蓋角色介紹 + 商品預告 + SNS handle）

特徵（與其它 mascot / brand 模板的區別）：

| 模板 | 主體 | 重點 |
|---|---|---|
| `mascot-brand-kit.md`（已有） | 卡通吉祥物 | 三視圖 + 表情 + 應用 |
| `full-mascot-brand-doc.md`（新增） | 卡通吉祥物 | 18 模塊全流程設計文檔 |
| `brand-identity-board.md`（已有） | 抽象品牌 | logo + 色 + 字 + 應用 mockup |
| **本模板**（新增） | **二次元角色 / VTuber / 個人 IP** | **角色形象 + 包裝 + 周邊 + SNS + lifestyle goods** |

## 適用範圍

- VTuber 周邊介紹板
- 個人 IP / VUP 出道宣傳圖
- 二次元品牌 × 實體商品聯動圖
- 角色生活方式 / 房間雜貨商品集合
- 同人圈展會出本宣傳圖

## 何時使用

- 用戶提到"角色周邊 / VTuber 出道 / IP merch board / 個人企劃圖"
- 角色是動漫 / 二次元 / 萌系風格，而不是企業級吉祥物
- 需要"一張圖秀完整 IP 商業生態"（角色 + 商品 + SNS + 包裝）

不要使用：

- 企業 / 餐飲品牌吉祥物完整設計文檔 → 用 `full-mascot-brand-doc.md`
- 僅角色三視圖 / 表情 → 用 `portraits-and-characters/character-sheet.md`
- 單角色單海報 → 用 `portraits-and-characters/virtual-host.md`
- 單純包裝設計 → 用 `branding-and-packaging/cosmetic-packaging.md`

## 缺失信息優先提問順序

1. 角色名 + 一句性格描述（必問，畫面靈魂）
2. 主題色 + motif（櫻花 / 海洋 / 星空 / 糖果 / 兔子…）
3. 風格基調（**柔粉萌系 / 哥特暗黑 / 賽博 / 和風 / 童話**）
4. 必須出現的商品類目（包裝食品 / 文具 / 服飾 / 家居 / 數碼周邊）
5. SNS handle（可選，加上更像真實企劃）
6. 是否包含店鋪 / 活動信息（"4.26 NEW OPEN" 之類）

## 主模板 1：動漫角色品牌識別 + 周邊商品板（Case 112 風格）

📖 描述

一張大圖，包含 header banner + 包裝 mockup + 推廣海報 + web banner + SNS profile + 周邊商品集合，全部圍繞同一個角色展開。

📝 提示詞

```json
{
  "type": "brand identity and merchandise design board",
  "goal": "生成一張以單一動漫角色爲核心的完整品牌發布板，可作爲角色出道、周年企劃、IP 上線宣傳圖",
  "theme": {
    "color_palette": "{argument name=\"theme color\" default=\"pastel pink\"} and white",
    "motif": "{argument name=\"motif\" default=\"cherry blossoms\"} and pink hearts",
    "vibe": "{argument name=\"vibe\" default=\"sweet, soft, dreamy, idol-debut energy\"}"
  },
  "character": {
    "name": "{argument name=\"character name\" default=\"癒音ちー\"}",
    "subname": "{argument name=\"character subtext\" default=\"ゆおんちー\"}",
    "description": "{argument name=\"character description\" default=\"anime girl with short brown bob hair, pink eyes, wearing a white hoodie, gentle smile\"}",
    "personality": "{argument name=\"personality\" default=\"治癒系，溫柔，喜歡甜食\"}"
  },
  "branding": {
    "main_logo": "{argument name=\"main logo text\" default=\"癒音ちー\"}",
    "sub_logo": "{argument name=\"sub logo text\" default=\"ゆおんちー\"}",
    "social_handle": "{argument name=\"social handle\" default=\"@yuonchii\"}"
  },
  "layout": {
    "format": "single large composite board, vertical poster orientation",
    "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4 portrait\"}",
    "background": "{argument name=\"background\" default=\"clean white with soft pink gradient corners and tiny doodles\"}",
    "sections": [
      {
        "type": "header banner",
        "position": "top",
        "elements": ["large main logo", "small sub logo beneath", "cherry blossom decorative graphics", "character portrait on the right"]
      },
      {
        "type": "product packaging",
        "position": "middle left",
        "elements": [
          "1 square box with heart-shaped transparent window showing {argument name=\"packaging filling\" default=\"pink heart candies\"} inside",
          "character illustration printed on the box front",
          "2 individual candy / product wrappers placed beside the box",
          "5 scattered {argument name=\"scattered item\" default=\"heart candies\"} around the packaging"
        ]
      },
      {
        "type": "promotional poster",
        "position": "middle right",
        "elements": [
          "character portrait centered",
          "{argument name=\"poster prop\" default=\"heart-shaped candy bowl\"}",
          "main logo at the top",
          "{argument name=\"event tag\" default=\"4.26 NEW OPEN\"} text",
          "social handle text"
        ]
      },
      {
        "type": "horizontal web banner",
        "position": "lower middle",
        "elements": ["main logo on the left", "{argument name=\"motif\" default=\"cherry blossoms\"} graphics filling the middle", "character portrait on the right", "thin tagline below"]
      },
      {
        "type": "social media profile mockup",
        "position": "bottom left",
        "elements": [
          "header / cover image with logo and motif",
          "1 circular profile picture (character close-up)",
          "handle text '{argument name=\"social handle\" default=\"@yuonchii\"}'",
          "1 follow button (filled accent color)",
          "mock bio: 2-3 lines of character introduction"
        ]
      },
      {
        "type": "merchandise collection",
        "position": "bottom right",
        "count": 9,
        "items": [
          "{argument name=\"merch 1\" default=\"1 white t-shirt with logo\"}",
          "{argument name=\"merch 2\" default=\"1 white mug with character\"}",
          "{argument name=\"merch 3\" default=\"4 round pin badges\"}",
          "{argument name=\"merch 4\" default=\"1 acrylic keychain\"}",
          "{argument name=\"merch 5\" default=\"2 candy packets\"}"
        ]
      }
    ]
  },
  "global_style": {
    "rendering": "polished anime-illustration style for the character + photorealistic product mockups for packaging / merchandise + clean editorial layout for SNS / banner",
    "typography": "main logo in cute display font; SNS / body in clean sans-serif; small handwritten accents",
    "consistency": "the same character appearance used in EVERY section without drift",
    "panel_density": "moderate; each section breathes with consistent margin"
  },
  "constraints": {
    "must_keep": [
      "角色形象在所有 section 中完全一致（髮型 / 配色 / 表情 base）",
      "logo / SNS handle 拼寫統一",
      "每個 section 有清晰邊界，不要互相溢出",
      "包裝 / 周邊看起來像真實物體而非貼圖拼貼"
    ],
    "avoid": [
      "在不同 section 中改變角色發色 / 服裝 base color",
      "周邊商品看起來是同一物件複製（應有材質差異：陶瓷 / 棉布 / 亞克力 / 紙）",
      "把 SNS profile 區做得不像真實社交平臺 UI",
      "header logo 字號被周圍裝飾擠壓到難讀"
    ]
  }
}
```

### 參數策略

- **必問**：character name、character description、theme color、motif
- **可默認**：merch 1-5（按 vibe 自動推薦周邊類目）、aspect ratio
- **可隨機**：scattered item / poster prop（按 motif 自動）、bio 文案

### 自動補全策略

- 用戶只說"VTuber 出道宣傳圖"+ 角色形象 → 自動配套粉色櫻花 / 藍色海洋 / 紫色星空 motif
- 用戶沒指定周邊 → 默認 9 件套（T 恤 / 馬克杯 / 4 徽章 / 鑰匙扣 / 2 包裝）
- 用戶沒說店鋪信息 → SNS profile 區不強調"NEW OPEN"，改爲"PROFILE"

## 主模板 2：角色房間雜貨 lifestyle 商品集合（Case 167 風格）

📖 描述

不強調出道 / 品牌發布，而是"這個角色喜歡什麼樣的房間生活"，把 6 件家居生活物品 + 角色 + 概念說明拼在一張圖。

📝 提示詞

```json
{
  "type": "pastel lifestyle poster / character room-goods feature sheet",
  "goal": "生成一張以角色爲代言人、展示其喜愛房間生活物品的雜誌風 catalog 圖，適合 SNS 分享 / 商品預告 / 個人企劃",
  "theme": "{argument name=\"theme\" default=\"soft dreamy lavender jellyfish aesthetic\"}",
  "style": "{argument name=\"style\" default=\"Japanese cute editorial graphic, airy white background, pastel lilac palette, delicate handwritten notes, sparkles and tiny doodles, soft product photography mixed with magazine layout\"}",
  "subject": {
    "character": {
      "name": "{argument name=\"character name\" default=\"くらげちゃん\"}",
      "appearance": "{argument name=\"character appearance\" default=\"young woman with a short platinum-blonde bob haircut, wearing a fluffy pale-lavender zip hoodie over a white inner top, shown from chest up on the lower right, face intentionally obscured with a plain beige rectangle\"}"
    }
  },
  "layout": {
    "orientation": "vertical poster",
    "background": "clean white with faint pastel doodles of stars, bubbles, tiny jellyfish, and musical notes",
    "sections": [
      { "title": "header", "position": "top", "elements": ["speech bubble intro", "main title", "small subtitle GOODS", "horizontal lavender ribbon tagline", "round badge on the top right"] },
      { "title": "featured goods grid", "position": "upper and middle left", "count": 6, "labels": ["{argument name=\"goods 1\" default=\"ゆらゆらくらげランプ\"}", "{argument name=\"goods 2\" default=\"くらげと夢見るベッドリネン\"}", "{argument name=\"goods 3\" default=\"くらげシェルミラー\"}", "{argument name=\"goods 4\" default=\"くらげグラデマグ\"}", "{argument name=\"goods 5\" default=\"くらげのときめき収納ボックス\"}", "{argument name=\"goods 6\" default=\"くらげふわもこマット\"}"] },
      { "title": "side handwritten note", "position": "upper right", "labels": ["{argument name=\"side note\" default=\"みんなも くらげちゃんRoomで いっしょに まったりしよー♡♡\"}"] },
      { "title": "room concept box", "position": "lower left", "labels": ["{argument name=\"concept title\" default=\"くらげちゃんの お部屋作りのこだわり\"}"] },
      { "title": "pick up circle", "position": "lower center-left", "labels": ["Pick up!"] }
    ]
  },
  "product_images": {
    "count": 6,
    "items": [
      { "name": "{argument name=\"goods 1\" default=\"ゆらゆらくらげランプ\"}", "description": "small translucent jellyfish-shaped lamp on a white base, glowing softly in pale blue-lavender" },
      { "name": "{argument name=\"goods 2\" default=\"くらげと夢見るベッドリネン\"}", "description": "plush pastel-lavender bed with fluffy comforter and pillows, dreamy cozy bedroom styling" },
      { "name": "{argument name=\"goods 3\" default=\"くらげシェルミラー\"}", "description": "small tabletop mirror with a puffy shell-like pastel-lilac frame and rounded base" },
      { "name": "{argument name=\"goods 4\" default=\"くらげグラデマグ\"}", "description": "ceramic mug with lavender-to-pink gradient and a simple jellyfish illustration" },
      { "name": "{argument name=\"goods 5\" default=\"くらげのときめき収納ボックス\"}", "description": "pastel storage box holding cosmetics and small bottles, decorated with a jellyfish emblem" },
      { "name": "{argument name=\"goods 6\" default=\"くらげふわもこマット\"}", "description": "small fluffy cloud-like or jellyfish-like mat in pale lavender and white" }
    ]
  },
  "text_elements": {
    "main_title": "{argument name=\"headline text\" default=\"くらげちゃんの お部屋アイテム\"}",
    "tagline": "{argument name=\"tagline\" default=\"ふわふわで甘くて、ちょっぴり夢みたいな私のお部屋へようこそ♡\"}",
    "concept_points": {
      "count": 3,
      "items": [
        "{argument name=\"concept 1\" default=\"色は白とラベンダーで統一!\"}",
        "{argument name=\"concept 2\" default=\"光が集まるふわっとした空間に\"}",
        "{argument name=\"concept 3\" default=\"お友達入りのアイテムに囲まれて 自分らしくいられる空間を大切にしてるよ♪\"}"
      ]
    },
    "product_blurbs": "each product has a short handwritten Japanese description in a cute casual font beside or below the image"
  },
  "composition": "the poster is left-heavy with product cards and text, while the character portrait occupies the lower right third, slightly overlapping the layout",
  "color_palette": ["white", "pastel lavender", "soft lilac", "pale gray-violet", "touches of pastel blue-pink gradient"],
  "constraints": {
    "must_keep": [
      "6 件商品風格統一（同色系 + 同質感傾向）",
      "角色出現在固定位置不搶主體",
      "整體像 SNS 可分享的精緻 catalog"
    ],
    "avoid": [
      "商品堆疊雜亂無 grid",
      "字體太多種類（建議日文手寫 + 一種主標題字體即可）",
      "把角色畫太大反客爲主"
    ]
  }
}
```

### 何時選這個變體

- 用戶做的是「我房間裡有什麼」「IP 同款雜貨」類企劃
- 強調氛圍 / 生活方式 > 商業 / 出道
- 適合 SNS 分享、不需要 logo 系統 / 包裝 mockup

## 主模板 3：極簡版（角色 + 4-6 件周邊 + logo）

適合資源有限、只想做單一 IP 上新公告的場景。

📝 提示詞

```json
{
  "type": "minimal character merch announcement",
  "sections": [
    "top: large main logo + character close-up",
    "middle: 4-6 merchandise items in a grid",
    "bottom: SNS handle + release date + 1 line tagline"
  ],
  "vibe": "{argument name=\"vibe\" default=\"clean, premium, focus on products\"}",
  "merch_count": 6,
  "must_keep": ["商品攝影質感統一", "logo 與 SNS handle 拼寫一致"]
}
```

### 何時選這個變體

- 沒有時間做 6-8 個 section
- 只想強調"角色 + 周邊 + 上新時間"
- 想做"潔淨簡約"風而非"信息量爆炸"風

## 避免事項

- ❌ 在不同 section 中改變角色的髮型 / 配色 / 服裝 base → 視覺立刻不像「同一 IP」
- ❌ 把 6 件商品畫成同一樣東西複製 → 必須有材質 / 形狀 / 用途差異
- ❌ logo 在 header 與 web banner 中字體不一致
- ❌ SNS profile 區的 follow 按鈕和角色 IP 主色衝突
- ❌ 周邊商品 mockup 出現透視錯誤（如 mug 橢圓變扁、T 恤褶皺不自然）
- ❌ 包裝 mockup 的"透明窗"畫成純貼圖而非真實折射
- ❌ 全圖配色 ≥ 5 個主色調 → 失去 IP 一致性，應控制在 2-3 主色 + 1-2 accent
