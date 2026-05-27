# 2×2 營銷 Banner 網格模板

本文件用於"一張圖裏 4 個獨立 banner，統一系列設計"的視覺：

- 在線教育課程系列 banner
- 培訓 / 招生 banner
- 品牌活動多場景 banner
- SNS / 朋友圈廣告四件套

特徵：

- 2×2 等大網格
- 每格是一個獨立 banner（帶主標題 + 視覺 + CTA）
- 4 個 banner 風格統一但內容差異
- 每個 banner 可單獨裁切發布

## 適用範圍

- 教育 / 培訓 banner 系列
- 品牌 SNS 套裝
- 活動多場景廣告
- A/B 測試候選稿

## 何時使用

- 用戶提到"banner 系列 / 課程 banner / 4 張廣告"
- 用戶希望一次出 4 個一致風格的 banner
- 用戶需要 SNS 投放素材

不要使用：

- 一張完整大 banner（用 `poster-and-campaigns/banner-hero.md`）
- 多面板敘事（用 `storyboards-and-sequences/four-panel-comic.md`）
- 頭像網格（用 `avatars-and-profile/character-grid-portrait.md`）

## 缺失信息優先提問順序

1. 主題 / 業務（教育 / 電商 / 品牌活動）
2. 4 個 banner 分別推什麼
3. 每個 banner 的核心人物 / 道具
4. 品牌色 / 品牌字
5. 是否需要 logo / CTA
6. 比例（1:1 / 4:5 / 16:9 各 banner 內）

## 主模板：2×2 課程 / 教育 banner 套裝

📖 描述

整體一張圖，2×2 四個獨立 banner，每個 banner 推一個課程，共享品牌色與 logo 區。

📝 提示詞

```json
{
  "type": "2x2 課程 banner 套裝",
  "goal": "生成一組 4 張統一風格的課程 banner，可單獨裁切投放 SNS / 公衆號頂部",
  "brand": {
    "name": "{argument name=\"brand name\" default=\"星海學堂\"}",
    "logo_position": "{argument name=\"logo position\" default=\"每個 banner 左上角\"}",
    "primary_color": "{argument name=\"primary color\" default=\"#FF6B35\"}",
    "secondary_color": "{argument name=\"secondary color\" default=\"#0F4C81\"}"
  },
  "layout": {
    "format": "2x2 grid",
    "panel_count": 4,
    "gap": "16px 白色分隔",
    "panel_aspect_ratio": "{argument name=\"panel aspect\" default=\"4:5\"}",
    "overall_aspect_ratio": "1:1"
  },
  "panels": [
    {
      "position": "top-left",
      "course": "{argument name=\"course 1\" default=\"少兒編程\"}",
      "headline": "{argument name=\"headline 1\" default=\"6 歲就能學的 Scratch\"}",
      "visual": "{argument name=\"visual 1\" default=\"卡通男孩在屏幕前敲鍵盤\"}",
      "cta": "{argument name=\"cta 1\" default=\"立即試聽\"}"
    },
    {
      "position": "top-right",
      "course": "{argument name=\"course 2\" default=\"少兒英語\"}",
      "headline": "{argument name=\"headline 2\" default=\"和外教自然對話\"}",
      "visual": "{argument name=\"visual 2\" default=\"卡通女孩戴耳機說英文\"}",
      "cta": "{argument name=\"cta 2\" default=\"領取試聽課\"}"
    },
    {
      "position": "bottom-left",
      "course": "{argument name=\"course 3\" default=\"少兒數學\"}",
      "headline": "{argument name=\"headline 3\" default=\"思維訓練 1v1\"}",
      "visual": "{argument name=\"visual 3\" default=\"卡通孩子在白板做題\"}",
      "cta": "{argument name=\"cta 3\" default=\"領取診斷\"}"
    },
    {
      "position": "bottom-right",
      "course": "{argument name=\"course 4\" default=\"少兒美術\"}",
      "headline": "{argument name=\"headline 4\" default=\"每周一幅作品\"}",
      "visual": "{argument name=\"visual 4\" default=\"卡通孩子在畫畫\"}",
      "cta": "{argument name=\"cta 4\" default=\"在線報名\"}"
    }
  ],
  "style": {
    "art_style": "{argument name=\"art style\" default=\"扁平卡通 + 圓潤\"}",
    "typography": "中文圓體 + 英文 sans"
  },
  "constraints": {
    "must_keep": [
      "4 個 banner 共享同一品牌色與 logo 風格",
      "每個 banner 單獨看也成立",
      "標題 ≤ 12 字 / 行",
      "CTA 按鈕位置統一"
    ],
    "avoid": [
      "4 個 banner 風格漂移",
      "標題字號差異過大",
      "CTA 措辭不統一",
      "視覺元素塞太滿"
    ]
  }
}
```

### 參數策略

- 必問：品牌名、4 個推廣內容
- 可默認：品牌色、風格、layout
- 可隨機：每個 visual 具體造型

### 自動補全策略

- 用戶給品牌 + 4 個產品時：自動展開 4 個 headline + visual + CTA
- 默認 2×2 + 16px 白色分隔
- CTA 措辭自動按業務類型選

## 變體 1：電商商品 banner 套裝

📝 提示詞

```json
{
  "type": "電商商品 banner 套裝",
  "panels": [
    {"course": "新品", "headline": "限時首發", "cta": "立即購買"},
    {"course": "熱銷", "headline": "TOP 1 爆款", "cta": "查看"},
    {"course": "回購", "headline": "老顧客好評", "cta": "回購優惠"},
    {"course": "組合", "headline": "買二送一", "cta": "立即下單"}
  ],
  "constraints": {
    "must_feel": "電商感 + 轉化導向"
  }
}
```

## 變體 2：活動多場景 banner 套裝

📝 提示詞

```json
{
  "type": "活動多場景 banner 套裝",
  "brand": {
    "name": "{argument name=\"event\" default=\"618 大促\"}"
  },
  "panels": [
    {"headline": "預熱"},
    {"headline": "開搶"},
    {"headline": "爆款"},
    {"headline": "返場"}
  ],
  "constraints": {
    "must_feel": "活動統一視覺系統"
  }
}
```

## 變體 3：自動補全模式

📝 提示詞

```json
{
  "type": "2x2 banner 自動補全",
  "mode": "auto-fill",
  "rule": "用戶給品牌 + 一句業務描述，自動決定 4 張 banner 主題 + 設計",
  "constraints": {
    "must_feel": "可直接投放"
  }
}
```

## 避免事項

- 不要讓 4 個 banner 風格漂移
- 不要讓標題字號 / 字體不統一
- 不要讓 CTA 位置不一致
- 不要讓 logo 出現在不同位置
- 不要讓單個 banner 元素塞 > 5 個
