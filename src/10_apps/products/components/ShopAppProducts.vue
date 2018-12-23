<template>
  <ShopTemplateProducts>
    <template slot="products">
      <div v-if="computedIsErroneous">error</div>
      <ShopOrganismProducts :headline="computedHeadline">
        <template slot="filters">
          <ShopAppProductsFilterOrder />
        </template>
        <template slot="products">
          <ShopMoleculeProduct
            v-for="product in computedProducts"
            :key="product.href"
            v-bind="product"
          />
          <ShopMoleculeProductPlaceholder v-if="computedIsLoading" />
        </template>
      </ShopOrganismProducts>
    </template>
  </ShopTemplateProducts>
</template>

<script>
import { mapState } from "vuex";

import ShopMoleculeProduct from "../../../00_components/molecules/product/ShopMoleculeProduct.vue";
import ShopMoleculeProductPlaceholder from "../../../00_components/molecules/product-placeholder/ShopMoleculeProductPlaceholder.vue";
import ShopOrganismProducts from "../../../00_components/organisms/products/ShopOrganismProducts.vue";
import ShopTemplateProducts from "../../../00_components/templates/products/ShopTemplateProducts.vue";

import ShopAppProductsFilterOrder from "./ShopAppProductsFilterOrder.vue";

export default {
  components: {
    ShopAppProductsFilterOrder,
    ShopMoleculeProduct,
    ShopMoleculeProductPlaceholder,
    ShopOrganismProducts,
    ShopTemplateProducts
  },

  computed: mapState({
    computedIsErroneous: state => state.products.isErroneous,
    computedIsLoading: state => state.products.isLoading,
    computedIsReady: state => {
      const { isErroneous, isLoading } = state.products;
      return !isErroneous && !isLoading;
    },
    computedHeadline: state => state.products.data.headline,
    computedProducts: state => state.products.data.products
  })
};
</script>
