import demoRouter from './demo'
export default [
  {
    path: '/',
    redirect: '/demo'
  },
  demoRouter,
  {
    component: '@/pages/exception/404',
  },
]