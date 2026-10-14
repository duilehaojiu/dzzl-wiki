import { defineClientConfig } from 'vuepress/client'
import VPCopyButton from 'C:/duilehaojiu/dzzl/node_modules/.pnpm/vuepress-plugin-md-power@1._4e1f4d754814d5b00ce4aa259b682a4f/node_modules/vuepress-plugin-md-power/dist/client/components/VPCopyButton.vue'
import Tabs from 'C:/duilehaojiu/dzzl/node_modules/.pnpm/vuepress-plugin-md-power@1._4e1f4d754814d5b00ce4aa259b682a4f/node_modules/vuepress-plugin-md-power/dist/client/components/Tabs.vue'
import CodeTabs from 'C:/duilehaojiu/dzzl/node_modules/.pnpm/vuepress-plugin-md-power@1._4e1f4d754814d5b00ce4aa259b682a4f/node_modules/vuepress-plugin-md-power/dist/client/components/CodeTabs.vue'
import Plot from 'C:/duilehaojiu/dzzl/node_modules/.pnpm/vuepress-plugin-md-power@1._4e1f4d754814d5b00ce4aa259b682a4f/node_modules/vuepress-plugin-md-power/dist/client/components/Plot.vue'
import FileTreeNode from 'C:/duilehaojiu/dzzl/node_modules/.pnpm/vuepress-plugin-md-power@1._4e1f4d754814d5b00ce4aa259b682a4f/node_modules/vuepress-plugin-md-power/dist/client/components/FileTreeNode.vue'
import Annotation from 'C:/duilehaojiu/dzzl/node_modules/.pnpm/vuepress-plugin-md-power@1._4e1f4d754814d5b00ce4aa259b682a4f/node_modules/vuepress-plugin-md-power/dist/client/components/Annotation.vue'
import VPTimeline from 'C:/duilehaojiu/dzzl/node_modules/.pnpm/vuepress-plugin-md-power@1._4e1f4d754814d5b00ce4aa259b682a4f/node_modules/vuepress-plugin-md-power/dist/client/components/VPTimeline.vue'
import VPTimelineItem from 'C:/duilehaojiu/dzzl/node_modules/.pnpm/vuepress-plugin-md-power@1._4e1f4d754814d5b00ce4aa259b682a4f/node_modules/vuepress-plugin-md-power/dist/client/components/VPTimelineItem.vue'
import VPTable from 'C:/duilehaojiu/dzzl/node_modules/.pnpm/vuepress-plugin-md-power@1._4e1f4d754814d5b00ce4aa259b682a4f/node_modules/vuepress-plugin-md-power/dist/client/components/VPTable.vue'
import { setupMarkHighlight } from 'C:/duilehaojiu/dzzl/node_modules/.pnpm/vuepress-plugin-md-power@1._4e1f4d754814d5b00ce4aa259b682a4f/node_modules/vuepress-plugin-md-power/dist/client/composables/mark.js'

import 'C:/duilehaojiu/dzzl/node_modules/.pnpm/vuepress-plugin-md-power@1._4e1f4d754814d5b00ce4aa259b682a4f/node_modules/vuepress-plugin-md-power/dist/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('VPCopyButton', VPCopyButton)
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
    app.component('Annotation', Annotation)
    app.component('VPTimeline', VPTimeline)
    app.component('VPTimelineItem', VPTimelineItem)
    app.component('VPTable', VPTable)
  },
  setup() {
        setupMarkHighlight("eager")

  }
})
