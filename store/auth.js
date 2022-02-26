// export const state = () => ({
//   accessToken: null,
//   isLoggedIn: false,
//   currentUser: null,
// })
// export const mutations = {
//   setState(state, payload) {
//     state[payload.field] = payload.value
//   },
//   reset(state) {
//     state.accessToken = null
//     state.isLoggedIn = false
//     state.currentUser = null
//   },
// }
// export const actions = {
//   async initAuthentication({ commit, dispatch }) {
//     const accessToken = this.$cookies.get('accessToken')
//
//     if (accessToken) {
//       commit('setState', { field: 'accessToken', value: accessToken })
//       commit('setState', { field: 'isLoggedIn', value: true })
//       await dispatch('getCurrentUser')
//     }
//   },
//   async getCurrentUser({ commit }) {
//     try {
//       const res = await this.app.$request({
//         url: '/user/profile',
//         method: 'get',
//       })
//
//       commit('setState', { field: 'currentUser', value: res.data.result })
//     } catch (error) {
//       console.error(error)
//       throw error
//     }
//   },
//   async removeToken({ commit }) {
//     try {
//       await this.app.$request({
//         url: '/user/logout',
//         method: 'post',
//       })
//
//       const accessToken = this.$cookies.get('accessToken')
//
//       const domain = process.server
//         ? context.req.headers.host
//         : window.location.host
//
//       if (accessToken)
//         this.$cookies.remove('accessToken', {
//           domain: process.env.NODE_ENV === 'production' ? '.' + domain : null,
//         })
//
//       if (accessToken) {
//         commit('setState', { field: 'accessToken', value: null })
//         commit('setState', { field: 'isLoggedIn', value: false })
//         commit('setState', { field: 'currentUser', value: null })
//       }
//     } catch (error) {
//       console.error(error)
//       throw error
//     }
//   },
//   reset({ commit }) {
//     this.$cookies.remove('accessToken')
//     commit('reset')
//   },
// }
