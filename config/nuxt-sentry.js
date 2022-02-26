export default {
  dsn:
    process.env.NODE_ENV === 'production'
      ? 'https://a092b616f76343cb8e07a83ebd6525a5@sentry.basalam.com/3'
      : '',
  config: {}, // Additional config
}
