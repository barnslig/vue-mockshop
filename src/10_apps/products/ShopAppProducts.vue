<template>
  <ShopTemplateProducts>
    <template slot="products">
      <ShopOrganismProducts :headline="headline" :products="products" />
    </template>
  </ShopTemplateProducts>
</template>

<script>
import ShopOrganismProducts from "../../00_components/organisms/products/ShopOrganismProducts.vue";
import ShopTemplateProducts from "../../00_components/templates/products/ShopTemplateProducts.vue";

export default {
  components: {
    ShopOrganismProducts,
    ShopTemplateProducts
  },

  data() {
    return {
      headline: {
        text: "Product listing"
      },
      products: Array(10).fill({
        href: "#",
        image: {
          src: "https://placehold.it/300x300",
          alt: "Placeholder image"
        },
        headline: {
          text: "Product A"
        },
        copy: {
          text: "This is a nice product to choose."
        }
      })
    };
  }
};
</script>
