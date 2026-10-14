export const sidebar = {"/":{"/forge/":{"items":[{"text":"概述与入门","prefix":"begin","icon":"/icon/worker.svg","items":"auto"},{"text":"维度与阶段","prefix":"dimension","icon":"/icon/nither.svg","items":"auto"},{"text":"锻造师宝典","icon":"/icon/hammer.svg","items":[{"text":"锻造工具箱","collapsed":true,"prefix":"box","items":"auto"},{"text":"专属内容","collapsed":true,"prefix":"tetra","items":"auto"},{"text":"材料图鉴","collapsed":true,"items":[{"text":"材料","icon":"/icon/honor.svg","collapsed":true,"prefix":"material","items":"auto"},{"text":"卷轴","collapsed":true,"icon":"/icon/scroll.svg","prefix":"scrolls","items":"auto"},{"text":"锻造模板","icon":"/icon/upload.svg","link":"锻造模板.md"},{"text":"剑刃食物","link":"剑刃食物.md"}]}]},{"text":"旅行指引","prefix":"guide","items":"auto"},{"text":"BOSS","link":"BOSS.md"}],"prefix":"/forge/"}},"__auto__":{"/forge/begin/":[{"text":"简述","link":"/forge/begin/1.%E7%AE%80%E8%BF%B0.html"},{"text":"入门指南","link":"/forge/begin/2.%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97.html"}],"/forge/dimension/":[{"text":"前言","link":"/forge/dimension/1.%E5%89%8D%E8%A8%80.html"},{"text":"一阶段","link":"/forge/dimension/2.%E4%B8%80%E9%98%B6%E6%AE%B5.html"},{"text":"二阶段","link":"/forge/dimension/3.%E4%BA%8C%E9%98%B6%E6%AE%B5.html"},{"text":"三阶段","link":"/forge/dimension/4.%E4%B8%89%E9%98%B6%E6%AE%B5%E4%B8%8E%E6%97%A0%E5%B0%BD%E6%8C%91%E6%88%98.html"}],"/forge/box/":[{"text":"魔改全息球","link":"/forge/box/1.%E9%AD%94%E6%94%B9%E5%85%A8%E6%81%AF%E7%90%83.html","icon":"/icon/fram.svg"},{"text":"锻造锤改造","link":"/forge/box/2.%E9%94%BB%E9%80%A0%E9%94%A4%E6%94%B9%E9%80%A0.html","icon":"/icon/tetra.svg"},{"text":"砂轮和卷轴箱","link":"/forge/box/3.%E7%A0%82%E8%BD%AE%E5%92%8C%E5%8D%B7%E8%BD%B4%E7%AE%B1.html"}],"/forge/tetra/":[{"text":"饰品","link":"/forge/tetra/%E9%A5%B0%E5%93%81.html"}],"/forge/material/":[{"text":"一阶段","link":"/forge/jv0akh0u/"},{"text":"二阶段","link":"/forge/5en5q6xt/"},{"text":"三阶段","link":"/forge/o3hdkx48/"}],"/forge/scrolls/":[{"text":"阶段 1：初识匠心","link":"/forge/ccj3gvfz/"},{"text":"阶段 2：略有增长","link":"/forge/q1gw5v58/"},{"text":"阶段 3：登峰造极","link":"/forge/xx2hltxe/"}],"/forge/guide/":[{"text":"create","items":[{"text":"机械动力小屋介绍","link":"/forge/guide/create/%E6%9C%BA%E6%A2%B0%E5%8A%A8%E5%8A%9B%E5%B0%8F%E5%B1%8B.html"}],"collapsed":false}]},"__home__":{}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
