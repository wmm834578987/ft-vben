
import { LAYOUT } from '@/router/constant'
import { t } from '@/hooks/web/useI18n'
export const userRouter = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  parentId: 0,
  id: 10,
  meta: {
    orderNo: 10,
    icon: 'ant-design:home-outlined',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'demo',
      name: 'demo',
      component: () => import('@/views/dashboard/demo/index.vue'),
      id: 101,
      meta: {
        title: "示例",
        icon: 'ant-design:appstore-outlined',
        orderNo: 101,
        "hideMenu": false,
        "ignoreKeepAlive": false,
        "loaded": false
      },
    },

    {
      path: 'table',
      name: 'table',
      component: () => import('@/views/dashboard/table/index.vue'),
      id: 102,
      meta: {
        title: "表格",
        icon: 'ant-design:appstore-outlined',
        orderNo: 102,
        "hideMenu": false,
        "ignoreKeepAlive": false,
        "loaded": false
      },
    },


    {
      path: 'form',
      name: 'form',
      component: () => import('@/views/dashboard/wmm/index.vue'),
      id: 106,
      meta: {
        title: "表单",
        icon: 'ant-design:appstore-outlined',
        orderNo: 106,
        "hideMenu": false,
        "ignoreKeepAlive": false,
        "loaded": false
      },
    },


  ],
}