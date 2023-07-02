import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/brazil",
  //   name: "brazil",
  //   component: () =>
  //     import(/* webpackChunkName: "brazil" */ "@/views/BrazilView.vue"),
  // },
  // {
  //   path: "/hawaii",
  //   name: "hawaii",
  //   component: () =>
  //     import(/* webpackChunkName: "hawaii" */ "@/views/HawaiiView.vue"),
  // },
  // {
  //   path: "/jamaica",
  //   name: "jamaica",
  //   component: () =>
  //     import(/* webpackChunkName: "jamaica" */ "@/views/JamaicaView.vue"),
  // },
  // {
  //   path: "/panama",
  //   name: "panama",
  //   component: () =>
  //     import(/* webpackChunkName: "panama" */ "@/views/PanamaView.vue"),
  // },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("@/views/ExperienceShow.vue"),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // linkActiveClass: "travel-active-link",
});

export default router;
