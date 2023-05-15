export default {
  method: "GET",
  path: '/test',
  handler() {
    return 'Test Page.';
  },
  options: {
    tags: ['api', 'tests'],
    description: '测试多个路由绑定',
  }
}