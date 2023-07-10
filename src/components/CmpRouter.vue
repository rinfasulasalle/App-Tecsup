<template>
  <div class="card relative z-2">
    <Menubar :model="items">
      <template #start>
        <img
          src="https://www.tecsup.edu.pe/themes/tecsup/logo.svg"
          height="50"
        />
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
};
</script>
