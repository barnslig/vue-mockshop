<template>
  <div class="o-products">
    <ShopAtomHeadline v-if="headline" v-bind="headline" />
    <ShopAtomLoadingPlaceholder
      class="o-products__headline-loading"
      v-if="!headline"
    />
    <div class="o-products__filters-wrapper" v-if="!!$slots.filters">
      <div class="o-products__filters"><slot name="filters" /></div>
    </div>
    <div class="o-products__products"><slot name="products" /></div>
  </div>
</template>

<script>
import ShopAtomHeadline from "../../atoms/headline/ShopAtomHeadline.vue";
import ShopAtomLoadingPlaceholder from "../../atoms/loading-placeholder/ShopAtomLoadingPlaceholder.vue";

export default {
  components: {
    ShopAtomHeadline,
    ShopAtomLoadingPlaceholder
  },

  props: {
    headline: {
      type: Object,
      default: null
    }
  }
};
</script>

<style>
.o-products__headline-loading {
  width: 40%;
  height: 28px;
  margin: 20px 0;
}

.o-products__filters-wrapper {
  position: sticky;
  top: -1px;
  background: #fff;
}

.o-products__filters {
  display: flex;
  justify-content: space-between;
  border-top: 1px #ccc solid;
  border-bottom: 1px #ccc solid;
  padding: 10px 0;
  margin: 20px 0;
}

.o-products__products {
  display: grid;
  grid-gap: 20px;
}
</style>
