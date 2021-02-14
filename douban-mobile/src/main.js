import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
// import Stag from "./components/stag.vue"
import Index from "./components/Index.vue"
import Page from "./components/page.vue"
import Subject from "./components/subject.vue"
import Search from "./components/search.vue"
import Login from "./components/login.vue"

import axios from 'axios'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

let router = new VueRouter({
  routes: [
      //一个个对象
      { path: '/', component: Index },
      // { path: '/tag/:id', name:"tag", component: Stag }
      { path: '/page/:id', name:"page", component: Page },
      { path: '/subject/:id', name:"subject", component: Subject },
      { path: '/search', name:"search", component: Search },
      { path: '/login', name:"login", component: Login },
  ]
});


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
