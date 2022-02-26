// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)

export default [
  { src: '@/plugins/request.js' },
  { src: '@/plugins/vee-validate.js' },
  { src: '@/plugins/global-mixins.js' },
  { src: '@/plugins/global-components.js', mode: 'client' },
  { src: '@/plugins/vue-lazysizes.client.js' },
  { src: '~/plugins/moment.js' },
]
