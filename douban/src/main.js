import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Stag from "./components/stag.vue";
import Index from "./components/Index.vue";
import Subject from "./components/subject.vue";
import Reviewm from "./components/reviewm.vue";
import Review from "./components/sreview.vue";
import Page from "./components/page.vue";
import Alltag from "./components/alltag.vue";
import Search from "./components/search.vue";
import Login from "./components/login.vue";
import Container from "./Container.vue";

import mIndex from "./mobile_components/Index.vue";
import mPage from "./mobile_components/page.vue";
import mSubject from "./mobile_components/subject.vue";
import mSearch from "./mobile_components/search.vue";
import mLogin from "./mobile_components/login.vue";
import mContainer from "./mobileContainer.vue";

import axios from "axios";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

let router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Container,
      alias: '/pc',
      children: [
        { path: "", component: Index },
        { path: "tag", name: "alltag", component: Alltag },
        { path: "tag/:id", name: "tag", component: Stag },
        { path: "subject/:id", name: "subject", component: Subject },
        { path: "review", name: "reviewm", component: Reviewm },
        { path: "review/:id", name: "review", component: Review },
        { path: "page/:id", name: "page", component: Page },
        { path: "search", name: "search", component: Search },
        { path: "login", name: "login", component: Login },
      ],
    },

    { path: '/mobile', component: mContainer,
      children: [
      {path: "", component: mIndex },
    { path: 'subject/:id', name:"msubject", component: mSubject },
    { path: 'page/:id', name:"mpage", component: mPage },
    { path: 'search', name:"msearch", component: mSearch },
    { path: 'login', name:"mlogin", component: mLogin },
      ]}
  ],
});

router.beforeEach((to, from, next) => {
  // next();
  if (to.path === "/") {
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      next({ path: "/mobile" });
    }
    else{
      next();
    }
  }
  else{
    next();
  }
});

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
