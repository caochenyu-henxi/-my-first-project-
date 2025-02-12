import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const getComponent = (name, component) => () => import(`@/views/${name}/${component}.vue`)
// 当你通过编程方式进行路由跳转时，可以使用路由的 name 来代替路径进行跳转,使用名称代替路径的好处是
// 如果你以后改变了路由的路径，只需要修改路由的 path，而不需要改动所有的跳转代码
const routes = [
  {
    path: '/login',
    name: 'login',
    component: getComponent('login', 'index')
  },
  {
    path: '/',
    redirect: '/login',
    component: getComponent('login', 'index')
  },
  {
    path: '/home',
    component: getComponent('layout', 'Layout'),
    children: [
      {
        path: '/home',
        component: getComponent('home', 'index'),
        meta: {
          title: 'home'
        }
      },
      {
        path: '/element',
        component: getComponent('icons', 'elementIcom'),
        meta: {
          title: 'element'
        }
      },
      {
        path: '/iconfont',
        component: getComponent('icons', 'iconfont'),
        meta: {
          title: 'iconfont'
        }
      },
      {
        path: '/editor',
        component: getComponent('component', 'editor'),
        meta: {
          title: 'editor'
        }
      },
      {
        path: '/countTo',
        component: getComponent('component', 'countTo'),
        meta: {
          title: 'countTo'
        }
      },
      {
        path: '/customTree',
        component: getComponent('component', 'tree'),
        meta: {
          title: 'customTree'
        }
      },
      {
        path: '/treeTable',
        component: getComponent('component', 'treeTable'),
        meta: {
          title: 'treeTable'
        }
      },
      {
        path: '/treeSelect',
        component: getComponent('component', 'treeSelect'),
        meta: {
          title: 'treeSelect'
        }
      },
      {
        path: '/draglist',
        component: getComponent('draggable', 'draglist'),
        meta: {
          title: 'draglist'
        }
      },
      {
        path: '/dragtable',
        component: getComponent('draggable', 'dragtable'),
        meta: {
          title: 'dragtable'
        }
      },
      {
        path: '/cricle',
        component: getComponent('charts', 'cricle'),
        meta: {
          title: 'cricle'
        }
      },
      {
        path: '/formDesign',
        component: getComponent('formDesign', 'index'),
        meta: {
          title: 'formDesign'
        }
      },
      {
        path: '/permissionMenu',
        component: getComponent('permission', 'permission'),
        meta: {
          title: 'permissionMenu',
          roles: ['admin']
        }
      },
      {
        path: '/permissionBtn',
        component: getComponent('permission', 'permissionBtn'),
        meta: {
          title: 'permissionBtn'
        }
      },
      {
        path: '/404',
        component: getComponent('error', '404'),
        meta: {
          title: '404'
        }
      },
      {
        path: '/403',
        component: getComponent('error', '403'),
        meta: {
          title: '403'
        }
      }
    ]
  }, {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router
