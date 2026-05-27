# 角色清單 / 系列卡片信息圖海報模板

本文件用於生成"同一基礎角色 / 同一系列基礎物，分裂出 N 個變體（星座 / 元素 / 朝代 / 性格 / 季節），每個變體配獨立 panel + 個性化文案 + 裝飾主題"的信息圖海報。

典型用途：

- 12 星座系列卡片海報（每次 3 個，共 4 個元素海報）
- MBTI 16 人格視覺海報
- 朝代 / 神話 / 民族 系列肖像
- 「同模特不同造型」的系列寫真宣傳圖
- 節氣 / 月份 / 季節 系列海報
- 角色多視角性格檔案

特徵：

- **同一基礎角色**在所有 panel 中復用（外貌特徵統一）
- **N 個 panel** 共享統一邊框 / 排版 / 字體系統
- **每個 panel** 有獨立 theme color、裝飾 motif、文案 6-8 條
- 整體像「角色 / 概念字典的一頁」

與其它模板的區別：

| 模板 | 重點 |
|---|---|
| `portraits-and-characters/character-sheet.md`（已有） | 單角色三視圖 + 表情 + 服裝 |
| `avatars-and-profile/cultural-portrait-series.md`（已有） | 朝代 / 民族 / 文學系列肖像（側重肖像本身） |
| `avatars-and-profile/character-grid-portrait.md`（已有） | n×n 網格肖像（多職業 / 表情 / 朝代） |
| **本模板**（新增） | **同角色多版本卡片，每卡有獨立 theme + 6-8 條性格文案 + 裝飾 motif** |

## 適用範圍

- 12 星座 / 4 元素 / MBTI / 節氣 / 朝代 / 神話 系列海報
- 「同模特不同造型 + 性格檔案」的 SNS 分享圖
- IP 角色分支檔案
- 心理測試 / 性格分類 視覺化海報

## 何時使用

- 用戶提到"星座 / MBTI / 節氣 / 朝代 / 性格分類 海報"
- 同一角色要拆成 N 個版本展示
- 每個版本需要獨立文案 + 裝飾主題
- 輸出像「圖鑑的一頁」/「檔案冊的一章」

不要使用：

- 單角色多表情 → 用 `portraits-and-characters/character-sheet.md`
- 朝代 / 神話肖像但不帶性格檔案 → 用 `avatars-and-profile/cultural-portrait-series.md`
- n×n 拼圖肖像（不帶文案）→ 用 `avatars-and-profile/character-grid-portrait.md`

## 缺失信息優先提問順序

1. 系列主題（12 星座 / MBTI / 朝代 / 季節 / 自定義）
2. 本張要畫幾個 panel（3 / 4 / 9 / 12 / 16）
3. 主體角色描述（**真人風 / anime 風 / 寫實 / 偶像風**）+ 是否同一個人物
4. 主語言（中 / 英 / 日 / 雙語）
5. 整體審美（**柔粉萌系 / 復古檔案 / 極簡朋克 / 古典工筆 / pastel editorial**）
6. 是否需要每 panel 獨立 theme color
7. 比例（默認 3:4 豎版）

## 主模板：3-panel 同角色變體卡片海報（適合 12 星座按元素拆 / MBTI 4 維度拆）

📖 描述

豎版海報，header（主標 + 副標）+ 3 個上下堆疊的 panel，每 panel 內部分左角色 / 右文案，含獨立 theme color、symbol、constellation / motif。

📝 提示詞

```json
{
  "type": "{argument name=\"theme type\" default=\"Chinese zodiac-style character infographic poster\"}",
  "subject_overview": "{argument name=\"subject overview\" default=\"twelve zodiac character list, water signs edition\"}",
  "language": "{argument name=\"language\" default=\"Traditional Chinese\"}",
  "format": "vertical poster",
  "style": {
    "overall": "{argument name=\"style overall\" default=\"elegant anime-inspired character catalog with editorial infographic layout\"}",
    "rendering": "{argument name=\"rendering\" default=\"soft polished digital illustration, pastel gradients, delicate sparkles, ornamental border design\"}",
    "mood": "{argument name=\"mood\" default=\"dreamy, celestial, refined, feminine, aquatic\"}"
  },
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect ratio\" default=\"2:3\"}",
    "background": "{argument name=\"background\" default=\"very light pearl white with pale blue-lavender tint, subtle texture, thin decorative frame with filigree corners and tiny stars\"}"
  },
  "header": {
    "title": "{argument name=\"headline text\" default=\"十二星座角色清單|水象星座\"}",
    "subtitle": "{argument name=\"subtitle text\" default=\"感受・直覺・共鳴\"}",
    "icons": ["small stars", "{argument name=\"top right motif\" default=\"water droplet emblem in top right\"}", "curled cloud-like line art in top left"]
  },
  "layout": {
    "sections_count": 3,
    "sections": [
      {
        "title": "{argument name=\"section 1 title\" default=\"巨蟹座 Cancer\"}",
        "position": "top panel",
        "theme_color": "{argument name=\"section 1 color\" default=\"powder blue\"}",
        "symbol": "{argument name=\"section 1 symbol\" default=\"Cancer glyph inside circle at left\"}",
        "constellation": "{argument name=\"section 1 constellation\" default=\"Cancer constellation at upper right\"}",
        "count": 6,
        "labels": [
          "{argument name=\"section 1 line 1\" default=\"元素:水\"}",
          "{argument name=\"section 1 line 2\" default=\"概念:情感守護者,把人放在心上\"}",
          "{argument name=\"section 1 line 3\" default=\"性格:溫柔、敏感、顧家\"}",
          "{argument name=\"section 1 line 4\" default=\"行動原則:先確認感受,再保護重要的人\"}",
          "{argument name=\"section 1 line 5\" default=\"戀愛傾向:慢慢靠近,越熟越黏\"}",
          "{argument name=\"section 1 line 6\" default=\"人際怪癖:嘴上說沒事,實際會記很久\"}"
        ],
        "character": {
          "identity": "{argument name=\"base character\" default=\"young woman model reimagined as zodiac character\"}",
          "pose": "{argument name=\"section 1 pose\" default=\"half-body portrait, facing forward, arms gently wrapped around a large seashell pillow\"}",
          "outfit": "{argument name=\"section 1 outfit\" default=\"light blue celestial slip dress with lace trim and sheer cardigan embroidered with stars and moons\"}",
          "background": "{argument name=\"section 1 bg\" default=\"soft blue night sky with crescent moon, seashell, sparkling stars, stylized ocean wave and tiny water droplets\"}"
        }
      },
      {
        "title": "{argument name=\"section 2 title\" default=\"天蠍座 Scorpio\"}",
        "position": "middle panel",
        "theme_color": "{argument name=\"section 2 color\" default=\"deep violet\"}",
        "symbol": "Scorpio glyph inside circle at left",
        "constellation": "Scorpio constellation at upper right",
        "count": 6,
        "labels": [
          "元素:水",
          "{argument name=\"section 2 line 2\" default=\"概念:深海偵察者,情緒有深度\"}",
          "{argument name=\"section 2 line 3\" default=\"性格:專注、神祕、意志強\"}",
          "{argument name=\"section 2 line 4\" default=\"行動原則:先觀察,再一擊到位\"}",
          "{argument name=\"section 2 line 5\" default=\"戀愛傾向:愛得深,重忠誠與獨佔感\"}",
          "{argument name=\"section 2 line 6\" default=\"人際怪癖:越在乎越不說,會偷偷試探\"}"
        ],
        "character": {
          "identity": "{argument name=\"base character\" default=\"young woman model reimagined as zodiac character\"}",
          "pose": "half-body portrait, one hand near chin in a composed enigmatic gesture",
          "outfit": "black semi-sheer dress with gothic details and a dark plum off-shoulder shawl",
          "background": "dark purple celestial sea scene with crescent moon, bubbles, stars, and curling misty water shapes"
        }
      },
      {
        "title": "{argument name=\"section 3 title\" default=\"雙魚座 Pisces\"}",
        "position": "bottom panel",
        "theme_color": "{argument name=\"section 3 color\" default=\"lavender\"}",
        "symbol": "Pisces glyph inside circle at left",
        "constellation": "Pisces constellation at upper right",
        "count": 6,
        "labels": [
          "元素:水",
          "{argument name=\"section 3 line 2\" default=\"概念:夢境共感者,靠直覺導航\"}",
          "{argument name=\"section 3 line 3\" default=\"性格:浪漫、柔軟、有想像力\"}",
          "{argument name=\"section 3 line 4\" default=\"行動原則:先感受,再順流找答案\"}",
          "{argument name=\"section 3 line 5\" default=\"戀愛傾向:容易心動,渴望靈魂陪伴\"}",
          "{argument name=\"section 3 line 6\" default=\"人際怪癖:常把別人的情緒也一起感受\"}"
        ],
        "character": {
          "identity": "{argument name=\"base character\" default=\"young woman model reimagined as zodiac character\"}",
          "pose": "half-body portrait, one hand lifted as if balancing floating bubbles, other hand resting at chest",
          "outfit": "translucent lavender fantasy dress with soft draped sleeves and shimmering fabric",
          "background": "pale lilac underwater-celestial blend with bubbles, sparkles, and flowing translucent wave forms"
        }
      }
    ],
    "dividers": "three horizontal framed panels with thin ornamental borders"
  },
  "footer": {
    "center_icon": "{argument name=\"footer icon\" default=\"small blue seashell emblem\"}",
    "decorations": ["tiny stars", "fine scrollwork"]
  },
  "constraints": {
    "must_keep": [
      "3 個 panel 必須使用同一個 base character（臉 / 體型 / 髮型 base 一致）",
      "每 panel 通過服裝 / 道具 / 背景 motif 區分",
      "文字內容清晰且對齊（每 panel 6 行性格檔案）",
      "整體色彩主題統一（如水象都用藍紫系）",
      "分隔 panel 的邊框樣式一致"
    ],
    "avoid": [
      "把基礎角色畫成 3 個完全不同的人",
      "panel 間裝飾 motif 風格漂移（一個寫實一個卡通）",
      "性格檔案文字超過 panel 一半面積",
      "將其它 9 個星座 / 不在主題內的內容也畫進來",
      "使用過多字體（建議主標 + 性格列表 + 英文星座 三種字體即可）"
    ]
  }
}
```

### 參數策略

- **必問**：theme type（系列主題）、3 個 section title、base character description
- **可默認**：language（按 theme 推薦）、aspect ratio、裝飾 motif
- **可隨機**：性格檔案 6 行的具體文案（按角色性格自動生成）

### 自動補全策略

- 用戶給出"水象星座" → 自動 fill 巨蟹 / 天蠍 / 雙魚 + 藍紫色調 + 海洋 motif
- 用戶給出"火象" → 自動 fill 牡羊 / 獅子 / 射手 + 紅橙金色 + 火焰 motif
- 用戶給出"MBTI 分析家組" → 自動 fill INTJ / INTP / ENTJ / ENTP + 紫色 + 幾何 motif

## 變體 1：4 panel 橫版便當格（適合 16 panel 一組拆 4 張）

📝 提示詞

```json
{
  "type": "4-panel character catalog poster, horizontal bento layout",
  "format_override": "horizontal poster, 16:9 or 4:3",
  "layout_override": {
    "structure": "2x2 grid, 4 equal panels",
    "use_case": "MBTI 4 維度（NT / NF / SJ / SP）一張圖各 1 個代表角色"
  },
  "section_count": 4,
  "must_keep": ["4 panel 共享同一個 base character", "對角線/網格平衡"]
}
```

### 何時選這個變體

- 想做 MBTI 16 類拆 4 維度
- 12 星座拆 4 元素，每張 3 個 → 不如 1 張 4 元素代表
- 橫屏分享渠道（Twitter / 朋友圈）

## 變體 2：12 panel 全集（不推薦單圖，但若必須）

📝 提示詞

```json
{
  "type": "12-panel full series character catalog poster",
  "section_count": 12,
  "layout_override": {
    "format": "very tall vertical poster, 1:2 or longer",
    "structure": "3 columns x 4 rows OR 4 columns x 3 rows",
    "panel_internal_layout": "much smaller per-panel: 1 character thumb + 3 short labels (not 6)"
  },
  "warning": "panel 越多每格細節越塌；建議拆成 4 張元素海報而不是 1 張 12 panel"
}
```

### 何時選這個變體

- 必須出 1 張 = 全 12 星座 / 12 節氣
- 客戶接受犧牲單 panel 細節
- 用作系列總覽圖（不是細讀圖）

## 變體 3：朝代 / 神話 系列肖像（無星座符號，加文化 motif）

📝 提示詞

```json
{
  "type": "dynastic / mythological character catalog poster",
  "section_count": 3,
  "section_examples": ["唐 / 宋 / 明 / 清 / 民國"],
  "style_override": {
    "overall": "elegant editorial portrait series with classical Chinese motifs",
    "palette": "warm beige, antique gold, ink black, vermilion red",
    "decoration_per_panel": "對應朝代的紋樣 / 服飾 / 建築 / 器皿"
  },
  "labels_per_panel_count": 5,
  "labels_examples": ["年代", "服飾特色", "代表器物", "性格 keyword", "印章 / 落款"]
}
```

### 何時選這個變體

- 文創 / 出版 / 教育歷史類
- 想做「同一模特穿不同朝代」的寫真系列
- 不需要星座 / MBTI 這種現代分類

## 避免事項

- ❌ 把 base character 畫成多個不同的人 → 致命，立即破壞「同一角色多版本」核心
- ❌ panel 間裝飾 motif 風格漂移（一個寫實一個 chibi）
- ❌ 在 3-panel 海報中硬塞 12 個星座 → 不可讀
- ❌ 性格檔案文字遮住人物臉 / 佔據 > 50% 面積
- ❌ panel 邊框 / 字體不統一 → 看起來像 3 張不同海報拼貼
- ❌ 在主題外硬塞額外元素（"水象星座" 海報裏出現火焰）
- ❌ 配色 ≥ 5 主色 → 失去系列感
- ❌ 一個 panel 6 行文字、另一個 8 行 / 另一個 4 行 → 必須等量
