# 創始人 / 媒體大片肖像模板

本文件用於生成「創始人 / 高管 / 行業人物」級別的媒體大片肖像：

- 財經雜誌專訪配圖
- 創業媒體封面
- 創始人主圖（融資 / 上市新聞）
- 行業人物特寫
- 個人品牌大片

特徵：

- 戲劇性燈光
- 強烈的「人物氣質」
- 高對比 / 高敘事感
- 通常豎版 3:4 / 4:5
- 留位置給標題或引言

## 適用範圍

- 財經 / 創業雜誌專訪
- 公司官網創始人大片
- 行業人物特寫
- 個人品牌主圖

## 何時使用

- 用戶提到「創始人大片 / 雜誌專訪 / 高管照 / 媒體大片 / 人物氣質照」
- 用戶希望視覺高敘事性、有「人物即故事」感

不要使用：

- 普通商務頭像（用 `professional-portrait.md`）
- 虛擬主播（用 `virtual-host.md`）
- 角色設定（用 `character-sheet.md`）

## 缺失信息優先提問順序

1. 人物身份 / 行業
2. 性別 / 年齡
3. 風格：黑白文學 / 工業感 / 創新派 / 古典財經
4. 構圖：環境人像 / 特寫 / 半身
5. 配色 / 燈光基調
6. 是否需要預留標題位

## 主模板：媒體大片創始人肖像

📖 描述

整體豎版肖像，主體爲人物半身或環境人像，戲劇性側光，強敘事，預留標題位。

📝 提示詞

```json
{
  "type": "媒體大片級創始人肖像",
  "goal": "生成一張能直接作爲財經雜誌 / 創業媒體專訪配圖 / 公司官網創始人主圖的媒體大片肖像",
  "subject": {
    "identity": "{argument name=\"identity\" default=\"AI 公司創始人 CEO\"}",
    "gender": "{argument name=\"gender\" default=\"東亞男性\"}",
    "age_range": "{argument name=\"age range\" default=\"35-45 歲\"}",
    "appearance": "{argument name=\"appearance\" default=\"頭髮整齊，神情沉穩\"}",
    "outfit": "{argument name=\"outfit\" default=\"深色高領針織 + 長款外套\"}"
  },
  "composition": {
    "shot": "{argument name=\"shot\" default=\"環境人像 + 半身\"}",
    "framing": "{argument name=\"framing\" default=\"人物在畫面 1/3 處，背景留出 2/3 給環境\"}",
    "title_safe_area": "{argument name=\"title safe area\" default=\"畫面右上預留標題位\"}"
  },
  "environment": {
    "location": "{argument name=\"location\" default=\"現代辦公空間，落地窗 + 極簡家具\"}",
    "depth": "{argument name=\"depth\" default=\"淺景深，背景虛化\"}"
  },
  "lighting": {
    "style": "{argument name=\"lighting style\" default=\"戲劇性側光\"}",
    "key_light": "{argument name=\"key light\" default=\"窗戶大面積自然光\"}",
    "fill_light": "{argument name=\"fill light\" default=\"暗部留細節\"}",
    "color_temp": "{argument name=\"color temp\" default=\"略冷\"}"
  },
  "expression": {
    "mood": "{argument name=\"mood\" default=\"沉靜、有思考感\"}",
    "gaze": "{argument name=\"gaze\" default=\"略偏離鏡頭，望向遠處\"}"
  },
  "style": {
    "rendering": "高分辨率人像攝影 + 雜誌後期",
    "tone": "微微暗調 + 高對比 + 略顆粒",
    "color_palette": "{argument name=\"color palette\" default=\"冷灰 + 墨黑 + 暖膚色\"}"
  },
  "constraints": {
    "must_keep": [
      "人物表情有故事感",
      "燈光方向統一",
      "構圖留出標題位",
      "整體克制不娛樂化"
    ],
    "avoid": [
      "出現 LOGO 與品牌元素",
      "誇張戲劇光",
      "飽和濾鏡",
      "環境喧賓奪主"
    ]
  }
}
```

### 參數策略

- 必問：身份、性別、年齡、環境
- 可默認：色調、燈光、構圖
- 可隨機：環境家具細節

### 自動補全策略

- 行業自動選環境（金融 = 大理石大廳；科技 = 極簡辦公室；製造 = 工廠車間；創意 = 工作室）
- 燈光默認窗光 + 戲劇側光
- 留標題位默認右上

## 變體 1：黑白文學風創始人肖像

📝 提示詞

```json
{
  "type": "黑白文學風創始人肖像",
  "style": {
    "rendering": "高對比黑白 + 顆粒",
    "color_palette": "純黑白"
  },
  "lighting": {
    "style": "硬光 + 強陰影"
  },
  "constraints": {
    "must_feel": "時間感、故事感、文學性"
  }
}
```

## 變體 2：工業 / 工廠背景創始人

📝 提示詞

```json
{
  "type": "工業背景創始人肖像",
  "environment": {
    "location": "{argument name=\"factory\" default=\"產線背後，機械臂虛化\"}"
  },
  "lighting": {
    "style": "工業冷光 + 局部暖光"
  },
  "constraints": {
    "must_feel": "硬核、有製造感、可信賴"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "創始人大片自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給行業 + 人物名 / 性別，自動決定環境、風格、燈光",
  "constraints": {
    "must_feel": "可上財經雜誌封面"
  }
}
```

## 避免事項

- 不要讓人物正臉正中央（媒體大片不喜歡死板構圖）
- 不要讓背景出現真實品牌 logo
- 不要使用過度修圖（皮膚要保留質感）
- 不要讓燈光戲劇到「妝面感強」
- 不要忽略標題留白
