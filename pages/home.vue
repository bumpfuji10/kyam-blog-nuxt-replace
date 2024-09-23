<template>
  <div class="mx-4">
    <div v-for="(article, index) in articles" :key="index">
      <div class="py-8 break-words" style="width: 100%;">
        <nuxt-link :to="`/articles/${article.id}`">
          <h1 class="mx-auto text-lg font-bold border-4 border-black rounded-lg py-4 bg-white hover:bg-gray-200">
          {{ article.title }}
          </h1>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getArticles } from '../src/api/article'

interface Article {
  id: string,
  title: string,
  content: string,
  createdAt: ""
}

export default defineComponent({
  data() {
    return {
      articles: [] as Article[]
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    async getArticles() {
      try {
        const response = await getArticles();
        this.articles = response.data.contents;
      } catch (error) {
        console.error('記事の取得中にエラーが発生しました:', error);
      }
    }
  }
})
</script>
