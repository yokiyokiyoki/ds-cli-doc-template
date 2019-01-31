/*
  配置文件的入口文件
*/
module.exports = {
  title: "VuePress Demo", //网站标题
  description: "Just playing around", //网站描述
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
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
    ]
  }
};
