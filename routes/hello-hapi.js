export default {
  method: "GET",
  path: '/',
  handler() {
    return 'Hello Word';
  },
  options: {
    tags: ['api', 'tests'],
    description: '测试hello-hapi',
  }
}