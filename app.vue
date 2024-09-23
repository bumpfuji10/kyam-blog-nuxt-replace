<template>
  <div class="bg-orange-400 min-h-screen">
    <Header />
    <NuxtPage />
  </div>
</template>

<script>
export default {
  mounted() {
    const router = this.$router;
    router.push('/home');
  }
}
</script>
