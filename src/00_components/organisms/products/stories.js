import { storiesOf } from "@storybook/vue";

import ShopMoleculeProduct from "../../molecules/product/ShopMoleculeProduct.vue";
import ShopOrganismProducts from "./ShopOrganismProducts.vue";

storiesOf("Styleguide|Organisms/Products", module).add("default", () => ({
  components: { ShopOrganismProducts },
  render(h) {
    const data = require("./data/00-default.js");

    const products = data.products.map(product =>
      h(ShopMoleculeProduct, { props: product })
    );

    return h(ShopOrganismProducts, {
      props: data,
      scopedSlots: { products: () => products }
    });
  }
}));
