import head from './config/nuxt-head'
import env from './config/nuxt-env'
import server from './config/nuxt-server'
import plugins from './config/nuxt-plugins'
import components from './config/nuxt-components'
import css from './config/nuxt-css'
import styleResources from './config/nuxt-styleResources'
// import buildModules from './config/nuxt-build-modules'
import modules from './config/nuxt-modules'
import pwa from './config/nuxt-pwa'
import build from './config/nuxt-build'
import sentry from './config/nuxt-sentry'

export default {
  env,
  head,
  server,
  css,
  styleResources,
  plugins,
  components,
  modules,
  pwa,
  build,
  sentry,
  lazySizes: {
    plugins: {
      blurUp: true,
      nativeLoading: true,
      unveilhooks: true,
      parentFit: true,
      rias: true,
      optimumx: true,
      customMedia: true,
      bgset: true,
    },
  },
  proxy: [
    ['/api', { target: 'https://search.basalam.com/ai-engine' }]
  ]
}
