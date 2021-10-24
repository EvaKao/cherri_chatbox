import request from '@/utils/request'


export function getList() {
    return request({
      url: 'http://localhost:3000/friends',
      method: 'get',
    })
  }
  