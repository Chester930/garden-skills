# Web Design Engineer Skill

**一個讓 AI 生成網頁從"能用"進階到"驚豔"的 Agent 技能。**

[English](./README.md) · [返回集合首頁](../../README.zh-CN.md)

![Web Design Skill](../../dist/imgs/web-design-skill.png)

---

## 這是什麼？

這是一個面向 AI 編程代理（如 [Claude Code](https://docs.anthropic.com/en/docs/claude-code)、[Cursor](https://cursor.com) 以及其他支持 `SKILL.md` 格式的工具）的可復用 **Skill**（結構化系統提示詞），能顯著提升 AI 生成的 HTML/CSS/JavaScript 產物的設計品質。

它將 [Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs) 系統提示詞中的核心設計理念提煉爲一個開放、可移植、可自定義的技能文件，可以直接放進任何項目中使用。

### 問題

現代大語言模型已經能根據簡單的提示詞生成功能完整的網頁。但它們的輸出總是趨向同一種審美：Inter 字體、藍色主按鈕、紫粉漸變、大圓角卡片、emoji 充當圖標、編造的好評數據。技術上沒問題，視覺上千篇一律。

### 解決方案

這個 Skill 通過以下方式將**設計品位**注入 AI 的決策過程：

- **反俗套規則** —— 一份明確的 AI 設計雷區清單
- **設計系統宣告** —— 強制 AI 在寫代碼之前，先用自然語言說清配色、字體、間距和動效選擇
- **oklch 色彩理論** —— 基於感知均勻色彩空間的配色派生，取代隨機 hex 值
- **精選字體 × 配色組合** —— 高品質起點，替代默認的 Inter + #3b82f6
- **佔位符哲學** —— 用誠實的 `[icon]` 標記代替拙劣的 SVG 假圖
- **結構化工作流** —— 從需求理解 → 上下文獲取 → 設計系統宣告 → v0 草稿 → 完整構建 → 驗證的六步流程

---

## 快速上手

### 用於 Claude Code / Cursor / AI Agent

將本 Skill 目錄複製到你的項目中：

```
your-project/
├── .agents/skills/web-design-engineer/   # 或 .claude/skills/web-design-engineer/
│   ├── SKILL.md                          # 主技能文件
│   └── references/
│       ├── advanced-patterns.md          # 代碼模板庫（slide engine / 設備框架 / 動效時間線 / 數據可視化）
│       ├── design-directions.md          # 設計方向顧問（6 學派，差異化 3 選 1 推薦）
│       ├── style-recipes/                # 25 套有 anchor 的風格配方（按需讀單文件，每個 anchor 一個 .md）
│       │   ├── INDEX.md                   #   目錄索引 + 3 張索引表 + 跨配方反模式
│       │   ├── linear.md / aesop.md / pentagram.md / ...    #   25 個獨立 recipe 文件
│       └── critique-guide.md             # 5 維評分細則 + 常見問題清單
└── ...
```

也可以從集合首頁通過 Claude Code 插件市場一鍵安裝 —— 參見[根目錄 README](../../README.zh-CN.md#%E5%AE%89%E8%A3%85)。

當你的請求涉及可視化/交互式前端工作時，Agent 會自動啓用此技能。

### 覆蓋範圍

| 輸出類型 | 示例 |
|---|---|
| 網頁 & 落地頁 | 營銷頁面、產品頁、作品集 |
| 交互式原型 | 帶設備框架的可點擊 App 模型 |
| 幻燈片 | HTML 演示文稿（1920×1080，鍵盤導航） |
| 數據可視化 | 基於 Chart.js 或 D3.js 的儀錶盤 |
| 動畫 | CSS/JS 動效設計，時間線驅動的演示 |
| 設計系統 | Token 探索、組件變體 |

---

## 工作原理

### 六步工作流

```
1. 理解需求          →  信息充足就幹活，信息不足才提問
2. 獲取設計上下文    →  代碼 > 截圖；不要從空氣中開始
3. 宣告設計系統      →  配色、字體、間距、動效 —— 用 Markdown 說明，寫代碼之前
4. 儘早展示 v0       →  佔位符 + 布局 + token；讓用戶提前糾偏
5. 完整構建          →  組件、狀態、動效；在關鍵決策點暫停確認
6. 驗證              →  交付前清單；無控制臺錯誤，無私自新增色相
```

### 核心設計原則

**反 AI 俗套清單。** Skill 明確禁止以下模式：
- 紫粉藍漸變背景
- 帶左側彩色邊框的卡片
- Inter / Roboto / Arial / Fraunces / system-ui 字體
- 用 emoji 充當圖標
- 編造的數據、假 logo 牆、虛假好評

**oklch 色彩系統。** 在感知均勻的 oklch 色彩空間中派生顏色。相同的亮度值在人眼中看起來確實一樣亮——HSL 做不到這一點，HSL 中亮度 50% 的黃色看起來比亮度 50% 的藍色亮得多。

**精選起點。** 六套經過驗證的配色 × 字體組合，覆蓋常見場景：

| 風格 | 主色 | 字體組合 | 適用場景 |
|---|---|---|---|
| 現代科技感 | 藍紫 | Space Grotesk + Inter | SaaS、開發者工具 |
| 優雅雜誌風 | 暖棕 | Newsreader + Outfit | 內容平臺、博客 |
| 高端品牌 | 近黑 | Sora + Plus Jakarta Sans | 奢侈品、金融 |
| 活潑消費 | 珊瑚 | Plus Jakarta Sans + Outfit | 電商、社交 |
| 極簡專業 | 青藍 | Outfit + Space Grotesk | 儀錶盤、B2B |
| 手作溫度 | 焦糖 | Caveat + Newsreader | 餐飲、教育 |

**風格配方庫（25 套有 anchor，漸進式加載）。** 當用戶點名"Linear 風" / "Aesop 風" / "Pentagram 級排版"時，Agent 只需讀 `references/style-recipes/<anchor>.md` 單個文件（約 50 行）；目錄索引、3 張索引表、跨配方反模式都在 `references/style-recipes/INDEX.md`（約 150 行）。整個目錄從不一次性加載。25 套配方分布在 7 個學派（Direction Advisor 的 6 學派 + 一個只能通過直接點名 anchor 觸達的 *Specialty / Genre* 學派）：

| 學派 | 配方 |
|---|---|
| Editorial / 極簡 | `apple-hig` · `muji-kenya-hara` · `aesop` · `dieter-rams-braun` · `monocle-magazine` |
| 信息架構 | `pentagram` · `vignelli-swiss-helvetica` · `bloomberg-terminal` · `tufte-dataink` · `nyt-the-daily` |
| 現代工具 / Builder SaaS | `linear` · `vercel-mesh` · `raycast` · `notion-pre-ai` |
| 動效 / 實驗 | `field-io` · `active-theory` · `resn-storytelling` |
| 粗糲 / Brutalist | `are-na` · `bloomberg-businessweek-turley` · `balenciaga-post-2017` |
| 溫暖人文 | `mailchimp-freddie` · `stripe-press` · `headspace-meditation` |
| 特定風格 / 年代 | `y2k-retrofuturism` · `mid-century-modern` |

---

## 示例

倉庫的 [`demo/web-design-demo/`](../../demo/web-design-demo) 目錄包含使用相同提示詞、分別在有 Skill 和無 Skill 條件下生成的頁面對比。打開 [`demo/web-design-demo/demo2/index.html`](../../demo/web-design-demo/demo2/index.html) 查看對比展示頁。

### Demo 1：太空探索博物館

**提示詞：** *"幫我做一個'太空探索博物館'的線上展覽首頁——全屏 Hero、4 個核心展覽介紹、一個至少 6 個節點的時間線、參觀預約 CTA、頁腳。整體風格要沉浸感強、有宇宙的深邃感。"*

| | 無 Skill | 有 Skill |
|---|---|---|
| **文件** | `demo/web-design-demo/demo2/demo1.html` | `demo/web-design-demo/demo2/demo1-with-skill.html` |
| **色彩系統** | 硬編碼 hex 值（#7cf0ff, #b388ff） | 基於 oklch 的 token 系統，使用 CSS 自定義屬性 |
| **字體** | Orbitron + Noto Serif SC | Instrument Serif + Space Grotesk + JetBrains Mono |
| **布局** | 標準落地頁結構 | 雜誌編輯式布局，grid 組合排版 |
| **細節** | 大量發光效果、霓虹漸變 | 克制的色彩方案、字體層級、裝飾性數據元素 |
| **整體感受** | 熱情的初級設計師 | 有經驗的設計總監 |

### Demo 2：攝影師作品集

**提示詞：** *"幫我做一個獨立攝影師的個人作品集網站首頁。"*

| | 有 Skill |
|---|---|
| **文件** | `demo/web-design-demo/demo2/demo2-with-skill.html` |
| **角色塑造** | 虛構了北歐攝影師 "Mira Høst"，設計了一整套視覺身份 |
| **配色** | 暖紙色淺底（#f2efe8）+ 墨色深文（#161513）—— 極度克制的雙色調 |
| **字體** | Instrument Serif（展示標題）+ Space Grotesk（界面）, 大量使用斜體 |
| **布局** | 雜誌編排式結構，編號分節、不對稱網格、側邊豎排文字 |
| **動效** | Hero 圖片的慢速 Ken Burns 動畫（24秒周期），膠片噪點紋理疊加 |
| **導航** | `mix-blend-mode: difference` 頂欄 —— 在深淺背景間無縫過渡 |

> 啓發本 Skill 的 Claude Design 原始系統提示詞保留在 [`dist/prompt/claude-design-system-prompt.md`](../../dist/prompt/claude-design-system-prompt.md)。

---

## 背景

此 Skill 的靈感來自 [Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs) 的系統提示詞。Claude Design 是 Anthropic 於 2026 年 4 月推出的視覺設計產品。其系統提示詞（約 420 行）編碼了一套精密的設計原則、反模式和工作流約束，使其輸出保持穩定的高品質。

本項目將這些核心理念提取並精煉爲一個可移植的 Skill，適用於任何 AI 編程代理——讓你獲得 Claude Design 級別的設計品位，同時擺脫產品鎖定和用量限制。

相比 Claude Design 原始提示詞的主要新增內容：
- **設計系統宣告步驟** —— 強制 AI 在編碼前用自然語言說明設計 token
- **v0 草稿策略** —— 一套具體的方法論，確保儘早展示半成品
- **擴展的反俗套清單** —— 從真實 AI 輸出中識別出的額外模式
- **佔位符哲學** —— 一套完整的框架，專業地處理缺失素材
- **配色 × 字體配對表** —— 六套經過驗證的視覺系統起點
- **設計方向顧問** —— 模糊需求場景的 6 學派差異化 3 選 1 推薦機制，且顯式接入到 recipe 庫做落地
- **25 套有 anchor 的風格配方庫** —— 每套綁定一個真實品牌 / studio / 設計師，含可粘貼的具體值；用來抵禦 AI 默認味
- **高級模式庫** —— 常見 UI 模式的即用代碼模板

---

## 許可證

MIT
