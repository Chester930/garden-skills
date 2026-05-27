# Lookbook / 9 宮格信息圖模板

本文件用於"一張圖裏有 N 格主題清單"：

- 7 日穿搭 lookbook
- 9 宮格 self-care 清單
- 一周食譜 lookbook
- 月度計劃 9 宮格
- 主題清單圖（10 個 best、7 天習慣）

特徵：

- 多格清單（7 / 9 / 12）
- 每格獨立可讀
- 通常帶編號 / 日期 / 標籤
- 無強敘事，重清單展示
- 頂部主標題 + 底部小總結

## 適用範圍

- 穿搭 lookbook
- 食譜周曆
- 習慣打卡卡片
- TOP N 清單視覺

## 何時使用

- 用戶提到"7 日 / 9 宮格 / 月度 / lookbook / TOP N"
- 用戶希望一張圖能列完一個清單

不要使用：

- 營銷 banner 套裝（用 `banner-grid-2x2.md`）
- 關係圖（用 `storyboards-and-sequences/character-relationship-diagram.md`）
- 表情九宮格（用 `avatars-and-profile/character-grid-portrait.md`）

## 缺失信息優先提問順序

1. 主題（穿搭 / 食譜 / 習慣 / TOP）
2. 格子數（7 / 9 / 12）
3. 每格內容
4. 是否帶編號 / 日期 / 標籤
5. 風格：拍照實拍 / 插畫 / 極簡
6. 比例

## 主模板：7 日穿搭 lookbook

📖 描述

整體一張圖，頂部有標題，主體爲 7 格穿搭，每格是一個全身搭配，底部有簡短風格總結。

📝 提示詞

```json
{
  "type": "7 日穿搭 lookbook",
  "goal": "生成一張可發小紅書 / Instagram 的 7 日穿搭信息圖",
  "title_block": {
    "main_title": "{argument name=\"main title\" default=\"一周穿什麼\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"7 days · 7 outfits\"}",
    "position": "頂部居中"
  },
  "subject": {
    "model": "{argument name=\"model description\" default=\"東亞年輕女性，自然微笑\"}",
    "consistency": "7 格裏必須是同一人"
  },
  "layout": {
    "format": "{argument name=\"layout\" default=\"上 4 + 下 3 錯位排版\"}",
    "panel_count": 7,
    "panel_design": {
      "label_top": "{argument name=\"label format\" default=\"DAY 1 / MON\"}",
      "outfit_caption": "1 句話風格描述"
    }
  },
  "outfits": [
    {"day": 1, "label": "MON", "style": "{argument name=\"day 1\" default=\"通勤白襯衫 + 米色西褲\"}"},
    {"day": 2, "label": "TUE", "style": "{argument name=\"day 2\" default=\"針織開衫 + 牛仔褲\"}"},
    {"day": 3, "label": "WED", "style": "{argument name=\"day 3\" default=\"連衣裙 + 平底鞋\"}"},
    {"day": 4, "label": "THU", "style": "{argument name=\"day 4\" default=\"運動衛衣 + 短裙\"}"},
    {"day": 5, "label": "FRI", "style": "{argument name=\"day 5\" default=\"皮衣 + 黑直筒褲\"}"},
    {"day": 6, "label": "SAT", "style": "{argument name=\"day 6\" default=\"棉麻襯衫 + 闊腿褲\"}"},
    {"day": 7, "label": "SUN", "style": "{argument name=\"day 7\" default=\"衛衣 + 運動短褲\"}"}
  ],
  "style": {
    "art_style": "{argument name=\"art style\" default=\"日雜時尚攝影 + 米色背景\"}",
    "color_palette": "{argument name=\"color palette\" default=\"米色 + 大地色 + 黑\"}"
  },
  "footer": {
    "summary": "{argument name=\"summary\" default=\"工作日通勤 + 周末鬆弛\"}"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4\"}",
  "constraints": {
    "must_keep": [
      "7 格裏是同一人",
      "穿搭風格符合一周節奏",
      "色板嚴格統一",
      "標籤字體一致"
    ],
    "avoid": [
      "7 格裏像不同人",
      "色板出現高飽和熒光色",
      "穿搭風格漂移到完全不搭",
      "字體超過 2 種"
    ]
  }
}
```

### 參數策略

- 必問：主題、模特描述、7 個穿搭
- 可默認：layout、風格、色板
- 可隨機：背景細節

### 自動補全策略

- 用戶給"風格關鍵詞"（極簡 / 復古 / 街頭）時：自動展開 7 套穿搭
- 默認 7 格 + 錯位排版
- 默認日雜攝影風

## 變體 1：9 宮格 self-care 清單

📝 提示詞

```json
{
  "type": "9 宮格 self-care 清單",
  "title_block": {
    "main_title": "{argument name=\"main title\" default=\"每日自我關照 9 件事\"}"
  },
  "layout": {
    "format": "3x3 grid",
    "panel_count": 9
  },
  "outfits": [
    {"label": "1", "style": "8 杯水"},
    {"label": "2", "style": "10 分鐘拉伸"},
    {"label": "3", "style": "曬 15 分鐘太陽"},
    {"label": "4", "style": "深呼吸"},
    {"label": "5", "style": "記 3 件感謝"},
    {"label": "6", "style": "聽一首喜歡的歌"},
    {"label": "7", "style": "和家人通話"},
    {"label": "8", "style": "10 頁書"},
    {"label": "9", "style": "11 點睡覺"}
  ],
  "style": {
    "art_style": "極簡插畫 + 柔色"
  },
  "constraints": {
    "must_feel": "可作爲打卡海報"
  }
}
```

## 變體 2：TOP 12 清單圖

📝 提示詞

```json
{
  "type": "TOP 12 清單圖",
  "title_block": {
    "main_title": "{argument name=\"main title\" default=\"2026 年最值得讀的 12 本書\"}"
  },
  "layout": {
    "format": "3x4 grid",
    "panel_count": 12
  },
  "constraints": {
    "must_feel": "推薦感 + 可分享"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "Lookbook / 清單自動補全",
  "mode": "auto-fill",
  "rule": "用戶給主題，自動決定格數、內容、風格",
  "constraints": {
    "must_feel": "可發小紅書"
  }
}
```

## 避免事項

- 不要讓格數超過 16
- 不要讓格子大小差異 > 2x（除非主圖規則一致）
- 不要讓背景配色與主題脫節
- 不要讓標題字號 / 字體多種
- 不要讓一個 lookbook 裏出現多個不同模特（保持身份一致）
