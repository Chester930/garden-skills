# 教學示意 Slide 模板

本文件用於生成「一頁講清楚一個概念 / 一種機制 / 一個流程」的教學型視覺頁：

- 課程內頁
- 教科書示意圖
- 在線課程截圖
- 工程師教學圖
- 培訓手冊插圖

特徵：

- 中央主圖 + 步驟分解
- 文字克制
- 顏色溫和
- 強調可讀性
- 適合反覆閱讀

## 適用範圍

- 概念示意圖
- 機制 / 流程圖
- 工程原理圖
- 教科書內頁插圖

## 何時使用

- 用戶提到「教學 / 課程 / 教科書 / 概念圖 / 機製圖 / 原理圖」
- 用戶希望講清楚「X 是怎麼工作的」
- 用戶面向學生 / 學習者，而非投資人 / 政府

不要使用：

- 用戶要的是講解課件（用 `dense-explainer-slides.md`）
- 用戶要的是政策風（用 `policy-style-slide.md`）
- 用戶要的是商業報告（用 `visual-report-page.md`）

## 缺失信息優先提問順序

1. 概念 / 機制名稱
2. 教學層級（小學 / 中學 / 大學 / 行業培訓）
3. 步驟數（3-7 步）
4. 是否需要中央主圖
5. 風格：手繪風 / 卡通風 / 學院派 / 工程圖風
6. 配色

## 主模板：步驟分解教學示意圖

📖 描述

整體一頁教學圖，頂部主標題 + 中央主圖 + 周圍按編號步驟分解 + 底部小結句。

📝 提示詞

```json
{
  "type": "教學示意 Slide",
  "goal": "生成一張能讓學習者一眼看懂某個概念 / 機制 / 流程的教學示意圖",
  "style": {
    "color_palette": "{argument name=\"color palette\" default=\"溫和米色 + 學院藍 + 淺灰\"}",
    "rendering": "{argument name=\"rendering\" default=\"清晰矢量插圖 + 簡潔字體\"}"
  },
  "header": {
    "main_title": "{argument name=\"main title\" default=\"光合作用是怎麼工作的\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"從光到糖，七步看懂\"}",
    "audience": "{argument name=\"audience\" default=\"中學生\"}"
  },
  "centerpiece": {
    "enabled": "{argument name=\"centerpiece enabled\" default=\"true\"}",
    "description": "{argument name=\"centerpiece description\" default=\"一片完整的葉子橫剖面，標出葉綠體與氣孔\"}"
  },
  "steps": {
    "count": "{argument name=\"step count\" default=\"6\"}",
    "items": [
      "{argument name=\"step 1\" default=\"01 光線進入葉綠體\"}",
      "{argument name=\"step 2\" default=\"02 水從根部輸送上來\"}",
      "{argument name=\"step 3\" default=\"03 二氧化碳從氣孔進入\"}",
      "{argument name=\"step 4\" default=\"04 光反應：水分解爲氫與氧\"}",
      "{argument name=\"step 5\" default=\"05 暗反應：CO₂ 轉爲糖分\"}",
      "{argument name=\"step 6\" default=\"06 釋放氧氣、生成葡萄糖\"}"
    ],
    "step_block_style": "編號 + 一句話 + 小圖標"
  },
  "annotations": {
    "style": "細線引線 + 編號小標籤",
    "rule": "標註線不能交叉"
  },
  "summary_line": "{argument name=\"summary\" default=\"光合作用 = 光 + 水 + CO₂ → 葡萄糖 + O₂\"}",
  "constraints": {
    "must_keep": [
      "中央主圖作爲視覺錨點",
      "步驟編號連續清晰",
      "字體一致",
      "顏色 ≤ 3 種主色"
    ],
    "avoid": [
      "步驟過多導致一頁放不下",
      "插畫風格夾雜多種風格",
      "標註線穿過主圖",
      "正文使用過多專業術語未做解釋"
    ]
  }
}
```

### 參數策略

- 必問：概念、教學層級、步驟數
- 可默認：風格、配色、底部公式句
- 可隨機：圖標具體造型

### 自動補全策略

- 教學層級越低，插畫越卡通，文字越短
- 教學層級越高，插畫越科學示意，文字越精確
- 步驟建議 4-7 步，超過 7 步要拆爲多頁

## 變體 1：工程原理示意圖

📝 提示詞

```json
{
  "type": "工程原理示意 Slide",
  "header": {
    "main_title": "{argument name=\"concept\" default=\"內燃機四衝程是怎麼工作的\"}"
  },
  "centerpiece": {
    "description": "氣缸剖面圖 + 活塞動作"
  },
  "steps": {
    "count": 4,
    "items": ["進氣", "壓縮", "做功", "排氣"]
  },
  "constraints": {
    "must_feel": "工程圖感、專業、可信"
  }
}
```

## 變體 2：低齡兒童教學圖

📝 提示詞

```json
{
  "type": "低齡兒童科普教學 Slide",
  "header": {
    "main_title": "{argument name=\"concept\" default=\"爲什麼會下雨？\"}"
  },
  "style": {
    "color_palette": "粉橙 + 天藍 + 米白",
    "rendering": "Q 萌卡通插畫"
  },
  "steps": {
    "count": 4,
    "items": ["太陽曬水", "水變雲", "雲變重", "下雨"]
  },
  "constraints": {
    "must_feel": "可愛、易懂、溫馨"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "教學示意自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給概念，自動決定步驟、風格、配色、主圖",
  "constraints": {
    "must_feel": "可直接放進教科書 / 課件"
  }
}
```

## 避免事項

- 不要讓概念過於學術化以至小學生看不懂
- 不要讓步驟超過 7 步
- 不要讓插畫與解釋文字風格衝突
- 不要在科學示意圖裏出現品牌廣告
- 不要讓標註線交叉
- 不要使用過度飽和顏色破壞閱讀舒適度
