import { createRouter, createWebHashHistory } from 'vue-router'

import daybookRouter from '../modules/daybook/router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/daybook',
        ...daybookRouter,
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
