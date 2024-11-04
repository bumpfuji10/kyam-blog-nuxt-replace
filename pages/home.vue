<template>
  <div class="mx-4">
    <div v-for="(article, index) in articles" :key="index">
      <div class="break-words article p-4" style="width: 100%;">
        <div class="articleCard flex border-4 border-black rounded-lg p-4 bg-white hover:bg-gray-200 justify-between items-center">
          <nuxt-link :to="`/articles/${article.id}`">
            <h1 class="mx-auto text-lg font-bold break-keep" style="width: 190px;">
            {{ article.title }}
            </h1>
          </nuxt-link>
          <div>
            <img class="articleThumbnail w-20" :src="article.image?.url" alt="Article thumbnail">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getArticles } from '../src/api/article'

interface Article {
  id: string,
  image: {
    url: string
  }
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
        console.log(this.articles[0].image.url)
      } catch (error) {
        console.error('記事の取得中にエラーが発生しました:', error);
      }
    }
  }
})
</script>
