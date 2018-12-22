<template>
  <ShopTemplateProducts>
    <template slot="products">
      <div v-if="computedIsLoading">loading…</div>
      <div v-if="computedIsErroneous">error</div>
      <ShopOrganismProducts v-if="computedIsReady" v-bind="computedData" />
    </template>
  </ShopTemplateProducts>
</template>

<script>
import ShopOrganismProducts from "../../../00_components/organisms/products/ShopOrganismProducts.vue";
import ShopTemplateProducts from "../../../00_components/templates/products/ShopTemplateProducts.vue";

export default {
  components: {
    ShopOrganismProducts,
    ShopTemplateProducts
  },

  computed: {
    computedIsErroneous() {
      return this.$store.state.products.isErroneous;
    },
    computedIsLoading() {
      return this.$store.state.products.isLoading;
    },
    computedIsReady() {
      const { isErroneous, isLoading } = this.$store.state.products;
      return !isErroneous && !isLoading;
    },
    computedData() {
      return this.$store.state.products.data;
    }
  }
};
</script>
