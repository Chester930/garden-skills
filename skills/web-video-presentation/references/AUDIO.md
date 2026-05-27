# 音頻合成

把每個章節 `narrations.ts` 裏的口播文字按 **step 顆粒度**合成 mp3，
落到 `presentation/public/audio/<chapter-id>/<step-N>.mp3`。運行時
Auto 模式會自動按 step 播放並自動推進——錄屏可以一鏡到底。

> **真相源**：每個章節的 `src/chapters/<NN>-<id>/narrations.ts` 是 step
> 數 + 口播文本的**唯一來源**。`outline.md` 不再參與音頻合成，章節代碼
> 也不再手寫 `totalSteps`。這一改根除了"網頁 step 和音頻文件數對不上"
> 這個老問題。

合成器是 **provider-agnostic** 的：runner 本身不綁定任何 TTS 後端，每個
後端是 `scripts/tts-providers/<name>.sh` 一個文件。**內置 3 個 provider**：

| Provider | 默認 | 何時用 |
|---|---|---|
| `edge-tts` | ✓ | **推薦新手首選**：免費、無需 API key，`pip install edge-tts` 即可；支持 `--rate` / `--pitch` 調速調調 |
| `minimax`  | —— | 中文音色質量高（用 `mmx-cli`，要 MiniMax API key） |
| `openai`   | —— | 多數 agent 已有 `OPENAI_API_KEY`；curl-based、響應快 |

換 / 加 provider 見
[`scripts/tts-providers/README.md`](../templates/scripts/tts-providers/README.md)
（腳手架跑完後路徑是 `presentation/scripts/tts-providers/README.md`）。
README 裏還附了 5 套**可粘貼**的現成片段（ElevenLabs / edge-tts / macOS say /
Azure / Google Cloud）和寫自定義 provider 的三函數契約。

---

## 文件命名約定

```
presentation/public/audio/
├── coldopen/
│   ├── 1.mp3
│   ├── 2.mp3
│   └── ...
├── hook/
│   └── ...
└── ...
```

- 章節子目錄名 = `chapters.ts` 裏的 `id`
- 文件名 = `<step-N>.mp3`（**1-indexed**，對齊 narrations 數組的 index + 1）
- 格式默認 mp3。如果你寫的 provider 只能出 wav，在函數裡加一步 `ffmpeg`
  轉 mp3（參見 `tts-providers/README.md` 的 `say.sh` 示例）

---

## 標準流程

### 1. 抽取 segments

```bash
cd presentation
npm run extract-narrations
```

這會掃所有章節的 `narrations.ts`，按 `chapters.ts` 註冊順序生成
`audio-segments.json`：

```json
[
  { "chapter": "coldopen", "step": 1, "text": "...", "audio": "coldopen/1.mp3" },
  { "chapter": "coldopen", "step": 2, "text": "...", "audio": "coldopen/2.mp3" },
  ...
]
```

讓用戶**先掃一眼這個 json**，確認文本和切分都對，再開始燒 token 合成。

> 空字符串的 narration 會被自動跳過（不燒 TTS token）——運行時 Auto 模式
> 按字數估時撐過這種"無聲過場"step。

### 2. 選 provider

```bash
ls scripts/tts-providers/    # 看本項目帶了哪些
```

- 用默認 `edge-tts`（免費，無需 key）→ 走 [2.A](#2a-用內置-edge-tts-合成默認)
- 用內置 `minimax` → 走 [2.B](#2b-用內置-minimax-合成)
- 用內置 `openai` → 走 [2.C](#2c-用內置-openai-合成)
- 想用別的 TTS / 自帶 TTS → 走 [2.D](#2d-換-provider--加自定義-provider)
- 一個都沒裝好 → 走 [2.E](#2e-退化路徑)

#### 2.A 用內置 edge-tts 合成（默認）

**最快上手**：免費、無 API key，僅需 Python 環境。

```bash
# 安裝（只需一次）
pip install edge-tts

# 合成（edge-tts 是默認 provider，直接跑即可）
npm run synthesize-audio              # 增量：跳過已存在的 mp3
npm run synthesize-audio -- --force   # 全部重合成
npm run synthesize-audio -- --voice=zh-TW-YunJheNeural  # 臺灣男聲（默認）
npm run synthesize-audio -- --voice=zh-TW-HsiaoChenNeural  # 臺灣女聲
```

調速 / 調調（通過環境變量）：

```bash
# 語速 +20%，音調 -5Hz
PRESENTATION_TTS_RATE="+20%" PRESENTATION_TTS_PITCH="-5Hz" npm run synthesize-audio
```

可用中文音色（執行 `edge-tts --list-voices | grep zh` 查完整列表）：

| 音色 ID | 語言 | 性別 |
|---|---|---|
| `zh-TW-YunJheNeural` | 臺灣中文 | 男 |
| `zh-TW-HsiaoChenNeural` | 臺灣中文 | 女 |
| `zh-CN-YunxiNeural` | 中國大陸 | 男 |
| `zh-CN-XiaoxiaoNeural` | 中國大陸 | 女 |

啓動時 runner 會先調 provider 的 `tts_check`：

- edge-tts 未安裝 → 報 `'edge-tts' command not found`，並打印 `pip install edge-tts`
- 安裝正常則直接開始合成，無需登錄 / Key

修完再跑。每條段打印進度：

```
[  3/24] coldopen/3.mp3   ✓ 4s
[  4/24] coldopen/4.mp3   skip (exists)
```

合成串行（避免 rate limit），**自動跳過已存在文件**（斷點續合，不燒
重複 token）。

#### 2.B 用內置 minimax 合成

```bash
npm install -g mmx-cli
mmx auth login --api-key sk-xxxxx  # 在 https://platform.minimaxi.com 獲取 key

PRESENTATION_TTS=minimax npm run synthesize-audio
PRESENTATION_TTS=minimax npm run synthesize-audio -- --force
PRESENTATION_TTS=minimax npm run synthesize-audio -- --voice=<voice-id>
```

`tts_check` 會檢查 mmx 是否安裝與登錄：

- mmx 未安裝 → 報 `mmx CLI not found in PATH`，並打印安裝說明
- mmx 未登錄 → 報 `mmx is not authenticated`，並提示登錄命令

#### 2.C 用內置 openai 合成

```bash
export OPENAI_API_KEY=sk-...                   # 在 platform.openai.com 拿
PRESENTATION_TTS=openai npm run synthesize-audio
# 換音色 + HD 模型
OPENAI_TTS_MODEL=tts-1-hd PRESENTATION_TTS=openai \
  npm run synthesize-audio -- --voice=nova
```

可選 env：

| 變量 | 默認 | 作用 |
|---|---|---|
| `OPENAI_API_KEY` | —— **必須** | API key |
| `OPENAI_BASE_URL` | `https://api.openai.com/v1` | 切代理 / Azure-OpenAI |
| `OPENAI_TTS_MODEL` | `tts-1` | `tts-1` 快 / `tts-1-hd` 高質量約 2× 價 |
| `--voice=` / `PRESENTATION_TTS_VOICE` | `alloy` | 可選 alloy / echo / fable / onyx / nova / shimmer |

`tts_check` 會檢查 curl / jq / `OPENAI_API_KEY` 三件套，缺哪個報哪個。

#### 2.D 換 provider / 加自定義 provider

內置之外的常見後端在 `scripts/tts-providers/README.md` 裏有 5 段
**可粘貼**代碼片段（ElevenLabs / edge-tts / macOS `say` / Azure / Google
Cloud）。

挑一個 → 複製 README 裏的代碼塊 → 保存爲
`scripts/tts-providers/<name>.sh` → 設好環境變量 → 切換 provider 跑：

```bash
PRESENTATION_TTS=elevenlabs npm run synthesize-audio
# 或
npm run synthesize-audio -- --provider=edge-tts
```

如果用戶的 TTS 完全自研，**按三函數契約**寫一個 `<name>.sh` 即可：

| 函數 | 必需 | 作用 |
|---|---|---|
| `tts_synthesize <text> <out_path> [<voice>]` | ✓ | 把一段文字寫成 mp3 到指定路徑 |
| `tts_check` | 可選 | 啓動時校驗環境（CLI / key / auth），未就緒 return 非零 |
| `tts_install_help` | 可選 | `tts_check` 失敗時打印怎麼修 |

抄 `openai.sh`（HTTP-based）或 `minimax.sh`（CLI-based）起手最快。
詳細規範在 `scripts/tts-providers/README.md`。

#### 2.E 退化路徑

如果兩個內置 provider 都沒就緒（沒裝 mmx 也沒有 OpenAI key）告訴用戶：

```
如果默認 edge-tts 沒就緒，可以退化到手動錄製：

```
我可以：

  1. 幫你裝 edge-tts（默認 provider，免費無 key）
     pip install edge-tts
     npm run synthesize-audio

  2. 用內置 openai provider（如果你已有 OpenAI key）
     export OPENAI_API_KEY=sk-...
     PRESENTATION_TTS=openai npm run synthesize-audio

  3. 幫你裝 MiniMax CLI（中文音色更穩）
     npm install -g mmx-cli && mmx auth login --api-key sk-xxxxx
     API key 在 https://platform.minimaxi.com 獲取
     PRESENTATION_TTS=minimax npm run synthesize-audio

  4. 暫時跳過
     稿子和 narrations 都在，你自己用任意 TTS 錄製即可——文件
     按 audio-segments.json 的 audio 字段命名就行。
```

不要假裝合成成功。

---

## 校驗時長

合成完後跑：

```bash
for f in public/audio/*/*.mp3; do
  d=$(ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 "$f")
  echo "$f  ${d}s"
done
```

把每條的實際秒數匯總告訴用戶。**重點關注 ≥ 15s 的條目**——口播太長意味
着該 step 的 narration 寫得過密，或者 step 沒拆夠。讓用戶決定**改稿子
重合**還是**回章節代碼拆 step**。

---

## 運行時如何使用合成的音頻

合成完成後，**不需要任何額外配置**——腳手架的 `App.tsx` 已經接好：

| 模式 | 觸發方式 | 行爲 |
|---|---|---|
| **Manual**（默認） | 直接打開頁面 | 不播音頻，點擊 / 方向鍵推進 |
| **Audio**（半自動） | URL `?audio=1` 或按 `M` 鍵 | 進入 step 自動播音頻，但你手動推進（點鼠標） |
| **Auto**（全自動） | URL `?auto=1` 或按兩次 `M` 鍵 | 進入 step 播音頻 → 播完自動 next() → 進下個 step → ... |

Auto 模式首次需要按一次 `Space` 啓動（繞過瀏覽器自動播放限制），之後
全自動跑。**錄屏時打開屏幕錄製 → 按 Space → 整片自動跑完 → stop**。

> **Auto 模式的推進規則就一句話**：每段音頻播完 + 200ms 緩衝 → 自動 next。
> **沒有"等動畫跑完"的兜底**——如果你寫的視覺動畫比口播長，會被當場切。
> 解決辦法：寫更長口播 / 拆 step / 調動畫速度（詳見
> [`CHAPTER-CRAFT.md`](CHAPTER-CRAFT.md) 「代碼層最小約束」）。
>
> 音頻文件缺失（還沒合成 / 404）或 narration 是空串 → 退化到字數估時
> （`max(1500ms, 字數 × 250ms)`），保證預覽也能整片跑通。

---

## 故障排查

通用：

| 現象 | 原因 / 修法 |
|---|---|
| `chapter id "X" registered but no matching folder found` | 章節文件夾應命名爲 `NN-<id>`；id 必須等於 chapters.ts 裏註冊的 |
| `narrations.ts in X must export an array named "narrations"` | 該章節的 narrations.ts 沒 export 名爲 narrations 的數組 |
| `TTS provider 'X' not found` | `scripts/tts-providers/X.sh` 不存在；列出來看哪些可用，或抄 README 加一個 |
| `provider 'X' does not define tts_synthesize` | 你的 `<X>.sh` 沒定義必需的函數。看 README 的契約部分 |
| 中間斷了幾條沒合成 | `npm run synthesize-audio` 重跑 —— 已存在文件會跳過 |
| 瀏覽器沒播音頻 | Auto / Audio 模式下首次需要用戶手勢——確認你按了 SPACE 啓動 Auto，或者點過頁面 |
| 音頻 404 但 Auto 模式還能跑 | 找不到 mp3 時 useAudioPlayer 退化到字數估時（4 字/秒），保證預覽不中斷 |

minimax 專屬：

| 現象 | 原因 / 修法 |
|---|---|
| `mmx: command not found` | `npm install -g mmx-cli`；npm 全局 bin 不在 PATH 時 `npm config get prefix` 看一下 |
| `mmx is not authenticated` | `mmx auth login --api-key sk-xxxxx` 重新登錄 |
| 中文音色不自然 | mmx 默認音色未必最佳；查 `mmx speech --help` 看 `--voice` 可選項，傳 `--voice=<id>` |
| 整段合成被截斷 | 單段過長（mmx 默認上限約 5000 字符）。在 narrations.ts 裏把這條拆成兩條（也意味着該 step 應該拆成兩個 step） |

openai 專屬：

| 現象 | 原因 / 修法 |
|---|---|
| `OPENAI_API_KEY is not set` | `export OPENAI_API_KEY=sk-...`，或者把它加到 shell rc / `.env` |
| 全部段 FAILED + key 是對的 | 多半 model / voice 名字錯。`--voice=alloy` 試默認值；`OPENAI_TTS_MODEL=tts-1` 試默認模型；用 `bash -x scripts/synthesize-audio.sh` 看請求體 |
| 走代理 / 走 Azure-OpenAI | `export OPENAI_BASE_URL=https://your-proxy/v1` |
| HD 太慢 | 改成 `OPENAI_TTS_MODEL=tts-1`（默認）；HD 大約慢 2 倍 |
| 中文音色不像真人 | OpenAI 6 種音色都是英語偏向；中文角色用 `minimax` 更合適 |

換其它（自定義）provider 之後：

| 現象 | 原因 / 修法 |
|---|---|
| `<X>_API_KEY not set` | 你的 provider 需要 API key，但 env 裏沒設。`export <X>_API_KEY=...` 或寫到 `.env` 再 `set -a; source .env; set +a` |
| 合成的 mp3 瀏覽器播不了 | 檢查 provider 是否真的出了 mp3（不是 wav / opus / aac）。`file public/audio/*/*.mp3` 看 magic header |
| 一切看起來都對，但全部 FAILED | `bash -x scripts/synthesize-audio.sh` 看每段實際調了什麼 |

---

## 相關鏈接

- Provider 契約 + 現成片段：[`scripts/tts-providers/README.md`](../templates/scripts/tts-providers/README.md)
- mmx-cli 倉庫：<https://github.com/MiniMax-AI/cli>
- mmx 官方文檔：<https://platform.minimaxi.com/docs/token-plan/minimax-cli>
- mmx 參數 / 音色查詢：`mmx speech --help`
