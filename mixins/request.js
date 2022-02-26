export default {
  methods: {
    request(url, method = 'get', data = null, params = null, isFile = false) {
      if (isFile)
        return this.$request({
          url,
          method,
          data,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      return this.$request({
        url,
        method,
        params: {
          ...params,
        },
        data: {
          ...data,
        },
      })
    },
  },
}
