<template>
  <div class="card relative z-2">
    <Menubar :model="items">
      <template #start>
        <img
          src="https://siberia.ulasalle.edu.pe/logo_ulasalle.gif"
          height="60"
        />
      </template>
      <template #end>
        <InputText placeholder="Search" type="text" />
      </template>
    </Menubar>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          items: [
            {
              label: "Home",
              icon: "pi pi-fw pi-align-justify",
              to: "/",
            },
            {
              label: "Base de datos",
              icon: "pi pi-fw pi-database",
              to: "/about",
            },
          ],
        },
        {
          label: "Gestión usuarios",
          icon: "pi pi-fw pi-user-edit",
          items: [
            {
              label: "GrupoUsuario",
              icon: "pi pi-fw pi-users",
              to: "/GrupoUsuario",
            },
            {
              label: "Usuario",
              icon: "pi pi-fw pi-user-plus",
              to: "/Usuario",
            },
            {
              label: "Estudiante",
              icon: "pi pi-fw pi-user-plus",
              to: "/",
            },
            {
              label: "Profesor",
              icon: "pi pi-fw pi-user-plus",
              to: "/Profesor",
            },
          ],
        },
        {
          label: "Quit",
          icon: "pi pi-fw pi-power-off",
        },
      ],
    };
  },
};
</script>
