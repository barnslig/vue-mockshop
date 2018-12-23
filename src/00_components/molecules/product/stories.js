import { storiesOf } from "@storybook/vue";

import ShopMoleculeProduct from "./ShopMoleculeProduct.vue";

storiesOf("Styleguide|Molecules/Product", module)
  .addDecorator(story => ({
    render(h) {
      return h(
        "div",
        { style: { display: "flex", justifyContent: "center" } },
        [h(story())]
      );
    }
  }))
  .add("default", () => ({
    components: { ShopMoleculeProduct },
    render(h) {
      const data = require("./data/00-default.js");

      return h(ShopMoleculeProduct, { props: data });
    }
  }));
