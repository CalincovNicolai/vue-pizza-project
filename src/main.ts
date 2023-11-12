import { createApp } from 'vue'
import './style.css'
import router from "../src/router";
import App from './App.vue'
import { createPinia } from 'pinia';
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const pinia = createPinia();
const app = createApp(App);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})
app.use(router);
app.use(pinia);
app.mount('#app');

export default app;
