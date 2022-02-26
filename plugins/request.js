import axios from 'axios'

export default function request(app, inject, headers) {
  const $axios = axios
  const CancelToken = $axios.CancelToken
  const source = CancelToken.source()

  const config = {
    headers: headers || {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    timeout: 15000,
    crossdomain: true,
    withCredentials: false,
    cancelToken: source.token,
    baseURL: 'https://basalam.com/api/v1_0/',
  }

  const accessToken = app.$cookies.get('accessToken')

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  const instance = $axios.create(config)

  instance.interceptors.request.use((config) => {
    const accessToken = app.$cookies.get('accessToken')

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  })

  instance.interceptors.response.use(
    function (response) {
      const { error } = response.data

      if (error) {
        switch (error) {
          case 'notFound':
            app.error({ statusCode: 404, message: '' })
            break
          case 'auth':
            app.store.dispatch('auth/reset')
            break
        }
      }
      return response
    },
    function (error) {
      console.log(error)
    }
  )
  const request = instance.request

  inject('request', request)
}
