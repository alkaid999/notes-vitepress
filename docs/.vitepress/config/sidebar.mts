// configs/sidebar.ts
import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {

    // linux 侧边栏
    '/nodes/linux/': [
        {
            collapsed: false, // 折叠侧边栏
            text: '入门',
            items: [
                { text: 'Linux 简介', link: '/nodes/linux/01_introduction/01.md' },
                { text: '开源软件', link: '/nodes/linux/01_introduction/02.md' },
                { text: '环境搭建', link: '/nodes/linux/01_introduction/03.md' },
            ],
        },
    ],

    // ...其他侧边栏配置
}