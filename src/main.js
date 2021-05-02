import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";

import "@/assets/css/bootstrap.min.css";
import "@/assets/css/atlantis.css";
import "jquery/src/jquery.js";
import "popper.js/dist/popper.min.js";
import "@/assets/js/core/bootstrap.min.js";
import "@/assets/js/plugin/webfont/webfont.min.js";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
