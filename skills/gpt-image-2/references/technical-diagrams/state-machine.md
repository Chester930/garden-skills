# 狀態機 / 生命周期圖模板

> ⚠️ **本模板生成的是位圖（PNG）**，不是 mermaid / xstate 可編輯狀態機。
> 需要可編輯請用 mermaid stateDiagram / xstate visualizer。

本文件用於生成"工程感狀態機 / 生命周期圖"：

- 訂單狀態機（待支付 / 已支付 / 已發貨 / 已完成 / 已取消 / 已退款）
- 連接 / 會話狀態（idle / connecting / connected / closing / closed）
- 工作流狀態（draft / submitted / approved / rejected）
- UI 組件狀態（hover / active / disabled / loading）
- 協議狀態機（TCP 狀態、WebSocket 狀態、HTTP 緩存狀態）

特徵：

- 圓角矩形 = 狀態節點
- 實心圓 = 起始僞狀態；靶心 / 雙圓 = 終止狀態
- 有向邊 = 轉換 transition，標"事件 / 條件"
- 自循環 = 狀態自身保持
- 暗色 grid + 等寬字體（沿用視覺系統）

## 適用範圍

- 業務對象生命周期（訂單 / 文檔 / 工單）
- 協議 / 連接狀態
- 工作流 / 審批狀態
- UI 組件 / 交互狀態
- 設備 / 會話 / 任務狀態

## 何時使用

- 用戶提到 "狀態機 / state machine / 生命周期 / lifecycle / state diagram / 狀態轉移"
- 用戶希望「state + transition」UML 狀態圖樣式
- 用戶接受位圖

不要使用：

- 用戶要的是「業務流程圖（含決策、動作）」 → 用 `technical-diagrams/flowchart-decision.md`
- 用戶要的是「時序圖」 → 用 `technical-diagrams/sequence-diagram.md`

## 缺失信息優先提問順序

1. 狀態機名稱（"訂單狀態機 / TCP 狀態機"）
2. 起始狀態（一般唯一）+ 終止狀態（可多個）
3. 中間狀態列表（建議 4-12 個，超過考慮分子狀態機）
4. 轉換：每條轉換的"源狀態 → 目標狀態 + 觸發事件 + 守衛條件 + action"
5. 是否有自循環
6. 是否需要 composite state（嵌套狀態）
7. 比例（默認 4:3 或 16:9 橫版）

## 主模板：標準 UML 狀態機圖

📖 描述

整張圖以起始僞狀態（實心圓）開始，經過若干狀態節點（圓角矩形）和轉換箭頭（標事件）流轉，最終到終止狀態（靶心）。狀態節點可有自循環（如 "retry" 自循環）。

📝 提示詞

```json
{
  "type": "工程感狀態機 / 生命周期圖（UML state diagram）",
  "goal": "生成一張狀態機圖作爲業務文檔 / 協議規範 / 教學配圖",
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect_ratio\" default=\"16:9\"}",
    "background": "deep slate #0F172A with subtle 1px grid #1E293B at 32px spacing",
    "outer_padding": "60px"
  },
  "title_strip": {
    "title": "{argument name=\"title\" default=\"Order Lifecycle State Machine\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"e-commerce order from creation to completion\"}",
    "position": "top-left, JetBrains Mono / SF Mono, light gray"
  },
  "states": {
    "count": "{argument name=\"state_count\" default=\"7\"}",
    "items": [
      { "id": "S0", "type": "initial", "label": "" },
      { "id": "S1", "type": "state", "label": "Pending\\nPayment", "category": "active" },
      { "id": "S2", "type": "state", "label": "Paid", "category": "active" },
      { "id": "S3", "type": "state", "label": "Shipped", "category": "active" },
      { "id": "S4", "type": "state", "label": "Completed", "category": "success_terminal" },
      { "id": "S5", "type": "state", "label": "Cancelled", "category": "fail_terminal" },
      { "id": "S6", "type": "state", "label": "Refunded", "category": "fail_terminal" },
      { "id": "ST", "type": "final", "label": "" }
    ]
  },
  "state_style": {
    "initial": {
      "shape": "filled solid circle, ~16px diameter",
      "color": "cyan #22D3EE solid"
    },
    "final": {
      "shape": "concentric double circle (bullseye), outer ~18px, inner solid 10px",
      "color": "rose #FB7185"
    },
    "state": {
      "shape": "rounded rectangle, corner radius 12px (more rounded than process), 160×72px typical",
      "fill": "category color × 12% opacity",
      "border": "1.5px solid in category color",
      "label": "state name in mono 12pt, centered, light text on dark fill",
      "optional_internal_label": "可在 state 內部底部加小字 'entry / action' / 'do / activity' / 'exit / cleanup'（UML extension）"
    }
  },
  "category_color_map": {
    "active": "emerald #34D399",
    "waiting": "amber #FBBF24",
    "success_terminal": "blue #60A5FA",
    "fail_terminal": "rose #FB7185",
    "error": "rose #FB7185",
    "neutral": "slate #94A3B8"
  },
  "transitions": {
    "items": [
      { "from": "S0", "to": "S1", "label": "create()" },
      { "from": "S1", "to": "S2", "label": "pay() [valid card]" },
      { "from": "S1", "to": "S5", "label": "timeout / cancel()" },
      { "from": "S2", "to": "S3", "label": "ship()" },
      { "from": "S2", "to": "S6", "label": "refund() [user request]" },
      { "from": "S3", "to": "S4", "label": "deliver() [confirmed]" },
      { "from": "S3", "to": "S6", "label": "return() [defect]" },
      { "from": "S4", "to": "ST", "label": "" },
      { "from": "S5", "to": "ST", "label": "" },
      { "from": "S6", "to": "ST", "label": "" },
      { "from": "S1", "to": "S1", "label": "retry_payment", "self_loop": true }
    ],
    "transition_style": {
      "default": "thin solid arrow 1.5px slate #94A3B8 with filled triangle arrowhead",
      "self_loop": "small loop curving above the state, returning to itself",
      "label_format": "<event> [guard] / <action>，例如 'pay() [valid card] / lock_inventory()'，mono 9-10pt 標在邊的中間，背景與 canvas 融合避免重疊"
    },
    "rule_routing": "儘量正交或 ≤ 30° 斜線，避免邊穿過節點"
  },
  "composite_states": {
    "enabled": "{argument name=\"composite_enabled\" default=\"false\"}",
    "rule": "if true, can group sub-states inside a larger rounded rectangle labeled 'Active' / 'Suspended' etc.; sub-states are 'state' type nested within the composite border"
  },
  "legend": {
    "enabled": true,
    "position": "bottom-right",
    "content": "category color → meaning (active / terminal-success / terminal-fail / error)，shape → role (initial filled circle / final bullseye / state rectangle)，self-loop notation",
    "style": "small panel, semi-transparent bg, mono 10pt"
  },
  "constraints": {
    "must_keep": [
      "initial 是實心圓 / final 是靶心，不混用",
      "狀態節點統一形狀（圓角矩形）和尺寸基線",
      "transitions 必有 label（除非進 final）",
      "guard 條件用 [...] 括起來",
      "action 用 / 分隔",
      "自循環用 loop 形而非直線",
      "category 顏色一致（不要把 success 用紅、fail 用綠）",
      "暗色 grid + 等寬字體",
      "legend 必畫"
    ],
    "avoid": [
      "用菱形 / 平行四邊形當 state（混淆爲流程圖）",
      "transitions 沒有 label",
      "把 final 狀態畫成普通圓角矩形",
      "guard / action 語法不規範（漏 [] 或 /）",
      "狀態 > 12 個（擁擠；考慮 composite state 或拆分）",
      "用 emoji 當 state 圖標",
      "用 3D / 漸變 / 玻璃質感",
      "聲稱這是可編輯 SVG"
    ]
  }
}
```

### 參數策略

- **必問**：`title`、起始狀態、終止狀態、中間狀態列表、所有 transitions（含 from/to/label）
- **可默認**：`background`（暗色 grid）、`category_color_map`、`legend_enabled`（true）
- **可隨機**：狀態節點擺放位置（基於狀態間轉換關係自動布局，使邊交叉最少）

### 自動補全策略

- 用戶給"訂單狀態機"但沒給細節 → 用 default 7 狀態版（待支付 / 已支付 / 已發貨 / 已完成 / 已取消 / 已退款）
- 用戶沒說 guard / action → label 僅寫 event 名
- 用戶給狀態但沒給 transitions → 反問關鍵轉換（不能瞎編業務規則）
- 用戶說"狀態太多" → 啓用 `composite_enabled` + 用 composite 包圍相關狀態
- 用戶說要 light 模式 → 用變體 1

## 變體 1：淺色 Light 狀態機

```json
{
  "modify": {
    "background": "warm off-white #F8FAFC + faint grid #E2E8F0",
    "state_fill": "category color × 8% opacity",
    "state_border": "1.5px solid (deeper shade for white bg)",
    "label_color": "deep slate #0F172A",
    "transition_color": "slate #475569",
    "vibe": "白底文檔 / 印刷版"
  }
}
```

## 變體 2：協議狀態機（TCP / WebSocket / HTTP cache）

```json
{
  "modify": {
    "title_format": "<protocol> State Machine（如 TCP State Machine）",
    "state_label_emphasis": "用大寫 / 協議規範術語（如 LISTEN / SYN_SENT / ESTABLISHED / TIME_WAIT）",
    "transition_label_emphasis": "用'觸發包 / 發送包'格式：例如 'recv: SYN / send: SYN+ACK'",
    "use_case": "網絡協議教學、規範文檔、面試準備資料"
  }
}
```

適用：TCP / UDP / WebSocket / HTTP / OAuth 狀態描述。

## 變體 3：UI 組件狀態（按鈕 / 輸入 / 彈窗）

```json
{
  "modify": {
    "title_format": "<Component> Interaction States",
    "state_label_emphasis": "用 UI 狀態術語：default / hover / active / focus / disabled / loading / error / success",
    "transition_label_emphasis": "用 UI 事件：mouseenter / click / focus / blur / API resolve / API reject",
    "category_color_map_extra": "default = slate, hover = cyan, active = emerald, disabled = slate desaturated, loading = amber, error = rose, success = blue",
    "use_case": "設計系統文檔、組件庫 README、設計師 / 開發對齊"
  }
}
```

適用：設計系統、組件庫文檔、UI / UX 狀態規範。

## 避免事項

- 狀態節點用菱形 / 平行四邊形 → 與流程圖混淆
- transition 沒有 event label → 完全失去狀態機語義
- final 狀態用普通矩形 → 不符合 UML
- guard 條件沒用 [] → 不規範
- 用 emoji 當狀態圖標
- 狀態 > 12 個 → 擁擠，必須拆分或用 composite
- 自循環畫成直線 → 視覺錯誤
- success / fail 顏色搞反
- 把"狀態機"做成"流程圖"（節點應該是狀態，不是動作）
- 節點 / 邊過多導致互相穿透
