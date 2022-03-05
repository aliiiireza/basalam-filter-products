<template>
  <div class="top-header">
    <div class="container">
      <div class="row">
        <div class="col col-lg-9 col-xs-12 top-header__right">
          <nuxt-link to="/" class="top-header__logo">
            <img src="@/static/basalam-icon.png" />
          </nuxt-link>
          <search-input></search-input>
        </div>
        <div class="col col-lg-3 col-xs-12 top-header__left">
          <div class="top-header__link">
            <i class="ic-shopping-basket">
              <div class="badge">7</div>
            </i>
            سبد خرید
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from './SearchInput/SearchInput'

export default {
  name: 'TopHeader',
  components: {
    SearchInput,
  },
}
</script>

<style lang="scss" scoped>
@import './TopHeader.scss';
</style>
