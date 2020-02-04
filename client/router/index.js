import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../pages/index.vue"
import about from "../pages/about.vue";
import Users from "../pages/users.vue";
import UsersIndex from "../pages/users/index.vue";
import UsersUid from "../pages/users/_uid.vue";
import pageNotFind from "../pages/_.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: about
  },
  {
    path: "/users",
    component: Users,
    children: [
      {
        path: "/",
        name: "users",
        component: UsersIndex
      },
      {
        path: ":uid",
        name: "uid",
        component: UsersUid
      }
    ]
  },
  {
    path: "*",
    name: "pageNotFind",
    component: pageNotFind
  }
];

Vue.use(VueRouter);

export function createRouter(){
    return new  VueRouter({
      mode:'history',
      routes });
}
