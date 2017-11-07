

const pandect = r => require.ensure([], () => r(require('../views/background/content/pandect.vue')), 'Index')


export default [
  {
    path: '',
    // name: 'pandect',
    component: pandect,
    meta: ['后台管理内容 1'],
  },
  // {
  //   path: 'fixedheader',
  //   name: 'fixedheadertable',
  //   component: Fixedheadertable,
  //   meta: ['固定标头表格']
  // }
]
