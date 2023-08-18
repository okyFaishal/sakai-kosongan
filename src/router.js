import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import AppLanding from './AppLanding.vue';
import store from '@/store/store.js';

const routes = [
  {
    path: '/',
    name: '',
    component: AppLanding,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('./pages/_/Login.vue')
      },
      {
        path: '/error',
        name: 'Error',
        component: () => import('./pages/_/Error.vue')
      },
      {
        path: '/notfound',
        name: 'Notfound',
        component: () => import('./pages/_/NotFound.vue')
      },
      {
        path: '/access',
        name: 'Access',
        component: () => import('./pages/_/Access.vue')
      },
    ]
  },
  {
    path: '/',
    name: '',
    component: App,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('./pages/_/Dashboard.vue'),
      },
    ],
    meta: {
      // requiresAuth: true,
    },
  },
  {
    path: '/',
    name: 'Master',
    component: App,
    children: [
      {
        path: 'sample',
        name: 'Sample',
        component: () => import('./pages/sample/sample.vue'),
        meta: {
          // role: ['superuser', 'pimpinan', 'operator']
        },
      },
    ],
    meta: {
      // requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth && !store.state.token){
    next('/access');
  }else if(to.meta.requiresAuth && to.meta.role){
    let access = false
    for (let i  = 0; i < to.meta.role.length; i++) {
      const x = to.meta.role[i];
      if(store.state.login.role == x) access = true
    }
    if(access) next()
    else next('/access')
  }else if(to.name == undefined){
    next('notfound')
  }else{
    next()
  }
});
export default router;
