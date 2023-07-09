import { createRouter, createWebHistory } from "vue-router";

// Importa tus componentes Vue
import CmpCompactadora from "./components/CmpCompactadora.vue";
import CmpOruga from "./components/CmpOruga.vue";
import CmpNeumaticos from "./components/CmpNeumaticos.vue";
import CmpCalculoPosesion from "./components/CmpCalculoPosesion.vue";
const routes = [
  {
    path: "/",
    component: CmpCompactadora,
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
    path: "/CmpCalculoPosesion",
    component: CmpCalculoPosesion,
  },
  {
    path: "/",
    component: CmpCompactadora,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
