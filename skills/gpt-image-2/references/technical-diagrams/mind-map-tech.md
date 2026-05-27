# 技術主題思維導圖模板

> ⚠️ **本模板生成的是位圖（PNG）**，不是 XMind / MindNode / mermaid mindmap 可編輯思維導圖。
> 需要可編輯請用 XMind / MindNode / Excalidraw / mermaid mindmap。

本文件用於生成"工程感技術主題思維導圖"：

- 技術棧梳理（前端 / 後端 / 數據 / DevOps 全景）
- 面試知識點腦圖（八股文 / 系統設計 / 算法）
- 調研腦圖（某領域調研後的總結）
- 學習路線圖
- 主題詞典 / 概念關係圖

特徵：

- 中央節點 = 主題（圓角矩形 / 橢圓，帶強調色）
- 一級分支 = 主類別（4-8 個，放射狀分布）
- 二級 / 三級分支 = 子主題（縮進式或嵌套）
- 不同分支用不同顏色（角色編碼）
- 暗色 grid + 等寬字體（沿用視覺系統）

## 適用範圍

- 技術棧全景圖
- 面試準備腦圖
- 調研 / 學習總結腦圖
- 知識體系梳理
- 概念關係網

## 何時使用

- 用戶提到 "思維導圖 / mind map / 腦圖 / 知識體系 / 學習路線 / 技術棧梳理"
- 用戶希望「中央 + 放射」標準 mind map 結構
- 用戶接受位圖

不要使用：

- 用戶要的是「工程系統架構」 → 用 `technical-diagrams/system-architecture.md`
- 用戶要的是「ER 數據模型」 → 用 `technical-diagrams/er-diagram.md`
- 用戶要的是「層級流程圖 / step-by-step」 → 用 `infographics/step-by-step-infographic.md`
- 用戶要的是「大綱 / 列表式 slide」 → 用 `slides-and-visual-docs/`

## 缺失信息優先提問順序

1. 主題（中心節點的內容，"前端工程師技術棧 2026 / 系統設計面試要點"）
2. 一級分支數（建議 4-8 個）
3. 每個一級分支下的子節點（每個一級 3-7 個二級）
4. 是否需要三級 / 四級嵌套
5. 比例（默認 16:9 橫版；分支多時可 3:4 豎版）
6. 是否高亮某些"重點 / 必會"節點

## 主模板：標準放射式技術思維導圖

📖 描述

整張圖中央是主題節點，四周放射出 4-8 條主分支，每條主分支再展開 3-7 個子節點，必要時再展開三級節點。每條主分支用一種顏色家族貫穿其所有子節點。

📝 提示詞

```json
{
  "type": "工程感技術思維導圖（放射式 mind map）",
  "goal": "生成一張放射式思維導圖，作爲知識梳理 / 面試準備 / 學習路線 / 技術棧全景的可視化",
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect_ratio\" default=\"16:9\"}",
    "background": "deep slate #0F172A with subtle 1px grid #1E293B at 32px spacing",
    "outer_padding": "60px"
  },
  "title_strip": {
    "title": "{argument name=\"title\" default=\"Frontend Engineer Tech Stack\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"2026 edition\"}",
    "position": "top-left, JetBrains Mono / SF Mono, light gray"
  },
  "central_node": {
    "label": "{argument name=\"central_label\" default=\"Frontend\\nEngineer\"}",
    "shape": "rounded rectangle (corner radius 16px) or ellipse",
    "size": "260×120px",
    "fill": "amber #FBBF24 × 18% opacity",
    "border": "2px solid amber #FBBF24",
    "label_style": "mono bold 16pt, centered, light text",
    "position": "image center"
  },
  "primary_branches": {
    "count": "{argument name=\"primary_count\" default=\"6\"}",
    "items": [
      { "id": "B1", "label": "Languages", "color": "cyan #22D3EE", "angle_position": "top-left" },
      { "id": "B2", "label": "Frameworks", "color": "blue #60A5FA", "angle_position": "top-right" },
      { "id": "B3", "label": "State & Data", "color": "emerald #34D399", "angle_position": "right" },
      { "id": "B4", "label": "Build & Tooling", "color": "violet #A78BFA", "angle_position": "bottom-right" },
      { "id": "B5", "label": "Testing", "color": "rose #FB7185", "angle_position": "bottom-left" },
      { "id": "B6", "label": "Performance", "color": "orange #FB923C", "angle_position": "left" }
    ],
    "branch_node_style": {
      "shape": "rounded rectangle (corner radius 10px)",
      "size": "180×56px",
      "fill": "branch color × 14% opacity",
      "border": "1.5px solid branch color",
      "label": "mono bold 13pt, centered, light text",
      "position": "evenly distributed around central node, ~ radius 380-440px"
    },
    "connector_style": "thick branch-colored line 2px from central node to primary node, slight curve"
  },
  "secondary_nodes": {
    "rule": "每個 primary 下掛 3-7 個 secondary，沿主分支方向呈樹枝狀展開",
    "items_per_primary_example": {
      "B1_Languages": ["TypeScript", "JavaScript (ES2024+)", "WebAssembly", "CSS / Sass"],
      "B2_Frameworks": ["React 19", "Next.js 15", "Vue 3", "Svelte 5", "Solid"],
      "B3_State_Data": ["TanStack Query", "Zustand", "Jotai", "URQL / Apollo", "tRPC"],
      "B4_Build_Tooling": ["Vite", "Turbopack", "Bun", "pnpm + Turborepo", "Biome"],
      "B5_Testing": ["Vitest", "Playwright", "Storybook", "MSW"],
      "B6_Performance": ["Core Web Vitals", "RUM", "Bundle analysis", "Image / Font opt"]
    },
    "secondary_node_style": {
      "shape": "rounded rectangle (corner radius 8px)",
      "size": "auto-fit text + 12px padding, ~ 140×40px typical",
      "fill": "branch color × 8% opacity",
      "border": "1.2px solid branch color (slightly desaturated)",
      "label": "mono regular 11pt"
    },
    "connector_style": "thin branch-colored line 1.2px from primary to secondary, curved"
  },
  "tertiary_nodes": {
    "enabled": "{argument name=\"tertiary_enabled\" default=\"false\"}",
    "rule": "if true, secondary 可繼續展開 2-3 個 tertiary（更小的圓角矩形 + 更細的連線），但要避免視覺爆炸；建議只在 1-2 個 secondary 下展開"
  },
  "highlights": {
    "must_know": {
      "enabled": "{argument name=\"must_know_enabled\" default=\"false\"}",
      "rule": "if true, 給重點 / 必會節點加'★'前綴 + 描邊加粗到 2.5px",
      "examples": ["★ React 19", "★ TypeScript", "★ Vite"]
    }
  },
  "legend": {
    "enabled": true,
    "position": "bottom-right",
    "content": "branch color → category mapping，star → must-know",
    "style": "small panel, semi-transparent bg, mono 10pt"
  },
  "constraints": {
    "must_keep": [
      "central node 唯一且居中",
      "primary branches 圍繞中央均勻分布（避免一邊密一邊空）",
      "每條分支顏色家族貫穿其所有子節點",
      "secondary 節點嚴格掛在對應 primary 的延伸方向",
      "暗色 grid 背景 + 等寬字體",
      "節點大小有 hierarchy（central > primary > secondary > tertiary）",
      "連線不交叉（除非不可避免）"
    ],
    "avoid": [
      "所有節點同尺寸 → 失去層級",
      "primary 集中在一側 → 視覺失衡",
      "secondary 顏色與所屬 primary 不一致",
      "連線大量交叉 → 可讀性崩潰",
      "用 emoji 當節點圖標（除非主題需要）",
      "primary > 8 個（擁擠；考慮分子圖）",
      "三級以下嵌套全開 → 視覺爆炸",
      "用 3D / 漸變 / 玻璃質感",
      "聲稱這是可編輯 SVG"
    ]
  }
}
```

### 參數策略

- **必問**：`title`、`central_label`、primary 分支列表（含名稱）、每條 primary 下的 secondary 列表
- **可默認**：`background`（暗色 grid）、`primary_branches.color`（默認 6 色組合）、`tertiary_enabled`（false）、`must_know_enabled`（false）
- **可隨機**：每條 primary 的 angle_position（基於數量自動等距分布）、節點輕微微調避免重疊

### 自動補全策略

- 用戶給"主題 + 4-6 個分支" → 自動用 default secondary 數量（每分支 4 個）
- 用戶給"我要前端技術棧腦圖" → 用 default 6 分支（Languages / Frameworks / State&Data / Build / Testing / Performance）
- 用戶沒指定顏色 → 自動按角色順序分配 6 色組合
- 用戶說"加重點標記" → 啓用 `must_know_enabled`
- 用戶說要 light 模式 → 用變體 1

## 變體 1：淺色 Light 思維導圖

```json
{
  "modify": {
    "background": "warm off-white #F8FAFC + faint grid #E2E8F0",
    "node_fill": "branch color × 6% opacity",
    "node_border": "1.5px solid (deeper shade for white bg)",
    "label_color": "deep slate #0F172A",
    "connector_color": "branch color (deeper shade)",
    "vibe": "白底文檔站 / 印刷友好"
  }
}
```

## 變體 2：層級樹形圖（左到右）

```json
{
  "modify": {
    "layout": "替換放射式爲'左到右樹形'：central node 在最左，primary 垂直排列在右側第二列，secondary 在第三列，以此類推",
    "use_case": "更適合'學習路線 / 知識層級' (而不是'全景概覽')",
    "vibe": "更像 XMind 的 logical chart 視圖"
  }
}
```

適用：學習路線、知識層級、決策樹形知識。

## 變體 3：組織 / 團隊結構腦圖

```json
{
  "modify": {
    "central_label": "team / company / org name",
    "primary_branches": "部門 / 職能 (Engineering / Design / Product / Ops / Marketing)",
    "secondary_nodes": "具體角色 / 團隊成員 (用 'Name · Title' 格式)",
    "highlights_extra": "team lead 用 ★ 標記 + 邊框加粗",
    "use_case": "團隊介紹 deck、組織架構圖"
  }
}
```

適用：團隊 / 組織架構展示、新人 onboarding 文檔。

## 避免事項

- primary 分支集中在畫布一側 → 視覺失衡
- 節點全部同尺寸 → 失去層級
- 連線大量交叉 → 不可讀
- secondary 顏色與所屬 primary 不一致 → 視覺混亂
- 三級以下全展開 → 視覺爆炸
- 用 emoji 當節點 icon（除非主題相關，如"美食腦圖"）
- primary > 8 個 → 擁擠，考慮拆分主題
- 用 3D / 漸變 / 玻璃質感
- 中央節點不在中心 / 不唯一
- 把"系統架構 / ER 圖"做成 mind map（語義錯位）
- 字號過小 / mono 字體丟失（破壞工程感）
