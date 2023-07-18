export default [
  {
    method: "GET",
    path: `/`,
    async handler(request, h) {
      return h.response('欢迎访问mini-shop');
    },
    options: {
      description: '接口描述',
    }
  }
]