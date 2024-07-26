import request from '@/utils/request'

// 查询点位惯例列表
export function listNode(query) {
  return request({
    url: '/manage/node/list',
    method: 'get',
    params: query
  })
}

// 查询点位惯例详细
export function getNode(id) {
  return request({
    url: '/manage/node/' + id,
    method: 'get'
  })
}

// 新增点位惯例
export function addNode(data) {
  return request({
    url: '/manage/node',
    method: 'post',
    data: data
  })
}

// 修改点位惯例
export function updateNode(data) {
  return request({
    url: '/manage/node',
    method: 'put',
    data: data
  })
}

// 删除点位惯例
export function delNode(id) {
  return request({
    url: '/manage/node/' + id,
    method: 'delete'
  })
}
