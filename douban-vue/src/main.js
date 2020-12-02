import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Stag from "./components/stag.vue"
import Index from "./components/Index.vue"

Vue.use(VueRouter)
Vue.config.productionTip = false

let router = new VueRouter({
  routes: [
      //一个个对象
      { path: '/', component: Index },
      { path: '/tag/小说', component: Stag }
  ]
});


new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
