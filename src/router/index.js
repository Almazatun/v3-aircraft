import { createRouter, createWebHistory } from "vue-router";
import Component1 from "../views/Component1.vue";
import Component2 from "../views/Component2.vue";
import Component3 from "../components/Component3.vue";

const history = createWebHistory();

const routes = [
  {
    path: "/component1",
    name: "Component 1",
    component: Component1,
    props: { title: "🧡💛🤎" }
  },
  {
    path: "/component2",
    name: "Component 2",
    component: Component2,
    props: { title: "💚💙💜" }
  },
  {
    path: "/component3",
    name: "Component 3",
    component: Component3
  }
];

export const router = createRouter({
  history,
  routes
});

export default router;
