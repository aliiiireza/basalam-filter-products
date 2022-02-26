<template>
  <div class="row mt-4">
    <div class="col-3">
      <filter-products/>
    </div>
    <div class="col-9">
      <sort-products />
      <products/>
    </div>
  </div>
</template>

<script>
import SortProducts from "@/components/SortProducts/SortProducts";
import FilterProducts from "@/components/FilterProducts/FilterProducts";
import Products from "@/components/Products/Products";

export default {
  name: 'Home',
  components: {Products, SortProducts, FilterProducts},
  head() {
    return {
      link: [{rel: 'canonical', href: 'https://basalam.com/'}],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: 'باسلام'},
        {property: 'og:url', content: 'https://basalam.com/'},
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'باسلام',
        },
        {hid: 'og:description', property: 'og:description', content: ''},
      ],
    }
  },
}
</script>
