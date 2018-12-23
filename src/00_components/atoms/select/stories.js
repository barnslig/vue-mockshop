import { storiesOf } from "@storybook/vue";

import ShopAtomSelect from "./ShopAtomSelect.vue";

storiesOf("Styleguide|Atoms/Select", module).add("default", () => ({
  components: { ShopAtomSelect },
  render(h) {
    const data = require("./data/00-default.js");

    return h(ShopAtomSelect, { props: data });
  }
}));
