<template>
  <div class="o-products">
    <ShopAtomHeadline v-bind="headline" />
    <div class="o-products__products"><slot /></div>
  </div>
</template>

<script>
import ShopAtomHeadline from "../../atoms/headline/ShopAtomHeadline.vue";

export default {
  components: {
    ShopAtomHeadline
  },

  props: {
    headline: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.o-products__products {
  display: grid;
  grid-gap: 20px;
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
