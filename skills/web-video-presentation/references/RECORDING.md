# 錄製與後期合成

網頁做完 + 音訊合成完之後，有兩種錄製方式：

## ⚡ 極速自動錄影（推薦，直接生成 MP4）

本專案內建了基於 Playwright + FFmpeg 的自動化錄影腳本，可以一鍵完成簡報自動化播放、錄製與音軌合成，產出完美的 MP4 影片。

### 前置準備
1. **安裝依賴**（若尚未安裝）：
   ```bash
   npm install
   ```
2. **確保已生成語音**：已執行 `npm run extract-narrations` 與 `npm run synthesize-audio`，確保 `public/audio/` 目錄下已有語音檔。

### 一鍵錄影指令
在專案根目錄執行：
```bash
npm run record
```

**腳本背後執行的動作：**
- 自動偵測並在背景啟動 Vite 開發伺服器（`localhost:5174`）。
- 呼叫您電腦上已安裝的 Chrome 或 Edge 瀏覽器（無頭模式）自動載入 `?auto=1` 頁面。
- 模擬按下空白鍵開始播放，並監聽簡報播放完畢的信號。
- 自動讀取 `audio-segments.json`，將各步驟語音與精確的轉頁靜音間隔（`200ms` / 轉場 `1.5s`）用 FFmpeg 合成單一音軌。
- 將錄製的無聲影片與合成音軌進行高畫質轉檔，輸出為 `recordings/presentation.mp4`，隨後自動關閉開發伺服器。

---

## 推薦流程：Auto 模式一鏡到底

### 前置

- 章節代碼做完，每章都有 `narrations.ts`
- 已經跑過 `npm run extract-narrations` + `npm run synthesize-audio`，
  `public/audio/<id>/<step>.mp3` 全部就位
- `npm run dev` 跑着，瀏覽器能打開頁面

### 錄製步驟

1. **瀏覽器全屏**（F11 / Ctrl+Cmd+F），URL 改成
   `http://localhost:5173/?auto=1`
2. 看到 "Press SPACE to start" 蒙層 = Auto 模式就緒
3. **打開屏幕錄製**（QuickTime / OBS / Cmd+Shift+5），開始錄
4. **按一次 Space** → 蒙層消失 → step 0 出現，1.mp3 自動播 →
   播完自動推進到 step 1 → 2.mp3 → … → 最後一個 step 播完 → 停在終態
5. **停止錄製** → 後期裁掉頭尾（Space 那一下、最後停在終態的尾巴）就是
   成品

整個過程**完全不用點鼠標**。音視頻天然同步，不需要後期對軌。

> **Auto 模式嚴格按音頻結束推進**（+ 200ms 緩衝），沒有"等動畫跑完"
> 的兜底。如果你看到某步動畫被切了一半 → 說明該 step 動畫長於口播，
> 回章節代碼改：寫更長口播 / 拆 step / 調動畫速度。

### 錄屏工具

| 平臺 | 工具 | 設置 |
|---|---|---|
| macOS | Cmd+Shift+5 → 錄製選定窗口 | 選瀏覽器窗口；瀏覽器全屏後輸出就是 1920×1080 |
| macOS | QuickTime → 文件 → 新建屏幕錄製 | 同上 |
| 跨平臺 | OBS Studio | 窗口捕獲，Canvas 1920×1080，60fps |

### 模式速查

| URL / 快捷鍵 | 行爲 |
|---|---|
| 直接打開（默認） | Manual：點擊 / ←→ 推進，不播音頻 |
| `?audio=1` 或按 `M` | Audio：進入 step 自動播音頻，但**手動點鼠標推進** |
| `?audio=1` + 再按 `M` | Auto：進入 step 自動播 + 自動推進（錄製用） |
| Auto 模式下首次按 `Space` | 啓動 Auto 播放（繞過瀏覽器自動播放限制） |

也可以鼠標移到右上角，會出現一個隱藏的模式切換按鈕。

---

## 備用流程：沒合成音頻時手動錄屏

如果你跳過了音頻合成（`Checkpoint Audio` 選了"不合成"），按老方法：

1. 瀏覽器全屏 → 打開 `localhost:5173`（默認 Manual 模式）
2. **刷新一次**清空歷史 step
3. 開始錄屏 → 按口播節奏點擊空白推進 step
4. 後期用任何剪輯軟件配音 + 調時間線

### 後期工具

| 工具 | 適合 |
|---|---|
| **DaVinci Resolve** | 跨平臺免費、能處理多段音頻拼接 |
| **iMovie** | macOS 簡單場景 |
| **CapCut / 剪映** | B 站 / 抖音風加字幕 |

---

> agent 在 Checkpoint Audio 後**主動告訴用戶**上面 Auto 模式錄屏的
> 路徑，讓用戶知道下一步怎麼把網頁變成 mp4。
