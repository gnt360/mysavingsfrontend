import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
//import VueToastr from "vue-toastr";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";
axios.defaults.withCredentials = true;

import "@/assets/css/bootstrap.min.css";
import "@/assets/css/atlantis.css";
import "jquery/src/jquery.js";
import "popper.js/dist/popper.min.js";
import "@/assets/js/core/bootstrap.min.js";
import "@/assets/js/plugin/webfont/webfont.min.js";

createApp(App)
  .use(store)
  .use(router)
  .use(VueSweetalert2)
  .use(Loading)
  //.use(VueToastr)
  .mount("#app");
