# 機理示意圖模板

本文件用於生成「學術機理示意圖 / 因果鏈路 / 轉化路徑 / 演化機製圖」：

- 論文正文裡的機制 / 機理分析圖
- 反應 / 轉化 / 退化路徑圖
- 因果鏈路 / 多階段演化圖
- 答辯 PPT 的機制說明頁

特徵：

- 中心對象 + 多階段轉化路徑 + 結果區域
- 階段化標註（乾燥 → 熱解 → 燃燒 → 氧化 → 排放，或類似的因果序列）
- 白底 + 工程化低飽和配色（深藍 / 灰藍 / 黑灰爲主，可加 ≤1 種低飽和暖色作爲高溫/風險強調）
- 學術克制風格，**絕對不是營銷插畫或科普海報**

## 適用範圍

- 燃燒 / 化學反應 / 催化 / 退化 / 老化 / 腐蝕 / 衰減 等機制示意
- 生物 / 醫藥 / 藥物作用 / 分子互作 等通路圖（學術風，非科普插畫）
- 材料相變 / 損傷演化 / 失效路徑
- 因果鏈分析圖 / 演化路徑圖

## 何時使用

- 用戶提到「機理 / 機制 / 反應路徑 / 轉化 / 演化 / 因果 / 通路 / 失效路徑」
- 用戶希望視覺「論文裡的機製圖，不是科普插畫也不是營銷圖」
- 用戶已能給出階段順序或轉化關係

不要使用：

- 用戶要的是「方法 pipeline / 系統總覽」 → 用 `academic-figures/method-pipeline-overview.md`
- 用戶要的是「實驗裝置 / 測試系統」 → 用 `academic-figures/scientific-schematic.md`
- 用戶要的是「業務流程 / 決策圖」 → 用 `technical-diagrams/flowchart-decision.md`
- 用戶要的是「教學步驟、溫暖插畫感」 → 用 `infographics/step-by-step-infographic.md`

## 缺失信息優先提問順序

1. 機制 / 現象總名稱（寫在標題或圖註裡）
2. 中心研究對象是什麼（顆粒 / 分子 / 器件 / 組織 / 反應體系）
3. 階段順序（建議 3-6 個階段；超過 6 個考慮分組）
4. 每個階段：階段名 + 主導過程的極簡描述（短語化）
5. 是否有分支 / 平行路徑 / 反饋環
6. 是否需要標註高溫區 / 風險區 / 關鍵反應區等局部強調
7. 標籤語言（中文 / 英文 / 雙語；論文圖通常英文）
8. 比例（默認橫向 16:9；機製圖也常見 4:3）

## 主模板：中心對象 + 多階段轉化 + 結果區

📖 描述

中心是研究對象的簡化示意（顆粒 / 分子結構 / 器件 / 反應體系），周圍以"階段化轉化路徑"展開：從初始態經過若干中間機制階段到達最終結果區。所有連接以學術克制風格的箭頭表達，禁止戲劇化效果（無火焰、無濃煙、無炫光）。

📝 提示詞

```json
{
  "type": "學術機理示意圖（mechanism / pathway figure）",
  "goal": "生成一張可直接放進工程類或自然科學論文正文的機制示意圖，強調因果路徑清晰、學術克制、可單色印刷可讀",
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect_ratio\" default=\"16:9\"}",
    "background": "pure white #FFFFFF",
    "outer_padding": "60px around the diagram",
    "render_quality": "vector-clean look, anti-aliased edges, sharp text"
  },
  "title_caption": {
    "figure_label": "{argument name=\"figure_label\" default=\"Figure X.\"}",
    "caption": "{argument name=\"caption\" default=\"Schematic of the proposed mechanism.\"}",
    "position": "bottom-center, italic serif or compact sans-serif, smaller font size"
  },
  "central_object": {
    "label": "{argument name=\"object_label\" default=\"Biomass particle\"}",
    "depiction": "{argument name=\"object_depiction\" default=\"a simplified cross-sectional sketch of a porous biomass particle, line-art style, no photo realism\"}",
    "position": "horizontally centered, occupying roughly 25-35% of canvas width",
    "style": "thin line-art / engineering schematic, no 3D, no shading, no hyperreal texture"
  },
  "stages": {
    "count": "{argument name=\"stage_count\" default=\"5\"}",
    "items": [
      {
        "id": "M1",
        "name": "{argument name=\"stage_1_name\" default=\"Drying\"}",
        "summary": "{argument name=\"stage_1_summary\" default=\"moisture evaporation under heating\"}",
        "highlight": "{argument name=\"stage_1_highlight\" default=\"none\"}"
      },
      {
        "id": "M2",
        "name": "{argument name=\"stage_2_name\" default=\"Pyrolysis\"}",
        "summary": "{argument name=\"stage_2_summary\" default=\"thermal decomposition releasing volatiles\"}",
        "highlight": "{argument name=\"stage_2_highlight\" default=\"reaction zone\"}"
      },
      {
        "id": "M3",
        "name": "{argument name=\"stage_3_name\" default=\"Volatile Combustion\"}",
        "summary": "{argument name=\"stage_3_summary\" default=\"gas-phase combustion of released volatiles\"}",
        "highlight": "{argument name=\"stage_3_highlight\" default=\"high-temperature region\"}"
      },
      {
        "id": "M4",
        "name": "{argument name=\"stage_4_name\" default=\"Char Oxidation\"}",
        "summary": "{argument name=\"stage_4_summary\" default=\"surface oxidation of the remaining char\"}",
        "highlight": "{argument name=\"stage_4_highlight\" default=\"none\"}"
      },
      {
        "id": "M5",
        "name": "{argument name=\"stage_5_name\" default=\"Emission Formation\"}",
        "summary": "{argument name=\"stage_5_summary\" default=\"formation of NOx, CO, particulate matter\"}",
        "highlight": "{argument name=\"stage_5_highlight\" default=\"emission risk region\"}"
      }
    ]
  },
  "result_region": {
    "enabled": "{argument name=\"result_region_enabled\" default=\"true\"}",
    "label": "{argument name=\"result_region_label\" default=\"Outcome\"}",
    "items": "{argument name=\"result_region_items\" default=\"temperature distribution, combustion efficiency, emission characteristics\"}",
    "position": "rightmost block or bottom-right region, visually separated from stages but stylistically consistent"
  },
  "stage_block_style": {
    "shape": "rounded rectangle (corner radius ~6px) OR stage label + leader line directly attached to the central object",
    "size_per_stage": "consistent across all stages",
    "fill": "very light tint (e.g. #F1F5F9, #ECFEFF) — at most 2 different tints; use a low-saturation warm tint (e.g. #FEF3C7) only for stages whose 'highlight' is non-none",
    "border": "1.2px solid dark gray #334155",
    "title_text": "stage name in bold sans-serif (Helvetica / Inter / Arial / PingFang / Source Han Sans for CJK), 11-12pt",
    "summary_text": "single phrase, 9-10pt regular, no full sentence, no period"
  },
  "connectors": {
    "style": "thin arrows (1.2px) with simple triangle arrowheads, dark gray #334155",
    "rule": "connect stages in causal / temporal order, no crossing, no decorative curves; only label arrows when carrying a named quantity (e.g. 'heat flux', 'O2', 'volatiles')",
    "feedback_loop": {
      "enabled": "{argument name=\"feedback_loop\" default=\"false\"}",
      "rule": "if true, add one curved dashed arrow looping back, labeled e.g. 'self-propagating heat'"
    }
  },
  "highlight_strategy": {
    "rule": "for stages whose 'highlight' is non-none, apply ONLY a subtle low-saturation tint background (e.g. #FEF3C7 for high-temperature; #FEE2E2 for emission risk). NEVER use flames, smoke, glow, lens flare, or 3D heat-map effects",
    "max_highlighted_stages": 2
  },
  "constraints": {
    "must_keep": [
      "central object visually anchors the figure; stages radiate or flow outward in a stable reading order",
      "white background, no gradient, no decorative pattern",
      "color palette ≤ 3 main colors, must remain readable in grayscale print",
      "only sans-serif typography, no script / handwritten / display fonts",
      "stage labels are short phrases, never full sentences",
      "the figure must look like it came from a journal article, not a popular-science illustration",
      "all arrows aligned, no crossings unless the mechanism genuinely requires it"
    ],
    "avoid": [
      "exaggerated flames, smoke, sparks, glow, lens flare, motion blur",
      "3D rendering, metallic highlights, glossy fills",
      "cartoon mascots, emoji, decorative icons, hand-drawn wobble",
      "photo-realistic photography of equipment, products, or scenery",
      "marketing poster aesthetics, magazine cover aesthetics",
      "fabricated numbers, equations, or chemical formulas not provided by the user",
      "saturated brand-style colors (no neon, no vivid)",
      "watermarks, copyright stamps, vendor logos"
    ]
  }
}
```

### 參數策略

- **必問**：`object_label` / `object_depiction`、階段名、階段順序
- **可默認**：`aspect_ratio`（16:9）、`background`（白色）、`figure_label` / `caption`、配色 tint
- **可隨機**：每個 stage 的 `summary` 措辭（用戶給了大意可學術化潤色）、`highlight` 是否啓用（無明確說明時默認 none）

### 自動補全策略

- 用戶給出現象名 + 階段數但沒說每階段細節 → 反問，**禁止編造不存在的物理 / 化學過程**
- 用戶給出階段名但沒給摘要 → 用學術化短語補全（保持 ≤6 詞）
- 用戶沒說有沒有反饋環 → 默認 `feedback_loop: false`
- 用戶說"中文論文 / 答辯" → 切換標籤爲中文 + 字體 PingFang / 思源黑

## 變體 1：左 → 中 → 右 三段式因果鏈

```json
{
  "type": "三段式因果鏈機製圖",
  "modify": {
    "layout": "左側 = 初始條件 / 觸發因素；中間 = 多階段轉化機制；右側 = 最終結果 / 表徵",
    "rule": "三段之間用粗一些的分隔留白（視覺分組），但保持統一描邊和字體；左右兩側文字精煉到 ≤4 項",
    "use_case": "需要清晰區分'起因 → 過程 → 結果'的機製圖，例如'生物質燃燒 → 多階段反應 → 排放與殘炭'"
  }
}
```

適用：燃燒 / 反應工程、退化老化、損傷演化、臨牀因果通路（學術風）。

## 變體 2：循環 / 自激發機制

```json
{
  "type": "循環自激發機製圖",
  "modify": {
    "layout": "階段排成環形，箭頭沿環順時針方向；中央寫出循環驅動力或關鍵中間產物",
    "annotation": "環上選 1-2 個箭頭加 dashed 樣式標註 'positive feedback' / 'self-propagating'",
    "use_case": "正反饋機制、自催化反應、慢性退化循環"
  }
}
```

適用：自催化、鏈式反應、熱失控、慢性炎症通路。

## 變體 3：多分支競爭路徑

```json
{
  "type": "多分支競爭機製圖",
  "modify": {
    "layout": "中心對象向外分出 2-3 條平行路徑，每條代表一種競爭性機制；末端各自連到不同的結果區",
    "annotation": "每條路徑起點處標註控制條件（temperature / O2 partial pressure / pH 等）",
    "use_case": "需要表達'相同前體在不同條件下走不同機制'的對比型機理圖"
  }
}
```

適用：路徑選擇性反應、相分離、不同溫度區間下的反應主導機制。

## 避免事項

- 用渲染感火焰 / 濃煙 / 爆炸 / 炫光來"裝專業" → 立刻淪爲營銷插畫
- 階段塊大小不一、字號混亂、字體混用襯線 + 無襯線
- 用 emoji 或卡通圖標當階段圖示
- 用飽和 / 霓虹 / 漸變背景代替克制工程色
- 把不存在的化學方程、物理常數、溫度數值塞進圖裏（**嚴格禁止虛構數據**）
- 把"機制示意圖"畫成完整設備剖視圖（應該用 `scientific-schematic.md`）
- 把對比 / 多工況結果（應該用 `multi-condition-comparison.md`）混進機製圖
