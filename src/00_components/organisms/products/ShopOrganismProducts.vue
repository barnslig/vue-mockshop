<template>
  <div class="o-products">
    <ShopAtomHeadline v-bind="headline" />
    <div class="o-products__products">
      <ShopMoleculeProduct
        v-for="product in products"
        :key="product.href"
        v-bind="product"
      />
    </div>
  </div>
</template>

<script>
import ShopAtomHeadline from "../../atoms/headline/ShopAtomHeadline.vue";
import ShopMoleculeProduct from "../../molecules/product/ShopMoleculeProduct.vue";

export default {
  components: {
    ShopAtomHeadline,
    ShopMoleculeProduct
  },

  props: {
    headline: {
      type: Object,
      required: true
    },
    products: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.o-products__products {
  display: grid;
  grid-gap: 20px;
  place-items: center;
}

@media (min-width: 768px) {
  .o-products__products {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .o-products__products {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
