
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
        "loaded": false,
         affix:false
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
        "loaded": false,
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
    {
      path: 'cropper',
      name: 'cropper',
      component: () => import('@/views/dashboard/cropper/index.vue'),
      id: 108,
      meta: {
        title: "图片裁剪",
        icon: 'ant-design:appstore-outlined',
        orderNo: 108,
        "hideMenu": false,
        "ignoreKeepAlive": false,
        "loaded": false
      },
    },

    {
      path: 'dept',
      name: 'dept',
      component: () => import('@/views/dashboard/dept/index.vue'),
      id: 109,
      meta: {
        title: "部门管理",
        icon: 'ant-design:appstore-outlined',
        orderNo: 109,
        "hideMenu": false,
        "ignoreKeepAlive": false,
        "loaded": false
      },
    },

    {
      path: 'upload',
      name: 'upload',
      component: () => import('@/views/dashboard/upload/index.vue'),
      id: 110,
      meta: {
        title: "上传组件",
        icon: 'ant-design:appstore-outlined',
        orderNo: 110,
        "hideMenu": false,
        "ignoreKeepAlive": false,
        "loaded": false
      },
    },
    {
      
      path: 'drawer',
      name: 'drawer',
      component: () => import('@/views/dashboard/drawer/index.vue'),
      id: 112,
      meta: {
        title: "抽屉组件",
        icon: 'ant-design:appstore-outlined',
        orderNo: 112,
        "hideMenu": false,
        "ignoreKeepAlive": false,
        "loaded": false
      },
    },
    {
      path: 'modal',
      name: 'modal',
      component: () => import('@/views/dashboard/modal/index.vue'),
      id: 113,
      meta: {
        title: "弹窗组件",
        icon: 'ant-design:appstore-outlined',
        orderNo: 113,
        "hideMenu": false,
        "ignoreKeepAlive": false,
        "loaded": false
      },
    },
    {
      path: '/Echarts',
      name: 'Echarts',
      component: "",
      parentId: 0,
      id: 114,
      meta: {
        orderNo: 114,
        icon: 'ant-design:home-outlined',
        title: "Echarts",
      },
      children:[
        {
          path: 'map',
          name: 'map',
          component: () => import('@/views/dashboard/echarts/Map.vue'),
          id: 1141,
          meta: {
            title: "地图",
            icon: 'ant-design:appstore-outlined',
            orderNo: 1141,
            "hideMenu": false,
            "ignoreKeepAlive": false,
            "loaded": false
          },
        },
        {
          path: 'line',
          name: 'line',
          component: () => import('@/views/dashboard/echarts/Line.vue'),
          id: 1141,
          meta: {
            title: "折线图",
            icon: 'ant-design:appstore-outlined',
            orderNo: 1141,
            "hideMenu": false,
            "ignoreKeepAlive": false,
            "loaded": false
          },
        },
        {
          path: 'pie',
          name: 'pie',
          component: () => import('@/views/dashboard/echarts/Pie.vue'),
          id: 1141,
          meta: {
            title: "饼图",
            icon: 'ant-design:appstore-outlined',
            orderNo: 1141,
            "hideMenu": false,
            "ignoreKeepAlive": false,
            "loaded": false
          },
        },

      ]
    },
    {
      path: 'tinymce',
      name: 'tinymce',
      component: () => import('@/views/dashboard/tinymce/index.vue'),
      id: 115,
      meta: {
        title: "富文本编辑器",
        icon: 'ant-design:appstore-outlined',
        orderNo: 115,
        "hideMenu": false,
        "ignoreKeepAlive": false,
        "loaded": false
      },
    }
  ],

}

