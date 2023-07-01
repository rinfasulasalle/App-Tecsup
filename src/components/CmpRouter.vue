<template>
  <div class="card relative z-2">
    <Menubar :model="items">
      <template #start>
        <img
          src="data:image/png;base64,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"
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
