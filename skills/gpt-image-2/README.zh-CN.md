# GPT Image 2 Skill

**面向 GPT Image 2 的聚焦型圖像生成 / 編輯技能。一份 SKILL 定義，自動適配三種運行環境——本地直接出圖、宿主原生圖像工具、純提示詞顧問。**

[English](./README.md) · [返回集合首頁](../../README.zh-CN.md)

![GPT Image 2 Skill](../../dist/imgs/gpt-image-2-skill.png)

---

## 這個 Skill 幹什麼

圍繞 GPT Image 2（以及任何 OpenAI 兼容的圖像接口）做的結構化提示詞工程 + 圖像生成包。只做兩件事——`POST /images/generations` 和 `POST /images/edits`，但能在三種完全不同的運行環境下做到對用戶無感。

它內置了：

- **模式感知工作流**：無論 Agent 自己持有 API key、宿主帶原生圖像工具、還是完全沒有圖像工具，同一份 Skill 都能用。
- **結構化模板庫**：18 大類、70+ 個提示詞模板，覆蓋海報、UI 樣機、產品圖、信息圖、學術圖、技術架構圖、漫畫、頭像、編輯工作流。
- **可復用的 prompt + 圖片歸檔**：默認落盤到 `garden-gpt-image-2/prompt/` 和 `garden-gpt-image-2/image/`，按 `<task-slug>-<timestamp>` 命名。

---

## 三種運行模式

任何任務的第一步都是跑這個探測腳本：

```bash
node skills/gpt-image-2/scripts/check-mode.js
# 想拿結構化結果：
node skills/gpt-image-2/scripts/check-mode.js --json
```

輸出會判定爲以下三種之一：

| 模式 | 觸發條件 | 行爲 |
|---|---|---|
| **A · Garden 本地生圖** | `ENABLE_GARDEN_IMAGEGEN` 爲真 **且** 有 `OPENAI_API_KEY` | 端到端：選模板 → 渲染 prompt → 調用 `generate.js` / `edit.js` → 圖片落盤 |
| **B · Host-Native 委託宿主出圖** | 未啓用 Garden，但宿主 Agent 自帶圖像工具（`image_generation` / `dalle` / `nano_banana` / 圖像 MCP 等） | 渲染好 prompt 後**交給宿主自帶的圖像工具**出圖 |
| **C · Advisor 純提示詞顧問** | 未啓用 Garden，宿主也沒有圖像工具 | 退化成"高質量 prompt 撰寫顧問"——把 prompt 落盤到 `garden-gpt-image-2/prompt/`，告訴用戶去 ChatGPT / Midjourney / DALL·E / Sora / Nano Banana / 自己的網關裏執行 |

三種模式都建議落盤 prompt 文件（A、C 必須，B 推薦），但只有 A 會產出圖片文件——B 由宿主決定，C 不可能。

---

## 快速上手

### 0. 檢測運行模式（永遠是第一步）

```bash
node skills/gpt-image-2/scripts/check-mode.js
```

下面 1~4 僅在 **Mode A** 下使用。

### 1. 文本生圖

```bash
node skills/gpt-image-2/scripts/generate.js \
  --prompt "A cute baby sea otter" \
  --size 1024x1024 \
  --quality high
```

### 2. 用提示詞文件生圖

```bash
node skills/gpt-image-2/scripts/generate.js \
  --promptfile garden-gpt-image-2/prompt/poster-20260424-153045.md
```

### 3. 編輯已有圖片

```bash
node skills/gpt-image-2/scripts/edit.js \
  --image assets/source.png \
  --prompt "Replace the background with a clean studio scene"
```

### 4. 帶遮罩的局部編輯

```bash
node skills/gpt-image-2/scripts/edit.js \
  --image assets/source.png \
  --mask  assets/mask.png \
  --prompt "Replace only the masked area with a glass vase"
```

Mode B / C 沒有 CLI 入口——Skill 只負責把最終 prompt 渲染好，然後交給宿主圖像工具（B）或直接呈現給用戶（C）。

---

## Skill 結構

```
skills/gpt-image-2/
├── SKILL.md                       主技能定義
├── scripts/
│   ├── check-mode.js              模式 A/B/C 探測器（先跑這個）
│   ├── generate.js                文本生圖（僅 Mode A）
│   ├── edit.js                    圖像編輯 / 局部編輯（僅 Mode A）
│   ├── shared.js                  共享請求 / 落盤 / 環境變量解析
│   └── package.json
└── references/
    ├── prompt-writing.md          方法論：模板怎麼設計、缺字段怎麼問
    ├── ui-mockups/                直播帶貨、社交、產品卡、聊天、短視頻封面
    ├── product-visuals/           爆炸圖、純白底、影棚、包裝、生活方式
    ├── infographics/              信息圖
    ├── poster-and-campaigns/      品牌主海報、Campaign KV、banner、雜誌封面
    ├── slides-and-visual-docs/    高密度講解、政策風、商業報告、教學示意
    ├── portraits-and-characters/  職業肖像、創始人肖像、虛擬主播、角色設定
    ├── scenes-and-illustrations/  治癒系、概念大場景、繪本、極簡留白
    ├── editing-workflows/         背景替換、局部替換、去除、產品精修、人像編輯
    ├── avatars-and-profile/       風格化自拍、角色網格、3D 圖標、貼紙、文化系列
    ├── storyboards-and-sequences/ 4 格漫畫、漫畫分鏡、動漫 KV、角色關係圖、流程圖
    ├── grids-and-collages/        2×2 banner、lookbook、混風格拼貼、動漫 pitch board
    ├── branding-and-packaging/    品牌識別系統、吉祥物、化妝品包裝、飲料標籤
    ├── typography-and-text-layout/ 大字海報、雙語版式
    ├── assets-and-props/          擬物圖標、遊戲截圖樣機
    ├── academic-figures/          方法 pipeline、神經網絡架構、定性對比
    ├── technical-diagrams/        架構圖、流程圖、時序圖
    └── maps/                      美食地圖、旅行路線圖、城市插畫、門店分布
```

---

## 環境變量

按以下順序讀取：CLI 參數 → `process.env` → `<cwd>/.env` → `<cwd>/.gateway.env` → `~/.gateway.env`。

| 變量 | 必需性 | 說明 |
|---|---|---|
| `ENABLE_GARDEN_IMAGEGEN` | Mode A 必需 | 模式開關：`1` / `true` / `yes` / `on` 啓用 Mode A |
| `OPENAI_API_KEY` | Mode A 必需 | 真正調圖像 API 用 |
| `OPENAI_BASE_URL` | 可選 | 默認 `https://api.openai.com/v1`，可指向任意 OpenAI 兼容網關 |
| `OPENAI_IMAGE_MODEL` | 可選 | 默認 `gpt-image-2`，也可換成 `gpt-image-1` / `dall-e-3` 等 |

默認實現嚴格按 OpenAI 兼容接口工作，**不綁定**任何第三方網關。

---

## 輸出約定

如果用戶沒有明確指定輸出路徑：

| 內容 | 落盤位置 | 適用模式 |
|---|---|---|
| 渲染好的 prompt | `garden-gpt-image-2/prompt/<task-slug>-<timestamp>.md` | A / B / C |
| 生成的圖片 | `garden-gpt-image-2/image/<task-slug>-<timestamp>.png` | 僅 A（B 由宿主決定，C 不產出） |

`<task-slug>` 由用戶請求自動派生，`<timestamp>` 是 `YYYYMMDD-HHMMSS`。

示例：

- `garden-gpt-image-2/prompt/live-commerce-ui-20260424-153045.md`
- `garden-gpt-image-2/image/vr-headset-exploded-view-20260424-153102.png`

---

## 設計原則

1. **先判模式，再幹活。** 不會因爲宿主沒 API key 就靜默失敗，而是優雅地降級到 B / C 並明確告知用戶當前狀態。
2. **模板優於自由提示。** 18 大類預校驗過的結構化模板，帶顯式 `{argument ...}` 參數槽和 `default` 標記，質量遠高於"你說說想要啥"。
3. **精確提問，不要籠統提問。** 模板字段缺失時按字段精確問（"主播是誰？真人照片 / 名人名字 / 自由描述 / 隨機生成？"），不要籠統問"想要什麼風格"。
4. **永遠歸檔 prompt。** 即使在顧問模式，渲染好的 prompt 也會落盤，方便復用。
5. **默認 OpenAI 兼容。** 不鎖定任何特定網關。

---

## 許可證

MIT
