<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'project'
  }
})

// @ts-ignore
const { data: _articles } = await useAsyncData('project', async () => await queryContent(withTrailingSlash(props.path)).find())

const articles = computed(() => _articles.value || [])
</script>

<template>
  <div v-if="articles?.length" class="articles-list">
    <div class="layout">
      <ProjectListItem v-for="(article, index) in articles" :key="index" :article="article" />
    </div>
  </div>
  <div v-else class="tour">
    <p>Seems like there are no articles yet.</p>
    <p>
      You can start by
      <!-- eslint-disable-next-line -->
      <ProseA href="https://alpine.nuxt.space/articles/write-articles">creating</ProseA> one in the <ProseCodeInline>articles</ProseCodeInline> folder.
    </p>
  </div>
</template>

<style scoped lang="ts">
css({
  '.articles-list': {
    '@sm': {
      px: '{space.12}',
    },
    '@md': {
      px: 0,
    },
    '.featured': {
      my: '{space.12}',
      '@md': {
        my: '{space.8}',
      }
    },
    '.layout': {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      gap: '{space.12}',
    }
  },
  '.tour': {
    minHeight: '30vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
</style>