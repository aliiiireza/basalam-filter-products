export const actions = {
  async nuxtServerInit({ dispatch }, { request, error, app }) {
    // const token = app.$cookies.get('accessToken')
    //
    // if (token) {
    //   try {
    //     await Promise.all([
    //       dispatch('auth/initAuthentication'),
    //       dispatch('auth/getCurrentUser'),
    //     ])
    //   } catch (e) {
    //     error({ statusCode: 500 })
    //   }
    // }
  },
}
