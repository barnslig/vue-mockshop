import { storiesOf } from "@storybook/vue";

import ShopOrganismProducts from "./ShopOrganismProducts.vue";

storiesOf("Styleguide/Organisms/Products", module).add("default", () => ({
  components: { ShopOrganismProducts },
  render(h) {
    const data = require("./data/00-default.js");

    return h(ShopOrganismProducts, { props: data });
  }
}));
