# 大字主張 / Title-Safe 海報模板

本文件用於"以巨大文字本身作爲主視覺"的海報：

- 大字主張（Hyper-Energetic Japanese Promo）
- 字面優先海報（type-first poster）
- 標語 / 主張型 banner
- 極致排版練習
- 文字電影海報感

特徵：

- 字本身就是主體（字號超大佔畫面 50%+）
- 通常 3-7 個字 + 1-2 行小字
- 字體設計性強（手寫 / 復古印刷 / 噪點 / 塗鴉）
- 背景克制
- 強調"信息一眼能讀"

## 適用範圍

- 標語 / 主張海報
- 活動 / 大促主視覺
- 字面優先 banner

## 何時使用

- 用戶提到"大字 / 主張 / hero text / type-first / 文字海報"
- 用戶希望"一句話就是主圖"
- 用戶希望日式 / 極致排版風

不要使用：

- 帶產品的海報（用 `poster-and-campaigns/brand-poster.md`）
- editorial 雜誌封面（用 `poster-and-campaigns/editorial-cover.md`）
- 複雜敘事（用 `scenes-and-illustrations/concept-scene.md`）

## 缺失信息優先提問順序

1. 主標語（3-7 個字）
2. 副標 / tagline
3. 風格定位（日式昭和 / 現代極簡 / 復古印刷 / 塗鴉 / 噪點）
4. 主色 1-2 個
5. 是否含小字標註 / logo
6. 比例

## 主模板：日式高能量大字海報

📖 描述

整體一張圖，主體爲大號標語字本身 + 副標 + 小字 + 極少的圖形輔助。

📝 提示詞

```json
{
  "type": "日式高能量大字海報",
  "goal": "生成一張以巨大文字本身爲主視覺的高能量海報",
  "headline": {
    "text": "{argument name=\"headline\" default=\"全力疾走\"}",
    "language": "{argument name=\"language\" default=\"中文 / 日文混合\"}",
    "size": "佔畫面 60% 以上",
    "alignment": "{argument name=\"alignment\" default=\"居中\"}",
    "treatment": "{argument name=\"treatment\" default=\"疊加噪點 + 半色調網點 + 錯位描邊\"}"
  },
  "subheadline": {
    "text": "{argument name=\"subheadline\" default=\"GO ALL OUT 2026\"}",
    "size": "headline 1/4",
    "position": "{argument name=\"sub position\" default=\"headline 下方居中\"}"
  },
  "small_text": {
    "items": [
      "{argument name=\"small text 1\" default=\"4.24-5.24 SPECIAL CAMPAIGN\"}",
      "{argument name=\"small text 2\" default=\"X COLLECTIVE\"}"
    ],
    "position": "底部邊角"
  },
  "design": {
    "primary_color": "{argument name=\"primary color\" default=\"#FF2C2C 朱紅\"}",
    "background_color": "{argument name=\"background\" default=\"#F4EEDC 米黃\"}",
    "decoration": "{argument name=\"decoration\" default=\"4-5 個簡單幾何圖形（圓 / 三角 / 短粗箭頭），刻意留白\"}",
    "typography_family": "{argument name=\"font family\" default=\"現代日式 sans + 一個手寫 accent\"}"
  },
  "aspect_ratio": "{argument name=\"aspect ratio\" default=\"3:4\"}",
  "constraints": {
    "must_keep": [
      "標語字必須能一眼讀出",
      "字面佔畫面絕對主體",
      "顏色 ≤ 3",
      "字體 ≤ 2 家族"
    ],
    "avoid": [
      "標語字過小被裝飾淹沒",
      "裝飾圖形 > 6 個",
      "字體超過 3 種",
      "出現錯別字"
    ]
  }
}
```

### 參數策略

- 必問：標語、副標、風格、主色
- 可默認：layout、裝飾、字體
- 可隨機：裝飾具體形狀

### 自動補全策略

- 用戶給標語 + 風格關鍵詞時：自動決定字處理 + 配色 + 裝飾
- 默認日式高能量 = 噪點 + 半色調 + 錯位
- 默認 3:4

## 變體 1：極簡瑞士排版大字海報

📝 提示詞

```json
{
  "type": "極簡瑞士排版大字海報",
  "headline": {
    "treatment": "無裝飾 + 無襯線 + 嚴格柵格"
  },
  "design": {
    "primary_color": "純黑",
    "background_color": "純白",
    "decoration": "無 / 僅一條細橫線"
  },
  "constraints": {
    "must_feel": "瑞士平面 / Minimal"
  }
}
```

## 變體 2：復古印刷大字海報

📝 提示詞

```json
{
  "type": "復古印刷大字海報",
  "headline": {
    "treatment": "套印偏移 + 油墨暈染 + 微微髒感"
  },
  "design": {
    "primary_color": "復古紅",
    "background_color": "做舊米紙",
    "decoration": "復古印刷符號"
  },
  "constraints": {
    "must_feel": "1960s letterpress"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "大字海報自動補全",
  "mode": "auto-fill",
  "rule": "用戶給一句標語，自動決定風格 + 配色 + 字處理 + 裝飾",
  "constraints": {
    "must_feel": "可印刷 + 一眼能讀"
  }
}
```

## 避免事項

- 不要讓標語字小於畫面 40%
- 不要讓裝飾多到喧賓奪主
- 不要讓標語出現錯別字（最嚴重）
- 不要讓字體 > 2 家族
- 不要讓背景飽和度 > 主標語
- 不要讓小字塞超過 3 行
