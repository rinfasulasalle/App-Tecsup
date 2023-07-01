import { createRouter, createWebHistory } from "vue-router";

// Importa tus componentes Vue
import CmpHome from "./components/CmpHome.vue";
import CmpAbout from "./components/CmpAbout.vue";
import CmpCompactadora from "./components/CmpCompactadora.vue";
import CmpOruga from "./components/CmpOruga.vue";
import CmpNeumaticos from "./components/CmpNeumaticos.vue";
const routes = [
  {
    path: "/",
    component: CmpHome,
  },
  {
    path: "/about",
    component: CmpAbout,
  },
  {
    path: "/CmpCompactadora",
    component: CmpCompactadora,
  },
  {
    path: "/CmpOruga",
    component: CmpOruga,
  },
  {
    path: "/CmpNeumaticos",
    component: CmpNeumaticos,
  },
  {
    path: "/Profesor",
    component: CmpHome,
  },
  {
    path: "/",
    component: CmpHome,
  },
  {
    path: "/",
    component: CmpHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
