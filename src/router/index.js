import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("../views/IndexView.vue"),
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("../views/MenuView.vue"),
      children: [
        {
          path: "",
          redirect: "menu/coffee",
        },
        {
          path: "coffee",
          name: "menu-coffee",
          component: () => import("../components/menu/CoffeeView.vue"),
        },
        {
          path: "drink",
          name: "menu-drink",
          component: () => import("../components/menu/DrinkView.vue"),
        },
        {
          path: "mains",
          name: "menu-mains",
          component: () => import("../components/menu/MainsView.vue"),
        },
        {
          path: "brunch",
          name: "menu-brunch",
          component: () => import("../components/menu/BrunchView.vue"),
        },
        {
          path: "desserts",
          name: "menu-desserts",
          component: () => import("../components/menu/DessertView.vue"),
        },
      ],
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/NewsView.vue"),
    },
    {
      path: "/recruit",
      name: "recruit",
      component: () => import("../views/RecruitView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
  ],
});

export default router;
