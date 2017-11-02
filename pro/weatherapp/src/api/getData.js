import axios from 'axios'
// 创建axios实例
let $http = axios.create({
  baseURL: 'http://jisutqybmf.market.alicloudapi.com/weather/query',
  headers: {
    Authorization: 'APPCODE 3480d911513a45428b061cb553071d34'
  }
})
// 定义获取天气的数据
export function getWeatherDate (params) {
  let url = '/'
  let paramsData = Object.assign({}, {
    city: '北京'
  }, params)
  // 返回调用查询的结果
  return $http.get(url, {
    params: paramsData
  })
}
