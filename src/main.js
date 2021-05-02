import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jquery from "jquery";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";

import "@/assets/css/bootstrap.min.css";
import "@/assets/css/atlantis.css";

createApp(App)
  .use(store)
  .use(router)
  .use(jquery)
  .mount("#app");
