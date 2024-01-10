import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import PrimeVue from "primevue/config";

import 'primeflex/primeflex.css';

import InputText from "primevue/inputtext";
import button from 'primevue/button';
import PickList from 'primevue/picklist';
import Dialog from 'primevue/dialog';
import TieredMenu from 'primevue/tieredmenu';
import ContextMenu from 'primevue/contextmenu';


import Tailwind from 'primevue/passthrough/tailwind';
import 'primevue/resources/themes/lara-light-green/theme.css';
import 'primeicons/primeicons.css'



const app = createApp(App);

app.component('Button', button);
app.component('PickList', PickList);
app.component("InputText", InputText);
app.component("Dialog", Dialog);
app.component("TieredMenu", TieredMenu);
app.component("ContextMenu", ContextMenu);

app.use(PrimeVue, {unstyled: false, pt: Tailwind});
app.mount("#app");
