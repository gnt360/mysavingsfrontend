import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jquery from "jquery";

import "@/assets/css/bootstrap.min.css";
import "@/assets/css/atlantis.css";

createApp(App)
  .use(store)
  .use(router)
  .use(jquery)
  .mount("#app");
