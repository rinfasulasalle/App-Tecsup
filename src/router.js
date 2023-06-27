import { createRouter, createWebHistory } from "vue-router";

// Importa tus componentes Vue
import CmpHome from "./components/CmpHome.vue";
import CmpAbout from "./components/CmpAbout.vue";

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
    path: "/GrupoUsuario",
    component: CmpHome,
  },
  {
    path: "/Usuario",
    component: CmpHome,
  },
  {
    path: "/",
    component: CmpHome,
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
