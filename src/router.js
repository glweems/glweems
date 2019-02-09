import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import CodePens from "./views/CodePens.vue";
import Designs from "./views/Designs.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/codepens",
      name: "codepens",
      component: CodePens,
    },
    {
      path: "/designs",
      name: "Design",
      component: Designs,
    },
  ],
});
