# Demo 範例

這個資料夾包含 `web-video-presentation` Skill 的完整範例成品：**行為克隆與分佈偏移**（強化學習主題）。

## 快速啟動

```bash
# 安裝依賴
npm install

# 啟動 dev server（預設 http://localhost:5174）
npm run dev
```

> 需要先安裝 [Node.js](https://nodejs.org)（LTS 版）。

## 操作方式

| 操作 | 效果 |
|---|---|
| 點擊 / 空白鍵 / → | 下一步 |
| ← | 上一步 |
| `M` 鍵循環 | 手動 → 音訊引導 → 自動播放 |
| 移動滑鼠到右上角 | 顯示控制列 |
| 移動滑鼠到左下角 | 顯示進度條 |

## 自動播放（含語音）

```
http://localhost:5174/?auto=1
```

開啟後按 **Space** 啟動，音訊自動播放並自動切換步驟。

## 範例內容

- **主題**：行為克隆（Behavioral Cloning）與分佈偏移
- **章節數**：1 章
- **步驟數**：4 步
- **語音**：已預先合成（edge-tts，臺灣中文女聲）
- **特色**：KaTeX 數學公式渲染、動態警告背景、解說卡片

## 用這個範例學習如何製作自己的影片

請參考 [`../../skills/web-video-presentation/`](../../skills/web-video-presentation/) 資料夾中的 Skill，搭配 AI Agent 引導製作。
