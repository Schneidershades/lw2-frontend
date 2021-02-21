import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
import store from 'app/src/store/index'

import middlewarePipeline from './kernel/middlewarePipeline'



Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to, from, next) => {
    // let middleware = to.matched.map((matched) => {
    //   // console.log((matched))
    //   return matched.meta.middleware
    // }).filter((middleware) => {
    //   return middleware !== undefined
    // }).flat()

    // // console.log(middleware)

    // if(!middleware.length){
    //     return next()
    // }
    // console.log(to.meta.middleware)
    
    if(!to.meta.middleware){
      return next()
    }

    const middleware = to.meta.middleware

    const context = {
      to,
      from,
      next,
      Router,
      store,
    }

    return middleware[0]({...context, next: middlewarePipeline(context, middleware, 1)})
    next()
  })

  return Router
}


