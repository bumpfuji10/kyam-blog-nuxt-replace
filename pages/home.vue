<template>
  <div v-for="(article, index) in articles" :key="article.id">
    <h1 class="articleTitle">{{ article.title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getArticles } from '../src/api/article';

interface Article {
  id: number,
  title: string,
  content: string,
  createdAt: ""
}

export default defineComponent({
  data() {
    return {
      articles: [] as Article[] // 配列として定義
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    async getArticles() {
      try {
        const response = await getArticles();
        this.articles = response.data.contents; // レスポンスのデータを配列に代入
        console.log(this.articles)
      } catch (error) {
        console.error('記事の取得中にエラーが発生しました:', error);
      }
    }
  }
})
</script>
