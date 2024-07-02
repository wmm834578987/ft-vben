import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { basicRoutes } from './routes'
import {userRouter} from "./routes/userRouter"
import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '@/router/routes/basic'
// 白名单应该包含基本静态路由
const WHITE_NAME_LIST: string[] = []
function getRouteNames(array: any[]) {
  return array.forEach((item) => {
    WHITE_NAME_LIST.push(item.name)
    getRouteNames(item.children || [])
  })
}
getRouteNames(basicRoutes);

let basicRoute = 
  [
    {
      path: "/login",
      name: "Login",
      component: () => import('@/views/base/login/Login.vue'),
      meta: {
        title: "routes.basic.login"
      }
    },
    {
      path: "/",
      name: "index",
      component: () => import('@/views/base/login/Login.vue'),
      meta: {
        title: "routes.basic.login"
      }
    },
    {
      path: "/redirect",
      name: "RedirectTo",
      meta: {
        title: "Redirect",
        hideBreadcrumb: true,
        hideMenu: true
      },
      children: [
        {
          path: "/redirect/:path(.*)/:_redirect_type(.*)/:_origin_params(.*)?",
          name: "Redirect",
          meta: {
            title: "Redirect",
            hideBreadcrumb: true
          }
        }
      ]
    },
    {
      path: "/:path(.*)*",
      name: "PageNotFound",
      meta: {
        title: "ErrorPage",
        hideBreadcrumb: true,
        hideMenu: true
      },
      children: [
        {
          path: "/:path(.*)*",
          name: "PageNotFound",
          meta: {
            title: "ErrorPage",
            hideBreadcrumb: true,
            hideMenu: true
          }
        }
      ]
    },
    userRouter,
    PAGE_NOT_FOUND_ROUTE,
    REDIRECT_ROUTE

]

console.log(basicRoute, 'basicRoute');

// app router
// 创建一个可以被 Vue 应用程序使用的路由实例
export const router = createRouter({

  // 创建一个 hash 历史记录。
  // history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH), // createWebHashHistory
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  // 应该添加到路由的初始路由列表。
  routes: basicRoute as unknown as RouteRecordRaw[],
  // 是否应该禁止尾部斜杠。默认为假
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !WHITE_NAME_LIST.includes(name as string))
      router.hasRoute(name) && router.removeRoute(name)
  })
}

// config router
// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router)
}
