<template>
  <div class="a-loading-placeholder"></div>
</template>

<style>
.a-loading-placeholder {
  animation: a-loading-placeholder__bg 1s linear infinite forwards;
  border-radius: 3px;
}

@keyframes a-loading-placeholder__bg {
  0% {
    background-color: rgba(238, 238, 238, 1);
  }
  50% {
    background-color: rgba(238, 238, 238, 0.4);
  }
  100% {
    background-color: rgba(238, 238, 238, 1);
  }
}
</style>
