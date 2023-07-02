<template>
  <div class="card relative z-2">
    <Menubar :model="items">
      <template #start>
        <img
          src="https://www.tecsup.edu.pe/themes/tecsup/logo.svg"
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
          to: "/",
        },
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
          label: "Quit",
          icon: "pi pi-fw pi-power-off",
        },
      ],
    };
  },
};
/*
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
              label: "Compactadora",
              icon: "pi pi-fw pi-database",
              to: "/CmpCompactadora",
            },
          ],
        },
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
          label: "Quit",
          icon: "pi pi-fw pi-power-off",
        },
      ],
    };
  },
};
 */
</script>
