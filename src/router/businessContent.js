
const parameters = r => require.ensure([], () => r(require('../views/business/content/parameters.vue')), 'Index')



export default [
  {
    path: '',
    name: 'parameters',
    component: parameters,
    meta: ['业务管理内容 1'],
  },


]
