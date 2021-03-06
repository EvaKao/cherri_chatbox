import axios from 'axios'
// import { Message } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'
// import i18n from '../lang'
// import router from '../router'

// var HttpStateCode = {
//   MultipleChoices: 300,
//   Redirect: 302,
//   BadRequest: 400,
//   Unauthorized: 401,
//   Forbidden: 403,
//   NotFound: 404,
//   NotAcceptable: 406,
//   RequestTimeout: 408,
//   RequestUriTooLong: 414,
//   UnsupportedMediaType: 415,
//   RequestedRangeNotSatisfiable: 416,
//   InternalServerError: 500,
//   ServiceUnavailable: 503
// }

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    // if (store.getters.token) {
    //   config.headers['Accept-Language'] = (i18n.locale === 'zh') ? 'zh-cn' : i18n.locale
    //   config.headers['Content-Type'] = 'application/json'
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['Authorization'] = `Bearer ${getToken()}`
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if (res.status == 0) {
    //   Message({
    //     message: res.message || '连线异常，请稍后再试',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    //   return Promise.reject(new Error(res.message || '连线异常，请稍后再试'))
    // }

    // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    //   Message({
    //     message: res.message || 'Error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })

    //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // to re-login
    //     MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
    //       confirmButtonText: 'Re-Login',
    //       cancelButtonText: 'Cancel',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('login/resetToken').then(() => {
    //         location.reload()
    //       })
    //     })
    //   }
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    return res
    // }
  },
  error => {
    // var message = i18n.t('message.connectError')
    // if (error && error.response) {
    //   switch (error.response.status) {
    //     case HttpStateCode.Unauthorized:
    //       message = i18n.t('message.loginTimeout')
    //       store.dispatch('login/logout').then(() => {
    //         router.push('/login')
    //       })
    //       break
    //   }
    // }
    console.log(error) // for debug
    // Message({
    //   message: message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
