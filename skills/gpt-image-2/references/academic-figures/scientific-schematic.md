# 概念 / 原理示意圖模板

本文件用於生成"科學概念 / 原理 / 實驗裝置"示意圖：

- 物理 / 化學 / 生物 實驗裝置圖
- 算法 / 數學 概念示意（如 attention 機制、流形、坐標系）
- 機制 / 通路 / 過程示意（細胞通路、化學反應）
- 教科書風原理圖
- Nature / Science 綜述裏的"我們這個領域大概是這樣工作的"概念圖

特徵：

- **自由度極高**：每張科學示意圖都長得不一樣，不像 pipeline / network 那樣可被網格化
- 極簡白底 / 淺灰底
- 幾何精確：標尺 / 坐標軸 / 角度對齊
- 簡化但非卡通的風格（科學嚴謹）
- 標註線 + 編號 + 公式
- 出版物字體（Helvetica / Inter / Computer Modern 數學公式）

> 設計判斷：**這類圖自由度極高、變化豐富，強行 JSON 反而限制構圖**。本模板採用「**結構化自然語言提示詞 + 關鍵參數 + 示例**」的混合形式，把控約束但不鎖死構圖。

## 適用範圍

- 實驗裝置示意（光學 / 力學 / 流體 / 化學反應器）
- 生物機制 / 通路 / 解剖示意
- 算法 / 數學概念可視化（attention / convex set / manifold / 坐標變換）
- 物理過程示意（波 / 場 / 粒子軌跡）
- 綜述論文裡"領域 big picture"概念圖

## 何時使用

- 用戶提到 "schematic / illustration / 示意圖 / 原理圖 / 實驗裝置 / 機製圖 / Nature 風 / 教科書風"
- 用戶希望"自由構圖、白底、幾何精確、有學術感"
- 用戶的內容是「單一概念 / 單一裝置 / 單一機制」而非「pipeline / 網絡 / 多方法」

不要使用：

- 用戶要的是「方法 pipeline」（多 stage 流）→ 用 `academic-figures/method-pipeline-overview.md`
- 用戶要的是「神經網絡架構」 → 用 `academic-figures/neural-network-architecture.md`
- 用戶要的是「數據圖表」 → 用 `academic-figures/publication-chart.md`
- 用戶要的是「手繪卡通示意」 → 用 `infographics/hand-drawn-infographic.md`
- 用戶要的是「兒童科普」 → 用 `scenes-and-illustrations/picture-book-scene.md`

## 缺失信息優先提問順序

1. 要解釋什麼概念 / 裝置 / 機制？（一句話定義）
2. 主體是什麼？（中央那個核心實體——分子 / 細胞 / 透鏡 / 反應器 / 矩陣 / ...）
3. 配套元素？（標註線 / 公式 / 坐標 / 參數）
4. 風格傾向（Nature 綜述風 / 教科書風 / 頂會論文嚴肅風 / BioRender 友好風）
5. 是否需要數學公式標註？需要的話哪些？
6. 是否中英文（默認英文）
7. 比例（論文常用 1:1、4:3、16:9）

## 主模板：科學概念 / 原理示意圖（自然語言結構化）

📖 描述

整張圖圍繞一個中心概念 / 裝置 / 機制展開，用極簡幾何元素 + 標註線 + 公式 + 簡潔輔助色構成，達到出版物級的清晰度和嚴謹感。

📝 提示詞（結構化自然語言模板）

```
A scientific schematic illustration in the style of {argument name="reference_style" default="a Nature / Science methods figure"}.

CORE CONCEPT
The figure illustrates: {argument name="core_concept" default="how cross-attention works between a query sequence and a key/value sequence"}.

CENTRAL SUBJECT
The visual centerpiece is {argument name="central_subject" default="a 2D matrix grid representing query × key dot products, with arrows feeding in queries from the left and keys from the top"}.

SUPPORTING ELEMENTS
{argument name="supporting_elements" default="(1) a softmax curve diagram on the right showing how raw scores become attention weights; (2) a small inset showing the resulting weighted sum producing the output"}.

Each supporting element is positioned with deliberate spacing and connected to the central subject by thin labeled arrows or leader lines.

ANNOTATIONS
- Use leader lines (thin black, no arrowheads or tiny arrowheads) to label specific parts of the central subject.
- Each label is in {argument name="label_font" default="11pt sans-serif (Helvetica / Inter / Arial)"}.
- {argument name="annotation_count" default="4-6"} labels total — do NOT overcrowd.
- Use lowercase italic letters (a, b, c) for sub-figure labels in the top-left of each panel.

EQUATIONS
{argument name="equations_list" default="Show one or two key equations near the relevant region. Use Computer Modern / serif math font, italic variables. Example: Attn(Q,K,V) = softmax(QK^T / √d_k) V"}

Equations should be small but readable, placed adjacent to the part of the figure they explain (not floating in the corner).

COLOR PALETTE
- Limit total to {argument name="color_count" default="3-4"} muted, academic colors:
  - {argument name="primary_color" default="deep blue #1E3A8A"} — for the central subject
  - {argument name="secondary_color" default="warm orange #D97706"} — for the highlighted / contrasting flow
  - {argument name="neutral_color" default="medium gray #475569"} — for annotation lines and supporting structures
  - white background, near-white shading for sub-regions
- The figure must remain readable when printed in grayscale: rely on shape and labels, not color alone.

LAYOUT
- {argument name="layout_style" default="single-panel, central subject occupies ~60% of the canvas, supporting elements arranged around it"}.
- Generous whitespace (~25% of canvas), rigorous alignment to an invisible grid.
- Aspect ratio: {argument name="aspect_ratio" default="4:3"}.

STYLE ENFORCEMENT
- Crisp vector-clean lines (no anti-aliasing artifacts, no jitter)
- All shapes are geometrically precise (perfect circles, exact angles)
- All text typeset, NEVER hand-drawn lettering
- Background pure white #FFFFFF or very light gray
- NO 3D extrusion, NO drop shadow, NO gradient fill, NO glossy highlight
- NO cartoon characters, NO emoji, NO decorative ornaments
- Should look like it was generated with TikZ / Inkscape / Adobe Illustrator for a peer-reviewed publication

CAPTION (optional, drawn below figure)
{argument name="caption_text" default="Figure 2. Illustration of the cross-attention mechanism. Queries (Q) attend to keys (K) via scaled dot-product, producing attention weights that aggregate values (V)."}
```

### 參數策略

- **必問**：`core_concept`、`central_subject` 至少一句話描述
- **可默認**：`reference_style`（Nature methods 風）、`color_count`（3-4）、配色三件套（深藍 + 橙 + 灰）、`label_font`、`aspect_ratio`
- **可隨機**：annotation 擺放角度、leader line 走向（應避開關鍵內容）、equations 是否啓用

### 自動補全策略

- 用戶給"我要畫 attention 機制示意圖"但沒說細節 → 自動用 default 給出 cross-attention 示意，問用戶是否還需要 self-attention 單獨一張
- 用戶給"光學雙縫幹涉實驗" → central_subject = 雙縫擋板 + 屏幕 + 入射光，supporting = 幹涉條紋小圖 + 公式 d sinθ = mλ
- 用戶給"細胞 receptor 信號通路" → 用 BioRender 友好風：圓角細胞膜 + 受體 + 配體 + 內部信號鏈
- 用戶沒給 reference_style：根據領域猜——CV/ML 用 "頂會論文風"；生物用 "BioRender / Nature methods 風"；物理用 "教科書 + 公式風"
- 用戶說"我要無英文，全中文" → 切換 label_font 爲思源黑 / 宋體 + 公式保留 LaTeX 數學體

## 變體 1：實驗裝置示意圖（光學 / 化學）

```
Modify the main template:

CENTRAL SUBJECT
A precise schematic of an experimental apparatus, drawn in side view (orthographic projection).

LAYOUT
- Equipment components arranged from left to right along the optical / fluid path:
  light source / reactant inlet → first optical / chemical element → second element → ... → detector / outlet
- Components shown as simplified geometric primitives:
  - Lasers / lamps: small box with arrows indicating beam direction
  - Lenses: standard biconvex / planoconvex symbol (two arcs)
  - Mirrors: thin angled lines with hatching on the back
  - Reactors: round-bottom flask outline
  - Detectors: rectangular box with diagonal corner stripes
- Beam / fluid path drawn as a thin colored line (e.g. red for light, blue for fluid)

ANNOTATIONS
- Each component labeled with its role and (if relevant) a parameter (e.g. f = 50mm, λ = 532nm)
- Arrows show direction of light / flow

VIBE
Like a JOSA / Optics Letters experimental setup figure, or like a chemistry textbook reaction apparatus.
```

適用：光學實驗、化學反應裝置、流體 / 力學裝置、半導體製造流程示意。

## 變體 2：生物 / 醫學機制示意（BioRender 風）

```
Modify the main template:

CENTRAL SUBJECT
A simplified biological structure (cell membrane / cell / tissue / organ / molecule).

STYLE
- BioRender-friendly: rounded organic shapes, slightly stylized but anatomically reasonable
- Color-coded biology palette: warm membrane (peach / coral), cool nucleus / organelles (blue / purple), bright signaling molecules (yellow / green)
- 3D suggestion via subtle shading (single-direction soft shading, no harsh highlights)

ANNOTATIONS
- Each structure labeled with its biological name (italic Latin / standard nomenclature)
- Signaling pathways drawn as arrows with mechanism keywords ("phosphorylation", "binding", "translocation")
- If multi-step, number each step and provide a brief side caption

VIBE
Like a Cell / Nature review pathway figure, balanced between scientific accuracy and visual approachability.
```

適用：分子生物學通路、細胞機制、解剖示意、藥物作用機制。

## 變體 3：數學 / 算法概念可視化

```
Modify the main template:

CENTRAL SUBJECT
A mathematical / algorithmic concept rendered as geometry:
- vectors as arrows, matrices as grids, functions as curves, manifolds as surfaces
- coordinate systems with labeled axes (x, y, z), origin marked

STYLE
- Clean TikZ / Asymptote aesthetic
- Heavy use of LaTeX-rendered equations integrated into the figure
- Greek letters and mathematical symbols throughout
- Sparingly use color — usually 2 colors (black + one accent) to highlight what's being discussed

ANNOTATIONS
- Equation snippets next to relevant geometry
- Brief textual descriptions on the side ("optimal transport plan minimizes ...")
- Sub-figure labels (a), (b), (c) for multi-panel concept figures

VIBE
Like a figure from "Convex Optimization" by Boyd, or from a SIGGRAPH technical paper.
```

適用：優化理論、幾何 / 拓撲、概率分布、信號處理、計算機圖形數學基礎。

## 避免事項

- 卡通化、誇張化的元素 → 失去科學嚴謹感
- 漸變 / 玻璃質感 / drop shadow → 像 PPT 不像論文
- 顏色超過 4 種 / 高飽和 / 霓虹色
- 公式用非數學字體（必須斜體變量 + serif 數學體）
- 中英文混排（除非顯式雙語）
- 裝飾性背景紋理 / 圖案
- 標註線穿過主體 / 標籤碰撞
- 用 emoji 當生物 / 化學元素圖標
- 多個互不相關概念塞在一張圖（應拆分）
- 模糊或低分辨率（論文圖必須矢量級清晰）
- 自由手繪風的"草圖感" → 用 `infographics/hand-drawn-infographic.md` 才對，本模板必須幾何精確
