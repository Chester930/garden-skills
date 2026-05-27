# Publication-Ready 數據圖表模板

本文件用於生成"論文 / 報告裡出現的標準數據圖表"：

- Bar chart / grouped bar chart（消融實驗、方法對比）
- Line chart / 訓練曲線（loss / accuracy 隨 epoch）
- Scatter plot（性能-效率 trade-off）
- Box plot / Violin plot（統計分布）
- Heatmap（confusion matrix / attention map / 相關性矩陣）

特徵：

- matplotlib / seaborn / R ggplot2 出版物風
- 含坐標軸 + 標籤 + 單位 + 圖例 + 誤差棒 + 顯著性標記
- 字體 ≥ 10pt（確保打印可讀）
- 配色克制（≤ 6 色），可單色印刷
- 網格線極淡或無

> ⚠️ 重要免責聲明：**本模板生成的是"出版級圖表的視覺呈現"，不是真實數據可視化**。GPT Image 2 不能保證坐標和數據的精確對應。
>
> - 如果你需要"展示一張論文圖表的樣子" / "做封面 / hero 配圖" → 用本模板
> - 如果你需要"用真實數據生成可發表的圖表" → 請用 matplotlib / seaborn / ggplot2 / Plotly

## 適用範圍

- 論文方法對比 chart 的視覺示例
- 教學 slide 中"看一眼這個圖就懂"的演示圖
- Blog / 公衆號配圖 — "我們的方法在這個 chart 上表現"
- 投資人 deck 中的"數據 mock"
- 演示用、可視化教學用的圖表

## 何時使用

- 用戶提到 "publication chart / matplotlib 風 / seaborn 風 / 論文圖表 / bar chart / line chart / scatter / heatmap / confusion matrix"
- 用戶希望「白底、克制、可單色、像 NeurIPS 論文那種圖表」
- 用戶**明確知道**這只是視覺呈現，不依賴坐標精度

不要使用：

- 用戶要的是「真實數據可視化產出」 → 推薦 matplotlib / seaborn / Plotly
- 用戶要的是「KPI 儀錶盤 / 數據回顧」 → 用 `infographics/kpi-dashboard-infographic.md`
- 用戶要的是「商業 PPT 數據頁」 → 用 `slides-and-visual-docs/visual-report-page.md`
- 用戶要的是「手繪風信息圖」 → 用 `infographics/hand-drawn-infographic.md`

## 缺失信息優先提問順序

1. 圖表類型（bar / line / scatter / box / violin / heatmap / pie）
2. 主題（"我們方法在 ImageNet 上的 accuracy vs baselines"）
3. X 軸和 Y 軸名稱 + 單位
4. 數據系列數量（單一系列 / 多系列）
5. 是否有誤差棒、顯著性標記 *
6. 配色基調（學術克制 / 強調對比 / 黑白單色）
7. 圖標題 + caption（論文 figure 一般有 caption）

## 主模板：Publication-Ready Bar Chart（默認）

📖 描述

整張圖是一張標準學術 bar chart：橫軸爲方法 / 類別，縱軸爲指標，多個方法對比，含誤差棒、顯著性 *、圖例。整體白底，sans-serif 字體，限定配色。

📝 提示詞

```json
{
  "type": "Publication-Ready Bar Chart（學術出版級條形圖）",
  "goal": "生成視覺呈現一張論文 / 報告中的 bar chart，要求白底、克制、專業、可單色印刷",
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect_ratio\" default=\"4:3\"}",
    "background": "white #FFFFFF",
    "outer_padding": "60px"
  },
  "title": {
    "text": "{argument name=\"title\" default=\"Accuracy on ImageNet-1K\"}",
    "position": "top-center, sans-serif bold 13pt",
    "subtitle": "{argument name=\"subtitle\" default=\"\"}"
  },
  "axes": {
    "x_axis": {
      "label": "{argument name=\"x_label\" default=\"Method\"}",
      "categories": [
        "{argument name=\"cat1\" default=\"ResNet-50\"}",
        "{argument name=\"cat2\" default=\"ViT-B\"}",
        "{argument name=\"cat3\" default=\"Swin-B\"}",
        "{argument name=\"cat4\" default=\"ConvNeXt-B\"}",
        "{argument name=\"cat5\" default=\"Ours\"}"
      ],
      "tick_label_rotation": "0deg or 30deg if labels are long"
    },
    "y_axis": {
      "label": "{argument name=\"y_label\" default=\"Top-1 Accuracy (%)\"}",
      "range": "{argument name=\"y_range\" default=\"75 to 86\"}",
      "tick_format": "decimal or percent",
      "gridlines": "very faint horizontal gridlines (light gray dashed, low opacity)"
    }
  },
  "bars": {
    "style": "vertical bars, ~30-40% width of category slot, gap between bars",
    "color_rule": {
      "default": "use a single muted color for all baselines (e.g. slate blue #64748B), highlight 'Ours' bar in accent color (e.g. orange #D97706 or red #DC2626)",
      "alternative": "if comparing methods grouped by family, use 2-3 muted colors to encode family"
    },
    "value_labels": {
      "enabled": "{argument name=\"value_labels_enabled\" default=\"true\"}",
      "rule": "show numeric value above each bar, sans-serif 9pt bold, e.g. '82.3'"
    }
  },
  "error_bars": {
    "enabled": "{argument name=\"error_bars_enabled\" default=\"true\"}",
    "style": "thin black T-bar at top of each bar, ±std or ±95% CI",
    "annotation": "mention what the error represents in caption (e.g. 'error bars show ±1 std over 5 runs')"
  },
  "significance_markers": {
    "enabled": "{argument name=\"significance_enabled\" default=\"false\"}",
    "rule": "if true, draw thin horizontal brackets between compared bars, with * / ** / *** annotation above (p<0.05 / p<0.01 / p<0.001)"
  },
  "legend": {
    "enabled": "{argument name=\"legend_enabled\" default=\"false\"}",
    "rule": "only show legend if multiple colors / groups used; place top-right inside or outside the plot area",
    "items": ["Baselines", "Ours"]
  },
  "caption": {
    "enabled": "{argument name=\"caption_enabled\" default=\"true\"}",
    "label": "{argument name=\"figure_label\" default=\"Figure 3.\"}",
    "text": "{argument name=\"caption_text\" default=\"Top-1 accuracy on ImageNet-1K. Our method outperforms all baselines while using fewer parameters. Error bars show ±1 std over 5 runs.\"}",
    "style": "below the chart, italic serif or compact sans-serif, justified, smaller font"
  },
  "constraints": {
    "must_keep": [
      "white background, no gradient, no pattern fills",
      "sans-serif fonts only (Helvetica / Inter / Arial); axis tick labels ≥ 9pt, axis labels ≥ 11pt, title ≥ 13pt",
      "color palette ≤ 6 colors, must remain readable in grayscale",
      "all axes have labels and units",
      "no 3D bar effects, no perspective tilt",
      "if multiple bars per category, group them with consistent spacing",
      "Ours bar is visually distinguishable (color or annotation)"
    ],
    "avoid": [
      "rainbow colors / saturated palette",
      "3D extruded bars / pie charts (3D distorts perception)",
      "missing axis labels or units",
      "unreadable tick labels (too small or rotated awkwardly)",
      "decorative background images / textures",
      "emoji / cartoon icons inside or around bars",
      "value labels overlapping bars or each other",
      "random / irrelevant accent colors",
      "fake precision: don't render bar heights to imply real numbers — keep it clearly illustrative"
    ]
  }
}
```

### 參數策略

- **必問**：圖表類型（如果不是 bar）、`title`、`x_label` / `y_label` / 單位、`categories`
- **可默認**：`aspect_ratio`（4:3）、`background`（白）、`error_bars_enabled`（true）、`value_labels_enabled`（true）、`legend_enabled`（false 單系列時）
- **可隨機**：bar 寬度、tick 數量、網格線密度（在合理範圍）

### 自動補全策略

- 用戶給"我有 5 個方法的 accuracy 對比" → 自動用 default 5 categories，highlight 最後一個爲 Ours
- 用戶沒指定 y_range → 推斷（基於數值範圍 ± 5%）
- 用戶沒說 error → 默認開啓 error_bars（論文標準做法）
- 用戶沒說 significance → 默認關閉（除非是統計學論文）
- 用戶說"不是 bar" → 切換到對應變體

## 變體 1：Line Chart（訓練曲線 / 時間序列）

```json
{
  "type": "Publication-Ready Line Chart（學術出版級折線圖）",
  "modify": {
    "x_axis_typical": "epoch / step / time / iteration",
    "y_axis_typical": "loss / accuracy / metric",
    "lines_count": "1-5 series, each a different muted color",
    "line_style": "solid 1.5px main line + optional shaded area (semi-transparent same color) for std band",
    "markers": "optional small markers at sparse intervals (circles / triangles), not on every point",
    "legend": "always enabled for multi-series, top-right or below",
    "rule_extra": "axes can be log-scale if data spans orders of magnitude (label as 'log scale')"
  }
}
```

適用：訓練曲線、time series 趨勢、ablation 隨超參變化、scaling laws。

## 變體 2：Scatter Plot（trade-off 圖）

```json
{
  "type": "Publication-Ready Scatter Plot（學術出版級散點圖）",
  "modify": {
    "typical_use": "performance vs efficiency trade-off (e.g. accuracy vs FLOPs / latency / params)",
    "x_axis_typical": "compute / params / latency (often log scale)",
    "y_axis_typical": "accuracy / metric",
    "point_style": "filled circles, size encodes a third dimension (e.g. model size), color encodes a category (e.g. method family)",
    "label_each_point": "small text label next to each point with method name (no leader lines unless crowded)",
    "ours_emphasis": "Our method points are larger and use accent color + black border",
    "frontier_line": "optional: draw a Pareto frontier curve to show 'we push the frontier'"
  }
}
```

適用：性能-效率 trade-off、參數 vs 準確率、Pareto frontier。

## 變體 3：Heatmap（confusion matrix / attention map / 相關性）

```json
{
  "type": "Publication-Ready Heatmap（學術出版級熱力圖）",
  "modify": {
    "grid": "N × N（默認 5×5 至 10×10）",
    "color_map": "sequential — viridis / Blues / Reds / 灰階；diverging（如相關矩陣）— RdBu_r 紅藍雙向",
    "cell_annotation": "show numeric value inside each cell in monospace, color flips for readability on dark cells",
    "axes_label": "row labels = ground truth, column labels = predicted（confusion matrix 場景）",
    "colorbar": "right side vertical colorbar with label and ticks",
    "rule_extra": "always include colorbar; never use rainbow colormap for sequential data (jet 已被學界淘汰)"
  }
}
```

適用：confusion matrix、attention 權重可視化、相關性矩陣、ablation grid。

## 變體 4：Box Plot / Violin Plot（統計分布）

```json
{
  "type": "Publication-Ready Box / Violin Plot（學術出版級分布圖）",
  "modify": {
    "typical_use": "compare distributions across methods / conditions / groups",
    "elements": "box (Q1, median, Q3) + whiskers (1.5 IQR) + outlier dots; violin 形狀疊加顯示密度",
    "median_line_emphasis": "median 線粗實線，顏色區分 group",
    "annotation": "可疊加 swarm / strip plot 顯示每個數據點",
    "rule_extra": "如果用 violin，violin 內部仍畫 box；不要純 violin（損失中位數信息）"
  }
}
```

適用：實驗重複結果分布、跨數據集 / 跨用戶 / 跨條件分布對比。

## 避免事項

- 用 3D 柱 / 3D 餅 → 嚴重不專業
- 用彩虹 / jet colormap 表示連續值（學界已拋棄）
- 漏掉單位 / 漏掉坐標軸標籤
- value 標籤過小讀不清
- 沒有 caption 或 caption 沒解釋 error bar
- 把 4-5 個不相關 chart 拼一張（應該用 multi-panel figure 模板，每個 sub 圖獨立）
- 假裝精確（暗示這是真數據但其實是 illustrative）
- 用花哨字體（Comic Sans / 手寫體）
- 加水印 / 裝飾背景
- 漏掉圖例（多系列必須有）
- 多 series 但配色完全相同
- 漏掉 Ours 高亮（論文圖通常要讓 reviewer 一眼看出你的）
