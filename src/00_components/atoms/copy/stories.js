import { storiesOf } from "@storybook/vue";

import ShopAtomCopy from "./ShopAtomCopy.vue";

storiesOf("Styleguide|Atoms/Copy", module).add("default", () => ({
  components: { ShopAtomCopy },
  render(h) {
    const data = require("./data/00-default.js");

    return h(ShopAtomCopy, { props: data });
  }
}));
