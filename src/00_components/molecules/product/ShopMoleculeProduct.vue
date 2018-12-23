<template>
  <article class="m-product" itemscope itemtype="http://schema.org/Product">
    <a class="m-product__inner" :href="href">
      <div class="m-product__img-wrapper">
        <ShopAtomImage class="m-product__img" itemprop="image" v-bind="image" />
      </div>
      <div class="m-product__meta-wrapper">
        <ShopAtomHeadline
          class="m-product__meta-headline"
          v-bind="headline"
          tag="h2"
          itemprop="name"
        />
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
.m-product__inner {
  color: #000;
  text-decoration: none;
  display: grid;
  border: 1px #ccc solid;
  border-radius: 3px;
  padding: 20px;
}

@media (min-width: 480px) {
  .m-product__inner {
    grid-gap: 20px;
    grid-template-columns: 150px 1fr;
  }
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

@media (min-width: 480px) {
  .m-product__meta-wrapper {
    border-left: 1px #ccc solid;
    padding-left: 20px;
  }
}

@media (min-width: 480px) {
  .m-product__meta-headline {
    margin-top: 0;
  }
}
</style>
