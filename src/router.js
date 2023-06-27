import { createRouter, createWebHistory } from "vue-router";

// Importa tus componentes Vue
import CmpHome from "./components/CmpHome.vue";
import CmpAbout from "./components/CmpAbout.vue";

import CmpGrupoUsuario from "./components/CmpGrupoUsuario.vue";
import CmpUsuario from "./components/CmpUsuario.vue";
import CmpProfesor from "./components/CmpProfesor.vue";
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
    component: CmpGrupoUsuario,
  },
  {
    path: "/Usuario",
    component: CmpUsuario,
  },
  {
    path: "/",
    component: CmpHome,
  },
  {
    path: "/Profesor",
    component: CmpProfesor,
  },
  {
    path: "/",
    component: CmpProfesor,
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
