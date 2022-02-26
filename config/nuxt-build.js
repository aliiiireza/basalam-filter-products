// Build Configuration: https://go.nuxtjs.dev/config-build

export default {
  extend(config, { isDev, isClient, loaders: { vue } }) {
    vue.transformAssetUrls.img = ['data-src', 'src']
    vue.transformAssetUrls.source = ['data-srcset', 'srcset']
  },
}
