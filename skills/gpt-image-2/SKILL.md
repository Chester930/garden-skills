---
name: gpt-image-2
description: 面向 GPT Image 2 的圖像生成 / 編輯技能。可在 3 種環境下使用：(A) Garden 本地模式，通過 OpenAI 兼容接口直接出圖並落盤；(B) Host-Native 模式，把本 Skill 當作提示詞工程指引，把渲染好的 prompt 交給宿主 Agent 自帶的圖像工具出圖；(C) Advisor 模式，宿主無任何圖像工具時退化爲高質量 prompt 顧問。涵蓋 18 大類、80+ 個結構化模板，覆蓋海報 / UI / 產品 / 信息圖 / 學術圖 / 技術架構圖 / 漫畫 / 頭像 / 流程板 / 電影分鏡 / IP 周邊 / 編輯工作流等場景。
---

# GPT Image 2

這是一個面向 GPT Image 2 的聚焦型技能，在 3 種運行環境下都能用，但行爲差異顯著。**第一步必須先確定當前運行模式**。

它只做兩類圖像任務：

- 生成圖片：`POST /images/generations`
- 編輯圖片：`POST /images/edits`

本文件保留：運行模式、技能結構、環境變量、保存 / 命名規則、模板索引、模式感知工作流。詳細模板全部放在 `references/`，分層組織：

- 一級：分類目錄
- 二級：單模板 Markdown 文件

## 運行模式（必讀，做任何事之前先確定）

本 Skill 自帶一個輕量探測腳本，先跑一次，再根據結果決定怎麼幹活：

```bash
node skills/gpt-image-2/scripts/check-mode.js
# 想拿結構化結果給上層程序用：
node skills/gpt-image-2/scripts/check-mode.js --json
```

輸出會給出 `mode = A` / `A?` / `B-or-C` 以及 `recommendation`。三個模式定義如下：

### Mode A · Garden 本地生圖

**觸發條件**：環境變量 `ENABLE_GARDEN_IMAGEGEN` 爲真（`1` / `true` / `yes` / `on`）**且** 存在 `OPENAI_API_KEY`。

**行爲**：完整端到端跑通"選模板 → 寫 prompt → 調用腳本 → 出圖落盤"。

- 用 `scripts/generate.js` 文本生圖、`scripts/edit.js` 編輯現有圖。
- prompt 默認落盤到 `garden-gpt-image-2/prompt/`、圖片落盤到 `garden-gpt-image-2/image/`。
- 這是最強的模式：你是圖像工具的"持有者"。

### Mode B · Host-Native 委託宿主出圖

**觸發條件**：未啓用 Garden（`ENABLE_GARDEN_IMAGEGEN` 未設置 / 爲假），但**當前宿主 Agent 自帶圖像生成工具或圖像 MCP**。

**典型識別信號**（你應該自檢）：

- 你的工具集裡出現 `image_generation` / `imagegen` / `dalle` / `nano_banana` / `mcp__*image*` / `make_image` / 類似名字
- 用戶在 ChatGPT / Codex / Gemini / Cursor 等支持原生出圖的客戶端中調用本 Skill
- 用戶顯式說"用你自己的工具出圖"

**行爲**：本 Skill **退化成提示詞工程指引**——

1. 仍按"選模板 → 填字段 → 渲染最終 prompt"的流程走。
2. **不要調用 `node scripts/generate.js`**（沒有 API key、必失敗）。
3. 直接調用宿主自帶的圖像工具，把渲染好的 prompt 作爲輸入。
4. 如用戶希望可順手把 prompt 文件保存到 `garden-gpt-image-2/prompt/`，但圖片去向由宿主決定，不強制。

### Mode C · Advisor 純提示詞顧問

**觸發條件**：未啓用 Garden，**且**宿主 Agent 也沒有任何圖像生成工具。

**行爲**：本 Skill 退化爲"高質量 prompt 撰寫顧問"——

1. 按"選模板 → 填字段 → 渲染最終 prompt"流程走，缺信息就問用戶。
2. 把最終 prompt **直接打印給用戶** + 保存一份到 `garden-gpt-image-2/prompt/<task-slug>-<timestamp>.md`。
3. 附一句簡短的"如何使用"建議（如：丟進 ChatGPT / Midjourney / DALL·E / Sora / Nano Banana / 自己後端 / 第三方 GPT Image 2 網關）。
4. **不要假裝出圖成功**。明確告知用戶："已生成可直接復用的高質量 prompt，請用你的圖像工具執行。"

### 模式決策表

| 條件 | 模式 | 調用腳本？ | 落盤 prompt？ | 落盤圖片？ |
|---|---|---|---|---|
| `ENABLE_GARDEN_IMAGEGEN=1` + 有 KEY | **A** | ✅ `generate.js` / `edit.js` | ✅ 自動 | ✅ 自動 |
| `ENABLE_GARDEN_IMAGEGEN=1` 但沒 KEY | A? | ❌（先要 KEY） | — | — |
| 未啓用 + 宿主有圖像工具 | **B** | ❌（用宿主工具） | 可選 | 由宿主決定 |
| 未啓用 + 宿主無圖像工具 | **C** | ❌ | ✅ 必須 | ❌（無法） |

### 模式不確定時

- 如果你判斷不清自己是 B 還是 C，**直接問用戶一句**："是用你環境裡的圖像工具出圖，還是只要我寫好提示詞？"
- Mode A 調腳本失敗（401 / 網絡 / 配額）→ 報錯並詢問"切到 B / C 嗎？"

## 用戶輸入工具

當此技能需要向用戶提問時，遵循以下規則：

1. 優先使用當前運行時提供的用戶輸入工具。
2. 如果沒有對應工具，則用簡短的純文本編號問題提問。
3. 能合併的問題儘量一次問完。

## 技能結構

- `scripts/check-mode.js`：**先跑這個**，檢測運行模式（A / B / C）
- `scripts/generate.js`：文本生圖（僅 Mode A 使用）
- `scripts/edit.js`：基於原圖 / 遮罩改圖（僅 Mode A 使用）
- `scripts/shared.js`：共享請求、保存、環境變量讀取邏輯
- `references/`：分層結構化提示詞模板（A / B / C 三模式都用）

## 環境變量

按以下順序讀取配置：

1. CLI 參數
2. `process.env`
3. `<cwd>/.env`
4. `<cwd>/.gateway.env`
5. `~/.gateway.env`

核心變量：

- `ENABLE_GARDEN_IMAGEGEN` — **模式開關**。`1` / `true` / `yes` / `on` 時啓用 Mode A；未設置或其它值則進入 Mode B / C。
- `OPENAI_API_KEY` — Mode A 必需；B / C 不需要。
- `OPENAI_BASE_URL` — 默認 `https://api.openai.com/v1`，可指向第三方兼容網關。
- `OPENAI_IMAGE_MODEL` — 默認 `gpt-image-2`，可換成網關支持的型號（如 `gpt-image-1` / `dall-e-3`）。

默認實現按 OpenAI 兼容接口工作，不寫死任何第三方網關。

## 默認輸出目錄

如果用戶沒有明確指定輸出路徑，統一使用當前工作區下的：

- 提示詞目錄：`garden-gpt-image-2/prompt/`（**A / B / C 三種模式都建議用**，方便復用與版本管理）
- 圖片目錄：`garden-gpt-image-2/image/`（**僅 Mode A 使用**；Mode B 由宿主決定，Mode C 不產生圖）

如果目錄不存在，腳本（Mode A）必須自動創建；Mode B / C 在寫 prompt 前手動 `mkdir -p`。

## 默認命名規則

如果用戶沒有明確指定文件名，腳本應自動生成與當前任務相關的文件名，並追加當前時間戳，避免重名。

命名規則：

- 提示詞：`garden-gpt-image-2/prompt/<task-slug>-<timestamp>.md`
- 圖片：`garden-gpt-image-2/image/<task-slug>-<timestamp>.png`

其中：

- `<task-slug>`：根據當前用戶要求自動提取一個相關短名稱
- `<timestamp>`：當前時間戳，例如 `20260424-153045`

示例：

- `garden-gpt-image-2/prompt/live-commerce-ui-20260424-153045.md`
- `garden-gpt-image-2/image/live-commerce-ui-20260424-153045.png`
- `garden-gpt-image-2/prompt/vr-headset-exploded-view-20260424-153102.md`
- `garden-gpt-image-2/image/vr-headset-exploded-view-20260424-153102.png`

## Prompt 保存規則

| 模式 | 是否必須保存 prompt | 說明 |
|---|---|---|
| Mode A | ✅ 必須 | 進入實際生成 / 編輯流程必落盤 |
| Mode B | 推薦 | 默認建議保存方便復用；用戶說"不用"就略過 |
| Mode C | ✅ 必須 | 用戶拿走 prompt 自己執行，不落盤等於白幹 |

通用規則（適用三種模式）：

1. 如果用戶顯式給了 prompt 文件路徑，可直接使用該文件作爲輸入。
2. 如果用戶直接給的是文本 prompt，也要先把最終 prompt 保存到 `garden-gpt-image-2/prompt/`。
3. 如果用戶顯式指定了 `--prompt-output`，則尊重用戶指定路徑。
4. 否則使用默認命名規則自動保存。

## 圖片保存規則（僅 Mode A）

1. 如果用戶顯式指定了 `--image` 或 `--output`，則尊重用戶指定路徑。
2. 否則默認保存到 `garden-gpt-image-2/image/`。
3. 文件名應和當前任務語義相關，並附加時間戳。

Mode B 由宿主圖像工具決定保存方式；Mode C 不產生圖片。

## 快速用法

### 0. 檢測運行模式（**任何任務的第一步**）

```bash
node skills/gpt-image-2/scripts/check-mode.js
```

輸出會告訴你當前是 Mode A / B / C，決定後續是否調用 `generate.js` / `edit.js`。下面 1~4 僅在 **Mode A** 下使用。

### 1. 文本生圖（Mode A）

```bash
node skills/gpt-image-2/scripts/generate.js \
  --prompt "A cute baby sea otter" \
  --size 1024x1024 \
  --quality high
```

### 2. 用提示詞文件生圖（Mode A）

```bash
node skills/gpt-image-2/scripts/generate.js \
  --promptfile garden-gpt-image-2/prompt/poster-20260424-153045.md
```

### 3. 編輯已有圖片（Mode A）

```bash
node skills/gpt-image-2/scripts/edit.js \
  --image assets/source.png \
  --prompt "Replace the background with a clean studio scene"
```

### 4. 帶遮罩的局部編輯（Mode A）

```bash
node skills/gpt-image-2/scripts/edit.js \
  --image assets/source.png \
  --mask assets/mask.png \
  --prompt "Replace only the masked area with a glass vase"
```

### 5. Mode B / C 的"用法"

沒有命令行入口——本 Skill 此時只是**提示詞工程指南**：

- **Mode B**：渲染好最終 prompt → 調用宿主自帶的 `image_generation` 類工具（參數中傳入 prompt）→ 拿到圖。
- **Mode C**：渲染好最終 prompt → 保存到 `garden-gpt-image-2/prompt/<task-slug>-<timestamp>.md` → 把內容直接展示給用戶 → 提示用戶在哪些圖像工具中可以直接復用。

## JSON 模板工作方式

當 `references/` 中提供 JSON 模板時，按下面規則使用：

1. 先從 `SKILL.md` 找到最貼近的分類目錄。
2. 再定位到具體模板文件。
3. 模板中的 `{argument ...}` 表示可替換參數。
4. 用戶明確提供的值，直接填入。
5. 用戶沒有提供，但模板標了 `default` 的，默認可以先用默認值。
6. 如果缺失信息會顯著影響結果，主動詢問用戶。
7. 用戶也可以明確說「你隨機生成」，這時可以保留默認值或在模板允許範圍內合理隨機化。

## 詢問規則

當模板缺少關鍵變量時，不要籠統地問「你想要什麼風格？」。應當根據模板字段精確提問。

例如直播 UI 模板缺少主體時，應優先問：

- 主播是誰？
- 用真人照片、名人名字、人物描述，還是完全隨機生成？

缺少商品信息時應問：

- 商品名稱是什麼？
- 商品價格是否指定？
- 是否希望我自動補全評論和禮物內容？

## 模板索引

按任務類型只讀取最貼近的具體模板文件，不要一次性全讀整個 `references/`。

### 1. 方法論總文檔

先讀：

- `references/prompt-writing.md`

適用於：

- 你還沒決定怎麼構造 JSON 模板
- 你需要判斷哪些字段該問、哪些字段可默認、哪些字段可隨機
- 你需要把案例抽象成可復用模板

### 2. UI Mockups (`references/ui-mockups/`)

適合各種「界面 + 內容」的樣機視覺。當前已落地：

- `live-commerce-ui.md` — 電商直播帶貨截圖樣機（主播 + 聊天區 + 禮物區 + 商品卡）
- `social-interface-mockup.md` — 社交平臺動態詳情頁樣機（Twitter/X、小紅書、微博、Threads 等）
- `product-card-overlay.md` — 落地頁 hero / 詳情頁主圖（人物 + 商品 + 賣點 + 價格）
- `chat-interface-scene.md` — 聊天 / 對話界面樣機（iMessage、微信、羣聊、AI 助手）
- `short-video-cover-ui.md` — 短視頻封面 / 直播縮略圖（YouTube、抖音、B 站、VTuber stream）
- `landing-page-case-study.md` — 深色 SaaS / 營銷 case study **長頁面** UI mockup（多 section + 滾動敘事 + 數據卡 + CTA）

### 3. Product Visuals (`references/product-visuals/`)

適合「以商品爲視覺中心」的圖。當前已落地：

- `exploded-view-poster.md` — 產品爆炸視圖海報（主體垂直堆疊 + callout + 頂部 logo + 底部品牌區）
- `white-background-product.md` — 電商純白底主圖（單品 / 多角度 / 極簡營銷疊層）
- `premium-studio-product.md` — 高級影棚商業產品圖（雜誌廣告級氛圍）
- `packaging-showcase.md` — 禮盒 / 包裝展示圖（外盒 + 內容物展示）
- `lifestyle-product-scene.md` — 生活方式產品場景圖（商品出現在真實場景中）
- `ecommerce-marketing-board.md` — 中式電商超複合銷售看板（主圖 + 詳情頁 + 賣點 + 使用步驟 + 場景 + TVC 分鏡組合一圖）

### 4. Maps (`references/maps/`)

適合「地圖類視覺」（信息圖已抽離到獨立分類 17）。當前已落地：

- `food-map.md` — 城市美食手繪地圖（編號點位 + 圖例 + 中心吉祥物）
- `travel-route-map.md` — 旅行路線圖（多日行程 / 單日 city walk / 戶外路線）
- `illustrated-city-map.md` — 城市風貌插畫地圖（地標 + 江山 + 文化元素）
- `store-distribution-map.md` — 品牌門店 / 服務覆蓋分布圖
- `itinerary-day-trip-map.md` — **一日遊** split 海報（左 parchment 行程卡 + 右奇幻寫實地圖，5-7 站點嚴格對齊）

### 5. Slides & Visual Docs (`references/slides-and-visual-docs/`)

適合「一頁講清楚一件事」的視覺文檔。當前已落地：

- `dense-explainer-slides.md` — Irasutoya × 霞關混合高密度講解 Slide
- `policy-style-slide.md` — 政策 / 政府公告 / 白皮書風格說明 Slide
- `visual-report-page.md` — 商業報告執行摘要 / 投資人簡報 / 年報概覽頁
- `educational-diagram-slide.md` — 教學示意圖（概念 / 機制 / 流程分解）

### 6. Poster & Campaigns (`references/poster-and-campaigns/`)

適合「品牌主視覺 + campaign + banner + 雜誌封面」。當前已落地：

- `brand-poster.md` — 品牌主海報（產品 / 人物 / 純文字主張）
- `campaign-kv.md` — Campaign Key Visual + 衍生 layout 系統
- `banner-hero.md` — Web hero / 落地頁 / app banner（橫向構圖 + CTA）
- `editorial-cover.md` — 雜誌 / 期刊 / 出版物封面
- `biomimetic-concept-poster.md` — 仿生工業設計概念海報（自然原型 → 演化條 → hero render → 多視圖技術圖）
- `vintage-editorial-infographic.md` — 復古檔案 / 1940s 編輯式信息圖海報（人物 + 公式 + 時間軸 + 模型，Bell Labs 風）
- `character-catalog-poster.md` — 同一角色多版本信息圖海報（星座 / 元素 / 朝代 / 人格系列卡片）
- `lineup-comparison-poster.md` — 系列產品 lineup 對比信息圖海報（30+ SKU 同圖 + 圖例 + 等級 key）

### 7. Portraits & Characters (`references/portraits-and-characters/`)

適合「人物視覺」。當前已落地：

- `professional-portrait.md` — 職業級商務肖像（LinkedIn / 團隊頁 / 媒體配圖）
- `founder-portrait.md` — 創始人媒體大片肖像（戲劇燈光 + 留標題位）
- `virtual-host.md` — VTuber / 虛擬主播個人卡 + 直播預覽
- `character-sheet.md` — 角色綜合設定稿（三視圖 + 表情 + 服裝 + 配色板）
- `pose-reference-sheet.md` — N×N 姿勢 / 動作字典參考表（同一角色多姿勢，舞蹈 / 戰鬥 / 健身）

### 8. Scenes & Illustrations (`references/scenes-and-illustrations/`)

適合 「氛圍 + 故事 + 情緒」 的插畫類視覺。當前已落地：

- `healing-scene.md` — 治癒系日常 / 季節場景插畫
- `concept-scene.md` — 電影感概念大場景 / IP key art
- `picture-book-scene.md` — 童書 / 繪本內頁 / 節日卡片
- `minimalist-mood-scene.md` — 極簡留白氛圍圖 / 文學性壁紙

### 9. Editing Workflows (`references/editing-workflows/`)

適合「基於現有圖片做編輯」的圖改任務（對應 `scripts/edit.js`）。當前已落地：

- `background-replacement.md` — 背景替換（商品 / 人像 / 戶外 / 棚景）
- `local-object-replacement.md` — 局部對象替換（配合或不配合蒙版）
- `object-removal.md` — 雜物 / 路人 / 電線 / 瑕疵去除
- `product-retouching.md` — 產品精修（光澤 / 標籤 / 陰影 / 瑕疵）
- `portrait-local-edit.md` — 人像局部修改（髮型 / 服裝 / 妝容 / 配飾）

### 10. Avatars & Profile (`references/avatars-and-profile/`)

適合「風格化頭像 / 人設 / 網格 / 貼紙 / 系列肖像」等"個人形象"類視覺。當前已落地：

- `style-transfer-selfie.md` — 把參考圖人物轉成 cosplay / 哥特 / 復古膠片 / 偶像寫真等任意風格
- `character-grid-portrait.md` — 同一角色 n×n 網格肖像（多職業 / 多表情 / 多朝代 / 多風格）
- `themed-3d-icon.md` — Kawaii 3D / Minecraft / 擬物 3D 應用圖標式頭像
- `sticker-set.md` — 貼紙套裝 / 表情包合集（獨立元素 + 描邊 + 標籤）
- `cultural-portrait-series.md` — 朝代 / 神話 / 文學 / 民族系列肖像

### 11. Storyboards & Sequences (`references/storyboards-and-sequences/`)

適合「多分鏡 / 漫畫 / 關係圖 / 流程步驟」等"敘事性序列"類視覺。當前已落地：

- `four-panel-comic.md` — 4 格漫畫 / 諷刺漫畫 / 段子漫畫（起承轉合 + 對話氣泡）
- `manga-spread-page.md` — 單頁 / 跨頁漫畫分鏡（不規則格子 + 對話 + 心聲）
- `anime-key-visual.md` — 單圖動漫 KV / 輕小說封面 / IP 海報
- `character-relationship-diagram.md` — 角色關係圖海報（卡片 + 關係連線 + 圖例）
- `recipe-process-flowchart.md` — 食譜 / 教程 / 流程步驟圖（編號 + 插圖 + 說明）
- `product-tvc-storyboard.md` — 產品 TVC 商業廣告分鏡板（9-panel 實拍質感 + 鏡頭描述 + 時長）
- `cinematic-storyboard-grid.md` — **電影感敘事分鏡** contact sheet（3×4 / 4×4，連續敘事 + cinematic still）
- `process-photo-board.md` — 真人 cinematic 流程板（裝備穿戴 / 化妝 / 訓練 / 操作分解，編號 + 步驟遞進）

### 12. Grids & Collages (`references/grids-and-collages/`)

適合「多面板網格 / 拼貼 / 立項 board」類視覺。當前已落地：

- `banner-grid-2x2.md` — 2×2 營銷 banner 套裝（一次出 4 張統一系列設計）
- `lookbook-grid.md` — 7 日 lookbook / 9 宮 self-care / TOP N 清單圖
- `mixed-style-multi-panel.md` — 多風格混合拼貼（同一主體不同畫風演繹）
- `anime-pitch-board.md` — 動漫 / 遊戲 / 影視立項 pitch board（KV + 角色 + 世界觀 + 文案）
- `ad-banner-multi-grid.md` — 多行業 / 多主題混合廣告 banner 網格（每格獨立行業 + 風格 + 文案）

### 13. Branding & Packaging (`references/branding-and-packaging/`)

適合「品牌識別系統 / 吉祥物 / 包裝設計」類視覺。當前已落地：

- `brand-identity-board.md` — 品牌識別系統板（logo + 配色 + 字體 + 應用 mockup）
- `mascot-brand-kit.md` — 吉祥物多面板品牌識別套裝（主形象 + 三視圖 + 表情 + 應用）
- `cosmetic-packaging.md` — 化妝品 / 護膚品 單瓶 / 系列 / 禮盒包裝
- `beverage-label-design.md` — 飲料 / 食品 / 調味品標籤設計（國潮 / 日式 / 西式）
- `full-mascot-brand-doc.md` — **18+ 模塊大型品牌識別 + 吉祥物全流程文檔**（DNA / moodboard / 草圖 / 線稿 / 3D / 配色 / 材質 / 應用一圖概覽）
- `character-merch-board.md` — IP 角色 + 周邊 / 包裝 / 海報 / 社交 profile 多元素綜合品牌板

### 14. Typography & Text Layout (`references/typography-and-text-layout/`)

適合「字面優先 / 雙語版式」等"以文字爲主視覺"的類型。當前已落地：

- `title-safe-poster.md` — 大字主張型海報（日式高能量 / 瑞士極簡 / 復古印刷）
- `bilingual-layout-visual.md` — 中英 / 中日雙語版式視覺（文化 / 學術 / 跨文化品牌）

### 15. Assets & Props (`references/assets-and-props/`)

適合「圖標集 / 遊戲截圖」等"成套素材 / 遊戲資產"類視覺。當前已落地：

- `retro-skeuomorphic-icons.md` — 擬物 / Y2K / 像素 圖標集（成套統一風格）
- `game-screenshot-mockup.md` — 遊戲內截圖 mockup（HUD + 字幕 + 任務面板）

### 16. Academic Figures (`references/academic-figures/`)

適合「論文 / 頂會投稿 / 學術海報 / 答辯 PPT / 開題答辯 / 期刊投稿 Graphical Abstract」的配圖。整體偏白底 + 出版物字體 + 幾何精確 + 低飽和工程色（深藍 / 灰藍 / 黑灰爲主，≤3 主色）+ 可單色印刷。**嚴格禁止虛構定量數據**（數值 / 等值線 / 色標範圍 / 公式）。

CS / CV / ML 方向：

- `method-pipeline-overview.md` — 方法總覽圖 / pipeline figure（多 stage 塊 + 數據流；變體 4 提供工程類左/中/右 三段式技術路線圖）
- `neural-network-architecture.md` — 神經網絡架構圖（layer 塊 + tensor shape + 跳連）
- `qualitative-comparison-grid.md` — 多方法 qualitative 對比網格（**行 = 樣本，列 = 方法**）

工程 / 自然科學 / 答辯通用：

- `scientific-schematic.md` — 概念 / 原理 / 實驗裝置示意圖（自由度高，自然語言模板）
- `mechanism-diagram.md` — 機理示意圖 / 因果鏈路 / 轉化路徑（中心對象 + 多階段轉化 + 結果區；含三段式因果鏈 / 循環自激發 / 多分支競爭 三種變體）
- `multi-condition-comparison.md` — **多工況 / 多條件結果對比圖**（同一對象在不同 condition 下的並列結果，2×2 / 1×N / M×N；強調 panel 間嚴格統一）
- `publication-chart.md` — publication-ready 數據圖表（bar / line / scatter / heatmap / box）

總覽 / 摘要 / 答辯首頁：

- `graphical-abstract.md` — 期刊投稿 Graphical Abstract / 圖形摘要（橫向 4 段式 / 中心展開 / 方形 / 豎版四種變體）
- `research-overview-poster.md` — 開題 / 答辯 / 匯報首頁研究總覽圖（上中下三層 + 五模塊；含中心輻射 / 左右雙欄 / 極簡 三種變體）

> 選擇策略：CS/CV/ML 論文首選 `method-pipeline-overview` + `qualitative-comparison-grid`；工程 / 能源 / 化工 / 材料方向首選 `method-pipeline-overview` 變體 4 + `mechanism-diagram` + `multi-condition-comparison`；投稿期刊摘要圖用 `graphical-abstract`；答辯 PPT 首頁用 `research-overview-poster`。

### 17. Infographics (`references/infographics/`)

適合「信息圖 / 高密度科普 / 手繪信息圖 / KPI 儀錶盤」等"信息可視化大圖"。當前已落地：

- `legend-heavy-infographic.md` — 高圖例密度科普 / 因果鏈 / 演化 / 解剖圖（雙語）
- `hand-drawn-infographic.md` — **手繪風**信息圖（macaron / morandi / 黑板 / 牛皮紙；自然語言模板）
- `bento-grid-infographic.md` — 便當格模塊化信息圖（高密度多模塊 widget 排布）
- `comparison-infographic.md` — 二元 / 多元對比信息圖（A vs B / 套餐檔位 / 誤區 vs 正解）
- `step-by-step-infographic.md` — 步驟教程信息圖（插畫感、溫暖；非工程流程圖）
- `kpi-dashboard-infographic.md` — KPI 儀錶盤式信息圖（年度回顧 / Wrapped / 業務 dashboard）

### 18. Technical Diagrams (`references/technical-diagrams/`)

適合「系統架構 / 流程 / 時序 / 狀態機 / ER / 思維導圖 / 網絡拓撲」等工程示意圖。統一暗色 grid 背景 + 等寬字體 + 角色編碼配色，每個模板都附 light 變體。

⚠️ 注意：本目錄生成的是 **PNG 位圖**，**不是可編輯 SVG**；需要可編輯請改用 mermaid / draw.io / excalidraw / Figma。當前已落地：

- `system-architecture.md` — 系統架構圖（前端 + 後端 + DB + 緩存 + 隊列 + 外部）
- `flowchart-decision.md` — 流程圖 / 決策圖（BPMN 形狀語義 + Yes/No 分支）
- `sequence-diagram.md` — 時序圖（actor + lifeline + 消息箭頭 + 激活條）
- `state-machine.md` — 狀態機 / 生命周期圖（state + transition + guard / action）
- `er-diagram.md` — ER 圖 / 數據模型圖（實體 + 字段 + PK/FK + crow's foot 關係）
- `mind-map-tech.md` — 技術主題思維導圖（中央 + 放射式分支）
- `network-topology.md` — 網絡拓撲圖（設備 glyph + zone / VPC + 帶寬 / 協議標）

## 提示詞工作流（模式感知）

無論 A / B / C，**前 6 步是共用的**；區別只在第 7-8 步如何"出圖"。

1. **跑 `check-mode.js` 確定模式**（A / B / C）。
2. 判斷任務是生圖還是改圖。
3. 識別它屬於哪個分類目錄（參考下方"模板索引"）。
4. 只讀取對應的具體模板文件，**不要一次讀整個 references/**。
5. 嚴格遵循模板格式：大部分模板用 JSON 主模板（結構化任務首選），少數模板（`infographics/hand-drawn-infographic.md`、`academic-figures/scientific-schematic.md` 等）使用「結構化自然語言 + 參數」混合形式，因爲強行 JSON 會限制創作自由。
6. 把用戶輸入映射到模板參數；關鍵信息不足時主動發起有針對性的澄清問題。

到此 prompt 已渲染好。下面按模式分叉：

7-A. **Mode A**：把最終 prompt 保存到 `garden-gpt-image-2/prompt/`，調用 `scripts/generate.js` 或 `scripts/edit.js`，圖片落到 `garden-gpt-image-2/image/`。
7-B. **Mode B**：把最終 prompt 直接傳給宿主的圖像工具調用；按需保存 prompt 副本到 `garden-gpt-image-2/prompt/`。
7-C. **Mode C**：把最終 prompt 保存到 `garden-gpt-image-2/prompt/<task-slug>-<timestamp>.md`，並把完整 prompt 在對話中展示給用戶，附一句簡短的"如何使用 / 推薦工具"建議。

8. 任務結束後用一句話告訴用戶：當前模式是什麼、prompt 落在哪、圖（如有）落在哪。

## 重要約束

通用：

- 模板文件中的 JSON 是**提示詞結構模板**，不是 API 請求體模板。
- 三種模式下，最終交給圖像模型的都是"渲染後的 prompt 字符串"——可以是拍平的 JSON、可以是結構化自然語言段落，按模板原樣使用。
- 除非用戶明確要求，否則**不要把 SKILL.md 裏的"模式說明"複製到最終 prompt 裏**——那是給 Agent 看的元信息。

僅 Mode A 適用：

- 生成腳本使用 JSON body
- 編輯腳本使用 multipart form data
- 響應優先按 `data[0].b64_json` 解析，也兼容 `data[0].url`
- 除非上遊接口明確要求，不額外引入特殊 query 參數

## 何時提問

只在這些信息缺失且會顯著影響結果時提問：

- 沒有 prompt 目標
- 改圖時沒有原圖
- 主體身份或視覺類型決定結果走向
- 商品 / 價格 / 文案 / UI 文本是畫面核心組成部分
- 用戶同時表達了多個互相衝突的目標

除此之外，優先自己做合理默認並繼續執行。
