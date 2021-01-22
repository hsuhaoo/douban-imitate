import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Stag from "./components/stag.vue"
import Index from "./components/Index.vue"
import Subject from "./components/subject.vue"
import Reviewm from "./components/reviewm.vue"
import Review from "./components/sreview.vue"
import Page from "./components/page.vue"
import axios from 'axios'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;

let router = new VueRouter({
  routes: [
      //一个个对象
      { path: '/', component: Index },
      { path: '/tag/:id', name:"tag", component: Stag },
      { path: '/subject/:id', name:"subject", component: Subject },
      { path: '/review', name:"reviewm", component: Reviewm },
      { path: '/review/:id', name:"review", component: Review },
      { path: '/page/:id', name:"page", component: Page },

  ]
});


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
