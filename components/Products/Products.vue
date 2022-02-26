<template>
  <div class="products row">
    <div v-for="product in products" :key="product.id" class="col-3 mb-3">
      <div class="products-item">
        <img class="products-item__image" :src="product.photo.SMALL" />
        <div class="products-item__content">
          <h3 class="products-item__title">{{ product.name }}</h3>
          <p class="products-item__description">
            {{ product.vendor.owner.city }} > {{ product.vendor.name }}
          </p>

          <div class="products-item__info">
            <div class="products-item__rating">
              <i class="mi mi-like" />
              <span>{{ product.rating.average }}</span>
              ( {{ product.rating.count }} نظر )
            </div>

            <span class="products-item__discount">
              {{ product.groupBuy.discountPercent }} %
            </span>
          </div>

          <div class="products-item__price">
            {{ product.price }}
            <div class="products-item__price__primary">
              {{ product.primaryPrice }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandle" />
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import response from './products.json'
export default {
  name: 'Products',
  components: {
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
      // response.products[0].id
      // response.products[0].price
      // response.products[0].primaryPrice
      // response.products[0].photo.SMALL
      response.products[0].rating.average
      response.products[0].groupBuy.discountPercent
      console.log(response.products[0])
      this.products = response.products
    },
    infiniteHandle() {
      setTimeout(() => {
        // this.products = [
        //   ...this.products,
        //   { id: 1, title: '1' },
        //   { id: 2, title: '1' },
        //   { id: 3, title: '1' },
        //   { id: 4, title: '1' },
        // ]
      }, 2000)
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'Products';
</style>
