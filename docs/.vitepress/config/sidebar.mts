// configs/sidebar.ts
import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {

    // linux 侧边栏
    '/nodes/linux/': [
        {
            collapsed: false, // 折叠侧边栏
            text: 'Linux 简介',
            items: [
                { text: 'Linux 发展历史', link: '/nodes/linux/01_LinuxIntro/01.md' },
                { text: 'Linux 内核', link: '/nodes/linux/01_LinuxIntro/02.md' },
                { text: 'Linux 发行版本', link: '/nodes/linux/01_LinuxIntro/03.md' },
                { text: 'Linux 桌面环境', link: '/nodes/linux/01_LinuxIntro/04.md' },
                { text: '开源软件', link: '/nodes/linux/01_LinuxIntro/05.md' },
                { text: '环境搭建', link: '/nodes/linux/01_LinuxIntro/06.md' },
            ],
        },
        {
            collapsed: true,
            text: '文件与目录管理',
            items: [
                { text: '文件系统基础概念', link: '/nodes/linux/02_DirMan/01.md' },
                { text: '文件和目录', link: '/nodes/linux/02_DirMan/02.md' },
                { text: '终端与命令行', link: '/nodes/linux/02_DirMan/03.md' },
            ],
        },
    ],

    // ...其他侧边栏配置
}