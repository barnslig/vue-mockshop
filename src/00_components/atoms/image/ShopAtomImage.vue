<template>
  <picture class="a-image" itemscope itemtype="https://schema.org/ImageObject">
    <!-- contentUrl is provided using a meta tag as the src="" attribute is not
         available until lazysizes is finished -->
    <meta itemprop="contentUrl" :content="src" />

    <source
      v-for="source in sources"
      :key="source.srcset"
      :data-srcset="source.srcset"
      :media="source.media"
    />
    <img class="a-image__img lazyload" :data-src="src" :alt="alt" />
  </picture>
</template>

<script>
import "lazysizes";

export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    sources: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style>
.a-image__img {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.a-image__img.lazyloaded {
  opacity: 1;
}
</style>
