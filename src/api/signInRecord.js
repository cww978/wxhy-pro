import request from '@/utils/request'
/**
 * 获取签到信息
 * @param {Object} params
 */
export function getSignInDetail(params) {
  return request({
    url: '/weixin/signInRecord/detail',
    method: 'get',
    params
  })
}

/**
 * 签到
 * @param {Object} params
 */
export function signIn(params) {
  return request({
    url: '/weixin/signInRecord/save',
    method: 'get',
    params
  })
}
