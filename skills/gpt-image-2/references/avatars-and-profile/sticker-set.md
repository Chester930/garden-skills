# 貼紙套裝 / Sticker Set 模板

本文件用於"一張圖包含 N 個獨立可裁切貼紙"的視覺：

- 趣味動物貼紙
- 角色表情貼紙
- 主題節日貼紙
- 行業 / 興趣主題貼紙
- iMessage / Telegram 風格貼紙包

特徵：

- 一張圖裏多個獨立小元素
- 每個元素有透明 / 白色 / 描邊外圈
- 互相不連接
- 可整張圖打印或單獨裁切
- 風格高度統一

## 適用範圍

- 貼紙套裝（4-12 個）
- 表情包合集
- 節日禮盒貼紙
- 周邊貼紙卡片

## 何時使用

- 用戶提到"貼紙 / sticker set / 表情包套裝"
- 用戶希望一張圖裏多個獨立小元素
- 用戶希望每個元素都可獨立使用

不要使用：

- 同一角色多表情九宮格（用 `character-grid-portrait.md`）
- 多版本頭像（用 `themed-3d-icon.md`）
- 多 panel 故事拼貼（用 `grids-and-collages/mixed-style-multi-panel.md`）

## 缺失信息優先提問順序

1. 主題（動物 / 食物 / 角色 / 節日 / 心情）
2. 貼紙數量（4 / 6 / 8 / 9 / 12）
3. 風格：手繪 / 3D Q 萌 / 擬物 / Anime
4. 是否帶文字標籤
5. 配色基調
6. 是否需要白色描邊

## 主模板：趣味動物貼紙套裝（9 張）

📖 描述

整體 1:1 或 4:3 大圖，背景爲淺米色，9 個獨立貼紙排成 3×3，每個貼紙都有白色描邊。

📝 提示詞

```json
{
  "type": "貼紙套裝 sticker set",
  "goal": "生成一張包含 N 個獨立小貼紙的合集圖，每個貼紙可單獨裁切使用",
  "theme": "{argument name=\"theme\" default=\"趣味動物日常\"}",
  "style": {
    "rendering": "{argument name=\"art style\" default=\"3D Q 萌 + 軟光\"}",
    "color_palette": "{argument name=\"color palette\" default=\"暖橙 + 米白 + 淺綠\"}"
  },
  "sticker_design": {
    "outline": "{argument name=\"outline\" default=\"3px 白色描邊\"}",
    "shadow": "{argument name=\"shadow\" default=\"輕微底部投影\"}",
    "with_label": "{argument name=\"with label\" default=\"true\"}",
    "label_style": "{argument name=\"label style\" default=\"圓潤手寫體，深棕色\"}"
  },
  "layout": {
    "background": "{argument name=\"background\" default=\"淺米色 + 微紙紋\"}",
    "grid": "{argument name=\"grid\" default=\"3x3\"}",
    "spacing": "貼紙之間均勻間距",
    "aspect_ratio": "{argument name=\"aspect ratio\" default=\"1:1\"}"
  },
  "stickers": {
    "count": "{argument name=\"sticker count\" default=\"9\"}",
    "items": [
      "{argument name=\"sticker 1\" default=\"喝咖啡的橘貓 + 標籤 'morning'\"}",
      "{argument name=\"sticker 2\" default=\"舉着氣球的小柴犬 + 標籤 'yay'\"}",
      "{argument name=\"sticker 3\" default=\"打哈欠的小熊 + 標籤 'sleepy'\"}",
      "{argument name=\"sticker 4\" default=\"戴墨鏡的兔子 + 標籤 'cool'\"}",
      "{argument name=\"sticker 5\" default=\"抱着花的水豚 + 標籤 'love'\"}",
      "{argument name=\"sticker 6\" default=\"跳起來的小狐狸 + 標籤 'go'\"}",
      "{argument name=\"sticker 7\" default=\"讀書的貓頭鷹 + 標籤 'study'\"}",
      "{argument name=\"sticker 8\" default=\"喫蛋糕的倉鼠 + 標籤 'yum'\"}",
      "{argument name=\"sticker 9\" default=\"揮手的企鵝 + 標籤 'hi'\"}"
    ]
  },
  "constraints": {
    "must_keep": [
      "每個貼紙獨立、互不連接",
      "整體風格統一不漂移",
      "白色描邊均勻",
      "標籤字體一致"
    ],
    "avoid": [
      "貼紙大小差異過大",
      "風格混雜（寫實 + 卡通）",
      "標籤出現錯字",
      "背景喧賓奪主"
    ]
  }
}
```

### 參數策略

- 必問：主題、數量
- 可默認：風格、描邊、標籤
- 可隨機：每個貼紙具體造型

### 自動補全策略

- 默認 9 張（3×3）
- 默認帶白色描邊 + 短標籤
- 風格按主題自動選（動物 = Q 萌 / 食物 = 3D 擬物 / 節日 = 節日色）

## 變體 1：節日貼紙套裝

📝 提示詞

```json
{
  "type": "節日貼紙套裝",
  "theme": "{argument name=\"festival\" default=\"聖誕節\"}",
  "style": {
    "color_palette": "聖誕紅 + 聖誕綠 + 金"
  },
  "stickers": {
    "count": 6,
    "items": [
      "聖誕樹 + 'Merry'",
      "雪人 + 'Joy'",
      "禮盒 + 'Gift'",
      "聖誕老人頭像 + 'Ho Ho Ho'",
      "馴鹿 + 'Rudolph'",
      "雪花 + 'Cool'"
    ]
  },
  "constraints": {
    "must_feel": "節日氛圍、可分享、可印刷"
  }
}
```

## 變體 2：心情表情貼紙（無文字）

📝 提示詞

```json
{
  "type": "心情表情貼紙（無文字）",
  "sticker_design": {
    "with_label": false
  },
  "stickers": {
    "count": 12,
    "items": ["開心", "生氣", "委屈", "無語", "笑死", "震驚", "困了", "餓了", "心動", "酷", "尷尬", "拜拜"]
  },
  "constraints": {
    "must_feel": "可直接做表情包"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "貼紙套裝自動補全",
  "mode": "auto-fill",
  "rule": "用戶給主題，自動決定數量、風格、配色、標籤內容",
  "constraints": {
    "must_feel": "可直接打印 / 上傳 iMessage"
  }
}
```

## 避免事項

- 不要讓貼紙數量超過 16（視覺過密）
- 不要讓貼紙大小差異 > 2x
- 不要混合寫實與 Q 萌風格
- 不要讓標籤字體超過 1 種
- 不要讓背景出現可識別 logo
- 不要把貼紙彼此重疊（必須獨立）
