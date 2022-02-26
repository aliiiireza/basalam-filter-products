<template>
  <div class="error-page text-center mt-5">
    <div v-if="error.statusCode === 404">
      <div class="error-image-wrapper">
        <img class="error-page__image" src="@/assets/images/page404.png" />
      </div>
      <h6>صفحه مورد نظر شما پیدا نشد.</h6>
      <nuxt-link to="/" class="error-page__button" exact>
        برو به صفحه اصلی
      </nuxt-link>
    </div>
    <div v-if="error.statusCode === 500">
      <div class="error-image-wrapper">
        <img class="error-page__image" src="@/assets/images/page500.png" />
      </div>
      <h6>ببخشید یکی پاش رفت رو سیم</h6>
      <p class="error-page__text">لطفا چند دقیقه دیگر دوباره امتحان کنید</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: ['error'],
}
</script>
<style lang="scss">
.error-image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 25%;
}
.error-page__image {
  position: absolute;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
}
@include media-breakpoint-down('sm') {
  .error-image-wrapper {
    padding-top: 56.25%;
  }
}
</style>
