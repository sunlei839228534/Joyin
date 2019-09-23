import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// import ChooseReturn from './views/ChooseReturn.vue';
import Details from './views/Details.vue';
// import Order from './views/Order.vue';
// import Payment from './views/Payment.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: Home,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/ChooseReturn',
    //   name: 'ChooseReturn',
    //   component: ChooseReturn,
    //   props: route => ({
    //     projectId: route.query.projectId,
    //     packageTitle: route.query.packageTitle,
    //   }),
    // },
    {
      path: '/Details/:type',
      name: 'Details',
      component: Details,
      // props: route => ({
      //   projectId: route.query.projectId,
      // }),
    },
    // {
    //   path: '/Details/nawukere',
    //   name: 'nawukere',
    //   component: Details,
    // },
    // {
    //   path: '/Order',
    //   name: 'Order',
    //   component: Order,
    //   props: route => ({
    //     projectId: route.query.projectId,
    //     packageInfo: route.query.packageInfo,
    //   }),
    // },
    // {
    //   path: '/Payment',
    //   name: 'Payment',
    //   component: Payment,
    //   props: route => ({
    //     projectId: route.query.projectId,
    //     packageId: route.query.packageId,
    //     from: route.query.from,
    //   }),
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
