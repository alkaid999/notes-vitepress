import { defineConfig } from 'vitepress'
// 导入导航栏和侧边栏
import { nav } from './config/nav.mts'
import { sidebar } from './config/sidebar.mts'
// 导入 mermiad
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  title: "首页",
  description: "知识库",
  lang: 'zh-CH',
  head: [['link', { rel: 'icon', href: '/images/headicon.jpg' }]],

  // markdown配置
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true,
  },

  //mermaid配置
  mermaid: {
  },

  // Mermaid 插件配置
  mermaidPlugin: {
    class: "mermaid my-class", // 为父容器设置额外的 CSS 类
  },

  themeConfig: {
    //中文化
    outlineTitle: '页面导航',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // 大纲显示2-3级标题
    outline: [2, 3],

    // 本地搜索
    search: {
      provider: 'local'
    },
    // 链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 导航栏
    nav,
    // 侧边栏
    sidebar,
  }

})
