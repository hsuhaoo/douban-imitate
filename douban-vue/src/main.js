import Vue from 'vue'
import App from './App.vue'
// import animated from 'animate.css' // npm install animate.css --save安装，在引入

Vue.config.productionTip = false

// Vue.use(animated)
new Vue({
  render: h => h(App),
}).$mount('#app')
