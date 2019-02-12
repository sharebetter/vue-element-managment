import Vue from 'vue'
import Router from 'vue-router'

import  Home  from "@/views/Home";
import  Button from '@/views/ui/Button';
import  Alert from '@/views/ui/Alert';
import  Loading from '@/views/ui/Loading';
import  Notification from '@/views/ui/Notification';
import  Message from '@/views/ui/Message';
import  Tab from '@/views/ui/Tab';
import  ImageCard from '@/views/ui/ImageCard';
import  Login from '@/views/form/Login';
import  Regist from '@/views/form/Regist';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'/',
      redirect:'/home'
    },{
      path:'/home',
      name:'homeLink',
      component: Home
    },
    {
      path:'/ui/button',
      component: Button
    },
    {
      path:'/ui/alert',
      component: Alert
    },
    {
      path:'/ui/loading',
      component: Loading
    },
    {
      path:'/ui/notification',
      component: Notification
    },
    {
      path:'/ui/message',
      component: Message
    },
    {
      path:'/ui/tab',
      component: Tab
    },
    {
      path:'/ui/imageCard',
      component: ImageCard
    },
    {
      path:'/Form/login',
      component: Login
    },
    {
      path:'/Form/regist',
      component: Regist
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
