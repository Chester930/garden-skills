# 童書 / 繪本場景插畫模板

本文件用於生成「童書 / 繪本 / 兒童內容」 風格插畫：

- 童書內頁 / 封面
- 兒童內容公衆號頭圖
- 繪本風周邊
- 教育內容插圖
- 節日卡片

特徵：

- 柔和水彩 / 蠟筆 / 拼貼風
- 角色 Q 萌
- 顏色溫暖
- 信息清晰、易理解
- 留有故事感

## 適用範圍

- 童書內頁 / 封面
- 教育內容插圖
- 兒童節日卡片
- 童趣品牌插圖

## 何時使用

- 用戶提到「繪本 / 童書 / 兒童 / 蠟筆風 / 水彩童書風」
- 用戶希望溫暖、童趣、故事感

不要使用：

- 治癒日常（用 `healing-scene.md`）
- 概念大片（用 `concept-scene.md`）
- 極簡氛圍（用 `minimalist-mood-scene.md`）

## 缺失信息優先提問順序

1. 故事 / 主題
2. 主角（孩子 / 動物）
3. 場景
4. 風格：水彩 / 蠟筆 / 拼貼 / Anime 童趣
5. 是否包含文字
6. 比例

## 主模板：童書內頁插畫

📖 描述

整體一頁童書插畫，主角 Q 萌可愛，場景柔光，可包含 1 句故事文本。

📝 提示詞

```json
{
  "type": "童書內頁插畫",
  "goal": "生成一張可直接作爲童書內頁的溫暖插畫",
  "story": {
    "theme": "{argument name=\"story theme\" default=\"小熊第一次去森林冒險\"}",
    "scene": "{argument name=\"scene\" default=\"晨霧中的森林小徑\"}",
    "moment": "{argument name=\"story moment\" default=\"小熊抬頭看到第一縷陽光透過樹葉\"}"
  },
  "main_character": {
    "description": "{argument name=\"main character\" default=\"圓乎乎的小熊，背着小布包\"}",
    "expression": "{argument name=\"expression\" default=\"好奇 + 微笑\"}",
    "pose": "{argument name=\"pose\" default=\"抬頭仰望\"}"
  },
  "secondary_characters": {
    "items": [
      "{argument name=\"secondary 1\" default=\"飛過的小鳥\"}",
      "{argument name=\"secondary 2\" default=\"探出頭的兔子\"}"
    ]
  },
  "style": {
    "art_style": "{argument name=\"art style\" default=\"水彩繪本風 + 柔和勾線\"}",
    "color_palette": "{argument name=\"color palette\" default=\"暖橙 + 柔綠 + 米白\"}",
    "rendering": "顆粒感紙紋 + 柔和水彩 + 簡單線條"
  },
  "text_overlay": {
    "enabled": "{argument name=\"text enabled\" default=\"true\"}",
    "text": "{argument name=\"text\" default=\"小熊抬起頭，世界忽然變得很大。\"}",
    "position": "{argument name=\"text position\" default=\"畫面下方居中\"}",
    "font_style": "圓潤手寫體"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"4:3\"}",
  "constraints": {
    "must_keep": [
      "主角作爲視覺中心",
      "整體配色溫暖治癒",
      "文字與畫面留白合理",
      "次要角色不搶主角"
    ],
    "avoid": [
      "出現成年人複雜表情",
      "色調過冷",
      "場景過於寫實",
      "出現品牌 logo"
    ]
  }
}
```

### 參數策略

- 必問：主角、場景、文字
- 可默認：風格、配色、字體
- 可隨機：次要角色

### 自動補全策略

- 主角 Q 萌優先（動物 > 孩子）
- 風格默認水彩繪本
- 文字 ≤ 25 字
- 比例默認 4:3 或 3:4

## 變體 1：節日卡片

📝 提示詞

```json
{
  "type": "節日童趣卡片",
  "story": {
    "theme": "{argument name=\"festival\" default=\"聖誕節\"}",
    "scene": "雪夜小屋"
  },
  "main_character": {
    "description": "戴紅帽的小狐狸"
  },
  "text_overlay": {
    "text": "Merry Christmas",
    "position": "頂部"
  },
  "constraints": {
    "must_feel": "節日氛圍、溫暖、可分享"
  }
}
```

## 變體 2：教育插圖

📝 提示詞

```json
{
  "type": "兒童教育插圖",
  "story": {
    "theme": "{argument name=\"concept\" default=\"刷牙的正確順序\"}",
    "scene": "浴室"
  },
  "main_character": {
    "description": "拿牙刷的小孩"
  },
  "text_overlay": {
    "enabled": true,
    "text": "1. 漱口 → 2. 上牙 → 3. 下牙 → 4. 漱口"
  },
  "constraints": {
    "must_feel": "易懂、可教學、親切"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "童書插畫自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給主題，自動決定主角、場景、風格、文字",
  "constraints": {
    "must_feel": "可印成繪本"
  }
}
```

## 避免事項

- 不要讓人物五官寫實
- 不要讓場景過暗
- 不要讓文字超過 25 字
- 不要使用 > 3 種字體
- 不要出現成年人才理解的概念
