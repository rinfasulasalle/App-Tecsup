import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import
import PrimeVue from "primevue/config";

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
//import "primevue/resources/themes/arya-green/theme.css";
//import "primevue/resources/themes/lara-light-blue/theme.css";
//import "primevue/resources/themes/lara-light-indigo/theme.css";
//import "primevue/resources/themes/lara-light-purple/theme.css";
//import "primevue/resources/themes/saga-orange/theme.css";
//import "primevue/resources/themes/lara-light-teal/theme.css";
//import "primevue/resources/themes/lara-dark-blue/theme.css";
//
//import "primevue/resources/themes/saga-orange/theme.css";
//import "primevue/resources/themes/vela-orange/theme.css";
//import "primevue/resources/themes/arya-orange/theme.css";
//import "primevue/resources/themes/lara-dark-indigo/theme.css";
//import "primevue/resources/themes/lara-dark-purple/theme.css";
//import "primevue/resources/themes/lara-dark-teal/theme.css";
//core
import "primevue/resources/primevue.min.css";
//icons
import "primeicons/primeicons.css";
// cada componente se importa de forma separada +++++++++++++++++++++
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import InputNumber from "primevue/inputnumber";
import Listbox from "primevue/listbox";
import RadioButton from "primevue/radiobutton";
import Checkbox from "primevue/checkbox";
import Knob from "primevue/knob";
import Slider from "primevue/slider";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Password from "primevue/password";
import Card from "primevue/card";

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
// aqui agregamos el componente ************************************
app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("InputText", InputText);
app.component("Dialog", Dialog);
app.component("Dropdown", Dropdown);
app.component("InputNumber", InputNumber);
app.component("Listbox", Listbox);
app.component("RadioButton", RadioButton);
app.component("Checkbox", Checkbox);
app.component("Knob", Knob);
app.component("Slider", Slider);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Password", Password);
app.component("Card", Card);
app.mount("#app");
