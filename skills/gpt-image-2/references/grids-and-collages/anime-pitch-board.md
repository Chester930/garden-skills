# 動漫立項 Pitch Board 模板

本文件用於"一張圖裏同時呈現 poster + 角色 + 設定 + 文案"的立項級文檔視覺：

- 動漫 / 遊戲立項 pitch
- IP 全套設定文檔
- 影視項目 pitch deck 單頁
- 出版社新作品提案
- 動畫工作室 in-house 提案

特徵：

- 一張大圖分多區塊
- 主區：海報 / KV
- 次區：角色卡 / 設定 / 世界觀
- 文案區：標題 + tagline + log line
- 看起來"專業項目文檔"而不是單圖

## 適用範圍

- 動漫 / 遊戲立項 pitch
- 影視提案
- IP 全套提案

## 何時使用

- 用戶提到"立項 / pitch / 提案 / 全套設定 / 一張圖講完作品"
- 用戶希望出"項目文檔級"視覺

不要使用：

- 單圖 KV（用 `storyboards-and-sequences/anime-key-visual.md`）
- 角色設定稿（用 `portraits-and-characters/character-sheet.md`）
- 關係圖（用 `storyboards-and-sequences/character-relationship-diagram.md`）
- 一般營銷海報（用 `poster-and-campaigns/brand-poster.md`）

## 缺失信息優先提問順序

1. 作品名 + 一句 tagline
2. 題材 + 類型（科幻 / 校園 / 末世 / ...）
3. 主角數 + 主角描述
4. 世界觀 / 時代
5. 風格基底
6. 是否需要日 / 英 / 中 標題

## 主模板：動漫立項 Pitch Board

📖 描述

整體一張大圖，分爲 KV 主區 + 角色卡區 + 世界觀區 + 文案區。

📝 提示詞

```json
{
  "type": "動漫立項 Pitch Board",
  "goal": "生成一張可作爲動漫 / 遊戲立項 pitch 的全套視覺文檔單頁",
  "ip": {
    "title": "{argument name=\"title\" default=\"霜白幻想曲\"}",
    "title_localized": "{argument name=\"title localized\" default=\"FROZEN FANTASIA\"}",
    "tagline": "{argument name=\"tagline\" default=\"這場雪，下了一千年\"}",
    "logline": "{argument name=\"logline\" default=\"在永恆冬季的王國裏，一個忘記自己名字的少女遇到一隻能聽懂雪的狐狸，他們決定一起尋找春天的源頭\"}",
    "genre": "{argument name=\"genre\" default=\"奇幻 / 治癒 / 冒險\"}"
  },
  "regions": {
    "main_kv": {
      "position": "{argument name=\"kv position\" default=\"上半部分佔 60%\"}",
      "content": "{argument name=\"kv content\" default=\"少女主角站在雪原中，背景爲冰封城堡，狐狸在腳邊\"}",
      "style": "電影海報級 anime 厚塗"
    },
    "character_cards": {
      "position": "{argument name=\"character region\" default=\"左下\"}",
      "count": "{argument name=\"character count\" default=\"3\"}",
      "items": [
        "{argument name=\"char 1\" default=\"少女主角 · 霜白髮 · 失憶\"}",
        "{argument name=\"char 2\" default=\"劍士同伴 · 黑髮 · 守護者\"}",
        "{argument name=\"char 3\" default=\"狐狸夥伴 · 雪白 · 通靈\"}"
      ],
      "card_design": "圓角方形頭像 + 名 + 一句簡介"
    },
    "world_setting": {
      "position": "{argument name=\"world region\" default=\"右下\"}",
      "content": "{argument name=\"world content\" default=\"被冬天封印一千年的浮空王國，唯一的活物是飄雪與極光\"}",
      "extras": ["地圖縮略圖（可選）", "重要道具圖標 3 個"]
    },
    "title_block": {
      "position": "{argument name=\"title position\" default=\"畫面頂部居中\"}",
      "components": ["主標題（大字）", "本地化標題", "tagline（小字斜體）"]
    },
    "footer_meta": {
      "position": "底部",
      "content": "{argument name=\"footer\" default=\"PRESENTED BY · X STUDIO · 2026\"}"
    }
  },
  "style": {
    "art_style": "{argument name=\"art style\" default=\"現代 anime + 半寫實 + 厚塗背景\"}",
    "color_palette": "{argument name=\"color palette\" default=\"冰藍 + 月白 + 暖金\"}",
    "typography": "標題 serif + 正文 sans"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4\"}",
  "constraints": {
    "must_keep": [
      "KV 區始終是視覺錨點",
      "角色卡風格統一",
      "信息分區清晰、不混亂",
      "色板嚴格統一"
    ],
    "avoid": [
      "信息塞太多導致 KV 區被擠壓",
      "角色卡風格漂移",
      "標題字體 > 2 種",
      "缺少 tagline / logline"
    ]
  }
}
```

### 參數策略

- 必問：作品名、tagline、主角
- 可默認：layout、風格、色板、字體
- 可隨機：背景細節

### 自動補全策略

- 用戶給一句作品概念時：自動展開標題 + tagline + logline + 主角 + 世界觀
- 默認 KV 佔 60% + 角色卡 + 世界觀分區
- 默認豎版 3:4

## 變體 1：遊戲立項 pitch

📝 提示詞

```json
{
  "type": "遊戲立項 pitch board",
  "regions": {
    "main_kv": {"content": "遊戲主視覺 + 玩法核心場景"},
    "character_cards": {"content": "可玩角色 + 簡介"},
    "world_setting": {"content": "玩法核心循環 + 關鍵系統"}
  },
  "constraints": {
    "must_feel": "GDC pitch 級"
  }
}
```

## 變體 2：影視項目 pitch

📝 提示詞

```json
{
  "type": "影視項目 pitch board",
  "regions": {
    "main_kv": {"content": "電影主視覺"},
    "character_cards": {"content": "主要角色 + 演員候選"},
    "world_setting": {"content": "時代 + 美術參考"}
  },
  "constraints": {
    "must_feel": "可發投資人"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "Pitch board 自動補全",
  "mode": "auto-fill",
  "rule": "用戶給一句作品概念，自動展開所有區塊",
  "constraints": {
    "must_feel": "可作爲正式 pitch deck 首頁"
  }
}
```

## 避免事項

- 不要讓 KV 區被擠壓成不到 50%
- 不要讓角色卡風格漂移
- 不要讓信息分區混亂
- 不要漏掉 tagline / logline
- 不要讓色板出現 > 4 主色
- 不要讓標題字體超過 2 種
