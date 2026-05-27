# 流程圖 / 決策圖模板

> ⚠️ **本模板生成的是位圖（PNG）**，不是 mermaid / draw.io 可編輯流程圖。
> 需要可編輯請用 mermaid / draw.io / excalidraw / Figma。

本文件用於生成"工程感的業務流程圖 / 決策圖"：

- 業務流程圖（用戶註冊流程、支付流程、訂單生命周期）
- 決策樹式流程（含 Yes / No 分支）
- 算法 / 數據處理流程
- 內部審批 / 工單 / 申報流程
- 異常處理 / 錯誤恢復流程

特徵：

- 標準 BPMN-like 形狀語義：
  - 圓 / 圓角矩形 = 開始 / 結束
  - 矩形 = 過程步驟
  - 菱形 = 決策點（含 Yes / No 分支）
  - 平行四邊形 = 輸入 / 輸出
- 自上而下 OR 從左到右
- 暗色 grid 背景 + 等寬字體（沿用 technical-diagrams 視覺系統）
- 決策分支顏色編碼（Yes 綠、No 紅 / 灰）

## 適用範圍

- 業務流程圖
- 決策樹流程
- 算法 / 數據流程
- 錯誤處理 / 異常流程
- 文檔 / blog 配圖

## 何時使用

- 用戶提到 "流程圖 / flowchart / 決策圖 / decision tree / 業務流程 / 算法流程"
- 用戶希望「BPMN 標準形狀語義、含 Yes/No 決策分支」
- 用戶接受位圖

不要使用：

- 用戶要的是「步驟教程插畫」（暖色、卡通感） → 用 `infographics/step-by-step-infographic.md`
- 用戶要的是「時序圖」（actor + 消息）→ 用 `technical-diagrams/sequence-diagram.md`
- 用戶要的是「狀態機」（state + transition）→ 用 `technical-diagrams/state-machine.md`
- 用戶要的是「系統架構」（多組件部署）→ 用 `technical-diagrams/system-architecture.md`
- 用戶要的是「漫畫分鏡流程」 → 用 `storyboards-and-sequences/recipe-process-flowchart.md`

## 缺失信息優先提問順序

1. 流程名稱（"用戶註冊流程 / 退款流程 / XX 算法流程"）
2. 起點 / 終點（什麼觸發？什麼結束？）
3. 主要步驟（建議 5-12 個步驟，超過考慮分子流程）
4. 決策點（哪些地方需要分支？分支條件？）
5. 是否有異常分支 / 失敗迴路
6. 流向（top-down 自上而下 / left-right 從左到右）
7. 比例（top-down 用 3:4 或 9:16；left-right 用 16:9）

## 主模板：標準 BPMN 風流程圖

📖 描述

整張圖按"開始 → 過程 → 決策 → 結束"的 BPMN 形狀語義流動，自上而下排布，決策點用菱形 + 雙向分支，箭頭標 Yes/No。整體在暗色 grid 背景上呈現工程感。

📝 提示詞

```json
{
  "type": "工程感流程圖 / 決策圖",
  "goal": "生成一張用 BPMN 標準形狀語義畫的業務流程圖，可作 README / blog / 文檔配圖",
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect_ratio\" default=\"3:4 portrait\"}",
    "background": "deep slate #0F172A with subtle 1px grid #1E293B at 32px spacing",
    "outer_padding": "60px"
  },
  "title_strip": {
    "title": "{argument name=\"title\" default=\"User Registration Flow\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"with email verification\"}",
    "position": "top-left, JetBrains Mono / SF Mono, light gray"
  },
  "flow_direction": "{argument name=\"flow_direction\" default=\"top-to-bottom\"}",
  "shape_legend": {
    "start_end": {
      "shape": "filled solid circle (start) and target / bullseye circle (end), or fully rounded pill rectangle with label 'Start' / 'End'",
      "color": "cyan #22D3EE for start, rose #FB7185 for end"
    },
    "process": {
      "shape": "rectangle with corner radius 8px",
      "color": "emerald #34D399 border + 12% fill"
    },
    "decision": {
      "shape": "diamond (rotated square)",
      "color": "amber #FBBF24 border + 12% fill",
      "labels": "Yes / No on outgoing arrows; arrow color: emerald for Yes, slate for No"
    },
    "io": {
      "shape": "parallelogram (skewed rectangle)",
      "color": "violet #A78BFA border + 12% fill",
      "use_for": "用戶輸入、數據寫入、外部 API 輸入輸出"
    },
    "subprocess": {
      "shape": "rectangle with corner radius 8px and a smaller secondary rectangle inside (BPMN sub-process notation)",
      "color": "blue #60A5FA border + 12% fill",
      "use_for": "封裝子流程，避免主圖過大"
    }
  },
  "nodes": {
    "count": "{argument name=\"node_count\" default=\"9\"}",
    "items": [
      { "id": "S", "type": "start_end", "label": "Start" },
      { "id": "N1", "type": "io", "label": "User submits email + password" },
      { "id": "N2", "type": "process", "label": "Validate input format" },
      { "id": "N3", "type": "decision", "label": "Email already exists?" },
      { "id": "N4a", "type": "process", "label": "Show error: account exists" },
      { "id": "N4b", "type": "process", "label": "Create user record" },
      { "id": "N5", "type": "process", "label": "Send verification email" },
      { "id": "N6", "type": "decision", "label": "User clicks link within 24h?" },
      { "id": "N7a", "type": "process", "label": "Mark account verified" },
      { "id": "N7b", "type": "process", "label": "Soft-delete record" },
      { "id": "E", "type": "start_end", "label": "End" }
    ]
  },
  "edges": {
    "rule": "edges 沿主軸正交走線（自上而下時主軸 vertical），決策分支水平展開",
    "items": [
      { "from": "S", "to": "N1" },
      { "from": "N1", "to": "N2" },
      { "from": "N2", "to": "N3" },
      { "from": "N3", "to": "N4a", "label": "Yes" },
      { "from": "N3", "to": "N4b", "label": "No" },
      { "from": "N4a", "to": "E" },
      { "from": "N4b", "to": "N5" },
      { "from": "N5", "to": "N6" },
      { "from": "N6", "to": "N7a", "label": "Yes" },
      { "from": "N6", "to": "N7b", "label": "No" },
      { "from": "N7a", "to": "E" },
      { "from": "N7b", "to": "E" }
    ],
    "edge_style": {
      "default": "solid line 1.5px slate #64748B with filled triangle arrowhead",
      "yes_branch": "thin solid line in emerald #34D399 + label 'Yes' near origin in mono 9pt",
      "no_branch": "thin solid line in slate #64748B + label 'No'",
      "exception_branch": {
        "enabled": "{argument name=\"exception_branch_enabled\" default=\"false\"}",
        "style": "dashed rose #FB7185 line, label 'Exception' / 'Error'"
      }
    }
  },
  "swim_lanes": {
    "enabled": "{argument name=\"swim_lanes_enabled\" default=\"false\"}",
    "rule": "if true, divide canvas into vertical / horizontal lanes labeled by actor (e.g. 'User', 'Frontend', 'Backend', 'Email Service'); place each node in its actor's lane"
  },
  "legend": {
    "enabled": true,
    "position": "bottom-right",
    "content": "shape → role mapping (start/end, process, decision, io, subprocess) and edge → meaning",
    "style": "small panel, semi-transparent bg, mono 10pt"
  },
  "constraints": {
    "must_keep": [
      "BPMN 形狀語義嚴格對應",
      "決策節點必有 ≥ 2 條分支",
      "每條決策分支必標 'Yes' / 'No' 或具體條件",
      "edges 正交走線，標籤不與邊重疊",
      "暗色背景 + 等寬字體",
      "至少有 1 個 start 和 1 個 end",
      "legend 必畫"
    ],
    "avoid": [
      "用 emoji 節點",
      "把決策點畫成圓 / 方（必須菱形）",
      "把過程畫成菱形（混淆語義）",
      "斜線亂飛 / 邊穿過節點",
      "節點 > 15 個（拆分子流程）",
      "決策分支沒有標籤",
      "用花哨字體 / 漸變填充",
      "把流程圖畫成插畫感（步驟教程請用 step-by-step-infographic）",
      "聲稱這是可編輯 SVG（它是位圖）"
    ]
  }
}
```

### 參數策略

- **必問**：`title`、起點 + 終點、節點列表（含 type）、決策點的分支條件
- **可默認**：`flow_direction`（top-to-bottom）、`background`（暗色 grid）、`shape_legend`、`legend_enabled`（true）
- **可隨機**：節點位置（基於 flow_direction 自動布局）

### 自動補全策略

- 用戶給 5-7 個步驟但沒說決策 → 默認無決策（純線性流程）
- 用戶說"含異常處理" → 啓用 `exception_branch_enabled` + 加 dashed rose 線
- 用戶說"多角色 / 跨部門 / 跨服務" → 啓用 `swim_lanes_enabled`
- 用戶說"流程很長，超過 12 步" → 反問是否拆分爲多個子流程
- 用戶說要 light 模式 → 用變體 1

## 變體 1：淺色 Light 流程圖

```json
{
  "modify": {
    "background": "warm off-white #F8FAFC + faint grid #E2E8F0",
    "node_fill": "shape role color × 8% opacity",
    "node_border": "1.5px solid full opacity (use deeper shade for white bg)",
    "label_color": "deep slate #0F172A",
    "edge_color": "slate #475569",
    "vibe": "適合白底文檔站 / 印刷版"
  }
}
```

## 變體 2：Swim Lanes 跨角色泳道流程圖

```json
{
  "modify": {
    "swim_lanes_enabled": true,
    "lane_layout": "vertical lanes (each actor a vertical column)",
    "lane_labels": ["User", "Frontend", "Backend API", "Database", "Email Service"],
    "rule": "每個 node 放進對應 actor 的 lane；edges 跨 lane 時用粗箭頭",
    "use_case": "跨部門審批、跨服務交互、用戶與系統多次互動"
  }
}
```

適用：跨部門審批流程、跨服務交互流程、需要明確"誰幹什麼"的流程。

## 變體 3：算法僞代碼可視化流程

```json
{
  "modify": {
    "title": "Algorithm: <name>",
    "node_label_format": "節點 label 用僞代碼片段而非自然語言",
    "rule_extra": "保留循環節點（向回的弧形箭頭表示 loop），變量賦值用 ← 符號",
    "vibe": "適合論文 algorithm box 的可視化版本"
  }
}
```

適用：算法可視化、論文 algorithm 章節的視覺版、教學講義。

## 避免事項

- 決策菱形畫成方塊或圓（語義混淆）
- 決策分支沒有 Yes / No 標籤
- 節點 > 15 個（視覺爆炸，建議拆分）
- 用 emoji 節點圖標
- 邊斜飛 / 穿過節點 / 標籤碰撞
- 用插畫感卡通圖（請用 `step-by-step-infographic.md`）
- 用 3D / 漸變 / 玻璃質感
- 多個起點或多個終點未標記清楚
- swim lane 時把跨 lane 的箭頭畫得不顯眼
- 把"系統架構"塞進流程圖（節點是組件而非動作）
