/*
  配置文件的入口文件
*/
module.exports = {
  base: "/", // 网站部署路径，如果你想将你的网站部署到 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/"
  title: "VuePress Demo", // 网站标题
  description: "Just playing around", // 网站描述
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  host: "0.0.0.0", // dev server 的主机名
  port: "8080", // dev server 的端口
  ga: false, // Google Analytics ID
  serviceWorker: false, // 用于离线环境访问（仅在生产环境生效）
  // 多语言支持
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en-US", // 将会被设置为 <html> 的 lang 属性
      title: "VuePress",
      description: "Just playing around"
    }
  },
  markdown: {
    lineNumbers: true, // 代码块显示行号
    anchor: {
      permalink: true, // 是否在标题旁边添加锚点符号
      permalinkBefore: true, // 添加锚点符号在标题前
      permalinkSymbol: "#", // 锚点符号为#号
      permalinkClass: "header-anchor", // 锚点的className
    },
    // 新窗口打开一个外部链接
    externalLinks: {
      target: "_blank",
      rel: "noopener noreferrer"
    },
    toc: {
      includeLevel: [2, 3]
    },
    config: md => {
      // 用于修改markdown-it实例的默认配置，或应用插件
      // eg: md.use(require('markdown-it-xxx'))
    }
  },
  themeConfig: {
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: "指南", link: "/guide/" }, // 内部链接 以docs为根目录
      { text: "组件", link: "/component/" }, // 内部链接 以docs为根目录
      // 下拉列表
      {
        text: "GitHub",
        items: [
          { text: "GitHub地址", link: "https://github.com" }, // 外部链接
          {
            text: "算法仓库",
            link: "https://github.com#"
          }
        ]
      }
    ],
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    sidebar: {
      "/guide/": [
        "" // README.md
      ],
      "/component/": [
        "",
        "button" // component/button.md
      ]
    },
    search: true, // 内置搜索只能搜索h1、h2、h3；全文搜索要通过 themeConfig.algolia 使用 algolia 搜索替换内置搜索
    searchMaxSuggestions: 10 // 搜索框显示的数量
  },
  evergreen: false // 设置成 true，将会禁止 ESNext 到 ES5 的转译以及对 IE 的 polyfills
};
