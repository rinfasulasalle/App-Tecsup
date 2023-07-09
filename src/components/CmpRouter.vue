<template>
  <div class="card relative z-2">
    <Menubar :model="items">
      <template #start>
        <img
          src="https://www.tecsup.edu.pe/themes/tecsup/logo.svg"
          height="50"
        />
      </template>
      <template #end>
        <button class="p-link" @click="cerrarSesion">
          <i class="pi pi-fw pi-power-off"></i> Cerrar
        </button>
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
          label: "Compactadora",
          icon: "pi pi-fw pi-database",
          to: "/CmpCompactadora",
        },
        {
          label: "Oruga",
          icon: "pi pi-fw pi-database",
          to: "/CmpOruga",
        },
        {
          label: "Neumaticos",
          icon: "pi pi-fw pi-database",
          to: "/CmpNeumaticos",
        },
        {
          label: "Posesion",
          icon: "pi pi-fw pi-database",
          to: "/CmpCalculoPosesion",
        },
      ],
    };
  },
  methods: {
    cerrarSesion() {
      // Lógica para cerrar sesión
      // ...
      console.log("Cerrando sesion");
    },
  },
};
</script>
