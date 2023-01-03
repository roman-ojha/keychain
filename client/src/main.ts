import { createApp } from "vue";
import { createPinia } from "pinia";
import "./styles/base/index.scss";
import Datepicker from "@vuepic/vue-datepicker";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
app.component("DatePicker", Datepicker);

app.use(createPinia());
app.use(router);

app.mount("#app");
