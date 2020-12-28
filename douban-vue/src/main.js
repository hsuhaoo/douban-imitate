import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Stag from "./components/stag.vue"
import Index from "./components/Index.vue"
import Subject from "./components/subject.vue"
import Review from "./components/sreview.vue"

Vue.use(VueRouter)
Vue.config.productionTip = false

let router = new VueRouter({
  routes: [
      //一个个对象
      { path: '/', component: Index },
      { path: '/tag/:id', name:"tag", component: Stag },
      { path: '/subject/:id', name:"subject", component: Subject },
      { path: '/review/', name:"review", component: Review },
  ]
});


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
