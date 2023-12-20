import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import 'primeflex/primeflex.css';
import button from 'primevue/button';
import PickList from 'primevue/picklist';
import Tailwind from 'primevue/passthrough/tailwind';
// import 'primeflex/themes/primeone-light.css';
// import 'primeflex/themes/primeone-dark.css';
import 'primevue/resources/themes/lara-light-green/theme.css';


const app = createApp(App);

app.component('Button', button);
app.component('PickList', PickList);
app.component("InputText", InputText);

app.use(PrimeVue, {unstyled: false, pt: Tailwind});
app.mount("#app");
