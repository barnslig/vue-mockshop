import Vue from "vue";

import ShopAppProducts from "./components/ShopAppProducts.vue";
import store from "./store";

const init = el =>
  new Vue({
    el,
    store,

    components: {
      ShopAppProducts
    },

    render(h) {
      return h(ShopAppProducts);
    }
  });

export default init;
