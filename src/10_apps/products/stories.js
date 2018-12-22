import { storiesOf } from "@storybook/vue";

import ShopAppProducts from "./ShopAppProducts.vue";

storiesOf("Apps/Products", module).add("default", () => ({
  components: { ShopAppProducts },
  render(h) {
    return h(ShopAppProducts);
  }
}));
