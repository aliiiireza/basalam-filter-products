<template>
  <div class="products row">
    <div v-for="product in products" class="col-3 mb-3" :key="product.id">
      <div class="products-item">
        <div class="products-item__image"></div>
        {{ product.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      products: [
        {id: 1, title: '1'},
        {id: 2, title: '1'},
        {id: 3, title: '1'},
        {id: 4, title: '1'},
        {id: 5, title: '1'},
        {id: 6, title: '1'},
        {id: 7, title: '1'},
        {id: 8, title: '1'},
        {id: 9, title: '1'},
        {id: 10, title: '1'},
        {id: 11, title: '1'},
        {id: 12, title: '1'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'Products';
</style>