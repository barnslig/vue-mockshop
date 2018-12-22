import { storiesOf } from "@storybook/vue";

import ShopAppProducts from "./components/ShopAppProducts.vue";

import store from "./store";

storiesOf("Apps/Products", module).add("default", () => ({
  components: { ShopAppProducts },
  store,
  render(h) {
    return h(ShopAppProducts);
  }
}));
