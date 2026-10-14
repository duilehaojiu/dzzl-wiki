/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/', icon: 'icon-park-outline:home' },
  { text: '原版文档', link: '/forge/', icon: 'icon-park-outline:doc-detail' },
  { text: '无尽征途', link: '/roguelike/', icon: 'icon-park-outline:doc-detail' },
  { text: '锻造心得', link: '/blog/experience/', icon: 'icon-park-outline:notebook-and-pen' },
  { text: 'DLC', link: '/forge/DLC.md',icon: 'carbon:extensions'},
  { text: '常见问题', link: '/blog/question/', icon: 'icon-park-outline:file-question' },
  // {
  //   text: '常见问题',
  //   items: [{ text: '示例', link: '/demo/README.md' }]
  // },
])
