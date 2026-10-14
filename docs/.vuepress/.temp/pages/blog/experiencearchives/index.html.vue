<template><div></div></template>
<script>
export const _pageData = JSON.parse("{\"path\":\"/blog/experiencearchives/\",\"title\":\"归档\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"归档\",\"draft\":true},\"git\":{},\"filePathRelative\":null,\"headers\":[],\"type\":\"posts-archives\"}")
export default { name: "index.html.vue" }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updatePageData?.(_pageData)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updatePageData?.(m._pageData)
  })
}

</script>