<template>
  <div class="row mt-4">
    <div class="col col-lg-3 col-xs-12">
      <FiltersProducts v-model="payload.filters" :keyword="payload.keyword" />
    </div>
    <div class="col col-lg-9 col-xs-12">
      <SortProducts v-model="payload.sort" />
      <Products :payload="payload" />
    </div>
  </div>
</template>

<script>
import { clone } from '@/utils/utilities'
import payloadToQueryMapper from '@/mappers/payloadToQuery'
import queryToPayloadMapper, { defaultPayload } from '@/mappers/queryToPayload'
export default {
  name: 'Home',
  data() {
    return {
      payload: clone(defaultPayload),
    }
  },
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
  watch: {
    payload: {
      deep: true,
      handler(payload) {
        this.$router.push({
          path: this.$route.path,
          query: payloadToQueryMapper(payload),
        })
      },
    },
    '$route.query': {
      immediate: true,
      handler(query) {
        this.payload = queryToPayloadMapper(query)
      },
    },
  },
}
</script>
