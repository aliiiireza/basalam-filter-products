export default {
  '/api/': {
    target: 'http://api.matlabekhoob.com/v1_0/',
    pathRewrite: { '^/api/': '' },
    changeOrigin: true,
  },
}
