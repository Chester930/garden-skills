# 政策 / 政府風說明 Slide 模板

本文件用於生成「政府公告 / 政策解讀 / 公共宣傳」風格的視覺頁：

- 政府政策解讀
- 行業白皮書一頁摘要
- 公共服務說明
- 法規變更說明
- 通知 / 公告主視覺

特徵：

- 嚴謹克制
- 主標題大、官方感
- 信息分塊清晰
- 配色穩重（深藍 / 深紅 / 深綠 + 米色）
- 適當裝飾但不喧鬧

## 適用範圍

- 政策解讀圖
- 政府公告主圖
- 行業白皮書摘要圖
- 法規變更說明圖
- 公共宣傳海報式 Slide

## 何時使用

- 用戶提到「政策解讀 / 政府公告 / 白皮書 / 公共宣傳 / 嚴謹說明」
- 用戶希望視覺看起來「權威、嚴肅、不娛樂化」

不要使用：

- 用戶要的是講解課件（用 `dense-explainer-slides.md`）
- 用戶要的是商業報告（用 `visual-report-page.md`）
- 用戶要的是科普教學（用 `educational-diagram-slide.md`）

## 缺失信息優先提問順序

1. 主題（政策名 / 公告名 / 法規名）
2. 頒布單位 / 發布機構
3. 核心內容章節（3-5 節）
4. 關鍵數字或日期
5. 配色：政紅 / 政藍 / 政綠 / 中性灰
6. 是否需要二維碼 / 聯繫方式

## 主模板：政策解讀單頁 Slide

📖 描述

整體頁面：頂部官方 logo / 機構名 + 主標題 + 副標題；中間多個分塊說明 + 數據高亮；底部出處 / 二維碼 / 發布時間。

📝 提示詞

```json
{
  "type": "政策解讀單頁 Slide",
  "goal": "生成一張嚴謹、權威、可作爲政府公告 / 政策解讀用途的視覺頁",
  "style": {
    "color_palette": "{argument name=\"color palette\" default=\"政紅 + 米白 + 深灰\"}",
    "tone": "{argument name=\"visual tone\" default=\"嚴謹、克制、官方\"}",
    "typography": "{argument name=\"typography\" default=\"思源宋體大標題 + 思源黑體正文\"}"
  },
  "header": {
    "agency_name": "{argument name=\"agency name\" default=\"國家某某局\"}",
    "agency_logo": "{argument name=\"agency logo\" default=\"國徽 / 機構徽\"}",
    "main_title": "{argument name=\"main title\" default=\"關於推進某行業高質量發展的指導意見\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"政策核心要點解讀\"}",
    "release_date": "{argument name=\"release date\" default=\"2026 年 4 月 24 日\"}"
  },
  "sections": {
    "count": "{argument name=\"section count\" default=\"5\"}",
    "items": [
      "{argument name=\"section 1\" default=\"政策背景\"}",
      "{argument name=\"section 2\" default=\"主要目標\"}",
      "{argument name=\"section 3\" default=\"重點任務\"}",
      "{argument name=\"section 4\" default=\"保障措施\"}",
      "{argument name=\"section 5\" default=\"實施時間表\"}"
    ],
    "section_block_style": "編號 + 標題 + 2-3 行說明，可附小圖標"
  },
  "highlight_numbers": {
    "enabled": "{argument name=\"highlight numbers enabled\" default=\"true\"}",
    "items": [
      "{argument name=\"key number 1\" default=\"5 大重點任務\"}",
      "{argument name=\"key number 2\" default=\"3 年實施周期\"}",
      "{argument name=\"key number 3\" default=\"覆蓋 28 個領域\"}"
    ]
  },
  "footer": {
    "source": "{argument name=\"source\" default=\"來源：官方文件全文鏈接\"}",
    "qr_code": "{argument name=\"qr code\" default=\"右下角二維碼：查看政策原文\"}"
  },
  "constraints": {
    "must_keep": [
      "主標題字號最大",
      "機構 logo 與名稱必須出現且可讀",
      "色板克制 ≤ 3 色",
      "數據高亮區視覺突出但不浮誇"
    ],
    "avoid": [
      "出現娛樂化字體",
      "插圖過度卡通化",
      "出現品牌廣告元素",
      "顏色過度飽和"
    ]
  }
}
```

### 參數策略

- 必問：政策名、機構、章節
- 可默認：色板、字體方案、底部信息
- 可隨機：裝飾小圖標

### 自動補全策略

- 默認章節按「背景 / 目標 / 任務 / 保障 / 時間表」五段
- 默認色板政紅 + 米白 + 深灰
- 默認機構樣式留白通用化，避免冒充真實機構

## 變體 1：公共宣傳海報式 Slide

📝 提示詞

```json
{
  "type": "公共宣傳海報式 Slide",
  "header": {
    "main_title": "{argument name=\"main title\" default=\"全民垃圾分類·從我做起\"}",
    "subtitle": "權威指引 + 行動指南"
  },
  "centerpiece": {
    "description": "{argument name=\"centerpiece\" default=\"四種垃圾桶 + 簡潔分類圖標\"}"
  },
  "sections": {
    "items": [
      "可回收物",
      "廚餘垃圾",
      "有害垃圾",
      "其他垃圾"
    ]
  },
  "constraints": {
    "must_feel": "公益、清晰、易懂"
  }
}
```

## 變體 2：白皮書摘要 Slide

📝 提示詞

```json
{
  "type": "行業白皮書摘要 Slide",
  "header": {
    "main_title": "{argument name=\"report name\" default=\"2026 年某行業發展白皮書\"}"
  },
  "sections": {
    "items": ["市場概況", "趨勢洞察", "關鍵數據", "未來展望"]
  },
  "highlight_numbers": {
    "enabled": true,
    "items": ["市場規模 1.2 萬億", "複合增長 18%", "活躍企業 4500+"]
  },
  "constraints": {
    "must_feel": "專業、可作爲公開發布材料"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "政策風 Slide 自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給主題，自動選機構樣式、章節切分、色板",
  "constraints": {
    "must_feel": "權威、克制、可分發"
  }
}
```

## 避免事項

- 不要冒充任何真實機構 logo
- 不要使用娛樂化字體（毛筆體、卡通體除特殊場合）
- 不要讓插圖分散注意力
- 不要讓顏色超過 3 種主色
- 不要讓正文行距過密以至無法閱讀
- 不要在政策風 Slide 上加過多營銷卡片
