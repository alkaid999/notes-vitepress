// configs/sidebar.ts
import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {

    // linux 侧边栏
    '/nodes/linux/': [
        {
            collapsed: false, // 折叠侧边栏
            text: 'Linux 介绍',
            items: [
                { text: '简介', link: '/linux/seaci.md' },
            ],
        },
    ],

    // ...其他侧边栏配置
}