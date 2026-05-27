# 神經網絡架構圖模板

本文件用於生成"論文中那種神經網絡架構圖"：

- Transformer / Encoder-Decoder 架構圖
- U-Net / FPN / 多尺度網絡架構
- GAN / Diffusion / VAE 架構
- Attention 機制示意
- 自定義模型架構圖

特徵：

- 多個 layer 塊按數據流方向排布（橫向或豎向）
- 每個 layer 塊有：層名 + tensor shape 標註（H × W × C）
- 跳連 / residual / attention 連線清晰
- 顏色編碼不同 layer 類型（Conv / Attention / FC / Norm）
- 出版物級，白底克制

## 適用範圍

- 論文中的 model architecture figure
- 綜述論文 framework
- 答辯 PPT 模型介紹頁
- 教學 slide 中的網絡示意

## 何時使用

- 用戶提到 "網絡架構 / network architecture / model architecture / Transformer / U-Net / GAN / Diffusion / VAE"
- 用戶希望「層級清晰、tensor shape 標準、跳連一目了然」
- 用戶希望視覺「論文風、白底、彩色編碼 layer 類型」

不要使用：

- 用戶要的是「方法 pipeline 總覽」（多 stage 業務流）→ 用 `academic-figures/method-pipeline-overview.md`
- 用戶要的是「系統架構圖」（前端 + 後端 + DB）→ 用 `technical-diagrams/system-architecture.md`
- 用戶要的是「數據流向 / ER 圖」 → 用 `technical-diagrams/er-diagram.md`
- 用戶要的是「概念示意 / 注意力可視化」（自由度高）→ 用 `academic-figures/scientific-schematic.md`

## 缺失信息優先提問順序

1. 模型類型（Encoder-Decoder / U-Net / Transformer / GAN / Diffusion / 自定義）
2. 主幹網絡層數 / 每層類型（如「6 層 Transformer encoder + 6 層 decoder + 8 頭 attention」）
3. Tensor shape（輸入分辨率 / 通道數 / 序列長度）
4. 是否有跳連 / residual / cross-attention
5. 是否有 multi-task / multi-head 輸出
6. 是否要中文標籤（論文圖通常英文）
7. 比例（橫向 16:9 / 2:1，符合論文雙欄）

## 主模板：Transformer / Encoder-Decoder 架構圖

📖 描述

整張圖橫向流動：左輸入 embedding → 多層 encoder 塊 → cross-attention → 多層 decoder 塊 → 右輸出 head。每個 layer 塊標註層類型與 tensor shape，跳連用弧形虛線。

📝 提示詞

```json
{
  "type": "神經網絡架構圖（neural network architecture diagram）",
  "goal": "生成論文級別的網絡架構圖：層級清晰、tensor shape 標註、跳連分明、可單色印刷可讀",
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect_ratio\" default=\"16:9\"}",
    "background": "white #FFFFFF",
    "outer_padding": "60px"
  },
  "model_meta": {
    "name": "{argument name=\"model_name\" default=\"Our Transformer\"}",
    "input_spec": "{argument name=\"input_spec\" default=\"Input Image: 224×224×3\"}",
    "output_spec": "{argument name=\"output_spec\" default=\"Class Logits: 1000\"}"
  },
  "layer_groups": {
    "rule": "use color-coded blocks per layer type — keep palette ≤ 5 muted academic colors",
    "color_legend": [
      { "type": "Embedding / PatchEmbed", "fill": "#E0E7FF", "border": "#6366F1" },
      { "type": "Self-Attention", "fill": "#FEE2E2", "border": "#DC2626" },
      { "type": "Cross-Attention", "fill": "#FEF3C7", "border": "#D97706" },
      { "type": "Feed Forward / MLP", "fill": "#D1FAE5", "border": "#059669" },
      { "type": "Norm / Residual", "fill": "#F3F4F6", "border": "#6B7280" }
    ]
  },
  "layers": {
    "count": "{argument name=\"layer_count\" default=\"8\"}",
    "items": [
      { "id": "L1", "type": "Embedding / PatchEmbed", "name": "Patch Embed", "shape": "196×768" },
      { "id": "L2", "type": "Norm / Residual", "name": "LayerNorm", "shape": "196×768" },
      { "id": "L3", "type": "Self-Attention", "name": "Multi-head Self-Attn (×8)", "shape": "196×768", "annotation": "× N=6 (encoder)" },
      { "id": "L4", "type": "Feed Forward / MLP", "name": "FFN", "shape": "196×768" },
      { "id": "L5", "type": "Cross-Attention", "name": "Cross-Attn", "shape": "K×768" },
      { "id": "L6", "type": "Self-Attention", "name": "Decoder Self-Attn", "shape": "K×768", "annotation": "× N=6 (decoder)" },
      { "id": "L7", "type": "Feed Forward / MLP", "name": "FFN", "shape": "K×768" },
      { "id": "L8", "type": "Norm / Residual", "name": "Output Head (Linear)", "shape": "K×C" }
    ]
  },
  "block_style": {
    "shape": "rounded rectangle (corner radius 4-6px)",
    "size_rule": "blocks of same layer type share identical width and height; visually grouped",
    "border": "1.2px solid (use the type's border color)",
    "fill": "use the type's fill color (very light tint)",
    "label_text": "layer name on first line (sans-serif bold 10-11pt) + tensor shape on second line (monospace italic 9pt)",
    "annotation_text": "if 'annotation' present (e.g. '× N=6'), draw it as a curly brace with label on the right side of the repeated block"
  },
  "connections": {
    "main_flow": {
      "style": "thin black solid arrows (1.2px), horizontal left → right",
      "arrowhead": "small filled triangle"
    },
    "residual": {
      "enabled": "{argument name=\"residual_enabled\" default=\"true\"}",
      "style": "curved dashed arrow arcing above the main flow, label '+' near join",
      "rule": "draw residual from input of attention block to its output"
    },
    "cross_attention": {
      "enabled": "{argument name=\"cross_attention_enabled\" default=\"true\"}",
      "style": "horizontal arrow from encoder side feeding into decoder cross-attn, label 'K, V'",
      "rule": "encoder output is shown as K, V input to decoder cross-attn"
    }
  },
  "extras": {
    "show_param_count": {
      "enabled": "{argument name=\"show_params\" default=\"false\"}",
      "rule": "if true, add parameter count below each major group (e.g. '85M params')"
    },
    "highlight_novelty": {
      "enabled": "{argument name=\"highlight_novelty\" default=\"true\"}",
      "rule": "if true, surround the user's contributed module with a thicker dashed orange border + label 'Ours' / 'Novel'"
    }
  },
  "constraints": {
    "must_keep": [
      "tensor shapes are accurate and labeled in monospace font",
      "color encodes layer type consistently across the figure",
      "all layers of the same type have identical block size",
      "white background, no gradient, no decoration",
      "all labels in English by default (or all Chinese if explicitly requested), no mixing",
      "must remain readable when printed in grayscale (rely on shape and label, not color alone)",
      "novel contribution (if any) is clearly marked"
    ],
    "avoid": [
      "3D extruded blocks, drop shadows, glossy fills",
      "rainbow palette (>5 colors)",
      "cartoon icons, emoji",
      "freeform 'art-style' blobs instead of crisp rectangles",
      "tensor shapes typeset in proportional font",
      "arrows crossing through blocks",
      "missing tensor shape labels (the figure is then useless for paper review)",
      "unlabeled cross-attention (must say K, V)"
    ]
  }
}
```

### 參數策略

- **必問**：`layer_count`、每層的 `type` 和 `shape`
- **可默認**：`aspect_ratio`（16:9）、`background`（白）、`color_legend`（默認 5 類配色）、`block_style`
- **可隨機**：blocks 內每行的精確字號 / padding，annotation 擺放位置

### 自動補全策略

- 用戶給「我用 Transformer」但沒給細節 → 反問關鍵參數（層數、頭數、隱藏維度、序列長度）；不要瞎編模型規模
- 用戶給「U-Net」 → 自動用 contracting + expansive 雙臂布局變體（見變體 2）
- 用戶沒說有沒有 residual → 默認 `residual_enabled: true`（絕大多數現代網絡都有）
- 用戶沒說有沒有 novelty → 默認 `highlight_novelty: true`（論文圖一般要標自己的貢獻）
- 用戶沒說參數量 → 默認 `show_params: false`（除非用戶提到模型規模對比）

## 變體 1：U-Net / FPN 雙臂架構

```json
{
  "type": "U-Net / FPN 雙臂架構圖",
  "modify": {
    "layout": "U 形：左臂下採樣（contracting path）+ 中央 bottleneck + 右臂上採樣（expansive path），每層之間有水平 skip connection",
    "annotation": "skip 用橫向虛線箭頭標註，特徵圖用漸窄 / 漸寬的矩形示意 spatial 維度變化"
  }
}
```

適用：U-Net、FPN、HRNet、所有 encoder-decoder 分割網絡。

## 變體 2：GAN / Diffusion 雙網絡對抗 / 多步推理

```json
{
  "type": "GAN / Diffusion 架構圖",
  "modify": {
    "layout_gan": "上方 Generator（noise → image）+ 下方 Discriminator（image → real/fake），中間共享生成圖像作爲 D 的輸入",
    "layout_diffusion": "橫向 timestep 序列 t=T → t=0，每個 timestep 是同一個 U-Net 實例，標 't' 嵌入條件"
  }
}
```

適用：GAN 系列、擴散模型、Score-based 模型。

## 變體 3：Multi-task / Multi-head 輸出

```json
{
  "type": "多任務 / 多頭輸出架構圖",
  "modify": {
    "layout": "共享 backbone 在中央 → 右側分叉成 2-4 個 task head（如 classification head / regression head / segmentation head）",
    "annotation": "每個 head 旁邊標對應 loss 函數和權重 λ"
  }
}
```

適用：多任務學習、檢測 + 分割、輔助監督。

## 避免事項

- tensor shape 缺失或隨便寫 → 論文圖核心信息沒了
- 用漸變 / 3D 立方體堆疊 → 像 PPT 不像論文
- 顏色 ≥ 6 種 → 失去 layer 類型語義
- 沒有 residual / cross-attention 標註（如果架構裏有）→ 誤導讀者
- 用 Comic Sans / 手寫字體
- 跳連箭頭穿過 layer 塊
- 同一類 layer 塊大小不一致
- 中英文標籤混用
- 把"訓練 loss"畫進結構圖（應該單獨一張 training figure 或 caption 裏說明）
- 在結構圖裏塞具體超參數表（應該走 table，不進 figure）
