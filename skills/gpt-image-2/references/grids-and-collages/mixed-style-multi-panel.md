# 多風格混合多面板拼貼模板

本文件用於"一張圖裏多個 panel，每個 panel 風格不同但主題統一"：

- 5 格 / 6 格 mixed style 拼貼
- 跨風格 IP 視覺海報
- "同一主體的不同時空"拼貼
- "一句話演化史"拼貼
- 自媒體趣味海報

特徵：

- 多個不同風格 panel 共存
- 每個 panel 風格完全不同（寫實 + anime + 像素 + 油畫）
- 主題或主體保持一致
- 視覺衝擊強、有趣味
- 通常帶 panel 內的小標籤

## 適用範圍

- 跨風格藝術拼貼
- 一個角色 / 主題的多種風格演繹
- 病毒傳播海報
- IP 歷史 / 時間線拼貼

## 何時使用

- 用戶提到"多風格 / 跨風格 / 風格混合 / 多種畫風"
- 用戶希望視覺衝擊 + 有趣
- 用戶希望同一主題不同風格演繹

不要使用：

- 風格統一的 banner 套裝（用 `banner-grid-2x2.md`）
- 風格統一的 lookbook（用 `lookbook-grid.md`）
- 風格統一的 4 格漫畫（用 `storyboards-and-sequences/four-panel-comic.md`）

## 缺失信息優先提問順序

1. 主題 / 主體（一定要明確，因爲它是各風格的錨點）
2. 格子數（4 / 5 / 6）
3. 每格風格（寫實 / anime / 油畫 / 像素 / 3D / 蠟筆 / ...）
4. 是否帶風格標籤
5. 比例

## 主模板：5 格混合風格拼貼（同一主體不同風格）

📖 描述

整體一張圖，5 格不同形狀，每格風格完全不同，但主體一致，每格底部有小風格標籤。

📝 提示詞

```json
{
  "type": "5 格混合風格拼貼",
  "goal": "生成一張多風格拼貼圖，主體一致，5 格分別用不同畫風演繹",
  "subject": {
    "description": "{argument name=\"subject description\" default=\"一隻戴墨鏡的橘貓\"}",
    "consistency_rule": "5 格中是同一主體，僅畫風變化"
  },
  "layout": {
    "format": "{argument name=\"layout\" default=\"中央大格 + 四角小格\"}",
    "panel_count": 5,
    "label_position": "每格底部",
    "label_design": "黑色細字 + 白底"
  },
  "panels": [
    {
      "position": "center",
      "style": "{argument name=\"panel 1 style\" default=\"高分辨率寫實攝影\"}",
      "label": "{argument name=\"panel 1 label\" default=\"PHOTO\"}"
    },
    {
      "position": "top-left",
      "style": "{argument name=\"panel 2 style\" default=\"日式 anime 厚塗\"}",
      "label": "{argument name=\"panel 2 label\" default=\"ANIME\"}"
    },
    {
      "position": "top-right",
      "style": "{argument name=\"panel 3 style\" default=\"古典油畫 + 金色畫框感\"}",
      "label": "{argument name=\"panel 3 label\" default=\"OIL\"}"
    },
    {
      "position": "bottom-left",
      "style": "{argument name=\"panel 4 style\" default=\"16-bit 像素\"}",
      "label": "{argument name=\"panel 4 label\" default=\"PIXEL\"}"
    },
    {
      "position": "bottom-right",
      "style": "{argument name=\"panel 5 style\" default=\"Q 萌 3D Pixar 風\"}",
      "label": "{argument name=\"panel 5 label\" default=\"3D\"}"
    }
  ],
  "global_constraints": {
    "background": "{argument name=\"background\" default=\"米色紙紋\"}",
    "spacing": "12px 白色分隔"
  },
  "constraints": {
    "must_keep": [
      "5 格主體高度一致（一眼能看出是同一隻 / 同一人）",
      "每格風格差異明顯",
      "標籤字體統一",
      "整體 layout 平衡"
    ],
    "avoid": [
      "主體在不同格裏像不同物種 / 不同人",
      "標籤遮擋主體",
      "背景不同導致拼貼破碎",
      "格子大小毫無規律"
    ]
  }
}
```

### 參數策略

- 必問：主體、5 個風格
- 可默認：layout、標籤、背景
- 可隨機：每格細節

### 自動補全策略

- 用戶給主體時：自動選 5 個反差大的風格（寫實 + anime + 油畫 + 像素 + 3D 是經典組合）
- 默認中央大格 + 四角小格
- 默認每格底部小標籤

## 變體 1：6 格"演化史"拼貼

📝 提示詞

```json
{
  "type": "6 格演化史拼貼",
  "subject": {
    "description": "{argument name=\"subject\" default=\"一輛汽車\"}",
    "common_theme": "同一主題的 6 個時代演化"
  },
  "panels": [
    {"label": "1900s", "style": "復古黑白膠片"},
    {"label": "1950s", "style": "復古彩色海報"},
    {"label": "1980s", "style": "新蒸汽波"},
    {"label": "2000s", "style": "數字攝影"},
    {"label": "2020s", "style": "現代寫實"},
    {"label": "2050s", "style": "賽博朋克概念圖"}
  ],
  "constraints": {
    "must_feel": "時間感 + 演化感"
  }
}
```

## 變體 2：4 格"如果他生在不同國家"

📝 提示詞

```json
{
  "type": "4 格異國想象拼貼",
  "subject": {
    "description": "{argument name=\"subject\" default=\"一個咖啡店老闆\"}",
    "common_theme": "同一身份在不同國家文化裏的視覺表達"
  },
  "panels": [
    {"label": "JAPAN", "style": "日式喫茶店 + 木質溫馨"},
    {"label": "ITALY", "style": "意式街角咖啡 + 拼花地板"},
    {"label": "ETHIOPIA", "style": "傳統咖啡儀式 + 紅色織物"},
    {"label": "USA", "style": "工業風咖啡店 + 黑金屬"}
  ],
  "constraints": {
    "must_feel": "文化感 + 同一身份"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "混合風格拼貼自動補全",
  "mode": "auto-fill",
  "rule": "用戶給主體 + 拼貼主軸（風格 / 時代 / 文化），自動決定 5 個 panel",
  "constraints": {
    "must_feel": "病毒級有趣"
  }
}
```

## 避免事項

- 不要讓 panel > 6（視覺破碎）
- 不要讓主體在不同格裏失去識別度
- 不要讓風格反差不明顯（看起來像同一格重複）
- 不要讓背景顏色衝突（統一一個底色錨點）
- 不要塞 > 1 行標籤
