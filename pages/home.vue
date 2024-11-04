<template>
  <div class="mx-4">
    <div v-for="(article, index) in articles" :key="index">
      <div class="break-words article p-4" style="width: 100%;">
        <nuxt-link :to="`/articles/${article.id}`" class="articleCard flex border-4 border-black rounded-lg p-4 bg-white hover:bg-gray-200 items-center justify-between">
          <h1 class="articleTitle text-lg font-bold break-keep">
            {{ article.title }}
          </h1>
          <div>
            <img class="articleThumbnail w-20" :src="article.image?.url" alt="Article thumbnail">
          </div>
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

<style scoped>
.articleTitle {
  font-size: 20px;
  width: 600px;
}

/* メディアクエリを使用してレスポンシブデザインを実現 */
@media (max-width: 768px) {
  .articleTitle {
    width: 190px;
  }
}

.articleCard {
  display: flex;
  justify-content: space-between; /* タイトルとサムネイルを左右に配置 */
  align-items: center; /* 中央に揃える */
}
</style>
