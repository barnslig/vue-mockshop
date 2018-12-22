<template>
  <article class="m-product" itemscope itemtype="http://schema.org/Product">
    <a class="m-product__inner" :href="href">
      <div class="m-product__img-wrapper">
        <ShopAtomImage class="m-product__img" itemprop="image" v-bind="image" />
      </div>
      <div class="m-product__meta-wrapper">
        <ShopAtomHeadline v-bind="headline" tag="h2" itemprop="name" />
        <ShopAtomCopy v-bind="copy" itemprop="description" />
      </div>
    </a>
  </article>
</template>

<script>
import ShopAtomCopy from "../../atoms/copy/ShopAtomCopy.vue";
import ShopAtomHeadline from "../../atoms/headline/ShopAtomHeadline.vue";
import ShopAtomImage from "../../atoms/image/ShopAtomImage.vue";

export default {
  components: {
    ShopAtomCopy,
    ShopAtomHeadline,
    ShopAtomImage
  },

  props: {
    href: {
      type: String,
      required: true
    },
    image: {
      type: Object,
      required: true
    },
    headline: {
      type: Object,
      required: true
    },
    copy: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.m-product {
  width: 100%;
  max-width: 300px;
}

.m-product__img-wrapper {
  position: relative;
  height: 0;
  padding-bottom: 100%;
}

.m-product__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.m-product__img img {
  width: 100%;
}
</style>
