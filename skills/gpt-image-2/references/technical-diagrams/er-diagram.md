# ER 圖 / 數據模型圖模板

> ⚠️ **本模板生成的是位圖（PNG）**，不是 dbdiagram.io / draw.io 可編輯 ER 圖。
> 需要可編輯請用 dbdiagram.io / draw.io / DBeaver。

本文件用於生成"工程感 ER 圖 / 數據模型圖"：

- 數據庫表結構圖（PG / MySQL / SQLite）
- 領域模型圖（DDD 實體 + 關係）
- 文檔型數據庫 schema（MongoDB / DynamoDB）
- API 數據契約 schema 圖
- 微服務邊界 + 數據所有權圖

特徵：

- 實體框 = 圓角矩形，分上下兩區：上區表名 / 下區字段列表
- 字段行 = 字段名 + 類型 + 主鍵 PK / 外鍵 FK 標記
- 關係連線 = 1:1 / 1:N / N:M（用 crow's foot 或 UML 多重性）
- 暗色 grid + 等寬字體（沿用視覺系統）

## 適用範圍

- 數據庫表結構
- 領域模型 / DDD 實體
- API schema 文檔
- 數據庫設計 review
- 微服務數據所有權圖

## 何時使用

- 用戶提到 "ER 圖 / Entity-Relationship / 數據模型 / 數據庫設計 / schema 圖 / 表結構"
- 用戶希望「實體 + 字段 + 關係」標準 ER 圖樣式
- 用戶接受位圖

不要使用：

- 用戶要的是「系統架構」 → 用 `technical-diagrams/system-architecture.md`
- 用戶要的是「類圖 / UML 類圖」（含方法）→ 暫未做專門模板，可借用本模板加方法行
- 用戶要的是「思維導圖」 → 用 `technical-diagrams/mind-map-tech.md`

## 缺失信息優先提問順序

1. 數據庫 / 領域名稱（"e-commerce 數據模型 / SaaS 用戶管理 schema"）
2. 實體列表（建議 4-12 個，超過考慮分子圖）
3. 每個實體的字段（字段名 + 類型 + PK/FK + 是否 nullable）
4. 實體間關係（1:1 / 1:N / N:M，是否級聯）
5. 是否包含枚舉 / 索引 / 約束
6. 比例（默認 4:3 或 16:9）

## 主模板：標準 ER 圖（暗色工程風）

📖 描述

整張圖由若干實體框組成，每個實體框上半顯示錶名 + 表標籤 (📦 entity)，下半列字段（含類型 + PK/FK 標記），實體之間用關係線連接，端點用 crow's foot 表達 1 / N。

📝 提示詞

```json
{
  "type": "工程感 ER 圖 / 數據模型圖",
  "goal": "生成一張工程感 ER 圖作爲數據庫設計文檔 / API schema / 領域模型 review 配圖",
  "canvas": {
    "aspect_ratio": "{argument name=\"aspect_ratio\" default=\"4:3\"}",
    "background": "deep slate #0F172A with subtle 1px grid #1E293B at 32px spacing",
    "outer_padding": "60px"
  },
  "title_strip": {
    "title": "{argument name=\"title\" default=\"E-commerce Data Model\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"core entities · v1.0\"}",
    "position": "top-left, JetBrains Mono / SF Mono, light gray"
  },
  "entities": {
    "count": "{argument name=\"entity_count\" default=\"6\"}",
    "items": [
      {
        "id": "E1",
        "name": "users",
        "category": "user",
        "fields": [
          { "name": "id", "type": "uuid", "marker": "PK" },
          { "name": "email", "type": "varchar(255)", "marker": "UQ" },
          { "name": "password_hash", "type": "varchar(255)", "marker": "" },
          { "name": "created_at", "type": "timestamp", "marker": "" },
          { "name": "updated_at", "type": "timestamp", "marker": "" }
        ]
      },
      {
        "id": "E2",
        "name": "orders",
        "category": "transaction",
        "fields": [
          { "name": "id", "type": "uuid", "marker": "PK" },
          { "name": "user_id", "type": "uuid", "marker": "FK→users.id" },
          { "name": "status", "type": "enum", "marker": "" },
          { "name": "total_cents", "type": "bigint", "marker": "" },
          { "name": "created_at", "type": "timestamp", "marker": "" }
        ]
      },
      {
        "id": "E3",
        "name": "order_items",
        "category": "transaction",
        "fields": [
          { "name": "id", "type": "uuid", "marker": "PK" },
          { "name": "order_id", "type": "uuid", "marker": "FK→orders.id" },
          { "name": "product_id", "type": "uuid", "marker": "FK→products.id" },
          { "name": "quantity", "type": "int", "marker": "" },
          { "name": "unit_price_cents", "type": "bigint", "marker": "" }
        ]
      },
      {
        "id": "E4",
        "name": "products",
        "category": "catalog",
        "fields": [
          { "name": "id", "type": "uuid", "marker": "PK" },
          { "name": "sku", "type": "varchar(64)", "marker": "UQ" },
          { "name": "name", "type": "varchar(255)", "marker": "" },
          { "name": "price_cents", "type": "bigint", "marker": "" },
          { "name": "stock", "type": "int", "marker": "" }
        ]
      },
      {
        "id": "E5",
        "name": "categories",
        "category": "catalog",
        "fields": [
          { "name": "id", "type": "uuid", "marker": "PK" },
          { "name": "name", "type": "varchar(128)", "marker": "" },
          { "name": "parent_id", "type": "uuid", "marker": "FK→categories.id (self)" }
        ]
      },
      {
        "id": "E6",
        "name": "product_categories",
        "category": "join",
        "fields": [
          { "name": "product_id", "type": "uuid", "marker": "PK,FK→products.id" },
          { "name": "category_id", "type": "uuid", "marker": "PK,FK→categories.id" }
        ]
      }
    ]
  },
  "entity_style": {
    "shape": "rounded rectangle, corner radius 6px",
    "fill": "category color × 10% opacity",
    "border": "1.5px solid in category color",
    "header_strip": "topmost ~28px height: filled with category color × 25% opacity, contains table name in bold mono 12pt + small icon glyph",
    "field_row_style": "below header: each field row = 'field_name : type [marker]' in mono 10pt, alternating row tint for readability",
    "marker_color": "PK = amber bold, FK = blue, UQ = violet, NN = subtle gray"
  },
  "category_color_map": {
    "user": "cyan #22D3EE",
    "transaction": "emerald #34D399",
    "catalog": "violet #A78BFA",
    "join": "slate #94A3B8",
    "system": "amber #FBBF24",
    "external": "rose #FB7185"
  },
  "relationships": {
    "items": [
      { "from": "E1", "to": "E2", "cardinality": "1:N", "label": "places" },
      { "from": "E2", "to": "E3", "cardinality": "1:N", "label": "contains" },
      { "from": "E4", "to": "E3", "cardinality": "1:N", "label": "appears_in" },
      { "from": "E4", "to": "E6", "cardinality": "1:N", "label": "" },
      { "from": "E5", "to": "E6", "cardinality": "1:N", "label": "" },
      { "from": "E5", "to": "E5", "cardinality": "0..1:N", "label": "parent_of (self)" }
    ],
    "line_style": {
      "default": "solid line 1.5px slate #94A3B8",
      "endpoint_notation": "use crow's foot notation: '1' = single perpendicular tick, 'N' = three-pronged 'crow's foot', '0..1' = open circle + tick, '0..N' = open circle + crow's foot",
      "label_format": "relationship verb in mono 9pt placed near the middle of the line, e.g. 'places' / 'contains'"
    },
    "rule_routing": "lines avoid crossing entities; orthogonal routing preferred; self-relations curve to the side"
  },
  "extras": {
    "indices_section": {
      "enabled": "{argument name=\"indices_enabled\" default=\"false\"}",
      "rule": "if true, below each entity add a small 'Indices' section listing index names (e.g. 'idx_users_email')"
    },
    "color_legend": {
      "enabled": true,
      "position": "bottom-right",
      "content": "category color → role mapping + marker meaning (PK / FK / UQ / NN) + cardinality notation"
    }
  },
  "constraints": {
    "must_keep": [
      "實體框形狀統一（圓角矩形 + header strip）",
      "字段行用等寬字體，類型靠右或冒號分隔",
      "PK / FK / UQ 標記清晰（顏色 + 文字）",
      "關係線用 crow's foot 或 UML 多重性表達 1:1 / 1:N / N:M",
      "FK 字段在表內必須標 FK→target_table.field",
      "暗色 grid 背景 + 等寬字體",
      "legend 必畫"
    ],
    "avoid": [
      "用菱形當實體（語義錯誤）",
      "字段行使用比例字體（破壞對齊）",
      "FK 沒標 target → 關係丟失上下文",
      "關係線沒有 cardinality endpoint",
      "實體 > 12 個（擁擠；按子領域拆分）",
      "join 表與普通表用同色（應該用 'join' 灰色區分）",
      "用 emoji 當字段標記",
      "聲稱這是可編輯 SVG"
    ]
  }
}
```

### 參數策略

- **必問**：`title`、實體列表（含字段 + PK/FK 標記）、關系列表（含 cardinality）
- **可默認**：`background`（暗色 grid）、`category_color_map`、`indices_enabled`（false）
- **可隨機**：實體擺放位置（自動布局減少邊交叉）

### 自動補全策略

- 用戶給"e-commerce schema" → 用 default 6 實體
- 用戶沒指定 cardinality → 反問（關係語義不能瞎猜）
- 用戶沒分類 category → 自動按表名歸類（users → user, orders → transaction, products → catalog, *_join → join）
- 用戶說要 light 模式 → 用變體 1
- 用戶說"含索引" → 啓用 `indices_enabled`

## 變體 1：淺色 Light ER 圖

```json
{
  "modify": {
    "background": "warm off-white #F8FAFC + faint grid #E2E8F0",
    "entity_fill": "category color × 8% opacity",
    "entity_border": "1.5px solid (deeper shade for white bg)",
    "label_color": "deep slate #0F172A",
    "vibe": "白底文檔站友好"
  }
}
```

## 變體 2：DDD 領域模型圖（含方法 / 行爲）

```json
{
  "modify": {
    "entity_label_format": "<<entity / value object / aggregate root>> 在表名上方加 stereotype 標籤",
    "field_section_split": "實體內部分兩部分：上面字段，下面方法（用 '——' 分隔線分開），方法格式 'methodName(args): returnType'",
    "category_color_map_extra": "aggregate root = amber, entity = emerald, value object = violet, domain service = cyan",
    "use_case": "DDD 戰術設計 review、領域建模 workshop"
  }
}
```

適用：DDD 項目領域建模、UML 類圖、業務建模。

## 變體 3：微服務數據所有權圖（bounded context）

```json
{
  "modify": {
    "extras": "用大虛線框（bounded context）包圍屬於同一服務的實體，框上標 'User Service' / 'Order Service' 等",
    "cross_service_relations": "跨服務的關係用紅色虛線（暗示 anti-pattern 或顯式服務邊界跨越）",
    "use_case": "微服務拆分、bounded context 設計、康威定律對齊"
  }
}
```

適用：微服務設計、bounded context 劃分、數據所有權 review。

## 避免事項

- 字段行用比例字體 → 類型 / 標記不對齊
- FK 不標 target → 關係上下文丟失
- 關係線沒 cardinality → 完全失去 ER 語義
- 實體 > 12 → 視覺爆炸，必須拆分
- 用菱形當 entity → 語義錯誤
- 用 emoji 當字段標記
- join 表與普通表混色
- 聲稱這是可編輯 SVG
- 把"系統架構"塞進 ER 圖（應該用對應模板）
- 把字段類型省略 → 失去工程價值
