# 旅行路線圖模板

本文件用於生成「一條旅行路線 / 一份行程」 的可視化地圖，常見用途：

- 自駕 / 騎行 / 徒步路線推薦圖
- 多日行程攻略主圖
- 跨城市旅行攻略
- 自媒體旅遊內容封面
- 旅行品牌活動視覺

## 適用範圍

- 多日行程圖（D1-D7）
- 跨城市路線圖
- 單日 city walk 路線圖
- 戶外徒步 / 騎行路線圖
- 主題遊路線（櫻花、溫泉、寶可夢取景地等）

## 何時使用

- 用戶提到「路線圖 / 行程圖 / 攻略圖 / 自駕路線」
- 用戶希望視覺強調「順序 + 時間」而不是「點位密度」

不要使用：

- 用戶要美食地圖（用 `food-map.md`）
- 用戶要城市風貌地圖（用 `illustrated-city-map.md`）

## 缺失信息優先提問順序

1. 起點 / 終點 / 途經城市
2. 行程天數
3. 主題（美食、自然、文化、親子、藝術）
4. 出行方式（自駕 / 高鐵 / 飛機 / 徒步 / 騎行）
5. 風格：復古手繪 / 現代扁平 / Q 萌
6. 是否需要每日要點列表

## 主模板：多日行程旅行路線圖

📖 描述

地圖上以彩色實線 / 虛線連接多個城市或景點，按編號 D1-Dn 標註，每個站點配小插畫。底部或側欄列出每天行程要點。

📝 提示詞

```json
{
  "type": "旅行路線圖",
  "goal": "生成一張多日行程的可視化路線圖，作爲旅遊攻略 / 節日 campaign 視覺首圖",
  "style": "{argument name=\"art style\" default=\"復古手繪 + 水彩 + 米色羊皮紙底\"}",
  "title_section": {
    "title_text": "{argument name=\"title\" default=\"日本關西 7 日深度遊\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"D1-D7 美食 + 文化 + 自然路線\"}"
  },
  "route": {
    "transport": "{argument name=\"transport\" default=\"高鐵 + 步行\"}",
    "stops": [
      "{argument name=\"stop 1\" default=\"D1 大阪：道頓堀夜景\"}",
      "{argument name=\"stop 2\" default=\"D2 京都：清水寺 + 祇園\"}",
      "{argument name=\"stop 3\" default=\"D3 京都：嵐山 + 竹林\"}",
      "{argument name=\"stop 4\" default=\"D4 奈良：東大寺 + 餵鹿\"}",
      "{argument name=\"stop 5\" default=\"D5 神戶：北野異人館\"}",
      "{argument name=\"stop 6\" default=\"D6 大阪：環球影城\"}",
      "{argument name=\"stop 7\" default=\"D7 大阪：返程購物\"}"
    ],
    "line_style": "{argument name=\"route line style\" default=\"紅色虛線 + 圓點連接\"}"
  },
  "stop_illustrations": "每個站點配一個簡潔手繪插畫，比如鳥居、寺廟、鹿、溫泉、塔",
  "side_panel": {
    "enabled": "{argument name=\"side panel enabled\" default=\"true\"}",
    "position": "{argument name=\"side panel position\" default=\"右側或底部\"}",
    "content_type": "每日要點列表，包含 D1-Dn，每天 2-3 條 bullet"
  },
  "legend": {
    "items": [
      "紅色虛線：高鐵路線",
      "藍色實線：步行路線",
      "金色星：必去景點",
      "粉色花：網紅打卡點"
    ]
  },
  "extras": ["復古羅盤", "小段免責聲明", "細微花紋邊框"],
  "constraints": {
    "must_keep": [
      "路線順序與編號一致",
      "每個站點都有插畫 + 標籤",
      "側欄每日要點要簡短，不超過 3 行"
    ],
    "avoid": [
      "城市位置出現明顯錯位（要符合大致地理方位）",
      "標籤遮擋路線",
      "顏色過度飽和",
      "線型多於 2 種"
    ]
  }
}
```

### 參數策略

- 必問：起點、終點、天數、主題
- 可默認：風格、羅盤、圖例
- 可隨機：每日 bullet 中的次要細節

### 自動補全策略

- 用戶只說目的地國家時：自動選 5-8 個經典城市
- 自動選風格匹配的吉祥物
- 自動安排合理路線順序（不出現回頭路）
- 行程天數默認 5-7 天

## 變體 1：單日 city walk 路線

📝 提示詞

```json
{
  "type": "單日 city walk 路線圖",
  "city": "{argument name=\"city\" default=\"上海\"}",
  "duration": "{argument name=\"duration\" default=\"半日\"}",
  "title_text": "{argument name=\"title\" default=\"上海周末 City Walk · 武康路一帶\"}",
  "stops": [
    "{argument name=\"stop 1\" default=\"安福路\"}",
    "{argument name=\"stop 2\" default=\"武康路\"}",
    "{argument name=\"stop 3\" default=\"五原路\"}",
    "{argument name=\"stop 4\" default=\"烏魯木齊中路\"}"
  ],
  "side_panel": {
    "enabled": true,
    "content_type": "每個點附 1 句推薦理由 + 推薦時段"
  },
  "constraints": {
    "must_feel": "悠閒、出片、生活感"
  }
}
```

## 變體 2：戶外路線（徒步 / 騎行）

📝 提示詞

```json
{
  "type": "戶外徒步 / 騎行路線圖",
  "title_text": "{argument name=\"title\" default=\"川西大環線 7 日騎行\"}",
  "transport": "{argument name=\"transport\" default=\"騎行\"}",
  "stops_count": "{argument name=\"stops count\" default=\"7\"}",
  "elevation_chart": {
    "enabled": "{argument name=\"elevation chart\" default=\"true\"}",
    "position": "底部"
  },
  "legend": {
    "items": [
      "實線：主路線",
      "虛線：備選路線",
      "三角：露營點",
      "心形：拍照點"
    ]
  },
  "constraints": {
    "must_feel": "硬核、戶外感、專業"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "旅行路線圖自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶只說目的地與天數，自動安排經典路線、風格、側欄要點",
  "constraints": {
    "must_feel": "可直接發布的攻略首圖"
  }
}
```

## 避免事項

- 不要讓路線長度超過畫面邊界，導致迴繞重疊
- 不要讓站點編號斷裂（必須 D1 → Dn 連續）
- 不要讓側欄文字密度高過地圖本身
- 不要混合多種交通線型（實線 + 虛線就夠，不要 5 種）
- 不要畫成真實精確比例尺，會讓插畫風塌掉
