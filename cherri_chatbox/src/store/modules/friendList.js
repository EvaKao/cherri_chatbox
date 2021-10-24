import { getList } from '@/api/friendList'

const state = {
  friends: []
}

const mutations = {
  SET_FRIENDS: (state, friends) => {
    state.friends = friends
  }
}

const actions = {
  getList({ commit }) {
    return new Promise((resolve, reject) => {
      getList().then(response => {

        if (!response) {
          reject('Verification failed, please Login again.')
        }

        commit('SET_FRIENDS', response)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
