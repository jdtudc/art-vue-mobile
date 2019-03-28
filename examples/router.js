import Vue from 'vue'
import Router from 'vue-router'
import loadingBar from '../src/components/loading-bar/loading-bar'
import categories from './data/categories.json'

Vue.use(Router)

const redirectUrl = (to, from, next) => {
  router.replace({ path: '/' })
  next()
}

const loadVue = (name) => {
  return resolve => require([`./views/${name}.vue`], resolve)
}

function regeisterRoute (categories) {
  const routes = []
  for (let m = 0; m < categories.length; m++) {
    for (let n = 0; n < categories[m].list.length; n++) {
      const item = categories[m].list[n]
      if (item.online) {
        routes.push({ path: item.path, component: loadVue(item.name_en) })
      }
    }
  }
  return [
    { path: '/', component: loadVue('Index') },
    { path: '/develop', component: loadVue('Develop') },
    {
      path: '/component',
      component: loadVue('Component'),
      children: routes
    },
    { path: '*', beforeEnter: redirectUrl }
  ]
}

let routes = regeisterRoute(categories)

const router = new Router({
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach(function (to, from, next) {
  loadingBar.start()
  next()
})

router.afterEach(function (to) {
  loadingBar.finish()
})

export default router
