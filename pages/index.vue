<template>
  <div class="row mt-4">
    <div class="col-3">
      <FilterProducts />
    </div>
    <div class="col-9">
      <SortProducts />
      <Products />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  head() {
    return {
      link: [{ rel: 'canonical', href: 'https://basalam.com/' }],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'باسلام' },
        { property: 'og:url', content: 'https://basalam.com/' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'باسلام',
        },
        { hid: 'og:description', property: 'og:description', content: '' },
      ],
    }
  },
}
</script>
