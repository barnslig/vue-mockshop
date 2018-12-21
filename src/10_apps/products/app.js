import Vue from "vue";
import ShopAppProducts from "./ShopAppProducts.vue";

// eslint-disable-next-line no-new
new Vue({
  el: "[data-app]",

  components: {
    ShopAppProducts
  },

  render(h) {
    return h(ShopAppProducts);
  }
});
