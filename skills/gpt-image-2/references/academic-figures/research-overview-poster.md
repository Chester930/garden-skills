# 開題 / 答辯 / 匯報研究總覽圖模板

本文件用於生成「開題答辯首頁 / 論文匯報首頁 / 組會引導頁的研究總覽圖」：

- 碩博開題答辯首頁的研究框架圖
- 中期 / 終期答辯首頁的總覽圖
- 組會 / 學術匯報 PPT 的引導頁
- Lab 主頁 / 課題介紹的研究總覽

特徵：

- 高層級、易讀、適合 PPT 一頁展示
- 5 個核心模塊：背景 / 目標 / 研究模塊 1 / 研究模塊 2 / 預期結果
- 白底、低飽和工程色、≤3 主色，**論文圖感而非商業諮詢路演圖**
- 文字精煉到短語，禁止文字牆

## 適用範圍

- 開題 / 中期 / 答辯首頁（學術匯報）
- 組會引導頁 / 課題匯報 / Lab meeting cover
- 項目立項書的研究框架圖（學術風）
- Faculty 個人主頁 / Lab 主頁的"current research"區塊

## 何時使用

- 用戶提到「開題 / 答辯 / 總覽圖 / 研究框架 / PPT 首頁 / 引導頁 / lab 主頁」
- 用戶希望視覺「學術答辯 PPT 首頁風，正式克制工程化，不要諮詢路演風」
- 用戶已能給出 5 個左右的核心模塊

不要使用：

- 用戶要的是「期刊投稿 Graphical Abstract」 → 用 `academic-figures/graphical-abstract.md`
- 用戶要的是「方法 pipeline」 → 用 `academic-figures/method-pipeline-overview.md`
- 用戶要的是「商業 / 投資人路演封面」 → 用 `slides-and-visual-docs/visual-report-page.md`
- 用戶要的是「品牌主視覺海報」 → 用 `poster-and-campaigns/brand-poster.md`

## 缺失信息優先提問順序

1. 課題 / 研究主題（寫在標題區）
2. 答辯類型（開題 / 中期 / 終期 / 組會 / 立項）—— 決定語氣與模塊構成
3. 5 個核心模塊的命名（默認是：背景 / 目標 / 研究內容 1 / 研究內容 2 / 預期結果）
4. 是否需要主觀點 / 關鍵問題（強烈建議有，寫在背景模塊下方）
5. 是否需要研究對象簡化示意（顆粒 / 器件 / 流程 / 系統）
6. 標籤語言（中文 / 英文 / 雙語；中文答辯通常中文爲主，可英文副標題）
7. 比例（默認 16:9 適配 PPT；4:3 適配舊 PPT 模板）

## 主模板：上中下三層 + 五模塊研究總覽

📖 描述

整張圖按"上方主題 + 中間核心模塊 + 下方結果導向"分成三層。中間層包含 4-5 個研究內容模塊，呈現層級清晰、對齊嚴格的學術布局，**絕對不像商業路演 PPT**。

📝 提示詞

```json
{
  "type": "學術研究總覽圖（research overview / framework figure for thesis defense）",
  "goal": "生成一張可直接放進開題答辯 / 論文匯報 PPT 首頁的研究總覽圖，要求正式克制、白底、工程化配色、明顯論文圖感、絕無商業路演感",
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect_ratio\" default=\"16:9\"}",
    "background": "pure white #FFFFFF",
    "outer_padding": "60px around the diagram",
    "render_quality": "vector-clean look, anti-aliased edges, sharp text"
  },
  "title_block": {
    "main_title": "{argument name=\"main_title\" default=\"Research Overview\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"e.g. thesis topic in one short phrase\"}",
    "occasion_label": "{argument name=\"occasion_label\" default=\"Thesis Proposal Defense\"}",
    "position": "top-center, main_title in bold sans-serif 18-22pt, subtitle in regular 12-14pt below, occasion_label in italic gray 10pt at top-right"
  },
  "background_section": {
    "label": "{argument name=\"background_label\" default=\"Background & Problem\"}",
    "summary": "{argument name=\"background_summary\" default=\"a short phrase stating why this matters and what gap exists\"}",
    "key_question": "{argument name=\"key_question\" default=\"a single research question, expressed as one sentence ≤ 18 words\"}",
    "position": "upper-middle band, full width, visually anchored as 'context'"
  },
  "objective_section": {
    "label": "{argument name=\"objective_label\" default=\"Objective\"}",
    "summary": "{argument name=\"objective_summary\" default=\"a short phrase stating the research goal\"}",
    "position": "directly below background, narrower than background, centered"
  },
  "research_modules": {
    "count": "{argument name=\"module_count\" default=\"3\"}",
    "items": [
      {
        "id": "RM1",
        "name": "{argument name=\"module_1_name\" default=\"Characterization\"}",
        "summary": "{argument name=\"module_1_summary\" default=\"a short phrase stating what is studied / measured\"}",
        "method_hint": "{argument name=\"module_1_method\" default=\"thermogravimetric analysis\"}"
      },
      {
        "id": "RM2",
        "name": "{argument name=\"module_2_name\" default=\"Modeling\"}",
        "summary": "{argument name=\"module_2_summary\" default=\"a short phrase stating the modeling / simulation focus\"}",
        "method_hint": "{argument name=\"module_2_method\" default=\"CFD combustion model\"}"
      },
      {
        "id": "RM3",
        "name": "{argument name=\"module_3_name\" default=\"Optimization\"}",
        "summary": "{argument name=\"module_3_summary\" default=\"a short phrase stating optimization or application focus\"}",
        "method_hint": "{argument name=\"module_3_method\" default=\"parameter sweep + emission analysis\"}"
      }
    ],
    "layout": "horizontal row of equal-width modules in the central band, all modules identical size and identical style"
  },
  "expected_outcome_section": {
    "label": "{argument name=\"outcome_label\" default=\"Expected Outcomes\"}",
    "items": "{argument name=\"outcome_items\" default=\"3-4 short phrases listing deliverables, e.g. 'kinetics database', 'optimized operating window', 'engineering recommendations'\"}",
    "position": "bottom band, full width, visually distinct from research_modules but stylistically consistent"
  },
  "module_block_style": {
    "shape": "rounded rectangle (corner radius ~8px) OR stage label + thin underline",
    "size_per_module": "all modules identical size, vertically aligned",
    "fill": "very light tint (e.g. #F1F5F9, #ECFEFF) — at most 2 different tints; modules of the same role share the same tint",
    "border": "1.2px solid #334155",
    "title_text": "module name in bold sans-serif (PingFang SC / Source Han Sans for CJK; Inter / Helvetica / Arial for english), 13-14pt",
    "summary_text": "single phrase, 10-11pt regular, 1-2 lines max, no period",
    "method_hint_text": "italic gray 9-10pt, below summary"
  },
  "connectors": {
    "style": "thin arrows (1.2px) with simple triangle arrowheads, dark gray #334155",
    "rule": "vertical flow background → objective → modules → outcomes; modules are horizontally parallel (no inter-module arrows unless logically required)",
    "decoration": "none; no curved arcs, no dashed unless explicitly indicating a feedback loop"
  },
  "color_palette": {
    "rule": "≤ 3 main colors total, drawn from a low-saturation engineering set: deep blue #1E3A8A / slate blue #3B82F6 / charcoal #1F2937; allow ONE low-saturation accent (e.g. amber #F59E0B) for the outcome band only if user signaled emphasis",
    "must_print_grayscale_readable": true
  },
  "typography": {
    "language": "{argument name=\"language\" default=\"chinese\"}",
    "rule": "chinese → PingFang SC / Source Han Sans; english → Inter / Helvetica / Arial; bilingual → primary line larger, secondary line smaller and gray",
    "consistency": "all module titles identical size; all summaries identical size; never mix serif and sans-serif"
  },
  "constraints": {
    "must_keep": [
      "all research modules identical size, vertically aligned, equal weight",
      "white background, no gradient, no decorative pattern",
      "language and font consistent across the entire figure",
      "summaries are short phrases, never full paragraphs",
      "the figure must look like the cover slide of an academic defense, not a corporate roadmap or pitch deck",
      "color palette ≤ 3 main colors, must remain readable in grayscale print"
    ],
    "avoid": [
      "consulting / pitch-deck aesthetics, brand campaign aesthetics",
      "decorative icons, emoji, mascots, hand-drawn wobble",
      "3D rendering, glossy fills, lens flare, drop shadow blocks",
      "stock-photo backgrounds, photographic hero images",
      "fabricated quantitative claims (no '+30% efficiency', '150 samples' unless user provided them)",
      "saturated brand colors, neon, vivid gradients",
      "dense text walls; no module summary should exceed 2 lines",
      "watermarks, copyright stamps, university / lab logos unless explicitly requested"
    ]
  }
}
```

### 參數策略

- **必問**：`main_title`、5 個核心模塊（背景 / 目標 / 研究內容 1-N / 預期結果）的命名
- **可默認**：`aspect_ratio`（16:9）、`background`（白色）、`color_palette`（深藍/灰藍/黑灰）
- **可隨機**：`method_hint` 措辭（用戶給出方法名時可學術化）；`occasion_label`（開題 / 中期 / 終期 / 組會）

### 自動補全策略

- 用戶給出主題但沒給模塊 → 反問 3-4 個研究模塊，**禁止編造研究內容**
- 用戶給出 `key_question` 超過 18 詞 → 主動建議精簡或拆成 2 個子問題
- 用戶沒給 expected outcomes → 用佔位短語（如 "deliverable 1: ..."）並標註待用戶補充
- 用戶說"中文答辯 / 中文 PPT" → `language` 默認中文，主標題中文 + 英文副標題（小一號 + 灰色）

## 變體 1：中心主題 + 周圍模塊（輻射式）

```json
{
  "type": "中心主題 + 周圍模塊的研究總覽",
  "modify": {
    "layout": "中央放置研究主題 / 研究對象的簡化示意；周圍呈環形或四象限放置 4 個研究模塊；下方留出預期結果帶",
    "rule": "中央對象佔畫面 25-30%；周圍模塊等大、等距、對齊嚴格",
    "use_case": "適合系統型 / 平臺型課題，研究模塊之間是平行而非前後依賴關係"
  }
}
```

適用：平臺型課題、綜合性課題、研究方向多支並行的總覽。

## 變體 2：左右雙欄（左 = 研究內容，右 = 路線 / 時間表）

```json
{
  "type": "左右雙欄研究總覽",
  "modify": {
    "layout": "左欄 = 研究內容模塊（垂直堆疊 3-4 個）；右欄 = 時間表 / 路線 / 裏程碑（gantt 風極簡）",
    "rule": "左右欄寬度比約 3:2；右欄時間軸用細線 + 節點圓，節點旁標月份或學期",
    "use_case": "開題答辯需要明確"做什麼 + 什麼時候做"的項目計劃"
  }
}
```

適用：開題答辯、項目立項書需要附進度計劃的場景。

## 變體 3：極簡版（只顯示研究模塊，無 timeline / 無 outcome 帶）

```json
{
  "type": "極簡研究總覽",
  "modify": {
    "layout": "去掉 expected_outcome_section，去掉時間軸；只保留 title + background/key_question + 3-4 個研究模塊",
    "use_case": "組會匯報引導頁或 lab meeting cover，只需快速點出'這次要講什麼'"
  }
}
```

適用：組會 / Lab meeting / 課程匯報。

## 避免事項

- 把研究總覽圖畫成商業諮詢路演風（深色背景 + 大色塊 + brand 色） → 立刻"非學術"
- 用 emoji / 商業圖標 / 卡通插畫裝飾研究模塊
- 把研究模塊寫成完整段落，每個模塊超過 2 行 → 視覺擁擠
- 在"預期結果"中編造具體百分比 / 數據指標（**嚴格禁止虛構數據**）
- 讓某一研究模塊明顯大於其他（應該等權）
- 用飽和 / 漸變 / 玻璃質感裝飾背景
- 強加學校 / 實驗室 logo 或 watermark（除非用戶明確要求）
- 把方法 pipeline 詳細圖（應該用 `method-pipeline-overview.md`）塞進總覽圖中
