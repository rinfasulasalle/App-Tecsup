import { createApp } from "vue";
import App from "./App.vue";

// import
import PrimeVue from "primevue/config";

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
//core
import "primevue/resources/primevue.min.css";

// cada componente se importa de forma separada +++++++++++++++++++++++++
import Button from "primevue/button";

const app = createApp(App);
app.use(PrimeVue);

// aqui agregamos el componente ******************************************
app.component("Button", Button);

app.mount("#app");
