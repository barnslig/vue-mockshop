import { storiesOf } from "@storybook/vue";

import ShopAtomHeadline from "./ShopAtomHeadline.vue";

storiesOf("Styleguide|Atoms/Headline", module).add("default", () => ({
  components: { ShopAtomHeadline },
  render(h) {
    const data = require("./data/00-default.js");

    return h(ShopAtomHeadline, { props: data });
  }
}));
