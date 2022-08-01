import Vue from "vue";
import Router from 'vue-router'
// import Home from '../components/Home.vue'

Vue.use(Router)

export default  new Router({
    routes: [
        {
            path: '/',
            redirect: '/login',
            hidden : true,
            component: () => import('@/components/Login.vue')  //路由懒加载
        },
        {
            path: '/login',
            name: 'Login',
            hidden : true,
            component: () => import('@/components/Login.vue')  //路由懒加载
        },
        {
            path: '*',
            name: 'notfound',
            hidden : true,
            component: () => import('@/components/NotFound.vue')  //路由懒加载
        },
        // {
        //     path: '/home',
        //     // component: () => import('@/components/Home.vue')  //路由懒加载
        //     component: resolve => require(['@/components/Home.vue'],resolve)
        // },
        {
            path: '/home',
            name: '学生管理',
            iconClass: 'fa fa-users',
            redirect: '/home/student',
            component: () => import('@/components/Home.vue'),  //路由懒加载
            // component: resolve => require(['@/components/Home.vue'],resolve)
            children:[
                {
                    path: '/home/student',
                    name: '学生列表',
                    iconClass: 'fa fa-list',
                    component: () => import('@/components/students/StudentList.vue')
                },
                {
                    path: '/home/info',
                    name: '信息列表',
                    iconClass: 'fa fa-list-alt',
                    component: () => import('@/components/students/InfoList.vue')
                },
                {
                    path: '/home/infos',
                    name: '信息管理',
                    iconClass: 'fa fa-list-alt',
                    component: () => import('@/components/students/InfoLists.vue')
                },
                {
                    path: '/home/work',
                    name: '作业列表',
                    iconClass: 'fa fa-list-ul',
                    component: () => import('@/components/students/WorkList.vue')
                },
                {
                    path: '/home/works',
                    name: '作业管理',
                    iconClass: 'fa fa-th-list',
                    component: () => import('@/components/students/WorkMent.vue')
                },
            ]
        },
        {
            path: '/home',
            name: '数据分析',
            iconClass: 'fa fa-bar-chart',
            component: () => import('@/components/Home.vue'),
            children:[
                {
                    path: '/home/dataView',
                    name: '数据概览',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/DataView.vue')
                },
                {
                    path: '/home/mapView',
                    name: '地图概览',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/MapView.vue')
                },
                {
                    path: '/home/scoreMap',
                    name: '分数地图',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/ScoreMap.vue')
                },
                {
                    path: '/home/travelMap',
                    name: '旅游地图',
                    iconClass: 'fa fa-line-chart',
                    component: () => import('@/components/dataAnalysis/TravelMap.vue')
                },
            ]
        },
        {
            path: '/users',
            name: '用户中心',
            iconClass: 'fa fa-user',
            component: () => import('@/components/Home.vue'),
            children: [
                {
                    path: '/users/user',
                    name: '权限管理',
                    iconClass: 'fa fa-user',
                    component: () => import('@/components/users/User.vue')
                },
            ]
        }
    ],
    mode:'history'
})