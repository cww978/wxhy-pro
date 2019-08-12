import request from '@/utils/request'
/**
 * 查询发言记录
 * @param {Object} params
 */
export function getMeetingMsg(params) {
  return request({
    url: '/weixin/meetingMsg/list',
    method: 'get',
    params
  })
}

/**
 * 发言
 * @param {Object} params
 */
export function saveMeetingMsg(params) {
  return request({
    url: '/weixin/meetingMsg/save',
    method: 'post',
    params
  })
}
