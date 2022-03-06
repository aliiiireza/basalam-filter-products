<template>
  <div class="products row">
    <product-card
      v-for="(product, index) in products"
      :key="product.id + '-' + index"
      :product="product"
    />
    <div v-if="loading || total === 0" class="col-12">
      <div class="card">
        <div class="card-body">
          <template v-if="loading"> در حال بارگزاری... </template>
          <template v-else-if="total === 0"> هیچ موردی پیدا نشد. </template>
        </div>
      </div>
    </div>
    <client-only>
      <infinite-loading @infinite="infiniteHandle" />
    </client-only>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import ProductCard from './ProductCard/ProductCard'

export default {
  name: 'Products',
  components: {
    ProductCard,
    InfiniteLoading,
  },
  props: {
    payload: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      products: [],
      searchTimout: null,
      from: 0,
      size: 12,
      loading: false,
      total: 0,
    }
  },
  async fetch() {
    const { products, total } = await this.getProducts()
    this.total = total
    this.products = products
  },
  watch: {
    payload: {
      deep: true,
      handler() {
        window.clearTimeout(this.searchTimout)
        this.searchTimout = setTimeout(() => {
          this.products = []
          this.from = 0
          this.$fetch()
        }, 300)
      },
    },
  },
  created() {
    this.$fetch()
  },
  methods: {
    getProducts() {
      this.loading = true
      return new Promise((resolve) => {
        const url = '/api/v2.0/product/search'
        let products = []
        let total = 0

        this.request(url, 'post', {
          q: this.payload.keyword !== undefined ? this.payload.keyword : '',
          from: this.from,
          size: this.size,
          ...this.payload,
        })
          .then((response) => {
            products = response.data.products
            total = response.data.meta.count
          })
          .finally(() => {
            this.loading = false
            resolve({ products, total })
          })
      })
    },
    async infiniteHandle($state) {
      this.from += this.size
      const { products } = await this.getProducts()
      this.products = [...this.products, ...products]
      if (products.length === 0) $state.complete()
      else $state.loaded()
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'Products';
</style>
