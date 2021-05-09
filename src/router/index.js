import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/login",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: () =>
      import(
        /* webpackChunkName: "registerPage" */ "../views/RegisterPage.vue"
      ),
  },
  {
    path: "/create",
    name: "createPost",
    component: () =>
      import(/* webpackChunkName: "createPost" */ "../views/CreatePost.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
