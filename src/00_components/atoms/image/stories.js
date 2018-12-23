import { storiesOf } from "@storybook/vue";

import ShopAtomImage from "./ShopAtomImage.vue";

storiesOf("Styleguide|Atoms/Image", module).add("default", () => ({
  components: { ShopAtomImage },
  render(h) {
    const data = require("./data/00-default.js");

    return h(ShopAtomImage, { props: data });
  }
}));
