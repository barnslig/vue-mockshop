<template>
  <component class="a-headline" :is="tag">{{ text }}</component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "h1"
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.a-headline {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  margin: 20px 0;
}
</style>
