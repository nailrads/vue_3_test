import {RouteRecordRaw} from 'vue-router';

const routesIntro: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'intro',
        component: () => import(/* webpackChunkName: 'Main' */ '@/layouts/Intro/Intro.vue'),
        children: [
            {
                path: '',
                name: 'auth',
                component: () => import(/* webpackChunkName: 'Auth' */ '@/views/Auth/Auth.vue'),
            },
        ]
    }
]

export default routesIntro
