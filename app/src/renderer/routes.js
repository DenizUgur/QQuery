export default [
  {
    path: '/',
    name: 'main',
    component: require('components/Main')
  },
  {
    path: '*',
    redirect: '/'
  }
]
