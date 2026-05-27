# 系統架構圖模板

> ⚠️ **本模板生成的是位圖（PNG），不是可編輯的 SVG / draw.io / mermaid 圖**。
> 如果你需要可編輯、可對齊、可版本化的工程圖，請用 mermaid / draw.io / excalidraw / Figma。
> 如果你需要的是「README 頭圖 / blog 配圖 / 文檔插圖 / PPT 封面」級別的視覺呈現，本模板適合。

本文件用於生成"工程感系統架構圖"：

- 整體系統架構（前端 + 後端 + DB + 緩存 + 隊列 + 外部服務）
- 微服務架構概覽
- 多區域 / 多 zone 部署架構
- AI 系統 / 數據管道架構
- 雲原生架構圖

特徵：

- 暗色背景 (#0F172A slate-900) + 細 grid
- 節點 = 圓角矩形 + 半透明深色填充 + 1.5px 邊框 + 等寬字體標籤
- 配色按"角色"分類（用戶層 / 業務層 / 數據層 / 基礎設施 / 安全 / 中間件 / 外部）
- 有向數據流箭頭：實箭頭 = 同步，虛線 = 異步 / 回調
- 區域用虛線大框包圍（VPC / 雲區 / Trust boundary）
- 字體：JetBrains Mono / SF Mono 等寬

## 適用範圍

- 系統總覽架構圖
- 微服務 / 分布式系統架構
- 多區域 / 多雲部署架構
- 數據管道 / AI 系統架構
- 文檔 / blog 配圖 / README 頭圖

## 何時使用

- 用戶提到 "系統架構 / 微服務 / 分布式 / 部署架構 / 數據管道 / AI 系統架構 / 雲架構"
- 用戶希望視覺「工程感、暗色、grid 網格、像 baoyu-diagram 那種」
- 用戶接受這是位圖（不要求可編輯）

不要使用：

- 用戶要的是「業務流程圖 / 決策圖」 → 用 `technical-diagrams/flowchart-decision.md`
- 用戶要的是「時序圖 / API 調用流」 → 用 `technical-diagrams/sequence-diagram.md`
- 用戶要的是「網絡拓撲」（機房 / 路由器 / 設備）→ 用 `technical-diagrams/network-topology.md`
- 用戶要的是「ER 圖 / 數據模型」 → 用 `technical-diagrams/er-diagram.md`
- 用戶要的是「論文方法 pipeline」 → 用 `academic-figures/method-pipeline-overview.md`
- 用戶要的是「神經網絡架構」 → 用 `academic-figures/neural-network-architecture.md`

## 缺失信息優先提問順序

1. 系統名稱 + 一句話定位（"我們要畫 XX 平臺的整體架構"）
2. 主要分層 / 區域（如"前端 / 網關 / 業務服務 / 數據層 / 基礎設施"）
3. 每層有哪些節點（最多 8-15 個總節點，超過會擁擠）
4. 主要數據流方向（用戶請求 → ... → 響應）
5. 是否有外部服務（第三方 API / SaaS）
6. 是否有"安全 / 鑑權 / 監控"相關組件需要單獨標
7. 主題色偏好（默認 dark；是否要 light variant）
8. 比例（默認 16:9 橫版；架構圖很少豎版）

## 主模板：分層暗色系統架構圖

📖 描述

整張圖按層 / 按區域劃分，每層是一組帶相同色系的節點，節點之間用箭頭連接表達數據流，整體在深色 grid 背景上呈現工程感。

📝 提示詞

```json
{
  "type": "技術系統架構圖（暗色工程感）",
  "goal": "生成一張用於 README / blog / 設計文檔的工程感系統架構圖",
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect_ratio\" default=\"16:9\"}",
    "background": "{argument name=\"background\" default=\"deep slate #0F172A with subtle 1px grid lines #1E293B at 32px spacing\"}",
    "outer_padding": "60px"
  },
  "title_strip": {
    "title": "{argument name=\"title\" default=\"System Architecture Overview\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"v1.0 · 2026\"}",
    "position": "top-left, large mono font (JetBrains Mono / SF Mono), light gray text"
  },
  "color_semantics": {
    "rule": "顏色按'角色'編碼，不按'技術'編碼",
    "palette": [
      { "role": "User / Client / Edge", "color": "cyan #22D3EE", "use_for": "終端用戶、Web、Mobile、CLI" },
      { "role": "Gateway / API / BFF", "color": "blue #60A5FA", "use_for": "API 網關、負載均衡、CDN、BFF" },
      { "role": "Business Services", "color": "emerald #34D399", "use_for": "微服務、應用層、業務邏輯" },
      { "role": "Data / Persistence", "color": "violet #A78BFA", "use_for": "數據庫、緩存、對象存儲、搜索" },
      { "role": "Middleware / Queue", "color": "orange #FB923C", "use_for": "MQ、Kafka、Redis Stream、Pub/Sub" },
      { "role": "Infra / Platform", "color": "amber #FBBF24", "use_for": "K8s、容器運行時、雲平臺" },
      { "role": "Security / Auth", "color": "rose #FB7185", "use_for": "鑑權、密鑰、審計、防火牆" },
      { "role": "External / 3rd Party", "color": "slate #94A3B8", "use_for": "外部 SaaS、第三方 API" }
    ]
  },
  "regions": {
    "rule": "用大虛線框包圍屬於同一'部署單元'的節點，框上方有 region label",
    "items": [
      { "id": "R1", "label": "{argument name=\"region1_label\" default=\"Public Edge\"}", "color_border": "cyan dashed" },
      { "id": "R2", "label": "{argument name=\"region2_label\" default=\"VPC · ap-northeast-1\"}", "color_border": "amber dashed" },
      { "id": "R3", "label": "{argument name=\"region3_label\" default=\"Data Plane\"}", "color_border": "violet dashed" }
    ]
  },
  "nodes": {
    "count_total": "{argument name=\"node_count\" default=\"10\"}",
    "items": [
      { "id": "N1", "label": "Web App", "role": "User / Client", "region": "R1" },
      { "id": "N2", "label": "Mobile App", "role": "User / Client", "region": "R1" },
      { "id": "N3", "label": "CDN", "role": "Gateway / API", "region": "R1" },
      { "id": "N4", "label": "API Gateway", "role": "Gateway / API", "region": "R2" },
      { "id": "N5", "label": "Auth Service", "role": "Security / Auth", "region": "R2" },
      { "id": "N6", "label": "Order Service", "role": "Business Services", "region": "R2" },
      { "id": "N7", "label": "User Service", "role": "Business Services", "region": "R2" },
      { "id": "N8", "label": "Kafka", "role": "Middleware / Queue", "region": "R2" },
      { "id": "N9", "label": "PostgreSQL", "role": "Data / Persistence", "region": "R3" },
      { "id": "N10", "label": "Redis", "role": "Data / Persistence", "region": "R3" }
    ]
  },
  "node_style": {
    "shape": "rounded rectangle, corner radius 8px",
    "size": "auto-fit text + 24px horizontal padding, ~ 140px wide × 56px tall typical",
    "fill": "background color of role × 12% opacity (semi-transparent)",
    "border": "1.5px solid in role color (full opacity)",
    "label": "label text in JetBrains Mono / SF Mono 12pt, color = role color (lighter shade) for readability on dark bg",
    "icon": "small icon in top-left corner of node (optional, generic geometric glyph for the role — circle for service, cylinder for DB, hex for queue)"
  },
  "edges": {
    "sync_call": {
      "style": "solid line 1.5px in slate #64748B, with small filled triangle arrowhead at the target end",
      "use_for": "同步請求 / 調用"
    },
    "async_event": {
      "style": "dashed line 1.5px in slate #64748B, with hollow triangle arrowhead",
      "use_for": "異步事件 / 消息發布訂閱 / 回調"
    },
    "data_flow_label": {
      "rule": "edges 上可選標小標籤（如 'POST /orders' / 'order.created event'），用 mono 字體 9pt，背景與畫布融合"
    },
    "rule_routing": "儘量正交（水平 / 垂直）走線；如果必須斜線，控制在 ≤ 30°；邊不要穿過節點"
  },
  "legend": {
    "enabled": "{argument name=\"legend_enabled\" default=\"true\"}",
    "position": "bottom-right",
    "content": "color → role mapping (8 swatches), and edge style → meaning (sync solid vs async dashed)",
    "style": "small panel with semi-transparent background, mono font 10pt"
  },
  "constraints": {
    "must_keep": [
      "暗色背景 + 細 grid",
      "顏色按 role 編碼，不要按技術品牌（如 PostgreSQL 用 violet 因它是 data，不是因爲 PG 官方藍）",
      "節點統一圓角和尺寸基線",
      "等寬字體（mono）貫穿全圖",
      "edges 不穿過節點，標籤不與邊重疊",
      "區域虛線框顏色與區域含義匹配",
      "legend 必須畫出（即使簡化）"
    ],
    "avoid": [
      "彩虹色 / 高飽和霓虹色（除 cyan 之外其它色都要 muted）",
      "用 emoji 當節點圖標（用極簡幾何 glyph）",
      "技術 logo 直接貼上去（除非是商標對照說明）",
      "3D 立方體 / 透視效果 / 玻璃質感",
      "同一種顏色既表'安全'又表'業務'",
      "節點超過 15 個（請拆分到多張子圖）",
      "聲稱這張圖可編輯 / 可導出 SVG（它是位圖）",
      "用花哨字體 / 手寫體（破壞工程感）"
    ]
  }
}
```

### 參數策略

- **必問**：`title`、節點列表（含每個節點的 role 歸屬）、主要 edges
- **可默認**：`background`（暗色 grid）、`color_semantics`（8 角色調色板）、`node_style`、`legend_enabled`（true）
- **可隨機**：節點擺放位置（基於區域 / role 自動布局）、icon glyph 具體造型

### 自動補全策略

- 用戶給 "Web + API + DB" 三層簡化 → 自動用 3 個 region (Edge / Service / Data) + 5-7 個節點
- 用戶沒說 region → 默認按 role 自動聚類 + 加 region 框
- 用戶沒說要不要 light 變體 → 默認 dark；用戶說要 light 時切換到變體 1
- 用戶給具體技術（"用 PostgreSQL"）→ 節點 label 直接寫技術名，但配色仍按 role 選

## 變體 1：淺色 / Light 模式系統架構圖

```json
{
  "modify": {
    "background": "warm off-white #F8FAFC with very faint grid #E2E8F0",
    "node_fill": "role color × 8% opacity",
    "node_border": "1.5px solid role color (full opacity)",
    "label_color": "role color (full opacity, dark enough for white bg) — e.g. cyan label uses cyan-700 not cyan-300",
    "title_color": "deep slate #0F172A",
    "edges_color": "slate #475569",
    "vibe": "看起來像 light theme 文檔配圖（適合 Notion / GitHub / 白底文檔）"
  }
}
```

適用：白底文檔站、印刷版文檔、對比 dark 版本提供的 light alternative。

## 變體 2：極簡 monochrome 系統架構圖

```json
{
  "modify": {
    "color_semantics": "all roles use slate #94A3B8 except 'highlight current focus' uses single accent (e.g. cyan #22D3EE)",
    "use_case": "強調結構本身，不強調角色分類（如教學講解、概念示意）",
    "vibe": "克制、非分散注意力、像 The Verge / Stripe blog 的極簡插圖"
  }
}
```

適用：概念性示意（不需要強調角色）、blog hero 圖、教學。

## 變體 3：Hero / Marketing 風系統架構圖

```json
{
  "modify": {
    "background": "漸變深藍紫 + 遠景星點 + 主體節點帶柔和發光",
    "node_style": "節點保留圓角和等寬字體，但加微妙發光（drop shadow + glow）",
    "title": "更大、加副標語",
    "use_case": "產品官網 hero / 投資人 deck / 發布會主圖",
    "vibe": "Stripe / Linear / Vercel 官網風的視覺衝擊力"
  }
}
```

適用：產品官網、技術品牌官網 hero、產品發布會主圖。

## 避免事項

- 節點 > 15 個 → 視覺擁堵，建議拆分到多張圖（"高層架構" + "細分模塊圖"）
- 用 PostgreSQL / Redis / Kafka 真實 logo → 容易侵權 + 破壞統一視覺
- 顏色按"技術"分（如 PG 用藍、Redis 用紅）→ 失去 role 語義
- 用 emoji 節點圖標
- 3D 透視 / 玻璃質感 / 漸變填充節點
- 邊穿過節點 / 標籤碰撞 / 斜線亂飛
- 沒有 legend → 讀者不知道顏色含義
- 沒有 region 框（即使邏輯上有分層）→ 失去"部署單元"信息
- 假裝這是可導出可編輯的 SVG → 別誤導用戶
- 把神經網絡結構 / 業務流程 / 時序 也塞到這張圖（應該用對應模板）
