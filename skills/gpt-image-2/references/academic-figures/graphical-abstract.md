# Graphical Abstract / 圖形摘要模板

本文件用於生成「期刊投稿 Graphical Abstract / 論文圖形摘要 / 投稿封面圖」：

- 期刊投稿要求附帶的 Graphical Abstract
- 論文一圖概覽（"一圖講清主貢獻"）
- 答辯首頁 / 組會匯報首頁裏的研究亮點圖

特徵：

- 極簡、緊湊、4 部分核心敘事（問題 → 方法 → 關鍵過程 → 結果）
- 橫向左→右 或 中心展開布局
- 白底、低飽和工程色、≤3 主色，**像高質量期刊圖形摘要，絕不像營銷海報**
- 文字精煉到短語，禁止段落式說明

## 適用範圍

- Elsevier / ACS / Wiley / Springer / IEEE 等期刊投稿要求的 Graphical Abstract
- arXiv / 預印本 README 頂部的"研究一圖"
- 論文 supplementary 或 highlight figure
- 答辯 / 匯報"研究亮點"頁

## 何時使用

- 用戶提到「graphical abstract / 圖形摘要 / 投稿摘要圖 / 一圖講清 / highlight figure」
- 用戶希望視覺「期刊封面級摘要圖，簡潔克制學術風」
- 用戶已能用 1-2 句話講清"這篇論文做了什麼、得到了什麼"

不要使用：

- 用戶要的是「方法 pipeline 總覽」 → 用 `academic-figures/method-pipeline-overview.md`
- 用戶要的是「開題 / 答辯首頁總覽圖」 → 用 `academic-figures/research-overview-poster.md`
- 用戶要的是「機制 / 機理圖」 → 用 `academic-figures/mechanism-diagram.md`
- 用戶要的是「營銷 / 品牌 / 雜誌封面感」 → 用 `poster-and-campaigns/editorial-cover.md`

## 缺失信息優先提問順序

1. 研究主題（一句話；寫在標題或圖註裡）
2. 目標期刊或目標場景（決定縱橫比 + 主色調；不同期刊偏好不同）
3. 4 個核心要素：研究問題 / 方法或系統 / 關鍵過程或機制 / 主要結果
4. 是否有"研究對象"的簡化示意（顆粒 / 分子 / 器件 / 流程）
5. 標籤語言（中文 / 英文 / 雙語；多數期刊要求英文）
6. 比例（默認橫向 16:9 / 2:1；部分期刊要求方形 1:1，要先確認）

## 主模板：橫向 4 段式 Graphical Abstract

📖 描述

整張圖橫向流動：從最左邊的「研究問題 / 研究對象」開始，依次到「方法 / 系統」、「關鍵過程 / 機制」、「主要結果」。四個區域比例均勻，文字精煉到短語，視覺層級清晰，整體像高質量工程類期刊摘要圖。

📝 提示詞

```json
{
  "type": "學術期刊圖形摘要（Graphical Abstract）",
  "goal": "生成一張可直接用於期刊投稿的 Graphical Abstract，要求極簡、白底、工程化克制配色、幾秒內可讀、絕無營銷海報感",
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect_ratio\" default=\"2:1\"}",
    "background": "pure white #FFFFFF",
    "outer_padding": "60px around the diagram",
    "render_quality": "vector-clean look, anti-aliased edges, sharp text, suitable for grayscale print"
  },
  "title_block": {
    "enabled": "{argument name=\"title_block_enabled\" default=\"false\"}",
    "title": "{argument name=\"title\" default=\"\"}",
    "rule": "most journals do not allow titles inside the graphical abstract; enable only when user explicitly requested a title"
  },
  "sections": [
    {
      "id": "P1",
      "role": "Problem",
      "label": "{argument name=\"problem_label\" default=\"Research Problem\"}",
      "summary": "{argument name=\"problem_summary\" default=\"a short phrase stating the gap, e.g. 'unstable combustion under variable moisture'\"}",
      "depiction": "{argument name=\"problem_depiction\" default=\"a minimal line-art sketch of the studied object or scenario\"}"
    },
    {
      "id": "P2",
      "role": "Method",
      "label": "{argument name=\"method_label\" default=\"Method\"}",
      "summary": "{argument name=\"method_summary\" default=\"a short phrase, e.g. 'thermogravimetric + kinetics analysis'\"}",
      "depiction": "{argument name=\"method_depiction\" default=\"a minimal schematic of the analytical or experimental setup\"}"
    },
    {
      "id": "P3",
      "role": "Process",
      "label": "{argument name=\"process_label\" default=\"Key Mechanism\"}",
      "summary": "{argument name=\"process_summary\" default=\"a short phrase, e.g. 'two-stage volatile combustion'\"}",
      "depiction": "{argument name=\"process_depiction\" default=\"a small mechanism strip with 2-3 sub-steps, line-art style\"}"
    },
    {
      "id": "P4",
      "role": "Result",
      "label": "{argument name=\"result_label\" default=\"Outcome\"}",
      "summary": "{argument name=\"result_summary\" default=\"a short phrase, e.g. 'optimized excess-air ratio reduces NOx by ~X%'\"}",
      "depiction": "{argument name=\"result_depiction\" default=\"a minimal qualitative chart sketch (no fabricated numbers) or a result icon (gauge / bar)\"}"
    }
  ],
  "section_block_style": {
    "shape": "implicit columns separated by generous whitespace, NOT four heavy rectangles in a row",
    "header_text": "section label in bold sans-serif, 12-13pt, top-aligned",
    "summary_text": "single phrase, 10pt regular, max 2 lines, no period",
    "depiction_size": "around 35-50% of column height, vertically centered"
  },
  "connectors": {
    "style": "thin arrows (1.2px) with simple triangle arrowheads, dark gray #334155, between adjacent sections only",
    "rule": "no crossing, no curved decorative arcs; arrows convey 'leads to' / 'analyzed by' relationships",
    "label_arrows": "false by default; only add label when the relationship is non-trivial"
  },
  "color_palette": {
    "rule": "≤ 3 main colors total, drawn from a low-saturation engineering set: deep blue #1E3A8A / slate blue #3B82F6 / charcoal #1F2937; allow ONE low-saturation accent (e.g. amber #F59E0B for a heat / risk highlight) only if the user signaled a thermal or risk emphasis",
    "must_print_grayscale_readable": true
  },
  "typography": {
    "language": "{argument name=\"language\" default=\"english\"}",
    "rule": "english → Inter / Helvetica / Arial; chinese → PingFang SC / Source Han Sans; bilingual → english as primary, chinese as smaller secondary line",
    "consistency": "all section headers identical size; all summaries identical size; never mix serif and sans-serif"
  },
  "constraints": {
    "must_keep": [
      "all four sections visually equal-weight, no section dominates",
      "white background, no gradient, no decorative pattern, no photographic background",
      "language matches the target journal (default english)",
      "summaries are short phrases, never full sentences with periods",
      "the figure must look like it could appear on an Elsevier / ACS / IEEE table of contents page",
      "every numerical claim must come from the user; if absent, render qualitatively"
    ],
    "avoid": [
      "marketing-poster aesthetics, brand campaign aesthetics, magazine cover aesthetics",
      "3D effects, drop shadows, gradients, glossy fills, lens flare, motion blur",
      "exaggerated flames, smoke, sparks (even when the topic is combustion)",
      "cartoon mascots, emoji, decorative icons, hand-drawn wobble",
      "stock-photo-style realistic backgrounds",
      "fabricated numbers, percentages, equations, or chart data not provided by the user",
      "saturated colors (no neon, no vivid), more than 3 main colors",
      "watermarks, copyright stamps, vendor logos"
    ]
  }
}
```

### 參數策略

- **必問**：4 個 `*_summary`（問題 / 方法 / 關鍵過程 / 結果）至少能給出短語
- **可默認**：`aspect_ratio`（2:1）、`background`（白色）、`color_palette`（深藍/灰藍/黑灰）
- **可隨機**：每個 section 的 `*_depiction` 具體造型（用戶給了對象/方法名時可推斷；否則反問）

### 自動補全策略

- 用戶只給主題但沒給 4 段 → 反問 4 個 summary，**禁止編造研究內容**
- 用戶給了定性貢獻但沒數 → 用 `qualitatively shows` / `consistently reduces` 這類無數字表達
- 用戶給了數（如"NOx 降低 18%"）→ 直接寫 `~18%`，不要僞造其他指標
- 用戶說"中文期刊 / 中文摘要圖" → 切換中文 + 字體 PingFang / 思源黑

## 變體 1：中心展開式（Hub-and-spoke）

```json
{
  "type": "中心展開式 Graphical Abstract",
  "modify": {
    "layout": "中心放置研究對象 / 核心系統的簡化示意，向外輻射出 3-4 個扇區，每個扇區代表一個核心要素（問題、方法、機制、結果之一）",
    "rule": "扇區在視覺上等權，使用細線條分隔；中央對象佔畫面 30-40%",
    "use_case": "適合系統型研究、平臺型研究，或難以線性敘事的多模態貢獻"
  }
}
```

適用：綜合性研究、系統性貢獻（如新平臺、新框架）。

## 變體 2：方形 1:1（部分期刊要求）

```json
{
  "type": "方形 Graphical Abstract",
  "modify": {
    "aspect_ratio": "1:1",
    "layout": "2×2 網格，左上 = 問題 / 對象，右上 = 方法，左下 = 關鍵過程，右下 = 結果",
    "rule": "四象限嚴格等大、對齊；象限間留出統一間距；箭頭沿 Z 字型走 P1 → P2 → P3 → P4",
    "use_case": "ACS / Wiley 等部分期刊要求方形 Graphical Abstract"
  }
}
```

適用：投稿要求方形比例的期刊。

## 變體 3：豎版（社交媒體 / 預印本卡片）

```json
{
  "type": "豎版 Graphical Abstract",
  "modify": {
    "aspect_ratio": "3:4",
    "layout": "上 → 下 四段式：Problem → Method → Mechanism → Outcome",
    "rule": "寬度緊湊，每段保留呼吸空間；適合手機端或 Twitter / LinkedIn 卡片預覽",
    "use_case": "用於社交媒體推廣預印本、Lab 主頁 highlight 卡"
  }
}
```

適用：投稿之外的科研宣傳，但仍保持學術克制風格。

## 避免事項

- 把 Graphical Abstract 畫成"全文壓縮版"——塞進所有方法步驟、所有公式、所有結果
- 用任何形式的漸變 / 玻璃質感 / 光暈 / 3D → 立刻像營銷圖
- 中英文標籤隨意混用（除非顯式要求雙語）
- 在沒有真實數據時畫出帶具體數值的柱圖 / 折線（**嚴格禁止虛構數據**；只能定性展示）
- 用飽和 brand 色或霓虹色——期刊摘要圖應保持低飽和工程色
- 把研究對象畫成超現實 3D 渲染（學術風需要的是簡化線稿）
- 加期刊 logo / 水印 / "submitted to ..." 等標籤
