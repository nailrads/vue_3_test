import {RouteRecordRaw} from 'vue-router';

const Operations = () => import(/* webpackChunkName: 'Operations' */ '@/components/Operations/OperationsList/OperationsList.vue')

const routesDashboard: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main',
        redirect: '/',
        component: () => import(/* webpackChunkName: 'Main' */ '@/layouts/Main/Main.vue'),
        children: [
            {
                path: '/',
                name: 'dashboard',
                component: () => import(/* webpackChunkName: 'Dashboard' */ '@/views/Dashboard/Dashboard.vue'),
                children: [
                    {
                        path: '/:fieldId/performed',
                        name: 'performedByField',
                        component: Operations
                    },
                    {
                        path: '/:fieldId/planned',
                        name: 'plannedByField',
                        component: Operations
                    }
                ]
            },
            {
                path: '/technical-task',
                name: 'technicalTask',
                component: () => import(/* webpackChunkName: 'TechnicalTask' */ '@/views/TechnicalTask/TechnicalTask.vue')
            }
        ]
    }
]

export default routesDashboard
