import { createWebHistory, createRouter } from "vue-router";
import Layout from '@/layout'


const routes = [
  {
    path: "/",
    name: "Dashbord",
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/Dashboard/Dashboard'),
      }
    ]
  },
  {
    path: '/home',
    component: Layout,
    name: "Home",
    auth: true,
    children: [
      {
        path: '',
        component: () => import('@/views/Home/Home'),
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    name: "About",
    auth: true,
    children: [
      {
        path: '',
        component: () => import('@/views/About/About'),
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;