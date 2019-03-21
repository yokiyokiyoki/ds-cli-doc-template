## 目录说明
├── docs 
│   ├── .vuepress （用于存放全局的配置、组件、静态资源等，可选）
│   │   ├── components (该目录中的 Vue 组件将会被自动注册为全局组件，可选)
│   │   ├── theme (用于存放本地主题，可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (用于存放样式相关的文件，可选的)
│   │   │   ├── index.styl （将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级）
│   │   │   └── palette.styl（用于重写默认颜色常量，或者设置新的 stylus 颜色常量）
│   │   ├── templates (存储 HTML 模板文件，可选的, 谨慎配置)
│   │   │   ├── dev.html （用于开发环境的 HTML 模板文件）
│   │   │   └── ssr.html （构建时基于 Vue SSR 的 HTML 模板文件）
│   │   ├── config.js (配置文件的入口文件，也可以是 YML 或 toml，可选的)
│   │   └── enhanceApp.js (客户端应用的增强，可选的)
│   │ 
│   ├── README.md (页面路由地址为/)
│   ├── guide
│   │   └── README.md （页面路由地址为/guide/）
│   └── config.md(页面路由地址为/config.html)
│ 
└── package.json

