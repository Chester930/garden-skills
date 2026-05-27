# 時序圖模板

> ⚠️ **本模板生成的是位圖（PNG）**，不是 PlantUML / mermaid 可編輯時序圖。
> 需要可編輯請用 mermaid / PlantUML / draw.io。

本文件用於生成"工程感時序圖"：

- API 調用時序（前端 → 後端 → DB）
- 鑑權 / OAuth / 多步握手時序
- 微服務間消息傳遞時序
- 分布式事務 / Saga / 2PC 時序
- 客戶端 - 服務器 - 第三方 三方協議時序

特徵：

- 頂部一排 actor 框（帶名字 + 類型 icon）
- 每個 actor 下方一條垂直虛線（lifeline）
- 水平消息箭頭連接 actors（實箭頭同步、虛線箭頭異步 / return）
- lifeline 上有"激活條"（細長矩形）表示該 actor 正在處理
- 消息可編號（1, 2, 3...）
- 暗色 grid 背景 + 等寬字體

## 適用範圍

- API 調用時序
- 鑑權 / OAuth 流程
- 微服務消息時序
- 分布式事務 / Saga / 2PC
- 第三方協議 / SDK 調用流

## 何時使用

- 用戶提到 "時序圖 / sequence diagram / 調用時序 / API 流 / OAuth 流 / 分布式事務"
- 用戶希望「actor + lifeline + 消息箭頭」標準 UML 時序圖樣式
- 用戶接受位圖

不要使用：

- 用戶要的是「業務流程 / 決策」 → 用 `technical-diagrams/flowchart-decision.md`
- 用戶要的是「狀態機」 → 用 `technical-diagrams/state-machine.md`
- 用戶要的是「系統架構」 → 用 `technical-diagrams/system-architecture.md`

## 缺失信息優先提問順序

1. 時序名稱（"OAuth 2.0 授權碼流程 / 下單時序 / Saga 事務"）
2. 參與的 actors（按從左到右順序）
3. 消息序列（按時間順序，標明 sender → receiver、消息內容、同步 / 異步）
4. 是否有失敗 / 重試分支
5. 是否有 self-call（actor 調用自己內部方法）
6. 是否需要消息編號（論文 / 協議描述常需要）
7. 比例（默認 16:9 橫版；actor 多時可用 4:3）

## 主模板：標準 UML 時序圖

📖 描述

整張圖頂部一排 actor 框，下方每個 actor 一條垂直虛線 lifeline，水平消息箭頭連接 actors，激活條標在 lifeline 上，消息編號 + 標籤清晰。

📝 提示詞

```json
{
  "type": "工程感時序圖（UML sequence diagram）",
  "goal": "生成一張工程感時序圖作爲 README / blog / 協議文檔配圖",
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect_ratio\" default=\"16:9\"}",
    "background": "deep slate #0F172A with subtle 1px grid #1E293B at 32px spacing",
    "outer_padding": "60px"
  },
  "title_strip": {
    "title": "{argument name=\"title\" default=\"OAuth 2.0 Authorization Code Flow\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"with PKCE\"}",
    "position": "top-left, JetBrains Mono / SF Mono, light gray"
  },
  "actors": {
    "count": "{argument name=\"actor_count\" default=\"4\"}",
    "items": [
      {
        "id": "A1",
        "name": "{argument name=\"actor1_name\" default=\"User\"}",
        "type": "{argument name=\"actor1_type\" default=\"user\"}",
        "icon_glyph": "stick figure outline"
      },
      {
        "id": "A2",
        "name": "{argument name=\"actor2_name\" default=\"Web App\"}",
        "type": "{argument name=\"actor2_type\" default=\"client\"}",
        "icon_glyph": "browser window outline"
      },
      {
        "id": "A3",
        "name": "{argument name=\"actor3_name\" default=\"Auth Server\"}",
        "type": "{argument name=\"actor3_type\" default=\"service\"}",
        "icon_glyph": "shield outline"
      },
      {
        "id": "A4",
        "name": "{argument name=\"actor4_name\" default=\"Resource Server\"}",
        "type": "{argument name=\"actor4_type\" default=\"service\"}",
        "icon_glyph": "database / server outline"
      }
    ],
    "header_box_style": {
      "shape": "rounded rectangle, corner radius 6px",
      "fill": "type-coded color × 12% opacity",
      "border": "1.5px solid type-coded color",
      "size": "160px wide × 64px tall, all headers identical size, evenly spaced",
      "label": "actor name in mono 11pt + small icon glyph above name"
    },
    "type_color_map": {
      "user": "cyan #22D3EE",
      "client": "blue #60A5FA",
      "service": "emerald #34D399",
      "database": "violet #A78BFA",
      "external": "slate #94A3B8"
    }
  },
  "lifelines": {
    "rule": "每個 actor header 下方畫一條垂直虛線 (1px dashed slate #475569)，從 header 底部一直延伸到畫布底部",
    "spacing": "lifelines 之間等距，間距 ≥ 200px"
  },
  "messages": {
    "count": "{argument name=\"message_count\" default=\"10\"}",
    "items": [
      { "id": "M1", "from": "A1", "to": "A2", "label": "1. Click 'Sign in'", "type": "sync" },
      { "id": "M2", "from": "A2", "to": "A3", "label": "2. GET /authorize?code_challenge=...", "type": "sync" },
      { "id": "M3", "from": "A3", "to": "A1", "label": "3. Show login page", "type": "return" },
      { "id": "M4", "from": "A1", "to": "A3", "label": "4. Submit credentials", "type": "sync" },
      { "id": "M5", "from": "A3", "to": "A2", "label": "5. Redirect with auth_code", "type": "return" },
      { "id": "M6", "from": "A2", "to": "A3", "label": "6. POST /token { code, code_verifier }", "type": "sync" },
      { "id": "M7", "from": "A3", "to": "A2", "label": "7. { access_token, refresh_token }", "type": "return" },
      { "id": "M8", "from": "A2", "to": "A4", "label": "8. GET /api/data (Bearer token)", "type": "sync" },
      { "id": "M9", "from": "A4", "to": "A4", "label": "9. validate token", "type": "self" },
      { "id": "M10", "from": "A4", "to": "A2", "label": "10. { data: ... }", "type": "return" }
    ],
    "message_style": {
      "sync": "solid line 1.5px slate #94A3B8, filled triangle arrowhead at target",
      "async": "solid line 1.5px slate #94A3B8, hollow triangle arrowhead",
      "return": "dashed line 1.5px slate #64748B, hollow triangle arrowhead",
      "self": "horizontal arrow that loops out to the right and back to the same lifeline (bracket shape)"
    },
    "label_format": "<編號>. <消息內容>，例如 '5. Redirect with auth_code'，mono 10pt，標在 arrow 上方居中"
  },
  "activation_bars": {
    "enabled": "{argument name=\"activation_bars_enabled\" default=\"true\"}",
    "rule": "在 actor lifeline 上畫細長矩形（4-6px 寬）覆蓋該 actor 處理消息的時間段；顏色用 actor 的 type color，半透明",
    "vertical_extent": "從該 actor 收到一個 message 開始，到它發出 return 結束"
  },
  "annotations": {
    "notes": {
      "enabled": "{argument name=\"notes_enabled\" default=\"false\"}",
      "rule": "可在某段時序旁畫黃色便籤（amber 半透明圓角矩形），加注釋；如 'PKCE prevents code interception'"
    },
    "loops_alts": {
      "enabled": "{argument name=\"loops_alts_enabled\" default=\"false\"}",
      "rule": "可用 UML alt / loop 框：圓角矩形包圍多條消息，左上角標 'alt' / 'loop' + 條件文本"
    }
  },
  "legend": {
    "enabled": true,
    "position": "bottom-right",
    "content": "actor type → color, message style → meaning (sync solid arrow / async hollow / return dashed / self bracket)",
    "style": "small panel, semi-transparent bg, mono 10pt"
  },
  "constraints": {
    "must_keep": [
      "actor headers 等大小、等間距、水平對齊",
      "lifelines 垂直、等間距",
      "messages 嚴格按時間從上到下排列",
      "每條 message 有編號 + 簡潔標籤",
      "sync / return / async 用不同箭頭風格區分",
      "暗色 grid 背景 + 等寬字體",
      "legend 必畫"
    ],
    "avoid": [
      "actor header 大小不一",
      "messages 不按時間順序",
      "self-call 畫成水平直線（必須 bracket / loop 形）",
      "return 用實線箭頭（破壞語義）",
      "label 與 lifeline 重疊",
      "用 emoji 當 actor 圖標",
      "actor > 6 個（擁擠；考慮拆分）",
      "messages > 15 條（視覺爆炸；考慮分子時序）",
      "聲稱這是可編輯 SVG"
    ]
  }
}
```

### 參數策略

- **必問**：`title`、actors 列表、messages 序列（含 from/to/label/type）
- **可默認**：`activation_bars_enabled`（true）、`type_color_map`、`notes_enabled`（false）、`loops_alts_enabled`（false）
- **可隨機**：actor icon glyph 具體造型、消息標籤字號微調

### 自動補全策略

- 用戶給"我要畫 OAuth 流程" → 默認 4 actor + 10 消息（用戶 → web → auth → resource）
- 用戶沒說 sync / async → 默認 sync；明顯的回調 / 通知場景默認 async
- 用戶說"含失敗重試" → 啓用 `loops_alts_enabled` + alt block 包圍
- 用戶說"加注釋解釋" → 啓用 `notes_enabled`
- 用戶說要 light 模式 → 用變體 1

## 變體 1：淺色 Light 時序圖

```json
{
  "modify": {
    "background": "warm off-white #F8FAFC + faint grid #E2E8F0",
    "actor_header_fill": "type color × 8% opacity",
    "actor_header_border": "1.5px solid (deeper shade for white bg)",
    "label_color": "deep slate #0F172A",
    "lifeline_color": "slate #94A3B8 dashed",
    "vibe": "白底文檔 / 印刷版友好"
  }
}
```

## 變體 2：協議握手 / OAuth / 鑑權專用風

```json
{
  "modify": {
    "messages_emphasis": "爲安全 / token 類消息加 🔒 等價 glyph 或 'TLS' / 'signed' 小標籤",
    "extras": "在 message 上額外標 HTTP method（GET/POST/PUT），加微小 mono 標籤",
    "annotation": "加 PKCE / nonce / state 解釋 note，notes_enabled = true",
    "use_case": "OAuth 2.0 / OIDC / SAML / mTLS 等協議"
  }
}
```

適用：協議教學、鑑權流程文檔。

## 變體 3：分布式事務 / Saga / 2PC 風

```json
{
  "modify": {
    "actor_types": "通常 4-5 個 service actor + 1 個 coordinator + 1 個 message broker",
    "messages_emphasis": "明確標 prepare / commit / rollback / compensate 階段，用不同顏色 (commit 綠、rollback 紅、prepare 藍)",
    "loops_alts_enabled": true,
    "alt_blocks": "alt 'commit phase' / 'rollback phase' 包圍相應消息",
    "use_case": "Saga / 2PC / TCC / outbox pattern 教學和文檔"
  }
}
```

適用：分布式事務模式教學、架構 review、failure mode 分析。

## 避免事項

- 時序圖但 messages 不按時間從上到下 → 失去時序性
- 用菱形 / 圓形當 actor（必須矩形 header）
- self-call 畫成直線（必須 bracket）
- return 用實線（與 sync 混淆）
- actor > 6 → 視覺擁擠，考慮拆分
- messages > 15 → 視覺爆炸
- 用 emoji 當 actor 圖標
- 把 actor 頭像做成卡通人物 → 失去工程感
- 沒有 activation 條 → 看不出誰在處理
- 沒有 message 編號（教學場景必須有）
- 把"流程圖"畫成時序圖（節點應該是動作而非 actor）
