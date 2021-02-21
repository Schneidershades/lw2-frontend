import auth from './middleware/auth'
import admin from './middleware/admin'
import login from './middleware/login'
import isWeb from './middleware/isWeb'
import isElectron from './middleware/isElectron'
import authCheckout from './middleware/authCheckout'
import websiteAuth from './middleware/websiteAuth'
import desktopAuth from './middleware/desktopAuth'


const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '',
        name:'home',
        component: () => import('pages/Web/Home.vue'),
        meta: {
          middleware:[
            isWeb
          ]
        },
      }
    ]
  },

  // Users
  {
    path: '/user/dashboard',
    component: () => import('layouts/User.vue'),

    children: [
      {
        path: '',
        name: 'userDashboard',
        component: () => import('pages/User/Dashboard.vue'),
        meta: {
          middleware:[
            websiteAuth
          ]
        },
      }
    ]
  },

  {
    path: '/user/profile',
    component: () => import('layouts/User.vue'),
    children: [
      { path: '',
        name: 'userProfile',
        component: () => import('pages/User/Profile.vue'),
        meta: {
          middleware:[
            websiteAuth,
          ]
        },
      }
    ]
  },

  {
    path: '/user/class-details',
    component: () => import('layouts/User.vue'),
    children: [
      { path: '',
        name: 'classDetails',
        component: () => import('pages/User/ClassDetails.vue'),
        meta: {
          middleware:[
            websiteAuth,
          ]
        },
      }
    ]
  },

  {
    path: '/user/quiz',
    component: () => import('layouts/User.vue'),
    children: [
      { path: '',
        name: 'quiz',
        component: () => import('pages/User/Quiz.vue'),
        meta: {
          middleware:[
            websiteAuth,
          ]
        },
      }
    ]
  },

  {
    path: '/user/class-scores',
    component: () => import('layouts/User.vue'),
    children: [
      { path: '',
        name: 'classScheduleScores',
        component: () => import('pages/User/Scores.vue'),
        meta: {
          middleware:[
            websiteAuth,
          ]
        },
      }
    ]
  },


  {
    path: '/user/security',
    component: () => import('layouts/User.vue'),
    children: [
      { path: '',
        name: 'userSecurity',
        component: () => import('pages/User/Security.vue'),
        meta: {
          middleware:[
            websiteAuth,
            // admin
          ]
        },
      }
    ]
  },
]



// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
