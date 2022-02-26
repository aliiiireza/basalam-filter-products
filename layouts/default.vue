<template>
  <div class="root">
    <div class="container mb-5 pb-5 mt-5 pt-5">
      <TopHeader />
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout',
}
</script>
<style lang="scss" scoped>
.root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fafafa;
}
</style>
