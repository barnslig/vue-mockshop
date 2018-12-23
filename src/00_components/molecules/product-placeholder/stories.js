import { storiesOf } from "@storybook/vue";

import ShopMoleculeProductPlaceholder from "./ShopMoleculeProductPlaceholder.vue";

storiesOf("Styleguide|Molecules/Product Placeholder", module).add(
  "default",
  () => ({
    components: { ShopMoleculeProductPlaceholder },
    render(h) {
      return h(ShopMoleculeProductPlaceholder);
    }
  })
);
