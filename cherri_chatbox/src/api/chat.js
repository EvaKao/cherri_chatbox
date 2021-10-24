import request from '@/utils/request'


export function getChat(chat_id) {
    return request({
      url: `http://localhost:3000/chat/${chat_id}`,
      method: 'get',
    })
  }
  