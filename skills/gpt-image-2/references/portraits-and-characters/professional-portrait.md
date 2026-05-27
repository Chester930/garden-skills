# 職業肖像模板

本文件用於生成「職業級 / 商務級 / LinkedIn 級」 肖像視覺：

- 職業頭像
- LinkedIn 主圖
- 公司官網團隊頁
- 媒體專訪配圖
- 個人品牌主圖

特徵：

- 乾淨背景
- 專業燈光
- 自然表情
- 強調可信感
- 高級感來自「克制」而非「華麗」

## 適用範圍

- 商務頭像
- 公司官網團隊照
- LinkedIn / 公開演講使用照
- 媒體專訪配圖

## 何時使用

- 用戶提到「職業頭像 / LinkedIn / 商務照 / 公司官網照」
- 用戶希望視覺看起來可信、專業、克制

不要使用：

- 創始人媒體大片（用 `founder-portrait.md`）
- 虛擬主播 / VTuber（用 `virtual-host.md`）
- 角色三視圖（用 `character-sheet.md`）

## 缺失信息優先提問順序

1. 性別 / 年齡段 / 種族
2. 行業 / 職業（影響穿着與背景）
3. 風格：經典商務 / 現代休閒 / 創意行業
4. 構圖：胸像 / 半身
5. 背景：純色 / 辦公環境 / 自然光
6. 表情：微笑 / 自然 / 嚴謹

## 主模板：現代商務職業肖像

📖 描述

整體一張職業肖像，主體爲人物胸像，乾淨背景，自然光或柔和影棚光，自然表情，可直接用作 LinkedIn 主圖。

📝 提示詞

```json
{
  "type": "現代商務職業肖像",
  "goal": "生成一張可直接作爲 LinkedIn 主圖 / 公司官網團隊頁 / 媒體專訪配圖的職業肖像",
  "subject": {
    "gender": "{argument name=\"gender\" default=\"東亞男性\"}",
    "age_range": "{argument name=\"age range\" default=\"30-40 歲\"}",
    "appearance": "{argument name=\"appearance\" default=\"短髮乾淨，戴細框眼鏡\"}",
    "outfit": "{argument name=\"outfit\" default=\"深藍色西裝外套 + 淺灰色襯衫，無領帶\"}"
  },
  "expression": {
    "mood": "{argument name=\"mood\" default=\"自然微笑，眼神平穩\"}",
    "gaze": "{argument name=\"gaze\" default=\"望向鏡頭\"}"
  },
  "composition": {
    "shot": "{argument name=\"shot\" default=\"胸像\"}",
    "framing": "{argument name=\"framing\" default=\"人物居中略偏左，留 1/3 給背景\"}"
  },
  "background": {
    "type": "{argument name=\"background\" default=\"淺灰漸變 + 微微虛化辦公環境\"}",
    "depth_of_field": "{argument name=\"dof\" default=\"淺景深\"}"
  },
  "lighting": {
    "key_light": "{argument name=\"key light\" default=\"45° 柔光\"}",
    "fill_light": "{argument name=\"fill light\" default=\"右側弱補光\"}",
    "rim_light": "{argument name=\"rim light\" default=\"無明顯輪廓光\"}",
    "color_temp": "{argument name=\"color temp\" default=\"自然偏暖\"}"
  },
  "style": {
    "rendering": "高分辨率人像攝影 + 自然膚質",
    "post_processing": "克制磨皮，保留毛孔與自然紋理"
  },
  "constraints": {
    "must_keep": [
      "人物自然不僵硬",
      "眼神聚焦",
      "膚質真實不過度磨皮",
      "穿着與行業匹配"
    ],
    "avoid": [
      "誇張特效燈光",
      "濾鏡假皮膚",
      "出現品牌 logo",
      "背景元素喧賓奪主"
    ]
  }
}
```

### 參數策略

- 必問：性別、年齡、行業、構圖
- 可默認：背景、燈光、後期
- 可隨機：眼鏡樣式、配飾

### 自動補全策略

- 行業自動決定穿着（金融 = 西裝；科技 = 休閒襯衫；創意 = 黑 T + 外套）
- 表情默認「自然微笑」
- 背景默認「淺灰漸變 + 虛化環境」

## 變體 1：戶外自然光肖像

📝 提示詞

```json
{
  "type": "戶外自然光職業肖像",
  "background": {
    "type": "{argument name=\"outdoor scene\" default=\"綠色公園虛化背景\"}"
  },
  "lighting": {
    "key_light": "自然順光",
    "color_temp": "暖金時段"
  },
  "constraints": {
    "must_feel": "自然、親切、生活感"
  }
}
```

## 變體 2：純色背景棚拍

📝 提示詞

```json
{
  "type": "棚拍職業肖像",
  "background": {
    "type": "{argument name=\"backdrop\" default=\"中性灰背景紙\"}",
    "depth_of_field": "無"
  },
  "lighting": {
    "key_light": "蝴蝶光",
    "fill_light": "對稱柔光"
  },
  "constraints": {
    "must_feel": "雜誌大片級"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "職業肖像自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給行業 + 性別 + 年齡，自動決定穿着 / 燈光 / 背景",
  "constraints": {
    "must_feel": "可直接換 LinkedIn 主圖"
  }
}
```

## 避免事項

- 不要過度磨皮，皮膚要保留質感
- 不要用過度飽和濾鏡
- 不要讓背景出現可識別第三方 logo
- 不要讓人物穿着與行業明顯不匹配
- 不要使用誇張戲劇光（除非用戶明確要求）
