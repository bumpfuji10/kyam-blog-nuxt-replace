<template>
  <div class="prose mx-auto">
    <h1 class="text-3xl font-bold break-words">{{ article.title }}</h1>
    <div v-html="article.content" class="border-black border-4 rounded-xl p-4 break-words bg-white">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getArticle } from '../../src/api/article';
import { highlightCode } from '../../src/highlightCode'

interface Article {
  title: string;
  content: string;
}

export default defineComponent({
  data() {
    return {
      article: {
        title: "",
        content: ""
      } as Article,
      id: "" as string
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getArticle(this.id)
  },
  methods: {
    async getArticle(articleId: string) {
      try {
        const response = await getArticle(articleId)
        const highlightedContent = highlightCode(response.data.content);
        if (highlightedContent) {
          this.article.content = highlightedContent.content;
        }
        this.article.title = response.data.title
      } catch(e) {
        console.error(e)
      }
    }
  },
  props: ["id"]
});
</script>
