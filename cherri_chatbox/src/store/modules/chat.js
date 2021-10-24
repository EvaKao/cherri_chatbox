import { getChat } from '@/api/chat'

const state = {
  chat_content: ''
}

const mutations = {
  SET_CHAT_ID: (state, chat_id) => {
    state.chat_id = chat_id
  },
  SET_CHAT_CONTENT: (state, chat_content) => {
    state.chat_content = chat_content
  },
}

const actions = {
    getChat({ commit }, chat_id) {
      return new Promise((resolve, reject) => {
        commit('SET_CHAT_ID', chat_id)
        getChat(chat_id).then(response => {
          const { message } = response
  
          if (!message) {
            reject('Verification failed, please Login again.')
          }
          
          commit('SET_CHAT_CONTENT', message)
          resolve(message)
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
