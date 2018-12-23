import { storiesOf } from "@storybook/vue";

import ShopAtomLoadingPlaceholder from "./ShopAtomLoadingPlaceholder.vue";

storiesOf("Styleguide|Atoms/Loading Placeholder", module).add(
  "default",
  () => ({
    components: { ShopAtomLoadingPlaceholder },
    render(h) {
      return h(ShopAtomLoadingPlaceholder, {
        style: { width: "100px", height: "100px" }
      });
    }
  })
);
