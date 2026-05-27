# 多方法 Qualitative 對比網格模板

本文件用於生成"論文 qualitative results 對比網格"：

- CV 論文：多方法分割 / 檢測 / 生成結果對比
- NLP 論文：多方法生成文本對比（截圖式）
- 3D / 重建論文：多方法重建結果對比
- Diffusion / 圖像生成論文：不同 prompt × 不同方法的網格
- Ablation study 的視覺對比

特徵：

- 嚴格的網格：行 = 樣本 / 輸入，列 = 方法（含 GT 和 Ours）
- 列首行有方法名（帶 citation）
- Ours 列通常加邊框 / 高亮
- 單元格內容統一（圖片 / 文本片段 / heatmap）
- 網格之間留細 gap，整體白底
- 可附 caption 解釋

## 適用範圍

- 論文 qualitative results section
- Ablation study 的視覺對比
- 頂會 supplementary 大網格圖
- 綜述論文 method gallery
- 答辯 PPT 對比頁

## 何時使用

- 用戶提到 "qualitative / 對比圖 / comparison grid / methods comparison / ablation visual"
- 用戶希望「行=樣本、列=方法的標準論文對比網格」

不要使用：

- 用戶要的是「雙產品消費對比」 → 用 `infographics/comparison-infographic.md`
- 用戶要的是「多人頭像網格」 → 用 `avatars-and-profile/character-grid-portrait.md`
- 用戶要的是「數據圖表」 → 用 `academic-figures/publication-chart.md`
- 用戶要的是「視頻幀序列」 → 用 `storyboards-and-sequences/`

## 缺失信息優先提問順序

1. 行數（樣本數，建議 3-6 行）
2. 列數（方法數，建議 3-6 列，含 Input/GT 和 Ours）
3. 每列的方法名（含 citation 引用，如 "Method A [12]"）
4. 單元格內容類型（RGB 圖 / mask / heatmap / 文本片段 / 3D 渲染）
5. 是否要 row labels（左側標"Sample 1 / 2 / ..."或"Easy / Medium / Hard"）
6. 是否要在某些位置加紅框 zoom-in（focus area）
7. 是否要 caption 注釋

## 主模板：Qualitative comparison grid (M rows × N cols)

📖 描述

整張圖是嚴格的 M×N 網格：每一行是一個樣本，每一列是一個方法。最左可加 row labels，最上一行是列首（方法名 + citation）。Ours 列加邊框高亮，可在某些 cell 內畫紅色 zoom-in 框。

📝 提示詞

```json
{
  "type": "Qualitative Comparison Grid（論文級多方法多樣本對比網格）",
  "goal": "生成一張可直接放進論文 qualitative results 章節的網格對比圖，要求嚴格對齊、清晰列首、Ours 高亮、可單色印刷可讀",
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect_ratio\" default=\"4:3\"}",
    "background": "white #FFFFFF",
    "outer_padding": "40px"
  },
  "grid": {
    "rows": "{argument name=\"rows\" default=\"4\"}",
    "cols": "{argument name=\"cols\" default=\"5\"}",
    "cell_size_rule": "all cells identical size; gap between cells 4-6px",
    "cell_aspect": "{argument name=\"cell_aspect\" default=\"square\"}"
  },
  "headers": {
    "column_headers": {
      "enabled": true,
      "items": [
        { "id": "C1", "label": "{argument name=\"col1_name\" default=\"Input\"}" },
        { "id": "C2", "label": "{argument name=\"col2_name\" default=\"Method A [12]\"}" },
        { "id": "C3", "label": "{argument name=\"col3_name\" default=\"Method B [34]\"}" },
        { "id": "C4", "label": "{argument name=\"col4_name\" default=\"Method C [56]\"}" },
        { "id": "C5", "label": "{argument name=\"col5_name\" default=\"Ours\"}", "highlight": true }
      ],
      "style": "centered above each column, sans-serif bold 11pt, citations in smaller superscript or in [brackets]"
    },
    "row_labels": {
      "enabled": "{argument name=\"row_labels_enabled\" default=\"true\"}",
      "items": [
        "{argument name=\"row1_label\" default=\"Sample 1\"}",
        "{argument name=\"row2_label\" default=\"Sample 2\"}",
        "{argument name=\"row3_label\" default=\"Sample 3\"}",
        "{argument name=\"row4_label\" default=\"Sample 4\"}"
      ],
      "style": "rotated 90° on the left margin OR placed above each row in italic 10pt"
    }
  },
  "cell_content": {
    "type": "{argument name=\"content_type\" default=\"rgb_image\"}",
    "options_explained": {
      "rgb_image": "natural images / photos",
      "segmentation_mask": "color-coded mask overlays",
      "heatmap": "viridis / jet style heatmap",
      "depth_map": "grayscale or turbo colormap",
      "text_snippet": "rendered text block in a code-like box",
      "3d_render": "rendered 3D mesh from a fixed viewpoint",
      "side_by_side": "two halves: input | result"
    },
    "consistency_rule": "all cells in the same row should depict the SAME underlying sample so the comparison is fair"
  },
  "highlights": {
    "ours_column": {
      "enabled": true,
      "style": "thicker border 1.5px in deep red / accent color (e.g. #DC2626) around each Ours cell"
    },
    "zoom_in_boxes": {
      "enabled": "{argument name=\"zoom_in_enabled\" default=\"false\"}",
      "rule": "if true, draw small red rectangles inside cells highlighting interesting regions; same red box appears at the same coordinate across the row to make comparison fair",
      "callout_style": "optional zoomed crop placed below the row, connected by thin lines"
    }
  },
  "caption": {
    "enabled": "{argument name=\"caption_enabled\" default=\"true\"}",
    "label": "{argument name=\"figure_label\" default=\"Figure 4.\"}",
    "text": "{argument name=\"caption_text\" default=\"Qualitative comparison with state-of-the-art methods. Our method (last column) preserves fine details and reduces artifacts.\"}",
    "style": "below the grid, italic serif or compact sans-serif, justified, smaller font"
  },
  "constraints": {
    "must_keep": [
      "all cells identical size and tightly aligned",
      "white or near-white background, no gradient",
      "column headers clearly above each column with citation",
      "Ours column visually distinguished (border / shaded header)",
      "row content depicts the same sample across all methods",
      "if zoom-in boxes used, position is identical across the row",
      "labels in English by default, no mixing with Chinese unless requested",
      "must remain interpretable in grayscale print"
    ],
    "avoid": [
      "different cell sizes between rows / columns",
      "random colors as cell backgrounds (cells are content, not decoration)",
      "missing citations on baseline methods",
      "ours column hidden or unmarked",
      "rotated cells / tilted layouts (must be axis-aligned)",
      "decorative emoji / cartoon icons inside cells",
      "varying content type per row (e.g. one row mask, next row RGB) without explicit row label",
      "more than 6 cols (becomes unreadable in two-column paper format)"
    ]
  }
}
```

### 參數策略

- **必問**：`rows`、`cols`、每列方法名（含 citation）、`content_type`
- **可默認**：`aspect_ratio`（4:3）、`row_labels_enabled`（true）、`caption_enabled`（true）
- **可隨機**：列間 gap 精確像素、字體大小（在合理範圍內）

### 自動補全策略

- 用戶給 "我有 4 個方法 + ours" → 自動加上 Input 列（成爲 5 列：Input / M1 / M2 / M3 / M4 / Ours，共 6 列）
- 用戶沒給 row labels → 默認用 "Sample 1, 2, 3, ..." 或反問是否要分難易度
- 用戶沒給 citation → 提示 "建議加 [n] 引用佔位" 而不是擅自編造
- 用戶說 "ablation study" → 列名改爲 "w/o A", "w/o B", "Full" 等消融變體
- 用戶說 "需要 zoom-in" → 啓用 `zoom_in_enabled` 並提示需要標 region 坐標

## 變體 1：純文本 NLP qualitative 對比

```json
{
  "type": "NLP qualitative comparison grid",
  "modify": {
    "content_type": "text_snippet",
    "cell_aspect": "tall rectangle (e.g. 2:3 portrait)",
    "cell_styling": "monospace font in cell, black text on white, with key tokens highlighted in colored boxes",
    "row_labels": "input prompt / question 顯示在每一行最左",
    "use_case": "對比多個 LLM / 翻譯 / summarization 輸出"
  }
}
```

適用：NLP 論文生成結果對比、機器翻譯質量對比。

## 變體 2：分割 mask 多列對比（含彩色 overlay）

```json
{
  "type": "Segmentation mask comparison grid",
  "modify": {
    "content_type": "segmentation_mask",
    "cell_styling": "RGB image base + 半透明 mask 疊加；每類顏色一致；GT 列與 Ours 列容易對比",
    "extras": "在 cells 下方可加 'mIoU: 0.78' 等定量指標小字",
    "color_legend": "圖右下角附小圖例：顏色 → 類別名"
  }
}
```

適用：語義分割、實例分割、醫學影像分割論文。

## 變體 3：Diffusion / 生成模型 prompt × method 矩陣

```json
{
  "type": "Generation prompt × method matrix",
  "modify": {
    "rows": "different text prompts (left labels show prompt text)",
    "cols": "different generation methods or different sampling steps",
    "cell_content": "generated images, all from same prompt across the row",
    "extras": "可在 ours 列加 '↑ +0.3 CLIP score' 小標"
  }
}
```

適用：擴散模型、文本到圖像生成、圖像編輯方法對比。

## 避免事項

- 單元格大小不一致 → 完全失去對比意義
- 缺 citation → 同行評審會扣分
- Ours 列沒有標記 → 讀者不知道哪個是你的
- 同一行的樣本不一致（這一行第一列是貓，第二列是狗）→ 對比不成立
- 添加漸變 / 陰影 / 圓角過大 → 不像論文
- 用 emoji 或 cartoon 裝飾 → 嚴重不專業
- 列數 > 6 → 論文雙欄排版下看不清
- 沒有 caption → 讀者不知道這張圖想說什麼
- zoom-in 框位置在不同 cell 不一致 → 對比不公平
