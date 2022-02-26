// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

export default [
  // https://go.nuxtjs.dev/typescript
  '@nuxtjs/pwa',
  'nuxt-lazysizes',
  [
    '@nuxtjs/google-analytics',
    {
      id: 'G-LSD9QQB0CJ',
      debug: {
        enabled: true,
        sendHitTask: true,
      },
    },
  ],
]
