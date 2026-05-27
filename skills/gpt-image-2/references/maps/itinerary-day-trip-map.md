# 一日遊 / 單日行程圖模板（左側 stops + 右側畫面地圖）

本文件用於生成"豎版 2:3 一日遊攻略海報，左半是行程卡片（5 站編號 + 時間 + 描述），右半是奇幻寫實風的山水地圖（同樣 5 個標號匹配）"。

典型用途：

- 景區 / 國家公園 / 古鎮 一日遊推薦海報
- 旅遊局 / 文旅 campaign 主視覺
- 公衆號 / 小紅書 長圖文封面
- 旅遊品牌 / 民宿 / OTA 一日 itinerary 物料
- 節假日打卡路線分享圖
- 遊記封面 / 行程紀念海報

特徵（與已有 maps 模板的區別）：

| 模板 | 性質 |
|---|---|
| `travel-route-map.md`（已有） | **多日行程**（D1-D7）跨城市路線圖，強調順序 + 時間 |
| `food-map.md`（已有） | **美食地圖**（多店鋪密度） |
| `illustrated-city-map.md`（已有） | **城市風貌地圖**（地標插畫） |
| `store-distribution-map.md`（已有） | **門店分布圖** |
| **本模板**（新增） | **單日行程 split 海報**：左行程卡 + 右奇幻寫實地圖，5-7 站點嚴格對齊 |

**核心區別**：本模板是"單日行程 + 復古旅行海報美學 + 雙欄嚴格對齊"的視覺範式，最適合景區一日遊、國家公園 itinerary、城市 city walk 單日方案。

## 適用範圍

- 單日 itinerary（5-7 站點）
- 景區 / 國家公園 / 山嶽 / 古鎮 一日遊
- 城市 city walk 單日方案
- 文旅局 / 旅遊品牌 campaign
- 復古插畫風 / 國家公園海報美學

## 何時使用

- 用戶明確說"一日遊 / 一天行程 / 單日 itinerary / 一日打卡"
- 想要復古插畫 + parchment + 雙欄 split 設計
- 站點數量適中（建議 5-7）
- 需要每站時間 + 描述 + 圖標

不要使用：

- 多日行程（D1-D7） → 用 `travel-route-map.md`
- 美食地圖（密度高、無強順序） → 用 `food-map.md`
- 城市地標插畫（不強調路線） → 用 `illustrated-city-map.md`
- 門店分布（商業化） → 用 `store-distribution-map.md`

## 缺失信息優先提問順序

1. 目的地（景區 / 城市 / 國家公園 名稱）
2. 標題文案（中文 / 日文 / 英文 …）
3. 站點數量（推薦 5；上限 7）
4. 每站「名稱 + 時間 + 一句中文描述 + 小插畫主體」
5. 整體路線主題（自然 / 歷史 / 美食 / 朝聖 / 攝影）
6. 風格調性（復古插畫 / 國家公園海報 / 水彩 / Art Nouveau / parchment）
7. 配色基調（暖 sepia + gold / 翠綠 + 金 / 藍白雪山）
8. 底部 stats（總距離 / 步數 / 海拔 / 預計時間）
9. 是否需要羅盤玫瑰 / 裝飾邊框 / 復古印章

## 主模板：5 站點豎版 split 一日遊海報（5-stop vertical split itinerary poster）

📖 描述

豎版 2:3 海報，左半是 parchment 行程卡（標題 + 5 個編號 station，每站帶圓形編號徽章 + 小插畫 + 名稱 + 時間括號 + 中文描述），右半是奇幻寫實風山水大畫面（金色蜿蜒路徑串聯 5 個 marker，每 marker 與左側編號 + 名稱嚴格匹配）。底部右下角帶羅盤玫瑰 + stats info box。整體 sepia + gold + jade 復古旅行海報美學。

📝 提示詞

```json
{
  "type": "vintage illustrated travel itinerary poster, vertical split layout",
  "goal": "生成一張左行程卡 / 右奇幻寫實地圖、5 站編號嚴格對齊的一日遊攻略海報，可作爲景區 / 國家公園 / 城市單日遊主視覺",
  "language": "{argument name=\"language\" default=\"Traditional Chinese\"}",
  "destination": {
    "name": "{argument name=\"destination name\" default=\"阿里山國家風景區\"}",
    "duration": "{argument name=\"duration\" default=\"1 day\"}",
    "theme": "{argument name=\"trip theme\" default=\"mountain forest railway and sunset cloud sea\"}"
  },
  "headline": {
    "main": "{argument name=\"headline text\" default=\"阿里山國家風景區一日遊\"}",
    "tagline": "{argument name=\"tagline\" default=\"一座高山，五個經典景點。難忘的奇幻旅程。\"}",
    "divider": "small decorative mountain divider beneath the tagline"
  },
  "style": {
    "overall": "{argument name=\"art style\" default=\"premium tourism poster, painterly digital illustration, nostalgic national-park brochure aesthetic\"}",
    "left_panel_look": "{argument name=\"left look\" default=\"parchment-textured itinerary card in warm beige with ornate gold Art Nouveau borders and dark brown typography\"}",
    "right_panel_look": "{argument name=\"right look\" default=\"dramatic painted fantasy-realism map scene of a mountain journey at sunrise and sunset tones\"}",
    "color_palette": "{argument name=\"color palette\" default=\"warm sepia, gold, jade green, deep brown, cream, soft sunset orange\"}",
    "atmosphere": "layered mountain ranges, mist-filled valleys, evergreen forests, golden-hour light, luminous cloud seas, romantic painterly atmosphere"
  },
  "layout": {
    "format": "vertical 2:3 poster, split into two equal vertical columns",
    "left_panel": {
      "type": "itinerary card",
      "header": ["headline title centered top", "tagline beneath", "decorative mountain divider"],
      "stop_count": 5,
      "stop_design": [
        "circular black-and-gold number badge",
        "small vignette illustration",
        "bold location name in headline font",
        "time in parentheses beside name",
        "1-2 sentence Chinese description"
      ],
      "border": "ornate gold Art Nouveau frame with corner flourishes"
    },
    "right_panel": {
      "type": "painted map scene",
      "background": "continuous mountain landscape at sunrise to sunset gradient",
      "path": "glowing golden winding path connecting all numbered markers in order",
      "marker_design": "black-and-gold marker plaques with number + same location name as left panel",
      "compass_rose": "decorative compass rose labeled N E S W at bottom-right",
      "stats_box": "dark green and gold information box at bottom-right corner"
    },
    "alignment_rule": "the 5 numbered stops on the left must match the 5 numbered markers on the right exactly in order, label, and visual identity"
  },
  "stops": {
    "count": 5,
    "items": [
      {
        "number": 1,
        "name": "{argument name=\"stop 1 name\" default=\"阿里山車站\"}",
        "time": "{argument name=\"stop 1 time\" default=\"8:00 AM\"}",
        "description": "{argument name=\"stop 1 desc\" default=\"開啟探索神木與森林的旅程。\"}",
        "left_vignette": "{argument name=\"stop 1 left vignette\" default=\"wooden mountain railway station\"}",
        "right_scene": "{argument name=\"stop 1 right scene\" default=\"a rustic alpine wooden station perched on a cliff among pine forests\"}"
      },
      {
        "number": 2,
        "name": "{argument name=\"stop 2 name\" default=\"阿里山森林鐵路\"}",
        "time": "{argument name=\"stop 2 time\" default=\"9:30 AM\"}",
        "description": "{argument name=\"stop 2 desc\" default=\"穿越森林，體驗百年林鐵風情。\"}",
        "left_vignette": "{argument name=\"stop 2 left vignette\" default=\"red-and-black steam train\"}",
        "right_scene": "{argument name=\"stop 2 right scene\" default=\"a small steam locomotive traveling on a curved mountain railway with smoke drifting upward\"}"
      },
      {
        "number": 3,
        "name": "{argument name=\"stop 3 name\" default=\"神木區棧道\"}",
        "time": "{argument name=\"stop 3 time\" default=\"11:30 AM\"}",
        "description": "{argument name=\"stop 3 desc\" default=\"漫步千年巨木下，感受森林靈氣。\"}",
        "left_vignette": "{argument name=\"stop 3 left vignette\" default=\"giant cedar trees and elevated wooden boardwalk\"}",
        "right_scene": "{argument name=\"stop 3 right scene\" default=\"towering ancient red cypress trees with a spiral and zigzag wooden walkway around the trunks\"}"
      },
      {
        "number": 4,
        "name": "{argument name=\"stop 4 name\" default=\"姊妹潭\"}",
        "time": "{argument name=\"stop 4 time\" default=\"1:30 PM\"}",
        "description": "{argument name=\"stop 4 desc\" default=\"欣賞靜謐湖光，聆聽自然樂章。\"}",
        "left_vignette": "{argument name=\"stop 4 left vignette\" default=\"tranquil forest lake and pavilion\"}",
        "right_scene": "{argument name=\"stop 4 right scene\" default=\"an emerald lake surrounded by dense forest with a small pavilion and arched bridge\"}"
      },
      {
        "number": 5,
        "name": "{argument name=\"stop 5 name\" default=\"小笠原山展望臺\"}",
        "time": "{argument name=\"stop 5 time\" default=\"4:00 PM\"}",
        "description": "{argument name=\"stop 5 desc\" default=\"觀賞壯闊山景與雲海，欣賞日落。\"}",
        "left_vignette": "{argument name=\"stop 5 left vignette\" default=\"wooden observation deck above clouds at sunset\"}",
        "right_scene": "{argument name=\"stop 5 right scene\" default=\"a lookout deck on a peak above a sea of clouds, facing a glowing sunset\"}"
      }
    ]
  },
  "footer_box": {
    "compass_rose": "decorative compass labeled N / E / S / W at bottom-right of map panel",
    "stats_box": {
      "design": "dark green and gold information box",
      "stats": [
        "{argument name=\"stat 1\" default=\"總距離 ~9公裏 / 5.6英裏\"}",
        "{argument name=\"stat 2\" default=\"預計時間 全天 - 14,500步\"}"
      ]
    }
  },
  "constraints": {
    "must_keep": [
      "5 個 stop 嚴格對齊：左側編號 / 名稱 / 順序 = 右側 marker",
      "豎版 2:3 split 布局，左右等寬",
      "左側 parchment + 金色 Art Nouveau 邊框 + 編號徽章",
      "右側蜿蜒金色路徑連接所有 marker（按編號順序）",
      "底部右下角帶羅盤 + stats box",
      "整體復古旅行海報美學（sepia + gold）",
      "標題語言、字體、配色保持統一",
      "每站名稱在左右兩欄完全一致"
    ],
    "avoid": [
      "左右編號不對齊 / 名稱漂移",
      "右側路徑不串聯所有 marker",
      "marker 數量與左側 stop 數量不一致",
      "破壞 2:3 split 布局（左右不等寬 / 錯位）",
      "在 parchment 卡上使用現代極簡風（破壞復古調性）",
      "把行程圖做成簡單地圖（必須有完整的山水寫實場景）",
      "缺少時間 / 描述文字",
      "把多日行程塞進一張圖（應使用 travel-route-map.md）"
    ]
  }
}
```

### 參數策略

- **必問**：destination name、headline、5 個 stop（name + time + desc + left vignette + right scene）
- **可默認**：style overall、left/right look、color palette、stats、tagline、language
- **可隨機**：tagline 文案、stats 數字（除非用戶給出實際數據）

### 自動補全策略

- 用戶給"想要 XX 一日遊" → 按熱門景點推斷 5 站點（早 → 晚時間鏈）
- 用戶沒給時間 → 自動按 8:00 / 9:30 / 11:30 / 1:30 PM / 4:00 PM 自然推進
- 不指定語言 → 默認與 destination 所在地的官方語言一致（臺灣 → 繁中，京都 → 日文，巴黎 → 法文，紐約 → 英文）
- 不指定 stats → 給合理估計（5km-15km / 8000-15000 步）

## 變體 1：7 站點 city walk 版（步行 + 美食 / 文化）

📝 提示詞

```json
{
  "type": "city walk one-day itinerary poster, vertical split layout",
  "stops_count": 7,
  "transport": "walking only",
  "stop_design": ["each stop adds estimated walking minutes between previous and current"],
  "right_scene_override": "vintage illustrated city map with streets, buildings, parks, and golden walking path threading through 7 markers",
  "use_case": "京都 city walk / 巴黎左岸 / 東京下町 一日散步路線"
}
```

### 何時選這個變體

- 城市內步行路線
- 站點偏多（6-7）
- 強調街道 / 巷弄 / 美食 / 咖啡 文化

## 變體 2：橫版 16:9 雙欄（適合官網 banner / PPT 主圖）

📝 提示詞

```json
{
  "type": "horizontal split itinerary banner, 16:9",
  "layout_override": {
    "format": "horizontal 16:9 wide",
    "split": "left 40% itinerary card, right 60% map scene",
    "stops_arrangement": "left card lists 5 stops in 1 vertical column"
  },
  "use_case": "景區官網首圖 / PPT 推介 / 視頻開場圖"
}
```

### 何時選這個變體

- 橫版承載（官網 banner / 演講首頁）
- 不需要豎版社交分享

## 變體 3：水彩日式風（櫻花 / 溫泉 / 神社）

📝 提示詞

```json
{
  "type": "Japanese watercolor one-day itinerary poster",
  "style_override": {
    "art_style": "delicate Japanese watercolor with soft sumi-e ink lines, sakura pastel palette",
    "color_palette": "soft pink, mint, indigo, cream, gold accents",
    "left_panel_look": "washi paper card with cherry blossom decorations and elegant kanji typography",
    "right_panel_look": "hazy mountain shrine and onsen valley painted in watercolor with cherry blossom drifting"
  },
  "use_case": "京都櫻花一日遊 / 箱根溫泉一日遊 / 鎌倉寺廟巡禮"
}
```

### 何時選這個變體

- 日本主題 / 櫻花 / 溫泉 / 神社
- 想要更柔美的水彩日式美學
- 不要復古西方 Art Nouveau 調性

## 避免事項

- ❌ 左右編號不對齊 / 名稱漂移
- ❌ 右側路徑不串聯所有 marker（必須按順序串成一條金色路徑）
- ❌ 破壞 2:3 split 布局（左右必須等寬）
- ❌ 把多日行程塞進一張圖（**用 `travel-route-map.md`**）
- ❌ 把美食地圖塞進來（**用 `food-map.md`**）
- ❌ 缺少時間 / 描述 / stats
- ❌ 在 parchment 卡上用現代極簡風
- ❌ 把右側畫成簡單線條地圖（必須是完整的山水寫實場景畫）
- ❌ 讓模型自由生成 stop（必須顯式列出每站 name + time + desc + 左 vignette + 右 scene）
- ❌ 站點數量超過 7（視覺密度過高）
