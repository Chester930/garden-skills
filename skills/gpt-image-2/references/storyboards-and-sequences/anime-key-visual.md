# 動漫 Key Visual 單圖模板

本文件用於"一張圖代表整部作品"的動漫主視覺：

- 動漫 KV / 主視覺
- 輕小說封面
- 同人誌封面
- 動漫海報
- 遊戲卡牌主圖（不含 UI）

特徵：

- 一張圖聚集多個角色或一個角色 + 強氛圍
- 戲劇性構圖與燈光
- anime / 半寫實風格
- 通常豎版 3:4 / 4:5
- 留 title 位

## 適用範圍

- 動漫主視覺
- 輕小說 / 同人誌封面
- IP 海報
- 遊戲卡面

## 何時使用

- 用戶提到"動漫 KV / anime 主視覺 / 輕小說封面 / IP 海報"
- 用戶希望一張圖就能講完世界觀
- 用戶希望 anime 風格的高完成度大圖

不要使用：

- 多分鏡敘事（用 `manga-spread-page.md`）
- 4 格段子（用 `four-panel-comic.md`）
- 真實人物大片（用 `portraits-and-characters/founder-portrait.md`）
- 電影級概念大場景（用 `scenes-and-illustrations/concept-scene.md`）

## 缺失信息優先提問順序

1. 作品 / 主題
2. 主角形象（數量 + 關係）
3. 世界觀 / 時代 / 氛圍
4. 風格：現代 anime / 90s anime / 半寫實
5. 是否需要 title 位
6. 比例

## 主模板：動漫 Key Visual 單圖

📖 描述

整體一張大圖，包含主角 + 場景氛圍 + 標題位，強敘事感。

📝 提示詞

```json
{
  "type": "動漫 Key Visual",
  "goal": "生成一張可作爲動漫 / 輕小說 / IP 主視覺的單圖",
  "ip": {
    "title": "{argument name=\"ip title\" default=\"霜白幻想曲\"}",
    "tagline": "{argument name=\"tagline\" default=\"這場雪，下了一千年\"}"
  },
  "characters": {
    "count": "{argument name=\"character count\" default=\"3\"}",
    "items": [
      "{argument name=\"character 1\" default=\"少女主角，銀白長發，藍瞳，雪白連衣裙\"}",
      "{argument name=\"character 2\" default=\"劍士同伴，黑髮，戰甲\"}",
      "{argument name=\"character 3\" default=\"小動物夥伴，雪白狐狸\"}"
    ],
    "composition_relationship": "{argument name=\"composition\" default=\"主角居中，同伴左右護衛，動物在腳邊\"}"
  },
  "world": {
    "scene": "{argument name=\"scene\" default=\"冰封城市，遠景城堡，飄落雪花\"}",
    "lighting": "{argument name=\"lighting\" default=\"冷藍主光 + 暖金邊緣光\"}",
    "atmosphere": "{argument name=\"atmosphere\" default=\"史詩、孤獨、堅定\"}"
  },
  "style": {
    "art_style": "{argument name=\"art style\" default=\"現代 anime + 半寫實 + 厚塗背景\"}",
    "color_palette": "{argument name=\"color palette\" default=\"冰藍 + 月白 + 暖金\"}"
  },
  "title_block": {
    "enabled": "{argument name=\"title block enabled\" default=\"true\"}",
    "main_title": "{argument name=\"main title\" default=\"霜白幻想曲\"}",
    "sub_title": "{argument name=\"sub title\" default=\"FROZEN FANTASIA\"}",
    "position": "{argument name=\"title position\" default=\"畫面頂部居中\"}"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4\"}",
  "constraints": {
    "must_keep": [
      "主角作爲絕對視覺中心",
      "燈光方向統一",
      "色板嚴格統一",
      "標題與主角不重疊"
    ],
    "avoid": [
      "角色塞太多導致臉部小到不可識別",
      "背景過亮淹沒角色",
      "色板出現額外鮮豔色",
      "標題字體過多種類"
    ]
  }
}
```

### 參數策略

- 必問：作品名、主角、世界觀
- 可默認：風格、配色、標題位
- 可隨機：背景細節

### 自動補全策略

- 主角數默認 1-3
- 世界觀 → 自動決定配色（冷世界 = 藍白 / 末世 = 焦土棕 / 校園 = 暖橙）
- 默認豎版 3:4

## 變體 1：單角色 + 極強氛圍 KV

📝 提示詞

```json
{
  "type": "單角色 + 強氛圍 KV",
  "characters": {
    "count": 1,
    "items": ["{argument name=\"character\" default=\"長發少女，逆光\"}"]
  },
  "world": {
    "atmosphere": "孤獨 + 神祕"
  },
  "constraints": {
    "must_feel": "電影海報感"
  }
}
```

## 變體 2：羣像 KV（5+ 角色）

📝 提示詞

```json
{
  "type": "羣像 KV",
  "characters": {
    "count": 6,
    "composition_relationship": "金字塔構圖：主角頂 + 配角圍繞"
  },
  "constraints": {
    "must_feel": "團隊感、史詩、可作爲動畫首播主圖"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "動漫 KV 自動補全",
  "mode": "auto-fill",
  "rule": "用戶給一句作品概念，自動決定主角、構圖、世界觀、標題",
  "constraints": {
    "must_feel": "可直接首發"
  }
}
```

## 避免事項

- 不要讓角色數量超過 7（臉部識別會崩）
- 不要讓燈光方向不統一
- 不要讓標題蓋在主角臉上
- 不要使用 > 4 種主色
- 不要讓背景細節超過角色細節量
