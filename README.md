# ☕️ Coffee Shop - Vue 3 + Vite 靜態網站

這是一個使用 **Vue 3** + **Vite** 架設的咖啡廳介紹網站，包含多個子頁面如菜單、最新消息、聯絡我們等，並部署於 GitHub Pages。

👉 **線上預覽**：[https://junhao0102.github.io/coffee-shop/](https://junhao0102.github.io/coffee-shop/)

---

## 🚀 使用技術

- [Vue 3](https://vuejs.org/) - 漸進式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 現代前端建構工具
- [Vue Router](https://router.vuejs.org/) - Vue.js 官方路由管理器
- [Tailwind CSS](https://tailwindcss.com/) - 實用優先的 CSS 框架
- 部署：GitHub Pages

---

## 📁 專案結構

```
coffee-shop/
├── public/                 # 靜態資源
│   ├── images/            # 圖片資源
│   │   ├── menu/         # 菜單圖片
│   │   ├── news/         # 新聞圖片
│   │   └── ...
├── src/
│   ├── components/        # Vue 元件
│   │   ├── menu/         # 菜單相關元件
│   │   ├── news/         # 新聞相關元件
│   │   └── ...
│   ├── views/            # 頁面元件
│   ├── router/           # 路由配置
│   ├── assets/           # 資源檔案
│   └── main.js           # 應用程式入口
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## 部署

本專案使用 GitHub Pages 進行部署：

1. 執行打包指令`npm run build`，產出 `dist/` 資料夾
2. 使用 `npm run deploy` 自動部署到 GitHub Pages









