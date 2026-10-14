export const collections = {"/":[{"type":"post","dir":"blog/experience","title":"锻造心得","profile":{"avatar":"/cover/favicon.png","name":"锻造心得","description":"锻造之旅官方百科","organization":"锻造之旅制作组","circle":true},"link":"/blog/experience","postList":true,"tags":true,"archives":true,"categories":false,"postCover":{"layout":"right","ratio":"16/9","width":300,"compact":true},"linkPrefix":"/blog/experience","tagsLink":"/blog/experiencetags/","archivesLink":"/blog/experiencearchives/"},{"type":"doc","dir":"forge","linkPrefix":"/forge","title":"原版文档","sidebarCollapsed":false}]}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateCollections) {
    __VUE_HMR_RUNTIME__.updateCollections(collections)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ collections }) => {
    __VUE_HMR_RUNTIME__.updateCollections(collections)
  })
}
