import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from './dashboard'
import Intro from './intro'

import {ACCESS_TOKEN_NAME} from '@/settings/base';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    linkExactActiveClass: '--active',
    routes: [
        ...Dashboard,
        ...Intro
    ]
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem(ACCESS_TOKEN_NAME);
    to.name !== 'auth' && !token ? next({name: 'auth'}) : next()
});

export default router
