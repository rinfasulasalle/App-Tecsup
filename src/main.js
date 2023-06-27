import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import
import PrimeVue from "primevue/config";

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
//core
import "primevue/resources/primevue.min.css";
//icons
import "primeicons/primeicons.css";
// cada componente se importa de forma separada +++++++++++++++++++++++++
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
// aqui agregamos el componente ******************************************
app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("InputText", InputText);
app.mount("#app");
