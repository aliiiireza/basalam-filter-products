<template>
  <div class="products row">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    <infinite-loading @infinite="infiniteHandle" />
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import ProductCard from './ProductCard/ProductCard'
import response from './products.json'
export default {
  name: 'Products',
  components: {
    ProductCard,
    InfiniteLoading,
  },
  data() {
    return {
      products: [],
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    getProducts() {
      this.products = response.products
    },
    infiniteHandle($state) {
      setTimeout(() => {
        this.products = [...this.products, ...response.products]
        $state.loaded()
        // after finished -> $state.complete()
      }, 2000)
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'Products';
</style>
