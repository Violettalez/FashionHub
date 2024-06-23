import { createApp } from "vue";
import App from "./App.vue";
import "swiper/swiper-bundle.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLock,
  faUser,
  faCheckCircle,
  faGift,
  faShoppingBasket,
  faClock,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import "./assets/fonts/fonts.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faLock,
  faClock,
  faComment,
  faUser,
  faCheckCircle,
  faGift,
  faShoppingBasket
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
