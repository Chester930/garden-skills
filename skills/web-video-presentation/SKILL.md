---
name: web-video-presentation
description: 把一篇文章或口播稿，做成"看起來像視頻"的點擊驅動 16:9 網頁演示，可選合成口播音頻。流程：原始文章 → **一次產出**口播稿 + outline 開發計劃 → 用戶**一次對齊** 5 件事（稿子 / outline / 主題 / 素材 / 開發模式）→ 網頁開發（逐章 / 順序 / 並行）→ 可選音頻合成（provider-agnostic：內置 MiniMax mmx-cli + OpenAI TTS，可換 ElevenLabs / edge-tts / Azure / 自帶 TTS）。**outline 只規劃節奏與信息密度，不規划動畫** —— 動畫由章節開發時按 PRINCIPLES + ANTI-AI 法則即時設計。每次點擊推進口播稿的一個節拍，每一步獨佔整屏，進度條平時隱藏只在懸浮時出現。適用場景：用網頁做視頻（動態 PPT 但不像 PPT）、把口播稿 / 文章變成可交互的解說、爲 B 站 / YouTube / 視頻號錄屏教程、做有電影感的產品 / talk demo。本 Skill 沉澱的是設計方法論 + 協作流程 —— 不綁定任何特定樣式 / 字體 / 顏色 —— 因此能復用到任意主題與美學。
---

# Web Video Presentation

把一篇文章或口播稿，一步步做成可錄屏的"僞裝成視頻的網頁"，可選合成
口播音頻。產出物 = Vite + Angular (Signals) + TS 項目 + 按章節切分的音頻。

## 適用場景

- "我有口播稿 / 一篇文章，幫我做成視頻" —— 口播驅動的內容
- 想做 "動態 PPT"
- 16:9 橫屏錄屏，大字、留白、每屏都要有動效
- 教學 / 產品演示 / keynote 想要電影感
- B 站 / YouTube /抖音視頻內容

本 Skill **以方法論 + 協作流程爲核心**。腳手架模板提供 token 和原語，
但每個美學決策（配色、字型、動效氣質）都應該針對你的主題重新設計 ——
不要照搬。

---

## 工作流總覽

```
Phase 1   內容編寫
   1.1  識別用戶輸入
   1.2  一次產出 script.md + outline.md
        （口播稿 + 開發計劃）
   ▼
[Checkpoint Plan]      ← 必須停。一次對齊 5 件事：
                         稿子 / outline / 主題 / 素材 / 開發模式
   ▼
Phase 2   網頁開發
   2.1  腳手架（按選定主題）
   2.2  第 1 章 = 主線程 + 完整版本（強制 anchor）
        ▼
        [硬節點] 用戶驗收第 1 章 ← 不可跳過
        ▼
   2.3  第 2~N 章（按選定模式：A 逐章 / B 順序 / C 並行）
   ▼
[Checkpoint Audio]     ← 必須停。是否合成音頻
   ▼
Phase 3   音頻合成（可選）
   ▼
Phase 4   錄屏 + 後期
```

工作目錄約定（agent 在用戶當前目錄下創建 / 編輯）：

```
my-video/
├── article.md          # 用戶給原文時必有 —— 不刪！開發階段畫面信息源
├── script.md           # 必有：保持原文語言的平臺化口播稿（決定節拍）
├── outline.md          # 必有：開發計劃（章節切分 + 每步內容 + 信息池）
└── presentation/       # 腳手架產出的 Vite + Angular + TS 項目
    ├── src/app/chapters/<NN>-<id>/
    │   ├── <Chapter>.component.ts  # 視覺實現
    │   ├── <Chapter>.component.css # 專屬樣式 (以 tokens 變量爲主)
    │   ├── layout.json             # 存儲拖拽縮放坐標、內聯文本與講者備註
    │   └── narrations.ts           # ★ step 數 + 口播文本的唯一真相源
    ├── scripts/
    │   ├── extract-narrations.ts   # 掃所有 narrations.ts → audio-segments.json
    │   ├── synthesize-audio.sh     # provider-agnostic runner
    │   └── tts-providers/          # 每 provider 一個 .sh
    │       ├── minimax.sh
    │       └── openai.sh
    ├── audio-segments.json         # extract 產出
    └── src/assets/audio/<id>/<N>.mp3 # 可選：合成的音頻
```

> **關鍵**：`narrations.ts` 是 step 數和音頻合成的**唯一真相源**。
> 章節組件中的 `step` 信號輸入的最大值 N + 1 必須等於
> `narrations.length`。這保證 5 處地方（script / outline / 章節代碼 /
> chapters.ts / 音頻文件）永遠不會漂。此外，`layout.json` 保存了可視化
> 元素的坐標與內容，讓編輯面板與畫面的拖拽修改可以即時同步持久化。

---

## 硬性自檢協議（貫穿整個 Skill）

下面三個產出，每一個**完成後必須走自檢 → 修復 → 再匯報 / 推進**：

| 產出 | 自檢清單出處 |
|---|---|
| `script.md` | [`SCRIPT-STYLE.md`](references/SCRIPT-STYLE.md) 三層自檢（形式 / 風骨 / 念出來） |
| `outline.md` | [`OUTLINE-FORMAT.md`](references/OUTLINE-FORMAT.md) 自檢 |
| 單章實現完成 | [`CHAPTER-CRAFT.md`](references/CHAPTER-CRAFT.md) 完工自檢 |

**執行方式**（按能力降級，**優先用更隔離的方式**）：

1. **Agent Teams（最優）**：開一個獨立的 reviewer agent，給它"產出文件
   路徑 + 對應清單 + 關鍵上下文"，讓它逐項核查並**嚴格匯報結論**
   （哪幾條 pass / 哪幾條 fail + 證據 + 改寫建議）。
2. **subAgent（次優）**：沒有 Teams 能力但能開 subagent 就用 subagent
   走同樣流程。
3. **自檢（兜底）**：當前 agent 都沒有上述能力，就自己**嚴格逐項**
   核查 —— 不允許目測一遍就放行。

**鐵律**：拿到結論後**先按 fail 項把產出改完**，再向用戶匯報"做完了
+ 自檢結論 + 改了什麼"。**直接拿原始結論匯報但不修復 = 違規**。

---

## 各階段文件讀取指南

不同階段讀不同的文件。**長會話裏 agent 容易遺忘原則**，特別是
Phase 2.4 的"實現單章"會重複 N 次 —— 每次都要回看核心約束。

| 階段 | 必讀（每次都看） | 一次性看完 / 按需查 |
|---|---|---|
| Phase 1.1-1.2 內容編寫 | `references/SCRIPT-STYLE.md` + `references/OUTLINE-FORMAT.md` + `article.md`（用戶原文，如有） | —— |
| **Checkpoint Plan 選主題** | —— | `themes/*/theme.json`（動態讀全部，列清單 + `bestFor` 推薦 + `descriptionZh`）；`references/THEMES.md`（用戶想了解主題系統時） |
| Phase 2.1 腳手架 | —— | SKILL.md 本節看一次 |
| **Phase 2.4 實現單章（×N 次，被 2.2 / 2.3 調用）** | **`references/CHAPTER-CRAFT.md`** 單一入口 —— Part 0 十條原則 / Part 1 開工 5 問 / Part 2 關係→動作決策樹 / Part 3 視覺工具箱 / Part 4 時長參考 / Part 5 反 AI 味反模式 / Part 6 代碼硬規則（**含 narrations.ts 強制約束**）/ Part 7 完工自檢 / Part 8 反饋速查 + 當前主題的 `themes/<id>/theme.json` + 當前章節的 outline.md 段落 + **`article.md` 本章對應段落** + 素材清單 | `references/EXAMPLES/`（結構示意，不是抄襲模板）；`references/THEMES.md` 完整 token 契約 |
| Phase 3 音頻合成 | `references/AUDIO.md`（含 narrations.ts → segments.json → 任意 provider 流程，內置 minimax + openai） | `templates/scripts/tts-providers/README.md`（換 provider / 自帶 TTS 時） |
| Phase 4 錄屏 + 後期 | `references/RECORDING.md`（含 `?auto=1` 自動錄屏） | —— |
| 選 / 造 / 切主題 | —— | `references/THEMES.md` |

> **寫章節時只讀一份 `CHAPTER-CRAFT.md`**。十條原則 / 開工 self-prompting /
> 決策樹 / 反 AI 味反模式 / 完工自檢全部併入這一份單一入口。`EXAMPLES/`
> **不是必讀** —— 先按內容自由設計，卡殼才翻（按 anchor 翻"形"，不要照搬）。

---

## Phase 1 —— 內容編寫（一次產出）

### 1.1 識別用戶輸入

| 用戶給的東西 | 該做的 |
|---|---|
| 原始文章（書面語 / 公衆號 / 論文 / 博客） | 一次產出 `script.md` + `outline.md`（1.2），過 Checkpoint Plan |
| 直接的口播稿 / 視頻腳本 | 落盤成 `script.md`，一次產出 `outline.md`（1.2 簡化版），過 Checkpoint Plan |
| 啥都沒有，只說"幫我做個 X 主題的視頻" | **反問**：先給一段素材或大綱。Skill 不替用戶構思內容 |

### 1.2 一次產出 script.md + outline.md

**兩份產出物在一次思考中完成**：

1. **生成 `script.md`**：按 [`references/SCRIPT-STYLE.md`](references/SCRIPT-STYLE.md)
   的規則把 article 轉成保持原文語言的平臺化口播稿。**保留 `article.md` 不刪**——它是
   outline 寫信息池和章節實現畫面時的細節源（雙源原則）。
2. **生成 `outline.md`**：按 [`references/OUTLINE-FORMAT.md`](references/OUTLINE-FORMAT.md)
   規則切章節 + 切 step + 每章首段抽**信息池**。

**outline 的邊界**（關鍵）：

| outline 必須寫 | outline 不要寫 |
|---|---|
| 章節切分 / 每章 step 數 / 估時 | 具體動畫類型（blur clear / wipe / 彈簧） |
| 每步屏幕內容（hero / 數據 / 標語 / 列表項） | CSS 實現手段（filter / SVG / clip-path） |
| 章節級**信息池**：從 article 抽的數字 / 引用 / 案例 / 標籤 | 時長數值（不寫 ~2.5s / 80~120ms） |
| 步級關係名前綴（"反差對照" / "遞進列表" / "金句" 等可選 hint） | 持續微動 / 錯峰量等微觀節奏 |

> **outline 不寫動畫的理由**：寫死動畫 = chapter agent 退化爲翻譯機；
> 留白讓 chapter agent 在每步開工時按 [`CHAPTER-CRAFT.md`](references/CHAPTER-CRAFT.md)
> 的"內容驅動決策樹"自由設計，才有真正的視頻感。詳見
> [`CHAPTER-CRAFT.md`](references/CHAPTER-CRAFT.md) Part 0 原則 7。

**落盤後必須先走自檢再進 Checkpoint Plan**：按上文「硬性自檢協議」分別
對 `script.md` / `outline.md` 執行（優先 Agent Teams → subAgent → 自檢），
按結論修復完成後再進入 Checkpoint Plan。

---

## Checkpoint Plan —— 5 件事一次對齊（**硬節點**）

`script.md` + `outline.md` 寫完後必須停下來。**用戶在這一個節點同時確認
5 件事**。

### agent 此時要做的預備工作

1. 讀所有 `themes/*/theme.json` 拿 `nameZh` / `descriptionZh` / `bestFor`
   / `mood` —— **不要硬編碼清單**
2. 根據 `script.md` 的內容類型 / 關鍵詞 / 語氣，**主動**從主題裏挑 2~3
   套**最匹配的推薦**（匹配 `bestFor` 字段）
3. 掃一遍 `outline.md` 末尾"素材清單"部分

### 總結模板（骨架，agent 按情況填充）

```
內容計劃寫完，產出文件：
  📄 article.md     {若用戶給原文則保留}
  📄 script.md      {X} 字 / ~{T} 分鐘
  📄 outline.md     {N} 章 / {M} 步 + 每章信息池 + 末尾素材清單

章節速覽：
  1. <id>     <章節標題>    <S> 步 ~<T>s
  2. ...

接下來一次對齊 5 件事：

  1. 稿子 (script.md) 要不要改？
     可以直接編輯文件，或口頭告訴我修改方向。

  2. 開發計劃 (outline.md) 要不要改？重點看：
     - 章節切分 / step 數 / 估時是否合理（合理判斷：每章 30~60s）
     - 每步屏幕內容是否清晰
     - 每章首段「信息池」是否有足夠的 article 細節供畫面掛
     - 末尾素材清單是否完整

  3. 選哪個主題？我的推薦：
     ★ <推薦 1：nameZh (id)> — 因爲 <bestFor 命中>；<descriptionZh 摘要>
     ★ <推薦 2 / 推薦 3>
     其它可選：<剩餘主題，nameZh + 一句話>
     也可以讓我幫你做新主題（詳見 references/THEMES.md）。

  4. 真素材怎麼準備？粗看本視頻要的圖：<列粗略清單>
     a) 我從 <現有素材路徑> 幫你挑   b) 你自己提供   c) 全部 placeholder

  5. 開發模式選哪個？

     **第 1 章無論哪種模式都必須主線程做完 + 用戶驗收**（強制 anchor）。
     差異在第 2 章及之後：

     A) 默認 · 逐章確認（推薦）
        每章做完都暫停驗收 → 風險可控 / 節奏最穩
     B) 第 1 章後順序開發（不並行）
        第 2~N 章主線程順序做完後統一驗收 → 速度中 / 適合 agent 不支持並行
     C) 第 1 章後並行開發（subagent）
        第 2~N 章用 subagent 並行 → 最快 / 用戶控並行數（一次幾章）
        ⚠️ 風格各章會有差異（這是預期，主題禁區兜底）
     D) 非工程師引導模式
        我來問你幾個問題，替你處理所有指令和環境設定。
        你只需要：回答問題、確認畫面、最後按下錄影鍵。
        ⚠️ 每個指令執行前我都會用白話說明「我現在要做什麼、爲什麼」。
```

收到反饋後：
- 稿子 / outline 要改：直接編輯文件，編輯完 ping 一次（或口頭描述 agent 改）
- **主題必須明確**才進入 Phase 2。用戶說"主題你幫我選" → 取你推薦的第 1 個，
  **告訴用戶你選了什麼、爲什麼**，給反悔機會
- 模式選定 → 進 Phase 2
- **選了 D（非工程師引導模式）→ 進 Phase 2 時全程遵守非工程師規則**（見下方「2.0 非工程師引導規則」）

---

## Phase 2 —— 網頁開發

### 2.0 非工程師引導規則（僅選了模式 D 時適用）

用戶選了「非工程師引導模式」時，**整個 Phase 2 + Phase 3 + Phase 4 全程遵守以下規則**：

**執行每條指令前**，必須先用白話解釋：
```
我現在要做的是：<一句話說明目的>
具體執行：<指令內容>
請確認後我就開始，還是有問題先問我？
```

**指令執行後**，主動確認：
- 成功 → "✓ 完成。你有沒有看到 <預期畫面/輸出>？"
- 失敗 → 把錯誤翻譯成中文，說明原因和修復步驟，**不要直接貼英文報錯叫用戶自己看**

**遇到環境問題**（沒裝 Node / Python / ffmpeg 等）時：
1. 告訴用戶「你的電腦缺少 X，是 <功能> 需要的工具」
2. 給出一鍵安裝的指令（Windows / macOS 分開列）
3. 安裝完幫用戶驗證是否成功再繼續

**TTS 合成（Phase 3）** 優先引導用戶用 `edge-tts`（免費、無 key）：
```
要合成語音，最簡單的方式是用 edge-tts（微軟出品，完全免費，不需要註冊帳號）。
只需要執行一條安裝指令：
  pip install edge-tts
安裝完我來幫你一鍵合成全部語音。
```

**錄屏（Phase 4）** 主動引導用戶操作，按平臺區分：
- Windows：「按 Win + G 打開 Xbox Game Bar → 點錄製按鈕」
- macOS：「按 Cmd + Shift + 5 → 選錄製選定區域」

### 2.1 腳手架

```bash
bash <path-to-web-video-presentation>/scripts/scaffold.sh \
  ./presentation \
  --theme=<用戶選的主題 id>

bash <path-to-web-video-presentation>/scripts/scaffold.sh --list-themes
```

> 自定義主題 → 先按 [`references/THEMES.md`](references/THEMES.md)
> "創作新主題"流程做一個 `themes/<my-theme>/`，再 `--theme=<my-theme>`。

腳手架帶一個 `01-example` demo。在寫第一章真實內容前**刪掉**：

```bash
rm -rf presentation/src/chapters/01-example
```

並把 `presentation/src/registry/chapters.ts` 裏 `EXAMPLE_CHAPTER`
的 import 和數組項移除。

### 2.2 第 1 章 —— 主線程 + 強制驗收

**核心**：第 1 章 = 完整版本一次到位（節奏 + 視覺 + 真素材齊全）。
**沒有"骨架版"概念** —— 第一章就要做出**用戶能直接驗收**的樣板。

爲什麼第 1 章必須主線程：

- 它是 [`CHAPTER-CRAFT.md`](references/CHAPTER-CRAFT.md) 這套指引在**當前
  主題 + 當前題材**下的第一次落地
- 如果指引有盲區 / 主題顏色 / 字體 token 不夠用，第 1 章一定會暴露 ——
  這時候有人類反饋就能修指引 / 調主題，**早改成本最低**
- 後續章節（無論順序 / 並行）都要參考第 1 章的代碼模式，所以第 1 章 =
  當次項目的"風格錨點（不強求章節間一致，但單章自身得有完整說服力）"

**做完第 1 章後必須停下來**等用戶驗收：

```
第 1 章 <id> 做完了，dev server 在 localhost:5173 運行。

驗收重點：
  □ 視覺氣質對不對？符合 <theme nameZh> 的預期嗎？
  □ 節奏對不對？某些步太快 / 太慢 / 信息太薄？
  □ 內容驅動動畫是否到位？還是有幾步是無腦入場動畫？
  □ 雙源原則：屏幕畫面有沒有"口播沒念但 article 能掛"的細節？
  □ 反 AI 味檢查：紫粉漸變 / 圓角彩色邊框 / 假插畫 / emoji 是否有？

問題告訴我，我針對性改。OK 了告訴我"繼續"，我按選定模式做第 2 章及之後。
```

### 2.3 第 2~N 章 —— 按選定模式

**所有模式下的共同規則**：每章獨立按 [`CHAPTER-CRAFT.md`](references/CHAPTER-CRAFT.md)
開發。**風格不強求章節間完全一致** —— 主題顏色 / 字體 token 兜底視覺
統一，動畫 / 節奏 / 視覺演示由章節自由發揮是設計預期。

#### 模式 A · 默認 · 逐章確認

第 2 章做完 → 暫停驗收 → OK → 第 3 章 → 暫停 → ... → 第 N 章。**每章
獨立驗收**，問題隨時改，**風險最低，節奏最穩**。**用戶不明確選模式時
默認走這個**。

#### 模式 B · 第 1 章後順序開發

第 2 章 → 第 3 章 → ... → 第 N 章 **主線程順序做完，最後統一驗收**。
速度中等，適合 agent 不支持並行任務的環境。

#### 模式 C · 第 1 章後並行開發（subagent）

用 subagent 把第 2~N 章並行做完，最大並行數由用戶控制（"一次 4 章"
/ "一次 2 章"）。**最快，但風格各章會有差異** —— 這是預期，因爲：

1. 每個 subagent 看不到別的 subagent 產出，無法機械對齊
2. 章節代碼物理分離（每章一個文件夾 / 自己的 CSS 前綴），不會互相
   破壞
3. 主題 token 兜底視覺統一（顏色 / 字體 / hero 數字 / 卡片 / 分割線
   性格 / 裝飾），氣質不會跑偏
4. **風格不一致 = 人手寫視頻的呼吸感**（多 voice / 多視角）

並行 subagent 的 prompt 必須包含：

- 當前章節 outline 段落（含信息池）
- `references/CHAPTER-CRAFT.md` 的路徑（**單一必讀** —— 視覺演示要求 +
  逐步揭示 + 雙源原則 + 反 AI 味 + 代碼紅線 + 完工自檢全部在這一份裏）
- 當前主題 `theme.json` 的 `descriptionZh` / `mood` / `bestFor`（參考氣質
  即可，動畫 / 時長 / 字號 / emoji 由 chapter agent 自由決定）
- **第 1 章代碼作爲"代碼風格"參考**（不是"視覺抄襲對象"）
- 硬規則：每章獨立 CSS 前綴（`.cd-` / `.mg-` / `.pm-` / ...）；
  不修改 `chapters.ts`；完工跑 `npx tsc --noEmit`

**重要**：無論選哪種模式，**用戶隨時可以中途切換模式**。第 2 章 OK
後用戶說"剩下的並行" / "剩下的逐章" 都行。

### 2.4 實現單章（每章必走）

詳細指引見 [`references/CHAPTER-CRAFT.md`](references/CHAPTER-CRAFT.md) ——
**單一必讀入口**，覆蓋：視覺演示要求 / 逐步揭示 / 內容取捨 / 雙源原則
/ 視頻演示基本審美 / 反 AI 味 / 代碼紅線 / 完工自檢。

**核心要點**（CHAPTER-CRAFT.md 詳述）：

- **每章必須有 CSS / SVG / Canvas / JS 視覺演示**，禁純文字章節
- **逐步揭示**：清單 / 列表必須 1 項 = 1 step，禁一次全展示
- **雙源原則**：節奏跟口播稿（順序不能亂），細節回原文章抽（信息池 +
  本章 article 段落）
- **完工自檢逐項過**，不達標回去改 —— 按上文「硬性自檢協議」執行
  （優先 Agent Teams → subAgent → 自檢），**改完再向用戶匯報本章交付**

### 2.5 大改後 bump STORAGE_KEY

改動 `chapters.ts`（增加 / 刪除 / 重排章節，或某章 `narrations.ts`
長度變化）後，**bump** `presentation/src/hooks/useStepper.ts` 的
`STORAGE_KEY`（如 `v4` → `v5`），避免持久化遊標落到不存在的 step 上。

---

## Checkpoint Audio —— 是否合成音頻（**硬節點**）

Phase 2 結束後必須停下來，問用戶：

```
網頁做完，{N} 章 {M} 步，dev server 在 localhost:5173 跑着。

要不要合成音頻做"自動播放錄屏"？
  ✓ 合成 → 掃所有章節的 narrations.ts 出 audio-segments.json，
           調 TTS provider 合成每步一個 mp3 到 public/audio/。
           合成完後用 ?auto=1 模式可以一鏡到底錄屏（音視頻天然同步）。
           內置三個 provider：
             • edge-tts（默認，免費，pip install edge-tts，無需 API key）✅ 推薦新手
             • minimax (mmx-cli)  —— 中文音色更穩，要 MiniMax API key
             • openai  (OPENAI_API_KEY) —— curl-based，多數已有 key
           其它後端 (ElevenLabs / macOS say 離線 / Azure / Google)
           見 scripts/tts-providers/README.md 的現成片段。
  ✗ 不合成 → 跳過 Phase 3，直接 Phase 4 用手動錄屏 + 後期配音。
```

要合成 → Phase 3。不合成 → 直接 Phase 4。

---

## Phase 3 —— 音頻合成（可選）

詳細流程見 [`references/AUDIO.md`](references/AUDIO.md)。簡版：

```bash
cd presentation
npm run extract-narrations   # 掃所有 narrations.ts → audio-segments.json
# 讓用戶掃一眼 audio-segments.json 確認文本對
npm run synthesize-audio                       # 默認 edge-tts（免費，無需 API key）
# 或用內置 minimax（中文音色更穩，要 mmx-cli + API key）：
PRESENTATION_TTS=minimax npm run synthesize-audio
# 或用內置 openai（要 OPENAI_API_KEY）：
PRESENTATION_TTS=openai npm run synthesize-audio
# 或自定義：寫一個 scripts/tts-providers/<name>.sh，見該目錄的 README.md
```

合成完告訴用戶：輸出位置 / 總段數 / 哪些段時長異常（太長 = 該 step 拆
分；太短 = 文案太薄）—— 給最後一次校準節奏的機會。然後進入 Phase 4。

---

## Phase 4 —— 錄屏 + 後期

詳見 [`references/RECORDING.md`](references/RECORDING.md)。兩種路徑：

| 場景 | 推薦路徑 |
|---|---|
| Phase 3 已合成音頻 | **Auto 模式一鏡到底**：瀏覽器開 `localhost:5173/?auto=1` → 按 SPACE → 整片自動播完 → 停錄 → 裁頭尾即成片，**無需後期對音軌** |
| Phase 3 跳過 | 默認 Manual 模式手動點擊推進 → 後期任意剪輯工具配音 |

> agent 在 Phase 3 / Checkpoint Audio 後**主動告訴用戶**適合的錄屏路徑。

---

## 十條原則（一句話清單）

完整展開見 [`references/CHAPTER-CRAFT.md`](references/CHAPTER-CRAFT.md)
Part 0 —— **寫章節時回那裡查**，下面只是索引。

| # | 原則 | 一句話 |
|---|---|---|
| 1 | 16:9 固定舞臺 | 內容 1920×1080 + transform scale，沒有響應式 |
| 2 | 全局 step 計數器 | 章節是 step 的純函數，無定時器 |
| 3 | 每步獨佔整屏 | `if (step === N) return <FullScene />` |
| 4 | 口播節拍 = step | 一節拍 = 一 step = 一聚焦想法 |
| 5 | 隱藏的邊角控件 | 進度條 / 翻頁器默認 opacity 0 |
| 6 | 舞臺無 chrome | 沒有 header / footer / 頁碼 / 品牌條 |
| 7 | **內容驅動動畫** | 先找內在動作，找不到才入場動畫兜底；持續微動慎用 |
| 8 | 多點逐個揭示 | 1 項 = 1 step，禁同步 stagger 上 N 項 |
| 9 | 整片同一主題 | 章節間不翻表面色；**顏色 / 字體走 token**，其它尺度章節自由 |
| 10 | 雙源原則 | script 定節拍，**article 定畫面密度**（落到信息池） |

---

## 常見用戶反饋速查

簡化表見 [`references/CHAPTER-CRAFT.md`](references/CHAPTER-CRAFT.md)
Part 8「常見反饋速查」。**關鍵**：先定位是哪一層（節奏 / 視覺 / 內容
/ 代碼），再改最小切片，**不要重做整章**。

---

## 相關資源

按"何時讀"標註，避免一次性全讀：

| 文件 | 何時讀 | 內容 |
|---|---|---|
| [`references/SCRIPT-STYLE.md`](references/SCRIPT-STYLE.md) | Phase 1.2 必讀 | 文章 → 口播稿規則、平臺變體 |
| [`references/OUTLINE-FORMAT.md`](references/OUTLINE-FORMAT.md) | Phase 1.2 必讀 | outline.md 字段 spec、命名約定、章節切分、信息池 |
| [`references/CHAPTER-CRAFT.md`](references/CHAPTER-CRAFT.md) | **Phase 2.4 每章單一必讀入口** | Part 0 十條原則 / Part 1 開工 5 問 / Part 2 關係→動作決策樹 / Part 3 視覺工具箱 / Part 4 時長 / Part 5 反 AI 味反模式 / Part 6 代碼硬規則 / Part 7 完工自檢 / Part 8 反饋速查 |
| [`references/EXAMPLES/`](references/EXAMPLES/) | **可選** —— 看結構 | 章節結構示意（hook / list-reveal / case-tech-review）；**不是抄襲模板** |
| [`references/THEMES.md`](references/THEMES.md) | 選 / 造 / 切主題時 | 完整 token 契約 + 內置主題清單 + 創作流程 |
| [`references/AUDIO.md`](references/AUDIO.md) | Phase 3 才讀 | provider-agnostic 音頻合成流程、內置 edge-tts（默認免費）/ minimax / openai 用法、換 provider 路徑、故障排查 |
| [`templates/scripts/tts-providers/README.md`](templates/scripts/tts-providers/README.md) | 換 / 加 TTS provider 時 | 三函數契約 + 內置 3 個 (edge-tts / minimax / openai) + 5 種現成代碼片段（ElevenLabs / macOS say / Azure / Google） |
| [`references/RECORDING.md`](references/RECORDING.md) | Phase 4 才讀 | 錄屏工具 + 後期合成 |
| [`themes/`](themes) | Checkpoint Plan / Phase 1.2 時翻 | 內置主題（每個含 `theme.json` + `tokens.css`） |
| [`scripts/scaffold.sh`](scripts/scaffold.sh) | Phase 2.1 跑一次 | 一鍵項目腳手架 |
