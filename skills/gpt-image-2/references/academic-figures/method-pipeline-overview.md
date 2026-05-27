# 論文方法 Pipeline 總覽圖模板

本文件用於生成"論文 method 章節首頁那張總覽圖"：

- 頂會論文 method 章節首圖（CVPR / NeurIPS / ICLR / ACL / SIGGRAPH 等）
- 系統總覽 / pipeline figure
- 綜述論文 framework 概念圖
- 實驗裝置 / 數據流總覽
- 答辯 PPT 方法概覽

特徵：

- 橫向 3-6 個 stage 塊
- 每個 stage 之間有清晰的有向數據流
- 每個 stage 有：階段名稱 + 簡化插圖 + 輸入 / 輸出小標
- 整體白底 / 淺灰底，黑色或深灰主線條
- 出版物字體（Helvetica / Inter / Arial），克制的輔助色
- **極簡、幾何精確、可單色印刷可讀**

## 適用範圍

- 論文 method overview / framework figure
- 綜述論文 pipeline 總覽
- 系統總覽圖（"我們的方法分 4 步：..."）
- 數據流 / 信號流總覽
- 實驗流程總覽

## 何時使用

- 用戶提到 "論文 / paper / method / pipeline / framework / overview / 綜述 / 頂會 / arXiv"
- 用戶希望視覺「極簡、白底、黑線、幾何精確、像 CVPR 論文那種總覽圖」
- 用戶已有具體的 stage 描述

不要使用：

- 用戶要的是「神經網絡架構圖」（layer 塊 + tensor shape）→ 用 `academic-figures/neural-network-architecture.md`
- 用戶要的是「概念 / 原理示意圖」（自由度高的科學示意）→ 用 `academic-figures/scientific-schematic.md`
- 用戶要的是「步驟教程」（插畫感、溫暖）→ 用 `infographics/step-by-step-infographic.md`
- 用戶要的是「工程系統架構圖」（暗色 + 半透明色塊）→ 用 `technical-diagrams/system-architecture.md`
- 用戶要的是「業務流程圖」 → 用 `technical-diagrams/flowchart-decision.md`

## 缺失信息優先提問順序

1. 方法 / 系統的總名稱（寫在圖標題或圖註裡）
2. 階段數（建議 3-6 個，超過 6 個考慮分層）
3. 每個階段的：名稱 + 主操作 + 輸入 + 輸出
4. 數據形態（圖像 / 文本 / 點雲 / 音頻 / 多模態）—— 決定 stage 內的簡化插圖
5. 是否有跳連 / 反饋環 / 多分支
6. 比例（橫向 16:9 或 2:1，符合論文雙欄格式）
7. 是否需要英文標籤（論文圖通常英文）

## 主模板：橫向 N 階段方法 pipeline 圖

📖 描述

整張圖橫向流動：從最左邊的輸入開始，依次經過 3-6 個矩形 / 圓角矩形階段塊，每個塊內有簡化插圖 + 階段名 + 輸入輸出小標，箭頭串聯，最右邊輸出結果。整體克制、對齊嚴格、幾何精確。

📝 提示詞

```json
{
  "type": "學術論文方法 Pipeline 總覽圖（method overview figure）",
  "goal": "生成一張可直接放進頂會論文 method 章節首頁的 pipeline 總覽圖，要求極簡、白底、幾何精確、出版物級可讀",
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect_ratio\" default=\"16:9\"}",
    "background": "pure white #FFFFFF or very light gray #FAFAFA",
    "outer_padding": "60px around the diagram",
    "render_quality": "vector-clean look, anti-aliased edges, sharp text"
  },
  "title_caption": {
    "figure_label": "{argument name=\"figure_label\" default=\"Figure 1.\"}",
    "caption": "{argument name=\"caption\" default=\"Overview of our proposed pipeline.\"}",
    "position": "bottom-center, italic serif or compact sans-serif, smaller font size"
  },
  "input": {
    "label": "{argument name=\"input_label\" default=\"Input Image\"}",
    "thumbnail": "{argument name=\"input_thumbnail\" default=\"a small representative thumbnail (e.g. an RGB image, a text snippet, a point cloud)\"}",
    "position": "leftmost, vertically centered"
  },
  "stages": {
    "count": "{argument name=\"stage_count\" default=\"4\"}",
    "items": [
      {
        "id": "S1",
        "name": "{argument name=\"stage_1_name\" default=\"Feature Extractor\"}",
        "icon_or_glyph": "{argument name=\"stage_1_glyph\" default=\"a stack of 3 small horizontal bars representing CNN feature maps\"}",
        "sub_label": "{argument name=\"stage_1_sub\" default=\"ResNet-50\"}"
      },
      {
        "id": "S2",
        "name": "{argument name=\"stage_2_name\" default=\"Multi-scale Encoder\"}",
        "icon_or_glyph": "{argument name=\"stage_2_glyph\" default=\"a small triangle / pyramid representing multi-scale\"}",
        "sub_label": "{argument name=\"stage_2_sub\" default=\"FPN-style\"}"
      },
      {
        "id": "S3",
        "name": "{argument name=\"stage_3_name\" default=\"Cross-attention Decoder\"}",
        "icon_or_glyph": "{argument name=\"stage_3_glyph\" default=\"two interleaved arrows representing cross-attention\"}",
        "sub_label": "{argument name=\"stage_3_sub\" default=\"Transformer\"}"
      },
      {
        "id": "S4",
        "name": "{argument name=\"stage_4_name\" default=\"Prediction Head\"}",
        "icon_or_glyph": "{argument name=\"stage_4_glyph\" default=\"a small grid representing dense prediction\"}",
        "sub_label": "{argument name=\"stage_4_sub\" default=\"MLP × 2\"}"
      }
    ]
  },
  "output": {
    "label": "{argument name=\"output_label\" default=\"Predicted Mask\"}",
    "thumbnail": "{argument name=\"output_thumbnail\" default=\"a small representative output (e.g. a segmentation mask, a 3D model, a generated image)\"}",
    "position": "rightmost, vertically centered"
  },
  "stage_block_style": {
    "shape": "rounded rectangle (corner radius ~6px)",
    "size_per_stage": "around 120px wide × 80px tall, all stages identical size",
    "fill": "very light tint (e.g. #F1F5F9, #ECFEFF, #FEF9C3) — at most 2 different tints used to group stages by category",
    "border": "1.2px solid dark gray #334155",
    "title_text": "stage name in bold sans-serif (Helvetica / Inter / Arial), 11-12pt, top-center inside block",
    "icon_position": "centered inside block, takes ~50% of block height",
    "sub_label_text": "sub-label in italic gray, below stage name"
  },
  "connectors": {
    "style": "thin black arrows (1.2px) with simple triangle arrowheads",
    "rule": "horizontal flow left → right; small label above arrow only when carrying intermediate data type (e.g. 'feature map H/4 × W/4 × 256')",
    "skip_connections": {
      "enabled": "{argument name=\"skip_connections\" default=\"false\"}",
      "rule": "if true, draw curved arrows that arc above the main flow with dashed style, label them 'skip' / 'residual'"
    }
  },
  "extras": {
    "loss_branch": {
      "enabled": "{argument name=\"loss_branch_enabled\" default=\"false\"}",
      "label": "{argument name=\"loss_branch_label\" default=\"L = L_cls + λ L_reg\"}",
      "rule": "if enabled, draw a small dashed branch from output back to a 'Loss' box, formula in italic"
    },
    "color_legend": {
      "enabled": "{argument name=\"color_legend_enabled\" default=\"false\"}",
      "rule": "if multiple stage tints are used, add a tiny legend bottom-right explaining each color group"
    }
  },
  "constraints": {
    "must_keep": [
      "all stage blocks identical size and vertically aligned",
      "white or near-white background, no gradient, no decoration",
      "only sans-serif typography, no script / handwritten / display fonts",
      "color palette ≤ 4 colors total, must remain readable in grayscale print",
      "input thumbnail and output thumbnail same size, both have a thin border",
      "arrows must not overlap stage blocks; labels must not collide with arrows",
      "use English labels by default unless user requested otherwise",
      "the figure should look like it came directly from a CVPR / NeurIPS PDF"
    ],
    "avoid": [
      "3D effects, drop shadows, gradients, glossy fills",
      "cartoon icons, emoji, hand-drawn wobble",
      "saturated colors (no neon, no vivid)",
      "Helvetica + serif mixed in same diagram",
      "decorative background patterns / textures",
      "illustrative photo backgrounds inside stage blocks",
      "stage blocks of unequal size or unaligned baselines",
      "Chinese mixed with English labels unless explicitly bilingual"
    ]
  }
}
```

### 參數策略

- **必問**：`stage_count`、每個 stage 的名稱
- **可默認**：`aspect_ratio`（16:9）、`background`（白色）、`figure_label` / `caption`、stage 塊尺寸 / 顏色
- **可隨機**：每個 stage 內的 `icon_or_glyph` 具體造型（用戶沒指定時可推斷）

### 自動補全策略

- 用戶給出方法名和"我有 4 個 stage"但沒說每 stage 是什麼 → 反問（不能瞎編算法細節）
- 用戶給出 stage 名但沒給 sub_label → 留空或自動推斷（可推斷時填上 "ResNet-50" 這種典型選項）
- 用戶沒說有沒有跳連 → 默認 `skip_connections: false`
- 用戶沒說有沒有 loss → 默認 `loss_branch: false`（只在用戶明確要 training pipeline 時才加）
- 用戶說"中文論文" / "答辯" → 切換標籤爲中文 + 字體 PingFang / 思源黑

## 變體 1：雙行多分支 pipeline

```json
{
  "type": "雙行多分支 pipeline 圖",
  "modify": {
    "layout": "上下兩行 stages 平行流動；中間用 fusion block 匯合",
    "use_case": "多模態融合方法（如 visual + text，或 RGB + depth）",
    "rule": "上行處理一種模態、下行處理另一種，最後中央匯合到 fusion block 再到輸出"
  }
}
```

適用：多模態、雙流網絡、teacher-student 方法。

## 變體 2：訓練 + 推理兩套 pipeline 對照

```json
{
  "type": "Training vs Inference 對照 pipeline 圖",
  "modify": {
    "layout": "上下兩行：上行 'Training Phase'（含 loss、ground truth 輸入、梯度回流），下行 'Inference Phase'（僅前向、輕量化）",
    "annotation": "左側用大括號標 'Training' / 'Inference'",
    "use_case": "需要明確區分訓練和推理流程的方法"
  }
}
```

適用：知識蒸餾、自監督預訓練、半監督方法。

## 變體 3：迭代 / Recurrent pipeline

```json
{
  "type": "迭代式 / 循環 pipeline 圖",
  "modify": {
    "layout": "stages 橫向，但最後一個 stage 有一條曲線箭頭回到第二個 stage，形成循環",
    "annotation": "在循環箭頭上標 'iterate × N' 或 'until convergence'",
    "use_case": "迭代優化、擴散去噪、Diffusion model timestep 流"
  }
}
```

適用：擴散模型、迭代細化方法、能量模型。

## 變體 4：工程類技術路線圖（左 / 中 / 右 三段式）

```json
{
  "type": "工程類技術路線圖（engineering research roadmap）",
  "modify": {
    "layout": "左 / 中 / 右 三段式：左側 = 研究對象與背景（簡化線稿示意），中間 = 多步驟分析路徑（4-7 個學術化模塊），右側 = 輸出與結果導向（3-4 個短語化結論方向）",
    "rule": "三段寬度比約 2:5:2；左右兩側用學術化短語 + 簡化線稿，禁止商業圖標 / 寫實渲染 / 火焰濃煙特效；中間分析路徑模塊大小統一、對齊嚴格、連接關係簡潔",
    "tone": "更接近高質量 Graphical Abstract 與方法路線圖融合的工程論文圖，不是 office 流程框圖，也不是商業海報",
    "stage_naming_examples_for_engineering": [
      "fuel / material characterization",
      "kinetics / thermodynamics analysis",
      "experimental setup OR numerical model",
      "boundary / operating condition design",
      "process simulation or experiment",
      "field / behavior evaluation",
      "emission / performance analysis"
    ],
    "color_palette": "deep blue / slate blue / charcoal as main; one low-saturation amber accent for high-temperature or risk modules ONLY when user signaled it; ≤ 3 main colors total",
    "data_authenticity": "if no real data is provided, do NOT invent equations, kinetic constants, temperature values, emission factors, or chart numbers; render module summaries as qualitative phrases only",
    "use_case": "能源動力 / 燃燒 / 熱能工程 / 環境工程 / 材料 / 化工 等工程方向的開題答辯、綜述論文、Methods 章節首圖；區別於 CS/CV pipeline 的橫向 stage 塊結構"
  }
}
```

適用：能源動力、燃燒、熱能工程、環境工程、化工、材料等工程方向的研究路線圖與高質量 Graphical Abstract 融合需求；CS/CV/ML 類首選主模板。

## 避免事項

- 用漸變 / drop shadow / 玻璃質感 → 立刻 "PPT 風" 而不是論文風
- stage 塊大小不一 / 高度不齊
- 用 emoji / 卡通圖標當 stage glyph
- 用 Comic Sans / 手寫體當標題字體
- 顏色超過 4 種或飽和度過高
- 輸入輸出縮略圖分辨率明顯不同
- 箭頭穿過 stage 塊或標籤碰撞
- 中英文標籤混用（除非顯式雙語）
- 把"對比方法"也畫在同一 pipeline 上（應該用 `qualitative-comparison-grid.md`）
- 把網絡層細節（卷積核大小、激活函數）塞進 pipeline 圖（這屬於 `neural-network-architecture.md` 的範疇）
