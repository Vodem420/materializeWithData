import Vue from "vue";
import Router from 'vue-router';
import login from "./components/login";
import timetable from "./components/timetable";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', // localhost:8080
      name: 'login',
      component: login
    },
    {
      path: '/timetable', // localhost:8080/timetable
      name: 'timetable',
      component: timetable
    },
    // {
    //   path: '/posts/:id', // localhost:8080/:id
    //   name: 'posts',
    //   component: posts
    // }
  ],
  mode: 'history',
})
