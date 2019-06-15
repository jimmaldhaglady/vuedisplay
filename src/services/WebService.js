import Api from '@/services/Api'
export default {
  postCall (link, params) {
    // return HTTP.post(link, params)
    return Api().post(link, params).catch((error) => {
    })
  },
  getCall (link, params) {
    return Api().get(link, params).catch((error) => {
    })
  }
}