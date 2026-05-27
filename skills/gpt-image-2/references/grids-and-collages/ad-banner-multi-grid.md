# 跨行業混合廣告 Banner 網格模板

本文件用於生成"一張圖裏 N 個獨立廣告 banner、彼此行業 / 主題 / 風格完全不同"的拼合視覺。

典型用途：

- 廣告 / 設計 agency 能力 demo 板（一次秀 4 個不同業務方向的成品）
- 公衆號 / 投流素材集合預覽
- 「AI 能做哪些 banner」自我演示
- 海外日式 / 韓式 SNS banner 拼圖（旅遊 / 美妝 / 餐飲 / 教育混合）
- 模板庫 / 素材集主圖

特徵（與現有 `banner-grid-2x2.md` 的區別）：

| 維度 | `banner-grid-2x2.md`（已有） | 本模板（新增） |
|---|---|---|
| 主題統一性 | 同品牌系列、風格統一 | **每格行業 / 主題 / 配色完全不同** |
| 視覺一致性 | 共享品牌色與 logo | 僅共享網格 + 留白節奏 |
| 用途 | 課程 / SNS 投放四件套 | agency demo / 拼圖素材集 / 多場景示意 |

## 適用範圍

- 4 / 6 / 9 格獨立廣告 banner 拼圖
- 多行業演示板（旅遊 / 美妝 / 餐飲 / 教育 / 金融 / 數碼…）
- 多平臺投流素材一圖預覽
- 設計師能力作品集主圖

## 何時使用

- 用戶提到"四種不同行業 banner / 多主題廣告組 / 各做一張"
- 用戶希望"一張圖涵蓋 N 個完全不同主題的 banner"
- 用戶在做 agency 提案 / 模板示例圖

不要使用：

- 同品牌 4 張延展 banner → 用 `grids-and-collages/banner-grid-2x2.md`
- 一張完整大 banner → 用 `poster-and-campaigns/banner-hero.md`
- 風格混合的同主體演繹 → 用 `grids-and-collages/mixed-style-multi-panel.md`
- 同一業務多日內容（lookbook / 時間表）→ 用 `grids-and-collages/lookbook-grid.md`

## 缺失信息優先提問順序

1. 網格規格（2×2 / 2×3 / 3×3）
2. 每格分別什麼主題 / 行業（用戶給清單還是讓你隨機）
3. 語言（日 / 中 / 英 / 多語混合）
4. 是否需要可讀的真實價格 / 折扣 / 文案
5. 是否需要每格出現"主體人物"或僅產品 / 文字
6. 主體來源：隨機生成 / 模特庫一致 / 用戶給參考

如用戶說"你隨便寫"：保留語言提問，其餘主題自動生成 4 個差異度高的行業。

## 主模板：N×M 跨行業廣告 banner 演示板

📖 描述

把畫布等分爲 N×M 格，每格獨立構圖、主題、字號 hierarchy 都完整，像把 4 張成品 banner 拼到一張圖裏。

📝 提示詞

```json
{
  "type": "{argument name=\"grid spec\" default=\"2x2\"} grid of independent advertisement banners",
  "goal": "生成一張高密度廣告 demo 板，每格都是一個獨立可裁切的成品 banner，用於展示不同行業的視覺處理能力",
  "language": "{argument name=\"language\" default=\"Japanese\"}",
  "layout": {
    "structure": "{argument name=\"panel count\" default=\"4\"} equal quadrants",
    "gutter": "{argument name=\"gutter\" default=\"6px white divider\"}",
    "overall_aspect_ratio": "{argument name=\"overall ratio\" default=\"1:1\"}",
    "panel_aspect_ratio": "{argument name=\"panel ratio\" default=\"1:1\"}",
    "quadrants": [
      {
        "position": "top-left",
        "theme": "{argument name=\"theme 1\" default=\"Travel\"}",
        "subject": "{argument name=\"subject 1\" default=\"A couple holding hands on a white sand beach with turquoise ocean and bright blue sky\"}",
        "elements": ["{argument name=\"deco 1\" default=\"red hibiscus flower in bottom-left corner\"}"],
        "text_labels": [
          "{argument name=\"text 1a\" default=\"今年こそ、解き放て。\"}",
          "{argument name=\"text 1b\" default=\"沖縄旅行\"}",
          "{argument name=\"text 1c\" default=\"3日間の癒やし旅\"}",
          "{argument name=\"text 1d\" default=\"航空券+ホテル\"}",
          "{argument name=\"price 1\" default=\"39,800円〜\"}",
          "{argument name=\"text 1e\" default=\"絶景、グルメ、體験 ぜんぶ葉う!\"}"
        ],
        "icons": { "count": 3, "descriptions": ["airplane", "hotel building", "car"] },
        "color_palette": "{argument name=\"palette 1\" default=\"sky blue, turquoise, sand cream, accent red\"}"
      },
      {
        "position": "top-right",
        "theme": "{argument name=\"theme 2\" default=\"Skincare\"}",
        "subject": "{argument name=\"subject 2\" default=\"Close-up of a young woman with dewy glowing skin, eyes closed\"}",
        "elements": [
          "{argument name=\"deco 2a\" default=\"soft pink gradient background\"}",
          "{argument name=\"deco 2b\" default=\"dynamic water splash effects\"}",
          "{argument name=\"product 2\" default=\"pink cosmetic jar labeled 'LUMIÈRE Brightening Gel'\"}"
        ],
        "text_labels": [
          "毛穴・くすみ卒業!",
          "透明感あふれる",
          "水光肌へ",
          "新感覚スキンケア",
          "{argument name=\"discount 2\" default=\"初回限定 78%OFF\"}",
          "{argument name=\"price 2\" default=\"1,980円\"}"
        ],
        "badges": { "count": 3, "style": "gold circular", "labels": ["毛穴ケア", "高保溼", "ハリ・ツヤ"] },
        "color_palette": "blush pink, ivory, soft gold accent"
      },
      {
        "position": "bottom-left",
        "theme": "{argument name=\"theme 3\" default=\"Gourmet Food\"}",
        "subject": "{argument name=\"subject 3\" default=\"Thick medium-rare steak sizzling on a dark grill plate\"}",
        "elements": ["garlic chips", "rosemary sprig", "dark background with smoke and glowing embers"],
        "text_labels": [
          "とろける旨さ!",
          "{argument name=\"food 3\" default=\"黒毛和牛\"}",
          "贅沢ステーキ",
          "期間限定 / 特別価格",
          "{argument name=\"original price 3\" default=\"通常価格 8,980円\"}",
          "{argument name=\"sale price 3\" default=\"4,980円\"}"
        ],
        "badges": { "count": 1, "style": "red circular", "labels": ["A4 A5等級"] },
        "color_palette": "deep brown, charcoal black, amber, accent crimson"
      },
      {
        "position": "bottom-right",
        "theme": "{argument name=\"theme 4\" default=\"Online Education\"}",
        "subject": "{argument name=\"subject 4\" default=\"Young man in blue shirt studying at desk, writing in notebook beside open laptop\"}",
        "elements": ["bright indoor lighting", "minimal desk environment"],
        "text_labels": [
          "スキマ時間で",
          "{argument name=\"goal 4\" default=\"最短合格!\"}",
          "オンライン資格講座",
          "スマホで完結",
          "効率學習で差がつく!",
          "{argument name=\"discount 4\" default=\"今だけ! 受講料 20%OFF\"}"
        ],
        "badges": { "count": 1, "style": "blue circular", "labels": ["受講者數 10萬人 突破!"] },
        "icons": { "count": 2, "descriptions": ["smartphone", "open book"] },
        "color_palette": "sky blue, white, energetic yellow accent"
      }
    ]
  },
  "global_style": {
    "rendering": "real ad-grade composition per panel; each panel must look like a finished standalone banner",
    "typography": "bold sans-serif headline + smaller subhead per panel; multi-weight hierarchy",
    "layering": "subject photo + clear text overlay + small badge / icon ornaments",
    "lighting": "panel-appropriate (sunny travel, dewy beauty, smoky food, bright office)"
  },
  "constraints": {
    "must_keep": [
      "每格都像獨立一張可裁切的成品 banner（不是簡單拼貼）",
      "字號 hierarchy 在每格內清晰（headline ≫ subhead ≫ price/CTA）",
      "格與格之間不要互相溢出"
    ],
    "avoid": [
      "所有格子復用同一種配色 / 同一個模特",
      "文字模糊不可讀",
      "每格留白比例失衡",
      "把所有 logo / brand 強行寫成同一品牌"
    ]
  }
}
```

### 參數策略

- **必問**：grid spec、language、各 theme（或確認隨機）
- **可默認**：text_labels（按 theme 自動套話術）、color_palette（按 theme 推薦）
- **可隨機**：subject 描述、price 數字、badges 文案

### 自動補全策略

- 用戶只說"做 4 張不同行業廣告"→ 默認旅遊 / 美妝 / 餐飲 / 教育組合（已被 Case 90 驗證好用）
- 用戶給行業清單但不給文案 → 根據行業語義自動寫 headline / price / badge
- 用戶指定語言 → 全部 panels 必須統一語言（除非顯式說"混合語言"）

## 變體 1：3×3 九格行業全景演示板

📝 提示詞

```json
{
  "type": "3x3 grid of advertisement banners across 9 industries",
  "language": "{argument name=\"language\" default=\"Japanese\"}",
  "layout": {
    "structure": "9 equal cells",
    "industries": [
      "Travel", "Skincare", "Gourmet Food",
      "Online Education", "Fashion", "Finance",
      "Mobile Game", "Real Estate", "Healthcare"
    ]
  },
  "per_cell_required_elements": [
    "industry-appropriate hero subject",
    "1 large headline",
    "1 sub-line",
    "1 price or CTA strip",
    "1 small badge or icon row"
  ],
  "global_style": {
    "rendering": "uniform crisp print quality across all 9 cells",
    "color_diversity": "must use 9 visibly different palettes so cells don't blend",
    "negative_space": "each cell ~12% padding"
  }
}
```

### 何時選這個變體

- 用戶說"出 9 張完全不同行業 banner"
- 設計師在做萬能模板演示頁
- 想直接搬到 Behance / Dribbble 作品集封面

## 變體 2：手機端豎向 2×4 投流素材集

📝 提示詞

```json
{
  "type": "2x4 vertical mobile ad placement preview",
  "panel_aspect_ratio": "9:16",
  "overall_aspect_ratio": "9:16 collage of 8 mini portrait banners",
  "use_case": "Pinterest / TikTok / Reels / 朋友圈 信息流廣告效果預覽",
  "per_cell_required_elements": [
    "vertical hero photo or illustration",
    "top-aligned headline",
    "bottom-aligned CTA pill",
    "small brand watermark"
  ],
  "constraints": {
    "must_keep": [
      "豎版構圖安全區（頂部 / 底部各留 12% 給平臺 UI）",
      "8 個 panel 行業差異明顯"
    ]
  }
}
```

### 何時選這個變體

- 用戶做投流素材 demo
- 做手機端廣告效果預覽圖
- 給客戶展示「同一活動多種行業切角」

## 避免事項

- ❌ 把 4 格強行畫成同一個模特（變成 lookbook 而非多行業演示）
- ❌ 全部 panels 共享同一種配色 → 失去"跨行業"的視覺張力
- ❌ 文案過長導致 panel 內 hierarchy 崩塌（headline 應在畫面 1/3-1/2 高度內可讀）
- ❌ 把模板裏的"argument"寫到最終 prompt（要先做參數替換或保留 default）
- ❌ 多語混合時不指定哪個 panel 用哪種語言 → 模型會全部混亂
- ❌ panel 數量超過 9 個 → 單張圖裏每格細節會塌陷，不如分兩張
