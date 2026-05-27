# 概念 / 大場景插畫模板

本文件用於生成「電影感大場景 / 概念美術 / 史詩插畫」：

- 遊戲概念圖
- 電影 key art
- 小說 / IP 主視覺
- 預告海報場景
- 世界觀介紹場景

特徵：

- 大場景 / 大透視
- 強烈氛圍
- 視覺信息量大
- 戲劇性燈光
- 適合作爲大畫幅展示

## 適用範圍

- 遊戲 / 動畫 / 電影概念圖
- 小說 / IP 主視覺
- 預告海報
- 世界觀主圖

## 何時使用

- 用戶提到「概念圖 / key art / 大場景 / 電影感 / 史詩」
- 用戶希望一張圖就能講清楚一個世界

不要使用：

- 治癒日常（用 `healing-scene.md`）
- 童書風（用 `picture-book-scene.md`）
- 極簡氛圍（用 `minimalist-mood-scene.md`）

## 缺失信息優先提問順序

1. 世界觀主題（賽博朋克 / 東方奇幻 / 末世 / 太空 / 武俠）
2. 主體（人物 + 遠景 / 巨型生物 / 城市）
3. 時間 / 天氣 / 氛圍
4. 配色 + 燈光基調
5. 比例（橫版 21:9 / 16:9 / 豎版 9:16）
6. 是否有 title text 區

## 主模板：電影感概念大場景

📖 描述

整體寬幅畫面，前景人物 + 中景敘事 + 遠景大透視，戲劇性燈光，預留 title 區。

📝 提示詞

```json
{
  "type": "電影感概念大場景",
  "goal": "生成一張可作爲遊戲 key art / 電影 key art / IP 世界觀主視覺的概念大場景",
  "world": {
    "theme": "{argument name=\"world theme\" default=\"賽博朋克東方都市\"}",
    "tone": "{argument name=\"world tone\" default=\"霓虹 + 雨夜 + 高密度建築\"}"
  },
  "composition": {
    "foreground": "{argument name=\"foreground\" default=\"撐傘的女主角背影\"}",
    "midground": "{argument name=\"midground\" default=\"溼漉漉的街道 + 霓虹招牌 + 反光\"}",
    "background": "{argument name=\"background\" default=\"高聳摩天樓 + 全息廣告\"}",
    "perspective": "{argument name=\"perspective\" default=\"低機位仰視\"}"
  },
  "lighting": {
    "key_light": "{argument name=\"key light\" default=\"霓虹粉 + 霓虹藍交錯\"}",
    "fill_light": "{argument name=\"fill light\" default=\"溼地反光\"}",
    "atmosphere": "{argument name=\"atmosphere\" default=\"溼潤空氣 + 煙雨 + 微光顆粒\"}"
  },
  "color_palette": "{argument name=\"color palette\" default=\"霓虹粉 + 電光藍 + 深黑\"}",
  "title_safe_area": "{argument name=\"title area\" default=\"畫面頂部 1/4 留出 title 位\"}",
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"21:9\"}",
  "style": {
    "rendering": "電影級 concept art + 數字繪畫 + 高細節"
  },
  "constraints": {
    "must_keep": [
      "前中後景層次清晰",
      "燈光方向統一",
      "色板嚴格統一",
      "前景人物剪影清晰"
    ],
    "avoid": [
      "前景與背景混在一起",
      "過度細節讓畫面塞滿",
      "出現真實品牌 logo 招牌",
      "色調突然變化"
    ]
  }
}
```

### 參數策略

- 必問：世界觀、構圖層次、比例
- 可默認：燈光、配色、風格
- 可隨機：遠景細節

### 自動補全策略

- 主題自動選配色（賽博 = 霓虹 / 武俠 = 水墨 / 末世 = 焦土棕 / 太空 = 深紫）
- 默認 21:9 橫屏
- 自動留 title 區

## 變體 1：豎版 IP 主視覺

📝 提示詞

```json
{
  "type": "豎版 IP 主視覺",
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"9:16\"}",
  "composition": {
    "foreground": "主角全身居中",
    "midground": "光暈 + 隊友剪影",
    "background": "代表世界觀的核心建築"
  },
  "constraints": {
    "must_feel": "海報感、英雄感、首發主圖"
  }
}
```

## 變體 2：自然奇觀大場景

📝 提示詞

```json
{
  "type": "自然奇觀大場景",
  "world": {
    "theme": "{argument name=\"natural theme\" default=\"極地浮冰 + 巨鯨\"}",
    "tone": "孤獨、宏大、肅穆"
  },
  "composition": {
    "foreground": "渺小人影",
    "background": "巨型自然主體"
  },
  "constraints": {
    "must_feel": "渺小 vs 宏大"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "概念大場景自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給世界觀一句話，自動決定構圖、燈光、配色、比例",
  "constraints": {
    "must_feel": "可作爲大屏 / 首發 KV"
  }
}
```

## 避免事項

- 不要讓前景與背景同色融合
- 不要讓燈光來源不統一
- 不要塞太多次要細節
- 不要讓人物比建築還大（破壞世界觀尺度）
- 不要使用 > 4 種主色
