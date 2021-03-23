import Vue from 'vue'
import VueRouter from 'vue-router'
import routerList from '@/layout'

// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 路由路径
import routes from './router'
console.log(routerList)

// fix vue-router NavigationDuplicated
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return VueRouterPush.call(this, location).catch(err => err)
}
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return VueRouterReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router
