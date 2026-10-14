<script setup lang="ts">
import { usePageFrontmatter } from '@vuepress/client'
import { computed } from 'vue'

const frontmatter = usePageFrontmatter()
const author = computed(() => frontmatter.value.author)
</script>

<template>
  <span v-if="author" class="author-info">
    <span class="author-label">作者：</span>
    <span class="author-name">{{ author }}</span>
  </span>
</template>

<style scoped>
.author-info {
  display: inline-block;
  /* margin-left: 1em;
  font-size: 0.9em; */
  color: var(--vp-c-text-2);
  font-weight: bolder;
}
</style>