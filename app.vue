<template>
  <div>
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
