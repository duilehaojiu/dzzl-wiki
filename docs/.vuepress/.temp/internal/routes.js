export const redirects = JSON.parse("{\"/demo/bar.html\":\"/demo/242o0mpl/\",\"/demo/foo.html\":\"/demo/u6ahjeak/\",\"/forge/BOSS.html\":\"/forge/BOSS.md/9447pc44/\",\"/forge/%E5%89%91%E5%88%83%E9%A3%9F%E7%89%A9.html\":\"/forge/cb97ri0o/\",\"/forge/%E8%AF%B4%E6%98%8E.html\":\"/forge/BOSS.md/oyzoojfr/\",\"/forge/%E9%94%BB%E9%80%A0%E6%A8%A1%E6%9D%BF.html\":\"/forge/BOSS.md/gok5lldm/\",\"/blog/preview/custom-component.example.html\":\"/blog/hc4cj1jm/\",\"/blog/preview/markdown.html\":\"/blog/0dws9ykb/\",\"/forge/material/1.%E4%B8%80%E9%98%B6%E6%AE%B5.html\":\"/forge/jv0akh0u/\",\"/forge/material/2.%E4%BA%8C%E9%98%B6%E6%AE%B5.html\":\"/forge/5en5q6xt/\",\"/forge/material/3.%E4%B8%89%E9%98%B6%E6%AE%B5.html\":\"/forge/o3hdkx48/\",\"/forge/scrolls/%E5%8D%B7%E8%BD%B41.html\":\"/forge/ccj3gvfz/\",\"/forge/scrolls/%E5%8D%B7%E8%BD%B42.html\":\"/forge/q1gw5v58/\",\"/forge/scrolls/%E5%8D%B7%E8%BD%B43.html\":\"/forge/xx2hltxe/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/duilehaojiu/dzzl/docs/README.md"), meta: {"title":""} }],
  ["/demo/242o0mpl/", { loader: () => import(/* webpackChunkName: "demo_242o0mpl_index.html" */"C:/duilehaojiu/dzzl/docs/demo/bar.md"), meta: {"title":"bar"} }],
  ["/demo/u6ahjeak/", { loader: () => import(/* webpackChunkName: "demo_u6ahjeak_index.html" */"C:/duilehaojiu/dzzl/docs/demo/foo.md"), meta: {"title":"foo"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"C:/duilehaojiu/dzzl/docs/demo/README.md"), meta: {"title":"Demo"} }],
  ["/forge/BOSS.md/9447pc44/", { loader: () => import(/* webpackChunkName: "forge_BOSS.md_9447pc44_index.html" */"C:/duilehaojiu/dzzl/docs/forge/BOSS.md"), meta: {"title":"BOSS"} }],
  ["/forge/DLC.html", { loader: () => import(/* webpackChunkName: "forge_DLC.html" */"C:/duilehaojiu/dzzl/docs/forge/DLC.md"), meta: {"title":"DLC"} }],
  ["/forge/", { loader: () => import(/* webpackChunkName: "forge_index.html" */"C:/duilehaojiu/dzzl/docs/forge/README.md"), meta: {"title":"锻造之旅"} }],
  ["/forge/cb97ri0o/", { loader: () => import(/* webpackChunkName: "forge_cb97ri0o_index.html" */"C:/duilehaojiu/dzzl/docs/forge/剑刃食物.md"), meta: {"title":"剑刃食物"} }],
  ["/forge/BOSS.md/oyzoojfr/", { loader: () => import(/* webpackChunkName: "forge_BOSS.md_oyzoojfr_index.html" */"C:/duilehaojiu/dzzl/docs/forge/说明.md"), meta: {"title":"说明"} }],
  ["/forge/BOSS.md/gok5lldm/", { loader: () => import(/* webpackChunkName: "forge_BOSS.md_gok5lldm_index.html" */"C:/duilehaojiu/dzzl/docs/forge/锻造模板.md"), meta: {"title":"锻造模板"} }],
  ["/blog/experience/%E5%85%B3%E4%BA%8E%E6%BF%80%E5%85%89%E6%AD%A6%E5%99%A8%E4%B8%8E%E5%B7%A6%E6%89%8B%E5%BC%93%E7%9A%84%E9%85%8D%E5%90%88.html", { loader: () => import(/* webpackChunkName: "blog_experience_关于激光武器与左手弓的配合.html" */"C:/duilehaojiu/dzzl/docs/blog/experience/关于激光武器与左手弓的配合.md"), meta: {"title":"关于激光武器与左手弓的配合"} }],
  ["/blog/experience/%E9%94%BB%E9%80%A0%E5%BF%83%E5%BE%97%E5%8F%91%E5%89%8D%E5%BF%85%E7%9C%8B.html", { loader: () => import(/* webpackChunkName: "blog_experience_锻造心得发前必看.html" */"C:/duilehaojiu/dzzl/docs/blog/experience/锻造心得发前必看.md"), meta: {"title":"编写心得攻略前必看"} }],
  ["/blog/hc4cj1jm/", { loader: () => import(/* webpackChunkName: "blog_hc4cj1jm_index.html" */"C:/duilehaojiu/dzzl/docs/blog/preview/custom-component.example.md"), meta: {"title":"自定义组件"} }],
  ["/blog/0dws9ykb/", { loader: () => import(/* webpackChunkName: "blog_0dws9ykb_index.html" */"C:/duilehaojiu/dzzl/docs/blog/preview/markdown.md"), meta: {"title":"Markdown"} }],
  ["/forge/begin/1.%E7%AE%80%E8%BF%B0.html", { loader: () => import(/* webpackChunkName: "forge_begin_1.简述.html" */"C:/duilehaojiu/dzzl/docs/forge/begin/1.简述.md"), meta: {"title":"简述"} }],
  ["/forge/begin/2.%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97.html", { loader: () => import(/* webpackChunkName: "forge_begin_2.入门指南.html" */"C:/duilehaojiu/dzzl/docs/forge/begin/2.入门指南.md"), meta: {"title":"入门指南"} }],
  ["/forge/box/1.%E9%AD%94%E6%94%B9%E5%85%A8%E6%81%AF%E7%90%83.html", { loader: () => import(/* webpackChunkName: "forge_box_1.魔改全息球.html" */"C:/duilehaojiu/dzzl/docs/forge/box/1.魔改全息球.md"), meta: {"title":"魔改全息球","icon":"/icon/fram.svg"} }],
  ["/forge/box/2.%E9%94%BB%E9%80%A0%E9%94%A4%E6%94%B9%E9%80%A0.html", { loader: () => import(/* webpackChunkName: "forge_box_2.锻造锤改造.html" */"C:/duilehaojiu/dzzl/docs/forge/box/2.锻造锤改造.md"), meta: {"title":"锻造锤改造","icon":"/icon/tetra.svg"} }],
  ["/forge/box/3.%E7%A0%82%E8%BD%AE%E5%92%8C%E5%8D%B7%E8%BD%B4%E7%AE%B1.html", { loader: () => import(/* webpackChunkName: "forge_box_3.砂轮和卷轴箱.html" */"C:/duilehaojiu/dzzl/docs/forge/box/3.砂轮和卷轴箱.md"), meta: {"title":"砂轮和卷轴箱"} }],
  ["/forge/jv0akh0u/", { loader: () => import(/* webpackChunkName: "forge_jv0akh0u_index.html" */"C:/duilehaojiu/dzzl/docs/forge/material/1.一阶段.md"), meta: {"title":"一阶段"} }],
  ["/forge/5en5q6xt/", { loader: () => import(/* webpackChunkName: "forge_5en5q6xt_index.html" */"C:/duilehaojiu/dzzl/docs/forge/material/2.二阶段.md"), meta: {"title":"二阶段"} }],
  ["/forge/o3hdkx48/", { loader: () => import(/* webpackChunkName: "forge_o3hdkx48_index.html" */"C:/duilehaojiu/dzzl/docs/forge/material/3.三阶段.md"), meta: {"title":"三阶段"} }],
  ["/forge/tetra/%E9%A5%B0%E5%93%81.html", { loader: () => import(/* webpackChunkName: "forge_tetra_饰品.html" */"C:/duilehaojiu/dzzl/docs/forge/tetra/饰品.md"), meta: {"title":"饰品"} }],
  ["/forge/ccj3gvfz/", { loader: () => import(/* webpackChunkName: "forge_ccj3gvfz_index.html" */"C:/duilehaojiu/dzzl/docs/forge/scrolls/卷轴1.md"), meta: {"title":"阶段 1：初识匠心"} }],
  ["/forge/q1gw5v58/", { loader: () => import(/* webpackChunkName: "forge_q1gw5v58_index.html" */"C:/duilehaojiu/dzzl/docs/forge/scrolls/卷轴2.md"), meta: {"title":"阶段 2：略有增长"} }],
  ["/forge/xx2hltxe/", { loader: () => import(/* webpackChunkName: "forge_xx2hltxe_index.html" */"C:/duilehaojiu/dzzl/docs/forge/scrolls/卷轴3.md"), meta: {"title":"阶段 3：登峰造极"} }],
  ["/forge/dimension/1.%E5%89%8D%E8%A8%80.html", { loader: () => import(/* webpackChunkName: "forge_dimension_1.前言.html" */"C:/duilehaojiu/dzzl/docs/forge/dimension/1.前言.md"), meta: {"title":"前言"} }],
  ["/forge/dimension/2.%E4%B8%80%E9%98%B6%E6%AE%B5.html", { loader: () => import(/* webpackChunkName: "forge_dimension_2.一阶段.html" */"C:/duilehaojiu/dzzl/docs/forge/dimension/2.一阶段.md"), meta: {"title":"一阶段"} }],
  ["/forge/dimension/3.%E4%BA%8C%E9%98%B6%E6%AE%B5.html", { loader: () => import(/* webpackChunkName: "forge_dimension_3.二阶段.html" */"C:/duilehaojiu/dzzl/docs/forge/dimension/3.二阶段.md"), meta: {"title":"二阶段"} }],
  ["/forge/dimension/4.%E4%B8%89%E9%98%B6%E6%AE%B5%E4%B8%8E%E6%97%A0%E5%B0%BD%E6%8C%91%E6%88%98.html", { loader: () => import(/* webpackChunkName: "forge_dimension_4.三阶段与无尽挑战.html" */"C:/duilehaojiu/dzzl/docs/forge/dimension/4.三阶段与无尽挑战.md"), meta: {"title":"三阶段"} }],
  ["/forge/guide/create/%E6%9C%BA%E6%A2%B0%E5%8A%A8%E5%8A%9B%E5%B0%8F%E5%B1%8B.html", { loader: () => import(/* webpackChunkName: "forge_guide_create_机械动力小屋.html" */"C:/duilehaojiu/dzzl/docs/forge/guide/create/机械动力小屋.md"), meta: {"title":"机械动力小屋介绍"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/duilehaojiu/dzzl/docs/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
  ["/blog/experience/", { loader: () => import(/* webpackChunkName: "blog_experience_index.html" */"C:/duilehaojiu/dzzl/docs/.vuepress/.temp/pages/blog/experience/index.html.vue"), meta: {"title":"锻造心得"} }],
  ["/blog/experiencetags/", { loader: () => import(/* webpackChunkName: "blog_experiencetags_index.html" */"C:/duilehaojiu/dzzl/docs/.vuepress/.temp/pages/blog/experiencetags/index.html.vue"), meta: {"title":"标签"} }],
  ["/blog/experiencearchives/", { loader: () => import(/* webpackChunkName: "blog_experiencearchives_index.html" */"C:/duilehaojiu/dzzl/docs/.vuepress/.temp/pages/blog/experiencearchives/index.html.vue"), meta: {"title":"归档"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateRoutes?.(routes)
  __VUE_HMR_RUNTIME__.updateRedirects?.(redirects)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateRoutes?.(m.routes)
    __VUE_HMR_RUNTIME__.updateRedirects?.(m.redirects)
  })
}
