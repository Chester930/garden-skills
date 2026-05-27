# 治癒系場景插畫模板

本文件用於生成「柔光、溫暖、治癒」的場景插畫：

- 治癒系日常場景
- 季節氛圍插畫
- 卡片 / 周邊封面圖
- 公衆號 / 小紅書首圖
- 品牌溫柔向主圖

特徵：

- 柔和配色
- 自然光感
- 留白克制
- 角色 + 場景 + 微小道具構成
- 不強調戲劇衝突

## 適用範圍

- 治癒系日常場景
- 季節氛圍圖
- 公衆號首圖
- 周邊卡片

## 何時使用

- 用戶提到「治癒系 / 溫柔 / 柔光 / 日常 / Studio Ghibli 風」
- 用戶希望視覺讓人想停下來看一眼

不要使用：

- 概念 / 史詩大片場景（用 `concept-scene.md`）
- 童書插畫（用 `picture-book-scene.md`）
- 極簡留白氛圍（用 `minimalist-mood-scene.md`）

## 缺失信息優先提問順序

1. 場景（咖啡館 / 房間 / 窗邊 / 海邊 / 街角）
2. 季節 / 時間
3. 是否有人物
4. 道具（書 / 貓 / 茶 / 植物）
5. 風格：手繪 anime / 水彩 / 數字插畫
6. 配色基調

## 主模板：治癒系日常場景

📖 描述

整體一張柔光場景插畫，主體是日常環境，可有一位人物或一隻動物，配色溫暖自然。

📝 提示詞

```json
{
  "type": "治癒系日常場景插畫",
  "goal": "生成一張讓人想停下來看一眼的治癒系日常場景插畫",
  "scene": {
    "location": "{argument name=\"location\" default=\"窗邊的小書桌\"}",
    "season": "{argument name=\"season\" default=\"初夏\"}",
    "time_of_day": "{argument name=\"time of day\" default=\"清晨\"}",
    "weather_or_mood": "{argument name=\"mood\" default=\"晴朗、微風、剛醒來的感覺\"}"
  },
  "subject": {
    "human_or_animal": "{argument name=\"main subject\" default=\"短髮少女背影，託腮看窗外\"}",
    "scale": "{argument name=\"subject scale\" default=\"佔畫面 1/3\"}"
  },
  "props": {
    "items": [
      "{argument name=\"prop 1\" default=\"打開的書 + 半杯熱茶\"}",
      "{argument name=\"prop 2\" default=\"窗臺上的小盆栽\"}",
      "{argument name=\"prop 3\" default=\"摺疊的米色毛毯\"}"
    ]
  },
  "lighting": {
    "type": "{argument name=\"light type\" default=\"自然光\"}",
    "direction": "{argument name=\"light direction\" default=\"側光，從窗戶灑入\"}",
    "intensity": "{argument name=\"light intensity\" default=\"柔和\"}",
    "color_temp": "{argument name=\"color temp\" default=\"暖金色\"}"
  },
  "style": {
    "art_style": "{argument name=\"art style\" default=\"手繪 anime + 水彩柔光\"}",
    "rendering": "顆粒感 + 柔光 + 低飽和度",
    "color_palette": "{argument name=\"color palette\" default=\"米白 + 暖橙 + 綠\"}"
  },
  "constraints": {
    "must_keep": [
      "整體氛圍溫暖治癒",
      "光線方向統一",
      "色調克制不浮誇",
      "道具與場景同一氛圍"
    ],
    "avoid": [
      "出現戲劇化情緒",
      "色彩過度飽和",
      "場景元素過密",
      "出現品牌廣告"
    ]
  }
}
```

### 參數策略

- 必問：場景、季節、主體
- 可默認：風格、燈光、配色
- 可隨機：道具具體形態

### 自動補全策略

- 季節自動決定配色（春 = 櫻粉 / 夏 = 藍白 / 秋 = 暖棕 / 冬 = 雪白）
- 主體默認背影或局部，避免臉部搶戲
- 風格默認手繪 anime + 水彩

## 變體 1：寵物治癒場景

📝 提示詞

```json
{
  "type": "寵物治癒場景插畫",
  "subject": {
    "human_or_animal": "{argument name=\"animal\" default=\"窩在毛毯裏的橘貓\"}"
  },
  "constraints": {
    "must_feel": "毛茸茸、安心、想撫摸"
  }
}
```

## 變體 2：戶外治癒場景

📝 提示詞

```json
{
  "type": "戶外治癒場景插畫",
  "scene": {
    "location": "{argument name=\"outdoor\" default=\"湖邊的木棧道\"}",
    "weather_or_mood": "黃昏 + 微風"
  },
  "subject": {
    "human_or_animal": "一對人物背影，並肩走"
  },
  "constraints": {
    "must_feel": "電影感、留白、慢節奏"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "治癒系場景自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給季節 / 時間 / 一句心情，自動決定場景、主體、道具、配色",
  "constraints": {
    "must_feel": "可作爲公衆號 / 小紅書首圖"
  }
}
```

## 避免事項

- 不要讓人物正臉搶戲
- 不要讓光源方向不統一
- 不要讓色彩飽和到「甜膩」
- 不要塞太多道具
- 不要出現可識別 logo
