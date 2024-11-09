import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "向风",
  description: "欲将心事付瑶琴。知音少，弦断有谁听",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
   // 设置搜索框的样式
   search: {
    provider: "local",
    options: {
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          noResultsText: "无法找到相关结果",
          resetButtonTitle: "清除查询条件",
          footer: {
            selectText: "选择",
            navigateText: "切换",
          },
        },
      },
    },
  },
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '教程', items:[
        { text: '1', link: '/1.html' },
        { text: '2', link: '/2' },
        { text: '3', link: '/3' },
        { text: '4', link: '/4' }
      ]},
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
