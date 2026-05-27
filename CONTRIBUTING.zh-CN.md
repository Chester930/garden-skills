# 貢獻與維護指南

新增 Skill、發版、改 release 工具鏈——你需要知道的都在這。

[English](./CONTRIBUTING.md) · [中文文檔](./CONTRIBUTING.zh-CN.md) · [日本語](./CONTRIBUTING.ja-JP.md)

---

## 目錄

- [快速開始](#快速開始)
- [倉庫結構](#倉庫結構)
- [Skill 的標準結構](#skill-的標準結構)
- [新增一個 Skill](#新增一個-skill)
- [發版](#發版)
- [版本號規則](#版本號規則)
- [npm 腳本](#npm-腳本)
- [CI / GitHub Actions](#ci--github-actions)
- [README 下載鏈接是怎麼自動維護的](#readme-下載鏈接是怎麼自動維護的)
- [手動發版（fallback）](#手動發版fallback)
- [常見問題](#常見問題)

---

## 快速開始

```bash
git clone https://github.com/ConardLi/garden-skills.git
cd garden-skills
node --version    # 必須 >= 20

npm run list      # 列出所有 Skill + manifest 狀態
npm run validate  # 跑一遍和 PR CI 完全一樣的檢查
```

無運行時依賴——`npm install` 是 no-op。Release 工具是純 ESM Node，零依賴。

---

## 倉庫結構

```text
.
├── skills/                              ← 所有 Skill 都在這裡，每個一個文件夾
│   ├── web-video-presentation/
│   │   ├── SKILL.md                     ← Agent 看的指令（必需）
│   │   ├── manifest.json                ← name / version / category / compat（必需）
│   │   ├── README.md / README.zh-CN.md  ← 給人看的文檔
│   │   ├── references/                  ← （可選）Agent 按需加載的擴展文檔
│   │   ├── scripts/                     ← （可選）確定性可執行代碼
│   │   ├── templates/                   ← （可選）腳手架模板
│   │   └── themes/                      ← （可選）skill 專屬素材
│   │
│   ├── web-design-engineer/
│   ├── gpt-image-2/
│   └── kb-retriever/
│
├── scripts/release/                     ← 發版工具（零依賴 Node ESM）
│   ├── cut-release.mjs                  ← 交互式發版主入口
│   ├── pack-skill.mjs                   ← skill → 釘版本 .zip + .sha256
│   ├── update-readme.mjs                ← 重寫 README 的 Download 鏈接
│   ├── list-skills.mjs                  ← 查看 manifest + 結構狀態
│   └── lib/skills.mjs                   ← 共享輔助函數
│
├── .github/workflows/
│   ├── release-skill.yml                ← tag 觸發的單 Skill 發版
│   └── validate-skills.yml              ← PR 守門
│
├── .claude-plugin/
│   └── marketplace.json                 ← Claude Code 插件市場清單
│
├── demo/                                ← 可直接打開的演示
├── dist/                                ← 共享 README 素材 + 參考資料
├── website/                             ← 獨立展示網站
│
├── package.json                         ← 維護者腳本（無運行時依賴）
├── README.md / README.zh-CN.md / README.ja-JP.md ← 用戶向集合首頁
└── CONTRIBUTING.md / CONTRIBUTING.zh-CN.md / CONTRIBUTING.ja-JP.md ← 本文件
```

---

## Skill 的標準結構

本倉庫每個 Skill 都遵循同一種最簡結構：

```text
<skill-name>/
├── SKILL.md            ← 必需：YAML frontmatter + 給 Agent 看的指令
├── manifest.json       ← 必需：name / version / category / description / compat
├── README.md           ← 給人看的英文文檔（GitHub 渲染的就是它）
├── README.zh-CN.md     ← 給人看的中文文檔
├── README.ja-JP.md     ← 給人看的日文文檔
├── references/         ← 可選：Agent 按需加載的擴展文檔
├── scripts/            ← 可選：確定性的可執行代碼
└── assets/             ← 可選：模板、字體、圖標等輸出物素材
```

`SKILL.md` 的 frontmatter 是 Agent 判斷"什麼時候該用這個 Skill"的契約：

```markdown
---
name: my-skill
description: 用一句話清楚說明這個 Skill 是幹什麼的、什麼時候應該用。
              Agent 會用這段話判斷是否激活本 Skill。
---

# My Skill

詳細指令、示例與約束寫在這裡。
```

`manifest.json` 是給**發版工具和下遊安裝器**看的契約：

```json
{
  "name": "my-skill",
  "version": "1.0.0",
  "category": "Design / Frontend",
  "description": "做什麼的、適合什麼場景。會顯示在安裝界面裏。",
  "homepage": "https://github.com/ConardLi/garden-skills/tree/main/skills/my-skill",
  "compat": [
    "claude-code",
    "claude-ai",
    "cursor",
    "codex-cli",
    "gemini-cli",
    "opencode"
  ]
}
```

`name` 字段**必須和文件夾名、`SKILL.md` frontmatter 的 `name` 完全一致**——
不一致 `npm run list` 會 fail。

完整的 SKILL.md 規範見 [agentskills.io](https://agentskills.io) 與
[Anthropic 官方示例倉庫](https://github.com/anthropics/skills)。

---

## 新增一個 Skill

1. 創建 `skills/<new-name>/`，至少要有 `SKILL.md` + `manifest.json`。
   實驗性的可以用 `version: "0.1.0"` 起步，比較成熟的就直接 `1.0.0`。
2. 在所有根目錄多語言 README 裏新 Skill 的"鏈接：" / "Links:" 行末尾
   追加 inline DOWNLOAD marker（前面加 ` · ` 保持視覺一致）：
   ```markdown
   鏈接：[README](...) · [SKILL.md](...) · <!-- DOWNLOAD:<new-name>:start --><!-- DOWNLOAD:<new-name>:end -->
   ```
3. 跑 `npm run readme:sync` 填充佔位符。
4. 本地跑 `npm run validate` 確認全部通過。
5. 開 PR，CI 會再校驗一遍。
6. 合併後用 `npm run release` 發首版（腳本會自動檢測無 tag 並提示 "initial
   release at v<manifest 版本>"）。

可選：在 [`.claude-plugin/marketplace.json`](./.claude-plugin/marketplace.json)
裏加一條 plugin pack，讓它能通過 `/plugin install` 被發現。

---

## 發版

```bash
npm run release
```

就這一條命令。腳本（[`scripts/release/cut-release.mjs`](./scripts/release/cut-release.mjs)）會：

1. 自檢（在 `main`、工作區乾淨、和 `origin` 同步）。
2. 掃描每個 Skill，找上一個 release tag，列出之後的所有 commit。
3. 對每個候選提示 **patch / minor / major / skip**——首次發版的自動走
   "initial release"。
4. 展示完整計劃 + diff 摘要。
5. 改 manifest、跑 `update-readme.mjs`、commit、打 tag，最後**原子地**用一次
   `git push` 把 commit 和所有 tag 一起推出去——CI 永遠看到一致的狀態。
6. 打印 Actions URL，方便你看後續。

[`release-skill`](./.github/workflows/release-skill.yml) 工作流接管之後會：
打 zip、創建 GitHub Release、再同步一次 README 下載鏈接 commit 回 `main`。

### 常用變體

```bash
# 只預覽，不寫不推（dirty tree 也能跑）
npm run release:dry

# 跳過最後的"proceed?"確認
npm run release -- --yes

# 給某些 Skill 預設 bump 類型（其它的還會提示）
npm run release -- \
  --skill web-design-engineer --bump minor \
  --skill gpt-image-2 --bump patch

# 從非默認分支發版
npm run release -- --branch release/2026-q2
```

> 注意 `npm run release` 和參數之間要有 `--`，npm 才會把後面的 flag 透傳給
> 下面的 node 腳本。

### 第一次發版完整步驟

第一次給整個倉庫（或任何從未打過 tag 的 Skill）發版：

```bash
# 1. 確保所有籌備工作都已 commit、CI 是綠的
git status        # 應該是 clean
git push origin main
gh run watch      # 等 validate-skills.yml 跑完

# 2. 先 dry-run 看一眼計劃
npm run release:dry
# 每個 Skill 都應該顯示爲 INITIAL，manifest 裏的版本號會成爲發布版本

# 3. 正式發版
npm run release
# 確認 y。腳本會：不改 manifest（initial）、commit README sync、
# 一口氣打 4 個 tag、原子 push

# 4. 看 4 個 release-skill 工作流並行跑完（每個約 1 分鐘）
gh run list --workflow=release-skill.yml

# 5. 拉一下 main（bot 會 commit README 同步）
git pull origin main
```

跑完之後 `https://github.com/ConardLi/garden-skills/releases` 下面就有 4 個
release，每個帶 zip + sha256 + 自動 changelog，README 的下載鏈接也會指向它們。

---

## 版本號規則

每個 Skill **獨立**版本號，遵循 [SemVer](https://semver.org/)。

| 變更 | bump |
|---|---|
| 拼寫修正、新增可選 reference、`SKILL.md` 微調 | **patch** |
| `SKILL.md` 工作流改動、`references/` 結構調整、新增必需步驟 | **minor** |
| 重命名 Skill、刪除文件、frontmatter 破壞性變更 | **major** |

預發布後綴（`1.2.0-beta.1`、`1.2.0-rc.1`）在 tag 正則和 workflow 裏都允許，
但 `cut-release.mjs` 只提供 patch / minor / major 三個選項。要發預發布版本，
請手動改 manifest 後再推 tag（見 [手動發版](#手動發版fallback)）。

首次發版（無 prior tag 的 Skill）會直接用 manifest 裏的版本號——`--bump`
被忽略。想從其它版本起步，發版前手動改 manifest。

---

## npm 腳本

```bash
npm run release       # 交互式發版（你 99% 時間會用的命令）
npm run release:dry   # 同上，但不寫不推（只預覽）

npm run list          # 列出所有 Skill + manifest 狀態（manifest 錯時 exit 1）
npm run pack          # 打單個 Skill：npm run pack -- --skill web-design-engineer
npm run pack:all      # 把所有 Skill 都打到 dist/release/
npm run readme:sync   # 重寫 README 下載鏈接到當前 manifest 版本
npm run readme:check  # CI 風格檢查：有任何鏈接過期就 exit 1

npm run validate      # CI 在每個 PR 跑的全套（list + pack:all + readme:check）
```

---

## CI / GitHub Actions

兩個工作流，都很輕：

### [`validate-skills.yml`](./.github/workflows/validate-skills.yml)

每個 PR、以及 main 上任何動到 `skills/**` / `scripts/release/**` / 任一多語言 README
的 push，都會跑。它跑的是 `npm run validate`，等價於：

- lint 每個 `manifest.json` + skill 文件夾結構
- 空跑一遍打包所有 skill（不上傳）
- 校驗 README 下載鏈接是否和 manifest 同步

### [`release-skill.yml`](./.github/workflows/release-skill.yml)

push 一個 `<skill>-v<semver>` 格式的 tag 時觸發。流程：

1. 解析 tag，校驗是否和 `manifest.json#version` 一致（防漂移）。
2. 把 `skills/<name>/` 打成 `<name>-<version>.zip` + `.sha256`。
3. 基於該 Skill 上一個 tag 之後的 `git log` 自動生成 release notes。
4. 創建一個帶 zip + sha256 的 GitHub Release。
5. 重寫多語言 README 裏這個 Skill 的 `下載 v<版本> .zip` 鏈接，以
   `github-actions[bot]` 身份 commit 回 `main`。

兩個 workflow 跑的是和你本地完全一樣的 `npm run *` 命令——單一事實來源。

---

## README 下載鏈接是怎麼自動維護的

主 README 裏每個 Skill 區塊的"鏈接：" / "Links:" 行末尾都有一個 inline marker：

```markdown
鏈接：[README](...) · [SKILL.md](...) · <!-- DOWNLOAD:gpt-image-2:start -->[下載 v1.0.0 .zip](...)<!-- DOWNLOAD:gpt-image-2:end -->
```

[`scripts/release/update-readme.mjs`](./scripts/release/update-readme.mjs)
會根據每個 Skill 當前 `manifest.json#version` 重寫 `:start` / `:end` 之間的內容。
冪等的，跑兩次沒差異。運行時機：

- 本地：`npm run readme:sync`
- CI：`npm run readme:check`（PR 守門）
- 自動：發版工作流在每次 tag 發布後自動跑

爲啥不用一個永遠指向 latest 的穩定 URL？因爲 GitHub 的
`releases/latest/download/<asset>` 跟蹤的是**整個倉庫**的最新 release，對多
Skill 的 monorepo 不適用——比如 `gpt-image-2` 剛發了 v2，但 `kb-retriever`
的"latest"也會變成那個 release。Marker 讓每個 Skill 永遠指向它**自己**的最近
不可變產物。

---

## 手動發版（fallback）

不想用 helper（或者要 debug 它）的話，手動等價做法：

```bash
# 1. 改 skills/<name>/manifest.json 裏的 version
# 2. 同步 README 下載鏈接
npm run readme:sync

# 3. commit + tag + push（一定要原子！）
git commit -am "release(<name>): <X.Y.Z>"
git tag <name>-v<X.Y.Z>
git push origin main <name>-v<X.Y.Z>
```

`release-skill` 工作流會校驗 tag 與 `manifest.json#version` 一致，不一致就拒
絕發布——所以打錯 tag 只會 fail CI，不會發出錯版本。

撤回一個 release：

```bash
# 刪本地 + 遠程 tag
git tag -d <name>-v<X.Y.Z>
git push origin :refs/tags/<name>-v<X.Y.Z>

# 刪 GitHub Release
gh release delete <name>-v<X.Y.Z> --yes
```

> 強烈建議**bump 版本號重發**（發個 `<X.Y.(Z+1)>`）而不是覆蓋原來的 release——
> 不可變才是釘版本 `.zip` URL 的核心價值。

---

## 常見問題

| 現象 | 原因 | 解決 |
|---|---|---|
| `release-skill` 失敗：`Version drift: tag asks for 1.1.0 but manifest is 1.0.0` | tag 推了但 `manifest.json#version` 沒 bump | bump manifest 後 commit + 重 tag |
| `validate-skills` 失敗：`README out of date` | 有人手改了 README 的 Download 鏈接，或者改了 manifest 但忘了 `npm run readme:sync` | 跑 `npm run readme:sync` 然後 commit |
| `validate-skills` 失敗：missing `manifest.json` | 新加 skill 文件夾但沒補 manifest | 在 `skills/<name>/manifest.json` 至少補上 `name` / `version` / `description` / `category` / `compat` |
| `cut-release.mjs` exit `Tag 'foo' does not match <skill>-v<semver>` | tag 名字格式不對 | tag 必須嚴格是 `<lower-kebab-skill-name>-v<X.Y.Z>` |
| `cut-release.mjs` 提示 "Local main is N commit(s) behind origin/main" | bot 在你上次 pull 後又 push 了 README sync | `git pull origin main` 後重跑 |
| `npm run release` 在 dirty tree 報錯 | 有未 commit 的改動 | 先 commit / stash，或者用 `npm run release:dry` 只預覽 |

---

## 設計取捨

- **爲什麼用單獨的 `manifest.json` 而不是塞進 `SKILL.md` frontmatter？**
  我們想讓 manifest 是機器可讀的 JSON，不依賴 YAML 解析器；同時讓 `version`
  / `compat` 這些跟 Agent 契約（`SKILL.md`）解耦。
- **爲什麼 per-skill SemVer 而不是倉庫統一版本？**
  每個 Skill 的迭代節奏差異很大，綁定就會讓下遊釘版本變得困難。
- **爲什麼不做 rolling-latest tag？**
  GitHub 已經有 `releases/latest/download/<asset>`，加上 README 自動重寫機
  制，沒必要再維護第三種 URL。
- **爲什麼不發 npm 包？**
  社區維護的 [`npx skills`](https://www.npmjs.com/package/skills) CLI 已經
  能識別本倉庫的布局（子路徑、tag URL、Agent 自動檢測）。再做一個私有 CLI
  只會割裂生態。
- **爲什麼零 npm 依賴？**
  CI 不用 install 步驟，沒有供應鏈攻擊面，任何 Node 20+ 環境都能直接跑。
