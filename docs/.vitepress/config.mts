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
  head: [['link', { rel: 'icon', href: '/images/headicon.png' }]],

  // markdown配置
  markdown: {
    // theme: 'material-theme-palenight',
    lineNumbers: true,
    // 容器默认标题
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
    // github 风格的报警
    config: (md) => {
      // 创建 markdown-it 插件
      md.use((md) => {
        const defaultRender = md.render
        md.render = function (...args) {

          // 调用原始渲染
          let defaultContent = defaultRender.apply(md, args)
          // 替换内容
          defaultContent = defaultContent
                .replace(/NOTE/g, '提醒')
                .replace(/TIP/g, '建议')
                .replace(/IMPORTANT/g, '重要')
                .replace(/WARNING/g, '警告')
                .replace(/CAUTION/g, '注意')
          // 返回渲染的内容
          return defaultContent
        }
      })
    },
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
