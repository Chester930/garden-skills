# 4 格漫畫模板

本文件用於"4 格漫畫 / 諷刺漫畫 / 段子漫畫"視覺：

- 反轉 4 格段子
- 諷刺產品廣告漫畫
- 短故事 4 格
- 自媒體 4 格漫畫
- 食物 / 心情 4 格

特徵：

- 4 個等大格子（2×2 或 1×4）
- 每格獨立場景但故事連貫
- 起 / 承 / 轉 / 合 節奏
- 通常帶對話氣泡 / 心聲
- 風格統一

## 適用範圍

- 自媒體 4 格漫畫
- 諷刺廣告 4 格
- 反轉段子
- 心情日記漫畫

## 何時使用

- 用戶提到"4 格 / 四格漫畫 / 段子漫畫 / 諷刺漫畫"
- 用戶希望講一個有節奏的小故事
- 用戶希望有反轉 / 笑點

不要使用：

- 多分鏡跨頁漫畫（用 `manga-spread-page.md`）
- 無敘事的圖標拼貼（用 `grids-and-collages/banner-grid-2x2.md`）
- 單圖 KV（用 `anime-key-visual.md`）

## 缺失信息優先提問順序

1. 主題 / 故事核心
2. 主角描述
3. 4 格分別講什麼（起承轉合）
4. 風格（手繪日漫 / 極簡線稿 / 美式卡通 / 國漫）
5. 是否有對話氣泡
6. 比例（1:1 / 4:3 / 9:16）

## 主模板：2×2 反轉 4 格漫畫

📖 描述

整體一張圖，分爲 2×2 四格，按起 / 承 / 轉 / 合講一個有反轉的小故事。

📝 提示詞

```json
{
  "type": "2x2 反轉 4 格漫畫",
  "goal": "生成一張 2×2 四格漫畫，講一個有節奏與反轉的小故事",
  "story": {
    "theme": "{argument name=\"theme\" default=\"減肥的人和半夜的炸雞\"}",
    "structure": "起 / 承 / 轉 / 合",
    "main_character": "{argument name=\"main character\" default=\"短髮女孩，穿睡衣\"}"
  },
  "style": {
    "art_style": "{argument name=\"art style\" default=\"日漫線稿 + 平塗淡色\"}",
    "consistency": "4 格中主角必須是同一人，畫風統一",
    "color_palette": "{argument name=\"color palette\" default=\"米白 + 暖橙 + 灰\"}"
  },
  "panels": {
    "format": "2x2 grid",
    "items": [
      {
        "position": "top-left",
        "label": "起",
        "scene": "{argument name=\"panel 1\" default=\"主角站在體重秤上，皺着眉\"}",
        "dialogue": "{argument name=\"dialogue 1\" default=\"今晚開始減肥！\"}"
      },
      {
        "position": "top-right",
        "label": "承",
        "scene": "{argument name=\"panel 2\" default=\"主角堅定地喝了一杯水\"}",
        "dialogue": "{argument name=\"dialogue 2\" default=\"水也很飽嘛\"}"
      },
      {
        "position": "bottom-left",
        "label": "轉",
        "scene": "{argument name=\"panel 3\" default=\"半夜裡主角偷偷點開了外賣 app\"}",
        "dialogue": "{argument name=\"dialogue 3\" default=\"...就一份炸雞\"}"
      },
      {
        "position": "bottom-right",
        "label": "合",
        "scene": "{argument name=\"panel 4\" default=\"主角抱着炸雞桶，眼淚汪汪\"}",
        "dialogue": "{argument name=\"dialogue 4\" default=\"明天開始減\"}"
      }
    ]
  },
  "dialogue_design": {
    "balloon_style": "{argument name=\"balloon style\" default=\"白色圓角氣泡，黑色描邊\"}",
    "font_style": "{argument name=\"font style\" default=\"圓潤手寫體\"}"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"1:1\"}",
  "constraints": {
    "must_keep": [
      "4 格主角是同一人",
      "故事節奏明顯（起 / 承 / 轉 / 合）",
      "對話氣泡不擋臉",
      "畫風統一不漂移"
    ],
    "avoid": [
      "故事走向平淡無反轉",
      "對話超過 12 字",
      "分格大小不一致",
      "字體多種"
    ]
  }
}
```

### 參數策略

- 必問：主題、主角、4 格劇情
- 可默認：風格、配色、氣泡樣式
- 可隨機：對話具體措辭

### 自動補全策略

- 用戶只給主題時：自動展開起承轉合 4 格劇情 + 4 句對話
- 主角默認按主題選適合的形象
- 默認 2×2

## 變體 1：諷刺產品廣告 4 格

📝 提示詞

```json
{
  "type": "諷刺產品廣告 4 格",
  "story": {
    "theme": "{argument name=\"product satire theme\" default=\"科技公司 PPT vs 實際產品\"}"
  },
  "panels": {
    "format": "2x2 grid",
    "items": [
      {"label": "PPT 上的樣子", "scene": "未來感產品 + 用戶陶醉"},
      {"label": "發布會演示", "scene": "工程師手在抖"},
      {"label": "實際到貨", "scene": "產品箱裡只有一個充電器"},
      {"label": "客服回復", "scene": "'下個版本會有'"}
    ]
  },
  "constraints": {
    "must_feel": "諷刺 + 段子 + 一眼看懂"
  }
}
```

## 變體 2：1×4 橫向 strip（適合 Twitter / X 長帖）

📝 提示詞

```json
{
  "type": "1x4 橫向 strip 漫畫",
  "panels": {
    "format": "1x4 horizontal strip",
    "items": [
      {"label": "1", "scene": "..."},
      {"label": "2", "scene": "..."},
      {"label": "3", "scene": "..."},
      {"label": "4", "scene": "..."}
    ]
  },
  "aspect_ratio": "16:9",
  "constraints": {
    "must_feel": "橫向閱讀，4 格連成一段動作"
  }
}
```

## 變體 3：美食 / 心情日記 4 格

📝 提示詞

```json
{
  "type": "心情 4 格日記漫畫",
  "story": {
    "theme": "{argument name=\"daily theme\" default=\"周一早上的我\"}"
  },
  "style": {
    "art_style": "極簡線稿 + 極少色塊"
  },
  "constraints": {
    "must_feel": "親切、生活、有共鳴"
  }
}
```

## 變體 4：自動補全模式

📝 提示詞

```json
{
  "type": "4 格漫畫自動補全",
  "mode": "auto-fill",
  "rule": "用戶給主題，自動展開起承轉合 4 格 + 主角形象 + 對話",
  "constraints": {
    "must_feel": "可直接發社媒"
  }
}
```

## 避免事項

- 不要讓 4 格裏沒有反轉 / 沒有節奏
- 不要讓對話超過 12 字 / 格
- 不要讓畫風每格漂移
- 不要讓 4 格大小不等（除非刻意設計）
- 不要讓氣泡蓋臉
