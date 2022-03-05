<template>
  <div class="col-3 mb-3">
    <div class="product-card">
      <img class="product-card__image" :src="product.photo.SMALL" />
      <div class="product-card__content">
        <h3 class="product-card__title">{{ product.name }}</h3>
        <p class="product-card__description">
          {{ product.vendor.owner.city }}
          <i class="ic-arrow" />
          {{ product.vendor.name }}
        </p>

        <div class="product-card__info">
          <div class="product-card__rating">
            <i class="ic-star" />
            <span>{{ product.rating.average }}</span>
            ( {{ product.rating.count }} نظر )
          </div>

          <span v-if="product.primaryPrice != 0" class="product-card__discount">
            %{{ product.price | percent(product.primaryPrice) }}
          </span>
        </div>

        <div class="product-card__price">
          <i class="ic-toman" />
          {{ (product.price / 10) | price }}
          <div
            v-if="product.primaryPrice != 0"
            class="product-card__price__primary"
          >
            {{ (product.primaryPrice / 10) | price }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  filters: {
    price(val) {
      const reverse = (val) =>
        (val || 0).toString().split('').reverse().join('')
      return reverse(reverse(val).replace(/(\d{3})(?=\d)/g, '$1,'))
    },
    percent(value, base) {
      return Math.floor(100 - (100 / base) * value)
    },
  },
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'ProductCard';
</style>
