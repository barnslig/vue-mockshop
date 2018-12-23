<template>
  <div class="m-product-placeholder">
    <ShopAtomLoadingPlaceholder class="m-product-placeholder__left" />
    <div class="m-product-placeholder__right">
      <ShopAtomLoadingPlaceholder
        class="m-product-placeholder__right-headline"
      />
      <ShopAtomLoadingPlaceholder class="m-product-placeholder__right-copy" />
      <ShopAtomLoadingPlaceholder class="m-product-placeholder__right-copy" />
    </div>
  </div>
</template>

<script>
import ShopAtomLoadingPlaceholder from "../../atoms/loading-placeholder/ShopAtomLoadingPlaceholder.vue";

export default {
  components: {
    ShopAtomLoadingPlaceholder
  }
};
</script>

<style>
.m-product-placeholder {
  color: #000;
  text-decoration: none;
  display: grid;
  border: 1px #ccc solid;
  border-radius: 3px;
  padding: 20px;
  grid-gap: 20px;
}

.m-product-placeholder__left {
  width: 150px;
  height: 150px;
}

.m-product-placeholder__right-headline,
.m-product-placeholder__right-copy {
  margin-bottom: 1em;
}

.m-product-placeholder__right-copy:last-child {
  margin-bottom: 0;
}

.m-product-placeholder__right-headline {
  width: 60%;
  height: 30px;
}

.m-product-placeholder__right-copy {
  width: 40%;
  height: 20px;
}

@media (min-width: 480px) {
  .m-product-placeholder {
    grid-template-columns: 150px 1fr;
  }
}

@media (min-width: 480px) {
  .m-product-placeholder__right {
    border-left: 1px #ccc solid;
    padding-left: 20px;
  }
}
</style>
