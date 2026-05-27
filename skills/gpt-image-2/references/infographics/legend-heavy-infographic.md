# 高圖例密度信息圖模板

本文件用於生成「圖例多 / 標註多 / 信息密度高」的科普 / 教育 / 解釋型信息圖：

- 醫學因果鏈信息圖
- 工藝流程信息圖
- 歷史 / 文化講解信息圖
- 設備 / 物種解剖圖
- 複雜系統結構圖

特徵：

- 中央有主體（人體 / 設備 / 概念圖）
- 四周分布多區塊編號
- 每個區塊由「編號 + 標題 + 圖標 + 子項目」組成
- 中英雙語 / 多語並行
- 信息量極大但布局嚴謹

## 適用範圍

- 醫學科普圖
- 時尚 / 設計流程圖
- 演化 / 進化 / 歷史時間軸圖
- 設備解剖圖
- 跨學科系統圖

## 何時使用

- 用戶提到「因果鏈 / 演化圖 / 系統圖 / 解剖圖 / 工藝圖 / 信息圖」
- 用戶希望一張圖講完一個體系
- 用戶希望中英雙語

不要使用：

- 用戶要的是「講解型 Slides」（用 `slides-and-visual-docs/dense-explainer-slides.md`）
- 用戶要的是地圖（用 maps 系列）
- 用戶要的是演講頁（用 `policy-style-slide.md`）

## 缺失信息優先提問順序

1. 主題（病症 / 工藝 / 概念）
2. 主標題 + 英文副標題
3. 章節數（建議 8-14 個）
4. 中央主視覺
5. 顏色系（醫療紅藍 / 自然綠 / 科技藍 / 米色書卷）
6. 是否雙語

## 主模板：高密度因果鏈信息圖

📖 描述

中央一個透明 / 半剖面主體，四周環繞 8-14 個編號信息塊，每塊由小圖標 + 標題 + 子項目構成，底部一行收束句。

📝 提示詞

```json
{
  "type": "高密度因果鏈信息圖海報",
  "goal": "生成一張高完成度的科普 / 教育 / 解釋型信息圖，可作爲單頁 PDF 主圖、自媒體長圖首圖、醫院 / 學校宣傳圖",
  "style": {
    "aesthetic": "{argument name=\"aesthetic\" default=\"高度精細的解剖 / 工程圖風格 + 乾淨結構化排版 + 科學示意感\"}",
    "color_palette": "{argument name=\"color palette\" default=\"醫療紅、醫療藍、米色、解剖肉色\"}",
    "language": "{argument name=\"language\" default=\"雙語中文 + 英文\"}"
  },
  "header": {
    "main_title_cn": "{argument name=\"main title cn\" default=\"糖尿病誕生的因果鏈\"}",
    "main_title_en": "{argument name=\"main title en\" default=\"THE CAUSAL CHAIN OF DIABETES\"}",
    "subtitle": "{argument name=\"subtitle\" default=\"從胰島素失靈，到高血糖，到全身損傷\"}"
  },
  "centerpiece": {
    "description": "{argument name=\"centerpiece description\" default=\"透明人體，展示循環系統與內臟器官\"}",
    "highlight": "{argument name=\"highlight color\" default=\"紅色高光路徑\"}"
  },
  "sections": {
    "count": "{argument name=\"section count\" default=\"14\"}",
    "items": [
      "01 葡萄糖進入身體",
      "02 胰腺與胰島素",
      "03 正常胰島素作用",
      "04 胰島素抵抗：2 型通路開始",
      "05 肝臟持續釋放葡萄糖",
      "06 β 細胞衰竭：代償到失敗",
      "07 1 型糖尿病分支",
      "08 高血糖與血液化學",
      "09 高血糖導致組織損傷",
      "10 急性代謝後果",
      "11 微血管併發症",
      "12 大血管併發症",
      "13 器官系統長期代價",
      "14 調控系統失靈"
    ]
  },
  "section_block_style": {
    "components": ["編號", "中文標題", "英文標題", "1-3 個圖標", "短描述 ≤ 2 行"],
    "alignment": "圍繞中央主體放射狀或兩側欄"
  },
  "footer": {
    "core_message": "{argument name=\"core message\" default=\"糖尿病不是一次發病，而是代謝失衡的長期累積\"}",
    "core_message_en": "{argument name=\"core message en\" default=\"Diabetes is not a single event — it is the accumulation of metabolic imbalance.\"}"
  },
  "constraints": {
    "must_keep": [
      "中央主體作爲視覺錨點",
      "章節編號連續",
      "中英文同時出現，但不能字號一致",
      "圖例 / 標註線不交叉"
    ],
    "avoid": [
      "信息塊尺寸不統一",
      "圖標過度裝飾化",
      "中英文換行不一致",
      "整體過亮 / 過暗影響閱讀"
    ]
  }
}
```

### 參數策略

- 必問：主題、主標題、章節數、中心主體
- 可默認：顏色系、英文標題、底部收束句
- 可隨機：章節圖標的具體造型

### 自動補全策略

- 用戶只給主題時：自動決定 8-14 個章節，並自動給出英文標題
- 中央主體根據主題自動選（醫學 → 人體；工藝 → 設備剖面；演化 → 時間軸；歷史 → 主角剪影）
- 顏色系按主題選默認色

## 變體 1：東方手稿風信息圖

📝 提示詞

```json
{
  "type": "東方手稿風信息圖",
  "header": {
    "main_title": "{argument name=\"main title\" default=\"儒釋道·根本區別\"}"
  },
  "style": {
    "aesthetic": "古書手稿 + 水墨線條 + 低飽和數字水彩",
    "color_palette": "鼠尾草綠、淡金、米白",
    "background": "做舊米色羊皮紙 + 邊角磨損"
  },
  "centerpiece": {
    "description": "中央一個垂直蛋形分層結構，從頂到底依次：佛、道、儒"
  },
  "sections": {
    "items": ["釋 / 人與自我", "道 / 人與萬物", "儒 / 人與人"]
  },
  "constraints": {
    "must_feel": "古典、克制、有研究感"
  }
}
```

## 變體 2：演化時間軸信息圖

📝 提示詞

```json
{
  "type": "演化時間軸信息圖",
  "header": {
    "main_title": "{argument name=\"main title\" default=\"人類演化\"}"
  },
  "centerpiece": {
    "description": "蜿蜒石階共 25 個編號臺階，每階展示一個生物形態",
    "highlight": "末端爲帶問號的發光宇宙剪影"
  },
  "sections": {
    "items": [
      "L0 單細胞生命",
      "L1 多細胞生物",
      "L2 動物界",
      "L3 脊索動物",
      "L4 上陸革命",
      "L5 哺乳綱",
      "L6 人科演化",
      "L7 智人紀元"
    ]
  },
  "extras": ["右上'獲得 / 失去功能'圖例", "底部'演化關鍵裏程碑'時間軸"],
  "constraints": {
    "must_feel": "知識感強、視覺震撼"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "高密度信息圖自動補全模板",
  "mode": "auto-fill",
  "rule": "用戶給主題與領域，自動決定章節、中央主體、配色、英文翻譯",
  "constraints": {
    "must_feel": "出版物級"
  }
}
```

## 避免事項

- 章節數 < 6 會顯得稀薄，> 16 會過密
- 不要讓中文標題和英文標題字號一樣大
- 不要讓所有章節都堆在一側，必須圍繞中心
- 不要讓線條交叉造成閱讀混亂
- 不要把信息圖畫成純文字海報（必須有圖標 + 主體）
- 不要讓整體顏色超過 4 種主色
