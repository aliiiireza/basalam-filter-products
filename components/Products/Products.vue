<template>
  <div class="products row">
    <product-card
      v-for="(product, index) in products"
      :key="product.id + '-' + index"
      :product="product"
    />
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <template v-if="loading"> در حال بارگزاری... </template>
          <template v-else-if="total === 0"> هیچ موردی پیدا نشد. </template>
        </div>
      </div>
    </div>

    <infinite-loading v-if="products.length !== 0" @infinite="infiniteHandle" />
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
  fetch() {
    this.loading = true
    this.getProducts()
      .then((response) => {
        this.products = response.data.products
        this.total = response.meta.count
      })
      .finally(() => {
        this.loading = false
      })
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
      const url = '/api/v2.0/product/search'
      return this.request(url, 'post', {
        q: this.payload.keyword !== undefined ? this.payload.keyword : '',
        from: this.from,
        size: this.size,
        ...this.payload,
      })
    },
    infiniteHandle($state) {
      this.from += this.size
      this.loading = true
      this.getProducts()
        .then((response) => {
          this.products = [...this.products, ...response.data.products]
          if (response.data.products.length === 0) $state.complete()
          else $state.loaded()
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'Products';
</style>
