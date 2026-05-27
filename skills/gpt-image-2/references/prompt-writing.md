# JSON 提示詞模板總規範

本文件是 `gpt-image-2` skill 的模板方法論總文檔。後續所有具體模板文件都應儘量遵守這裡的規則。

它不提供某個具體視覺場景的完整模板，而是定義：

- 模板應該如何組織
- 字段應該如何設計
- 參數如何區分爲「必問 / 默認 / 隨機」
- 缺失信息應該如何提問
- 如何從案例提煉出可復用的結構化 JSON 模板

---

# 一、何時使用 JSON 模板

當任務滿足以下任一條件時，優先使用 JSON 模板，而不是直接寫一整段自然語言提示詞：

1. 畫面元素很多
2. 畫面包含多個功能區域
3. 需要 UI / 商品卡 / 評論區 / 圖例 / 標註 / 頁眉頁腳等結構
4. 需要支持多個變體
5. 需要支持「用戶指定 / 默認值 / 隨機生成」三種模式
6. 後續很可能復用、擴寫或調試

典型適用場景：

- 電商直播 UI 樣機
- 產品爆炸視圖海報
- 手繪城市地圖
- 講解型 Slides
- 高信息密度說明圖

不必強行使用 JSON 模板的場景：

- 很簡單的單主體圖
- 沒有複雜布局和多區域結構
- 用戶只想快速試一個很輕量的視覺方向

---

# 二、references 的目錄規則

`references/` 必須採用：

- 一級：分類目錄
- 二級：單模板 Markdown 文件

例如：

```text
references/
  ui-mockups/
    live-commerce-ui.md
    social-interface-mockup.md
  product-visuals/
    exploded-view-poster.md
```

不要繼續採用：

- 一個大類一個大文件
- 一個來源一個文件
- 一個案例一個沒有分類的平鋪文件

目錄樹的好處：

- 精準讀取
- 易於擴展
- 模板互不污染
- 每個模板文件可以寫得很完整

---

# 三、單模板文件的標準結構

每個具體模板文件建議遵循以下結構：

```markdown
# 模板名稱

## 適用範圍

## 何時使用

## 缺失信息優先提問順序

## 主模板

📖 描述

📝 提示詞
```json
{ ... }
```

### 參數策略

### 自動補全策略

### 變體方式

## 變體 1

## 變體 2

## 避免事項
```

說明：

- `主模板` 必須先有
- 變體模板建立在主模板之上
- 參數策略、自動補全策略、避免事項不能省略

---

# 四、JSON 模板的推薦骨架

大多數模板建議優先從以下骨架開始：

```json
{
  "type": "模板類型",
  "goal": "圖像用途",
  "subject": {},
  "scene": {},
  "layout": {},
  "style": {},
  "details": {},
  "constraints": {}
}
```

## 字段職責

### `type`

模板類型名稱，例如：

- 直播 UI 樣機
- 產品爆炸視圖海報
- 手繪地圖信息圖

### `goal`

說明這張圖最終要幹什麼，例如：

- 電商直播截圖樣機
- 品牌主視覺海報
- 旅遊攻略地圖
- 高信息密度講解圖

### `subject`

主體內容，例如：

- 人物
- 商品
- 城市
- 角色
- 插畫主角

### `scene`

場景、背景、環境、氛圍。

### `layout`

畫面區域組織方式，適用於：

- 海報
- UI
- 地圖
- slides
- 多區域結構圖

### `style`

風格、渲染、材質、色彩傾向、光線。

### `details`

用於裝載局部細節，例如：

- 商品賣點
- callout labels
- 評論內容
- 圖例元素
- 頁腳文案

### `constraints`

用於明確：

- 必須出現什麼
- 必須避免什麼
- 最終結果更像什麼、不像什麼

---

# 五、場景特有字段建議

不同分類下可擴展不同結構。

## 5.1 UI Mockups

建議額外使用：

```json
{
  "ui_overlay": {
    "top_header": {},
    "chat_area": {},
    "gift_area": {},
    "product_card": {},
    "bottom_bar": {}
  }
}
```

## 5.2 Product Visuals

建議額外使用：

```json
{
  "header": {},
  "centerpiece": {},
  "callout_labels": {},
  "footer": {},
  "component_layers": []
}
```

## 5.3 Maps & Infographics

建議額外使用：

```json
{
  "title_section": {},
  "sections": [],
  "legend": {},
  "centerpiece": {},
  "extras": {}
}
```

## 5.4 Slides & Visual Docs

建議額外使用：

```json
{
  "page_type": "",
  "information_density": "",
  "headline_system": {},
  "visual_blocks": [],
  "annotation_style": {}
}
```

## 5.5 Storyboards & Sequences（電影分鏡 / TVC / 流程板 / 漫畫）

適用於「同一條敘事 / 同一個流程 / 同一組動作」按 N×M 網格輸出多個 panel 的視覺。子類彼此之間字段差異大，按子類分別給字段建議：

### 5.5.1 電影 / 短片 cinematic 分鏡（如 `cinematic-storyboard-grid.md`）

```json
{
  "subject": { "primary": "", "secondary": "", "mood": "", "style": "", "aspect_ratio_per_panel": "" },
  "vehicle_or_actor": { "design": "", "scale": "" },
  "layout": {
    "grid": { "rows": 0, "columns": 0, "count": 0 },
    "sheet_aspect_ratio": "",
    "panel_borders": "",
    "sections": [{ "position": "row x col y", "description": "" }],
    "continuity": "(必填) 顯式聲明 N 個 panel 是連續敘事 / 同一 hero / 同一 mood"
  },
  "lighting": { "primary": "", "secondary": "", "accents": "" },
  "environment": { "location": "", "weather": "", "threat": "" }
}
```

字段經驗：

- `sections` 必須是數組，**嚴格按 row-major 順序列出每鏡**（不要讓模型自由排列）
- `continuity` 是該子類的關鍵字段，**必填**
- 每鏡描述要包含「景別 + 主體動作 + 光線 / 情緒」三要素
- 遠 / 中 / 近 / POV 鏡頭要混搭，不要全特寫或全遠景

### 5.5.2 商業廣告 TVC 分鏡（如 `product-tvc-storyboard.md`）

```json
{
  "header": { "title": "", "subtitle_meta": "", "product_name_subtitle": "" },
  "layout": { "grid": { "rows": 0, "columns": 0, "panel_count": 0, "panel_aspect_ratio": "" } },
  "scenes": {
    "count": 0,
    "items": [{ "id": 1, "title_zh": "", "timestamp": "0-2s", "description": "" }]
  }
}
```

字段經驗：

- 與電影分鏡相比，必須有 `header.product_name_subtitle` + 每鏡 `timestamp`（廣告強約束）
- 每鏡 `title_zh` 是面向客戶的中文小標題（如「環境建立」「特寫出鏡」「人貨同框」）
- `description` 必須**顯式包含產品**，且產品在所有鏡中外觀一致

### 5.5.3 真人 / 角色 cinematic 流程板（如 `process-photo-board.md`）

```json
{
  "subject": {
    "character": { "gender": "", "age": "", "identity": "", "hair": "", "undersuit": "", "armor_or_outfit": "", "helmet_or_headpiece": "" },
    "environment": { "location": "", "background_elements": "" }
  },
  "layout": {
    "header": { "count": 2, "labels": ["title", "subtitle"], "design": "" },
    "sections": [{ "step_id": 1, "title": "", "position": "", "labels": [], "image": "" }],
    "footer": { "count": 1, "labels": ["slogan"], "design": "" },
    "grid": { "rows": 0, "columns": 0, "panel_count": 0, "panel_borders": "", "number_badges": "" }
  },
  "text_rendering": { "language": "", "font": "", "colors": "" }
}
```

字段經驗：

- **角色一致性**靠把所有 fixed attributes（gender / hair / undersuit）獨立成 `subject.character` 字段
- **狀態遞進**靠每 step 的 `image` 字段顯式描述「此時已穿什麼 / 正在做什麼」
- 必須有 `number_badges` 字段（步驟號在視覺上一眼可識別）
- 標題語言（中 / 日 / 英）通過 `text_rendering.language` 顯式聲明

## 5.6 Catalog / Lineup / Character-Variant Poster（多卡片信息圖海報）

適用於「同一基底（角色 / 產品 / 概念）多個變體在一張海報裏並列展示」的視覺。子類：

### 5.6.1 同角色多版本海報（如 `character-catalog-poster.md`）

```json
{
  "subject_overview": "(必填) 全圖主題，如 '十二星座女子圖鑑'",
  "language": "",
  "format": "vertical poster",
  "style": { "overall": "", "rendering": "", "mood": "" },
  "layout": {
    "sections_count": 0,
    "sections": [{
      "title": "",
      "position": "",
      "theme_color": "(必填) 該 panel 的主題色，必須 panel 間各不相同",
      "symbol": "",
      "constellation": "",
      "labels": [],
      "character": { "pose": "", "outfit": "", "background": "" }
    }]
  }
}
```

字段經驗：

- 每 section 必須有自己的 `theme_color` + `symbol` + `motif`，否則會被模型畫成同一張
- `character` 子字段保留同一基底（臉型 / 體型 / 發色），僅變化 outfit / pose / background
- `subject_overview` 是模型理解 "爲什麼這些 panel 要放在一起" 的關鍵提示

### 5.6.2 系列產品 lineup 對比海報（如 `lineup-comparison-poster.md`）

```json
{
  "subject": "(必填) 描述一句包含 'lineup chart / catalog board / comparison poster'",
  "branding": { "headline": "", "signature": "", "seals": [] },
  "palette": { "background": "", "highlights": [] },
  "layout": {
    "header": { "elements": [{ "type": "legend", "title": "", "labels": [] }] },
    "sections": [{ "title": "row N tier name", "labels": [] }]
  },
  "content_grid": "顯式說明每行多少 SKU、每 SKU 是什麼樣的卡片",
  "visual_details": "材質 / 反光 / 印花 / 配件等讓 SKU 之間彼此不同的細節"
}
```

字段經驗：

- 必須有 `legend` 類元素（等級 key / 圖標 key / 風格 key），否則海報"對比"意味就消失
- `content_grid` 字段必須顯式給「每行 N 個 SKU + 行內排序邏輯（按價 / 按色 / 按年代）」
- SKU 數量通常 12 - 36，過少不像 lineup，過多每個會被畫糊

## 5.7 Day-trip Itinerary Map（左行程卡 + 右畫面地圖 split 海報）

適用於"一日遊 split 海報"（如 `itinerary-day-trip-map.md`）：

```json
{
  "destination": { "name": "", "duration": "1 day", "theme": "" },
  "headline": { "main": "", "tagline": "", "divider": "" },
  "style": { "overall": "", "left_panel_look": "", "right_panel_look": "", "color_palette": "", "atmosphere": "" },
  "layout": {
    "format": "vertical 2:3 poster, split into two equal vertical columns",
    "left_panel": { "type": "itinerary card", "header": [], "stop_count": 5, "stop_design": [], "border": "" },
    "right_panel": { "type": "painted map scene", "background": "", "path": "", "marker_design": "", "compass_rose": "", "stats_box": "" },
    "alignment_rule": "(必填) 左右編號 / 名稱 / 順序必須嚴格對齊"
  },
  "stops": {
    "count": 5,
    "items": [{ "number": 1, "name": "", "time": "", "description": "", "left_vignette": "", "right_scene": "" }]
  },
  "footer_box": { "compass_rose": "", "stats_box": { "design": "", "stats": [] } }
}
```

字段經驗：

- `alignment_rule` **必填**，否則左右兩欄極易錯位
- 每 stop 同時給 `left_vignette`（卡片小插畫）+ `right_scene`（地圖大場景）雙視覺
- `stops.count` 建議 5-7，過少不像行程，過多卡片塞不下
- `language` 默認與目的地官方語言一致（臺灣 → 繁中，京都 → 日文）

## 5.8 Multi-Grid Ad Banner Set（多行業混合廣告 banner 網格）

適用於"一圖同時展示 N 個獨立行業 / 主題 banner"（如 `ad-banner-multi-grid.md`）：

```json
{
  "language": "",
  "layout": {
    "structure": "2x2 / 3x3 grid of equal quadrants",
    "gutter": "",
    "overall_aspect_ratio": "",
    "panel_aspect_ratio": "",
    "quadrants": [{
      "position": "top-left",
      "theme": "(必填) 該格的行業 / 主題，如 'Travel' / 'Skincare'",
      "subject": "",
      "elements": [],
      "text_labels": [],
      "style": "(必填) 該格的視覺風格，與其它格不同"
    }]
  },
  "global_style": "把所有格統一的元素（如統一字體 / 統一邊框）",
  "constraints": { "must_keep": ["每格內容彼此獨立、無敘事關聯"] }
}
```

字段經驗：

- `quadrants` 數組**必填**，每格必須獨立指定 `theme` + `style`
- `global_style` 用於"統一感"（如統一字體），但**不要**讓所有格共享主體
- 與 `cinematic-storyboard-grid` 區別：本模板**強調 panel 間無敘事關聯**，每格都是獨立成品
- 與 `banner-grid-2x2`（已有）區別：本模板**多行業 / 多主題**，已有那個是同品牌多創意

## 5.9 Full Brand / Mascot Doc（18+ 模塊大型品牌識別全流程文檔）

適用於"一圖概覽整個品牌 / 吉祥物從 DNA 到落地的全流程"（如 `full-mascot-brand-doc.md`）：

```json
{
  "brand": { "name": "", "industry": "", "primary_colors": [], "voice": "" },
  "character": { "description": "", "rendering_style": "" },
  "layout": {
    "grid": "3 columns by 6 rows",
    "panel_count": 18,
    "sections": [
      { "id": "01", "title": "01 BRAND DNA ANALYSIS", "elements": [] },
      { "id": "02", "title": "02 CONCEPT MOODBOARD", "elements": [] }
    ]
  }
}
```

字段經驗：

- `sections` 數組**顯式列出 18 個模塊**，每模塊有自己的 `id` + `title` + `elements`
- 模塊 `id` 雙數字編號（01-18），方便視覺上形成「目錄感」
- 每模塊 `elements` 必須顯式列出「這一格畫什麼」（草圖 / 3D / 配色板 / 應用場景）
- 與 `mascot-brand-kit`（已有）區別：本模板是**全流程文檔**（18-24 格），已有那個是**簡化套裝**（6-9 格）

---

# 六、參數設計規則

每個模板字段都儘量判斷屬於以下哪一類。

## 6.1 核心參數（優先提問）

缺失會顯著影響結果，優先問用戶。

常見例子：

- 主體是誰
- 商品名稱是什麼
- 城市名是什麼
- 主題是什麼
- 是真人照片還是文字描述
- 平颱風格是什麼

## 6.2 可默認參數

缺失後可以先用默認值，不影響模板正常工作。

常見例子：

- 背景色
- 次級按鈕文案
- 普通裝飾元素
- 一般性燈光詞
- 常規色彩傾向

## 6.3 可隨機參數

允許自動補全，但必須在風格範圍內合理生成。

常見例子：

- 路人暱稱
- 次級聊天消息
- 禮物提示
- 小裝飾元素
- 次級背景內容

---

# 七、參數寫法規範

變量統一使用如下格式：

```text
{argument name="host name" default="Elon Musk"}
```

建議規則：

- `name`：簡潔明確
- `default`：給出一個可直接工作的默認值
- 如果一個字段後續經常需要隨機化，也應先給出合理默認值

不要使用：

- 含糊不清的參數名
- 沒有默認值但又不是必問字段

---

# 八、缺失信息提問策略

## 8.1 總原則

提問必須：

- 精準
- 少量
- 只圍繞模板關鍵字段
- 不要泛泛而問

## 8.2 通用優先級

建議按下面順序判斷是否需要提問：

1. 主體來源是什麼
2. 圖像用途是什麼
3. 核心對象/商品/主題是什麼
4. 是否允許自動補全缺失信息
5. 是否有必須保留或必須避免的元素

## 8.3 直播 UI 類示例

不要問：

- 「你想做成什麼感覺？」

優先問：

- 主播是誰？
- 用真人照片、名人名字、人物描述，還是隨機生成？
- 商品名稱是什麼？
- 商品價格是否指定？
- 是否允許我自動補全評論和禮物內容？

## 8.4 電影 / TVC 分鏡類示例

不要問：

- "你想要什麼故事？"

優先問：

- 一句話故事：誰 + 在哪 + 發生什麼 + 結局是什麼？
- 題材是什麼？（sci-fi / 災難 / 戰鬥 / 浪漫 / 懸疑 / 黑色電影）
- 鏡頭數量？（9 / 12 / 16）+ 網格（3×3 / 3×4 / 4×4）
- 情緒曲線：起 → 升 → 高潮 → 落 / 一直緊張 / 平靜爆發？
- 風格：photoreal / 油畫 / 動漫 cinematic / 黑白 / 復古膠片？
- (TVC 專用)產品是什麼？品牌名 / 賣點 / 時長 / 比例？

## 8.5 流程板 / 裝備穿戴 / 教程板示例

不要問：

- "你想做幾張圖？"

優先問：

- 流程主題是什麼？（裝備 / 化妝 / 操作 / 訓練 / 維修）
- 主角是誰？（性別 / 年齡 / 關鍵識別特徵 / 是否需要面部隱私保護）
- 步驟數量？（4 / 6 / 8 / 9）+ 網格
- 每一步「標題 + 簡述 + 此時裝備狀態 / 操作動作」
- 風格：cinematic 實拍 / 時尚大片 / tokusatsu 特攝 / 工坊紀實？
- 文字語言（標題 / 說明字段使用語言）？

## 8.6 角色多版本目錄海報示例（catalog character poster）

不要問：

- "你想畫什麼角色？"

優先問：

- 全圖主題是什麼？（十二星座 / 五行 / 朝代 / 人格類型 / 節氣）
- 一共幾個版本？（3 / 5 / 6 / 12）
- 每個版本的「名稱 + 主題色 + 裝束 / 道具 / 背景」
- 同一角色基底（臉型 / 體型 / 發色）保持哪些不變？
- 風格：anime / 國風 gongbi / Q 版 / 寫實？

## 8.7 系列產品 lineup 對比海報示例

不要問：

- "你想做什麼海報？"

優先問：

- 品牌 / 產品線 名稱是什麼？
- 一共幾個 SKU？（建議 12-36）
- 按什麼維度排序？（等級 tier / 系列 series / 年代 / 價格）
- 是否需要 legend（等級 key / 圖標 key / 風格 key）？
- 背景調性：奢華深色 / 復古牛皮紙 / 工業極簡？

## 8.8 一日遊 split 海報示例

不要問：

- "你想去哪？"

優先問：

- 目的地（景區 / 城市 / 國家公園 名稱）？
- 標題文案 + 文字語言（中 / 日 / 英）？
- 站點數量（5-7）+ 每站「名稱 + 時間 + 一句描述 + 小插畫 + 大場景」？
- 整體路線主題（自然 / 歷史 / 美食 / 攝影 / 朝聖）？
- 風格：復古插畫 / 國家公園海報 / 水彩日式 / Art Nouveau？
- 底部 stats（總距離 / 步數 / 預計時間）？

---

# 九、自動補全策略

當用戶明確表示：

- 「你來補全」
- 「你隨機生成」
- 「先給我一個 demo」

則允許：

1. 只問最關鍵的 1-2 個問題
2. 其餘字段使用默認值
3. 或在可隨機字段中合理生成

自動補全時必須滿足：

- 不破壞主體一致性
- 不與用戶已指定信息衝突
- 不製造過於離譜的次要元素

---

# 十、主模板與變體模板的關係

每個模板文件至少要有：

1. 一套主模板
2. 若干變體模板（可選但推薦）

## 主模板

應滿足：

- 最通用
- 最容易復用
- 可覆蓋大多數使用場景

## 變體模板

常見變體：

- 用戶給參考照片版
- 用戶給名人名字版
- 用戶給文本描述版
- 自動補全版
- 平颱風格版
- 商業化加強版

變體不應完全脫離主模板，而應在主模板結構上調整少量字段。

---

# 十一、從參考案例提煉模板的步驟

參考案例來源目前主要是：

- `skills/gpt-image-2/100+GPT-Image2提示詞.md`

後續提煉模板時，嚴格按以下步驟：

## Step 1：先判斷分類

把案例歸入正確的一級目錄（與 `SKILL.md` 模板索引一致）：

- ui-mockups
- product-visuals
- maps（不再叫 maps-and-infographics）
- slides-and-visual-docs
- poster-and-campaigns
- portraits-and-characters
- scenes-and-illustrations
- editing-workflows
- avatars-and-profile
- storyboards-and-sequences
- grids-and-collages
- branding-and-packaging
- typography-and-text-layout
- assets-and-props
- academic-figures
- infographics
- technical-diagrams

## Step 2：判斷是新原型還是舊原型變體

例如：

- VR 頭顯爆炸圖 -> 新原型
- 手機爆炸圖 -> 舊原型變體

## Step 3：拆字段

把案例拆成：

- 主體
- 場景
- 布局
- 風格
- 文案
- 約束

## Step 4：標記參數類型

爲每個字段標記：

- 必問
- 可默認
- 可隨機

## Step 5：先寫主模板

不要一開始就寫 4 個版本。先把最通用的一套主模板寫出來。

## Step 6：再補變體

例如：

- 參考照片版
- 人名版
- 描述版
- 自動補全版

## Step 7：補提問順序

說明在真實對話裏優先要問哪些字段。

## Step 8：補避免事項

總結這個模板最容易失敗的地方。

---

# 十二、模板文件命名規則

模板文件名應滿足：

- 小寫字母
- 數字或連字符
- 儘量精確表達主題
- 不要用來源命名
- 不要用序號命名

正確示例：

- `live-commerce-ui.md`
- `exploded-view-poster.md`
- `food-map.md`

錯誤示例：

- `template-01.md`
- `youmind-case-1.md`
- `twitter-prompt-4.md`

---

# 十三、單文件實施清單（後續每次新增模板都要遵守）

以後每新增一個模板文件，都按這份清單執行：

1. 確定一級分類目錄
2. 確定文件名是否足夠精確
3. 判斷它是新原型還是已有原型變體
4. 寫 `適用範圍`
5. 寫 `何時使用`
6. 寫 `缺失信息優先提問順序`
7. 寫主模板 JSON
8. 寫參數策略
9. 寫自動補全策略
10. 寫變體方式
11. 寫避免事項
12. 若屬於新增模板主題，則同步更新 `SKILL.md` 索引

---

# 十四、Phase 1：references 目錄樹重構

## 目標

把 `references/` 從平鋪結構升級爲目錄樹。

## 任務拆解

### 1. 建立一級分類目錄

創建空目錄：

- `references/ui-mockups/`
- `references/product-visuals/`
- `references/maps-and-infographics/`
- `references/slides-and-visual-docs/`
- `references/poster-and-campaigns/`
- `references/portraits-and-characters/`
- `references/scenes-and-illustrations/`
- `references/editing-workflows/`
- `references/branding-and-packaging/`
- `references/typography-and-text-layout/`
- `references/storyboards-and-sequences/`
- `references/assets-and-props/`

### 2. 遷移現有直播模板

把現有直播模板遷移到：

- `references/ui-mockups/live-commerce-ui.md`

### 3. 更新 `SKILL.md`

把原來的平鋪索引改成：

- 一級分類
- 二級具體模板文件

### 4. 清理舊路徑引用

刪除舊的平鋪 references 文件路徑引用。

## 階段完成標準

- references 目錄樹創建完成
- 現有直播模板已遷移到 `ui-mockups/`
- `SKILL.md` 索引已同步

---

# 十五、Phase 2：模板方法論升級

## 目標

把 `prompt-writing.md` 升級成後續所有模板的總規範。

## 任務拆解

### 1. 補全目錄規則

明確 references 必須是目錄樹。

### 2. 補全單模板文件規範

明確一個模板文件內部必須有哪些章節。

### 3. 補全 JSON 字段設計標準

包括：

- 通用字段
- 分類特有字段
- 字段職責

### 4. 補全參數分類規則

包括：

- 核心參數
- 可默認參數
- 可隨機參數

### 5. 補全提問與自動補全策略

包括：

- 問題優先級
- 自動補全何時允許
- 如何避免無謂提問

### 6. 補全案例提煉流程

從參考案例到 JSON 模板的完整步驟。

## 階段完成標準

- `prompt-writing.md` 可以單獨作爲「模板設計總規範」使用

---

# 十六、後續階段預告（只列主任務）

## Phase 3：建設 `ui-mockups/`

優先文件：

- `live-commerce-ui.md`
- `social-interface-mockup.md`
- `product-card-overlay.md`

## Phase 4：建設 `product-visuals/`

優先文件：

- `exploded-view-poster.md`
- `white-background-product.md`
- `premium-studio-product.md`

## Phase 5：建設 `maps-and-infographics/`

優先文件：

- `food-map.md`
- `travel-route-map.md`
- `illustrated-city-map.md`

## Phase 6：建設 `slides-and-visual-docs/`

優先文件：

- `dense-explainer-slides.md`
- `policy-style-slide.md`
- `visual-report-page.md`

## Phase 7：擴展常用視覺分類

- poster-and-campaigns
- portraits-and-characters
- scenes-and-illustrations
- editing-workflows

## Phase 8：擴展高級分類

- branding-and-packaging
- typography-and-text-layout
- storyboards-and-sequences
- assets-and-props

---

# 十七、近期執行順序建議

按當前情況，建議後續嚴格按下面順序推進：

1. 完成 Phase 1：重構 references 爲目錄樹
2. 完成 Phase 2：升級 `prompt-writing.md`
3. 完成 Phase 3：建設 `ui-mockups/`
4. 完成 Phase 4：建設 `product-visuals/`
5. 完成 Phase 5：建設 `maps-and-infographics/`
6. 完成 Phase 6：建設 `slides-and-visual-docs/`
7. 再進入其他分類擴展

---

# 十八、結論

後續這個 skill 不能按「不斷加案例」的方式增長，而要按：

- 先定目錄樹
- 再定模板規範
- 再做單模板文件
- 再補參數與提問策略
- 最後再持續擴展案例

這樣你後面才能真正依據一份穩定的路線圖持續指導我完善這個 skill，而不會每次都重新決定結構。
