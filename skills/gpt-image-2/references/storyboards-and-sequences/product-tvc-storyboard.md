# 產品 TVC 商業廣告分鏡板模板

本文件用於生成"以單一產品爲主角、跨 9-12 個商業廣告鏡頭的真實攝影風分鏡表"，每個 panel 都是一個真實拍攝鏡頭的視覺示意。

典型用途：

- 給廣告 / TVC 公司做拍攝前 storyboard 提案
- 電商詳情頁"我們能做出這種品質視頻"的預演稿
- 給 Seedance / Sora / Runway 等視頻生成工具做鏡頭列表
- 客戶審稿前的視頻腳本可視化
- 電商「主圖 → TVC」一圖過的快速過審

特徵（與現有 storyboards 模板的區別）：

| 模板 | 性質 | 風格 |
|---|---|---|
| `four-panel-comic.md`（已有） | 漫畫 4 格 | 漫畫 / 段子 / 反轉 |
| `manga-spread-page.md`（已有） | 漫畫跨頁分鏡 | 日漫 / 不規則格 |
| `recipe-process-flowchart.md`（已有） | 流程示意 | 食譜 / 教程插畫 |
| **本模板**（新增） | **真實拍攝分鏡** | **商業廣告級攝影** |

**核心區別**：本模板每個 panel 都是「真實攝影 / 擬真渲染」的成片畫面，不是漫畫分鏡也不是流程圖，而是「這部 15 秒廣告會拍成什麼樣」的視覺答案。

## 適用範圍

- 商業 TVC 拍攝前 storyboard
- 電商詳情頁視頻拍攝預演
- 客戶審稿（"成片大概會長這樣"）
- 給視頻生成模型（Sora / Seedance / Runway）的鏡頭清單參考
- 4S 店 / 美妝 / 食品 / 數碼品類的 15-30 秒廣告分鏡

## 何時使用

- 用戶提到"TVC / 廣告分鏡 / storyboard / 視頻腳本可視化"
- 用戶已經有產品，想要"成片看起來怎樣"的視覺提案
- 客戶要看「9 / 12 個鏡頭分別拍什麼」

不要使用：

- 漫畫 / 故事 4 格 → 用 `four-panel-comic.md`
- 跨頁不規則漫畫 → 用 `manga-spread-page.md`
- 食譜 / 教程流程 → 用 `recipe-process-flowchart.md`
- 僅一張 hero 主圖 → 用 `product-visuals/premium-studio-product.md`
- 詳情頁一圖全銷售看板 → 用 `product-visuals/ecommerce-marketing-board.md`

## 缺失信息優先提問順序

1. 產品（必須有具體產品 / 包裝 / 顏色 / 形狀）
2. 視頻時長（15s / 30s / 60s）+ 比例（9:16 豎屏 / 16:9 橫屏 / 1:1）
3. 總鏡頭數（9 / 12 / 6）
4. 風格（**電影感 / 簡約高級 / 暖色生活方式 / 冷色科技 / 復古懷舊**）
5. 是否需要"使用人手 / 演員"出現
6. 必須出現的賣點（決定哪個鏡頭要 close-up 哪個要 lifestyle）
7. 是否需要中英雙語鏡頭標題 / 時間碼

## 主模板：9-panel 產品 TVC 商業廣告分鏡板

📖 描述

3×3 = 9 格，每格是一個獨立鏡頭的成片視覺示意，整體配 header（節目主標 + 時長 + 比例）+ 每格中文鏡頭標題 + 時間碼 + 拍攝說明。

📝 提示詞

```json
{
  "type": "product TVC storyboard board",
  "goal": "生成一張 9 格分鏡圖，每格都是該產品商業廣告的一個真實拍攝鏡頭視覺示意，可作爲拍攝前 storyboard / 客戶審稿 / 視頻生成參考",
  "input_mode": "{argument name=\"input mode\" default=\"text-only\"}",
  "reference_image_note": "如果用戶提供產品參考圖，必須保持產品外觀完全一致（顏色 / 包裝 / logo 不可漂移）",
  "header": {
    "title": "{argument name=\"header title\" default=\"產品TVC分鏡腳本\"}",
    "subtitle_meta": "{argument name=\"video duration\" default=\"15秒\"} / {argument name=\"aspect ratio\" default=\"9:16豎屏\"} / 9宮格",
    "product_name_subtitle": "{argument name=\"product name\" default=\"青花瓷煙灰缸\"}"
  },
  "layout": {
    "format": "{argument name=\"board orientation\" default=\"vertical 3:4 storyboard sheet\"}",
    "background": "{argument name=\"board background\" default=\"dark elegant gradient with subtle paper texture\"}",
    "grid": {
      "rows": 3,
      "columns": 3,
      "panel_count": 9,
      "panel_aspect_ratio": "{argument name=\"panel ratio\" default=\"9:16 (vertical TVC)\"}",
      "panel_borders": "thin light divider, generous gutter",
      "panel_label_position": "top-left number badge + scene title in Chinese; small timestamp top-right; small Chinese description below the image"
    }
  },
  "scenes": {
    "count": 9,
    "items": [
      { "id": 1, "title_zh": "{argument name=\"scene 1 title\" default=\"環境建立\"}", "timestamp": "0-2s", "description": "environment-establishing wide shot with desk, books, window, and the product placed in context; soft morning light" },
      { "id": 2, "title_zh": "{argument name=\"scene 2 title\" default=\"主體亮相\"}", "timestamp": "2-3s", "description": "hero product medium shot on the table; warm rim light, shallow depth of field" },
      { "id": 3, "title_zh": "{argument name=\"scene 3 title\" default=\"工藝特寫\"}", "timestamp": "3-5s", "description": "extreme close-up of the {argument name=\"signature detail\" default=\"blue floral craftsmanship pattern\"}" },
      { "id": 4, "title_zh": "{argument name=\"scene 4 title\" default=\"使用場景\"}", "timestamp": "5-7s", "description": "use case showing {argument name=\"use action\" default=\"a hand placing a cigarette into the ashtray with visible smoke\"}" },
      { "id": 5, "title_zh": "{argument name=\"scene 5 title\" default=\"功能展示\"}", "timestamp": "7-8s", "description": "{argument name=\"function shot\" default=\"top-down capacity display showing multiple cigarette butts inside\"}" },
      { "id": 6, "title_zh": "{argument name=\"scene 6 title\" default=\"清潔打理\"}", "timestamp": "8-10s", "description": "{argument name=\"care shot\" default=\"cleaning scene under running water in a sink with a hand holding the product\"}" },
      { "id": 7, "title_zh": "{argument name=\"scene 7 title\" default=\"細節品質\"}", "timestamp": "10-11s", "description": "{argument name=\"quality detail\" default=\"bottom-detail close-up showing the underside and anti-slip pads\"}" },
      { "id": 8, "title_zh": "{argument name=\"scene 8 title\" default=\"氛圍生活\"}", "timestamp": "11-13s", "description": "{argument name=\"mood scene\" default=\"mood/lifestyle scene at night with the product on a desk, smoke rising, and ambient lamp light\"}" },
      { "id": 9, "title_zh": "{argument name=\"scene 9 title\" default=\"品牌收尾\"}", "timestamp": "13-15s", "description": "brand closing frame with the product as the hero plus Chinese marketing text '{argument name=\"closing tagline\" default=\"匠心傳承,品味生活\"}'" }
    ]
  },
  "global_style": {
    "rendering": "premium realistic commercial photography across all 9 panels",
    "consistency": "the product (color / shape / packaging / logo) stays IDENTICAL across all 9 panels",
    "lighting": "{argument name=\"lighting style\" default=\"warm premium lighting, shallow depth of field, refined lifestyle desktop environment\"}",
    "color_grading": "{argument name=\"color grading\" default=\"warm cinematic\"}",
    "panel_treatment": "each panel feels like a real ad still, not a sketch or wireframe"
  },
  "constraints": {
    "must_keep": [
      "9 個鏡頭編號清晰、時間碼遞增不重疊（總和 = 視頻時長）",
      "產品在 9 個鏡頭中外觀完全一致",
      "每格的中文鏡頭標題 + 時間碼 + 描述都必須存在",
      "整體看起來像專業廣告 storyboard 板而不是 9 張隨機圖"
    ],
    "avoid": [
      "9 個鏡頭都是同一角度（必須有近景 / 中景 / 遠景 / 俯拍 / 仰拍混合）",
      "鏡頭描述與產品類型不匹配（如給手機做'倒粉入杯'鏡頭）",
      "產品在不同鏡頭中改變顏色或外觀",
      "時間碼總和與 video duration 不一致",
      "沒有 closing 鏡頭（最後一格必須是品牌收尾）"
    ]
  }
}
```

### 參數策略

- **必問**：product name、video duration + aspect ratio、產品參考圖（如有）
- **可默認**：board background、closing tagline、lighting style
- **可隨機**：scene 1-9 具體描述（按產品類目套用模板）

### 自動補全策略

- 用戶只說"做我這個產品的 9 格 TVC 分鏡"+ 給參考圖 → 按產品類目自動套 9 鏡頭模板
- 不指定具體鏡頭內容 → 用「環境建立 → 亮相 → 工藝 → 使用 → 功能 → 清潔/打理 → 細節 → 氛圍 → 收尾」標準結構
- 不指定時長 → 默認 15s 9 格

## 變體 1：12 panel 30 秒長版

📝 提示詞

```json
{
  "type": "12-panel 30s product TVC storyboard",
  "header": {
    "subtitle_meta": "30秒 / {argument name=\"aspect ratio\" default=\"16:9橫屏\"} / 12宮格"
  },
  "layout": { "rows": 3, "columns": 4, "panel_count": 12 },
  "scenes_extension": [
    "10) 用戶證言/使用見證鏡頭",
    "11) 數據/對比/認證鏡頭",
    "12) 第二次品牌收尾 + CTA"
  ],
  "use_case": "30s TVC / 詳情頁長視頻 / 完整產品故事"
}
```

### 何時選這個變體

- 視頻時長 ≥ 30s
- 需要「用戶見證 + 數據對比 + CTA」更完整銷售環節
- 橫屏播放渠道（YouTube / B 站 / 詳情頁 banner 視頻）

## 變體 2：6 panel 極簡短視頻版（適合抖音 15s）

📝 提示詞

```json
{
  "type": "6-panel 15s vertical short video storyboard",
  "header": {
    "subtitle_meta": "15秒 / 9:16豎屏 / 6宮格"
  },
  "layout": { "rows": 2, "columns": 3, "panel_count": 6 },
  "scenes": [
    "1 鉤子/痛點開場",
    "2 產品出現",
    "3 一個核心賣點 close-up",
    "4 使用瞬間",
    "5 效果/對比",
    "6 品牌 + CTA"
  ],
  "use_case": "抖音 / 快手 / TikTok / Reels 15s 短視頻"
}
```

### 何時選這個變體

- 平臺限制 15s 內
- 主要走「鉤子 + 賣點 + 轉化」的快節奏短視頻
- 6 鏡頭 = 每鏡頭平均 2.5s，夠直接好懂

## 變體 3：電影感敘事 TVC（高端品類）

📝 提示詞

```json
{
  "type": "cinematic-narrative TVC storyboard",
  "header": {
    "subtitle_meta": "{argument name=\"video duration\" default=\"60秒\"} / 16:9寬屏 / 9宮格"
  },
  "scenes_replacement": [
    "1 主角登場 / 情境引入",
    "2 矛盾 / 困境",
    "3 轉折 / 產品出現",
    "4 互動 / 體驗",
    "5 高光時刻",
    "6 情緒釋放",
    "7 羣像 / 共鳴",
    "8 品牌哲學陳述",
    "9 logo + slogan 靜幀"
  ],
  "style_override": {
    "lighting": "電影級燈光，強對比，氛圍濃鬱",
    "color_grading": "復古 / 蒂芙尼 / 沙漠橙 / 黑白特定色調",
    "talent": "真人演員 + 情緒面部表情"
  }
}
```

### 何時選這個變體

- 汽車 / 奢侈品 / 高端家電 / 全球品牌
- 走「故事 + 情緒 + 哲學」而非「賣點 + 數據」
- 60s+ 長版品牌片

## 避免事項

- ❌ 9 個鏡頭都是產品 close-up → 必須有鏡頭節奏（遠 / 中 / 近 / 極近 / 俯 / 仰）
- ❌ 產品在不同鏡頭中變色 / 變形 → 致命錯誤，必須強調"identical product"
- ❌ 鏡頭描述與產品類目不符（如給口紅做"水龍頭清洗"鏡頭）
- ❌ 時間碼總和不等於視頻總時長 → 客戶立刻看出來不專業
- ❌ 漏掉品牌收尾鏡頭（最後一格必須是 logo + slogan / CTA）
- ❌ 把 9 格畫成漫畫 / 插畫風 → 應該是真實攝影感
- ❌ 板面沒有 header（標題 + 時長 + 比例）→ 看起來像隨機的 9 張圖
- ❌ 把模板裏的"argument"佔位符原樣寫到最終 prompt
