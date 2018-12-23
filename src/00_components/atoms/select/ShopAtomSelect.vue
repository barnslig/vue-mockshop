<template>
  <div class="a-select">
    <label class="a-select__label" :for="id">{{ label }}</label>
    <div class="a-select__select-wrapper">
      <select
        class="a-select__select"
        :id="id"
        :value="value"
        @change="onChange"
      >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          >{{ option.label }}</option
        >
      </select>
      <svg
        class="a-select__select-arrow"
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
      >
        <polyline
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          points="12.75 15 17.5 20 22.25 15"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      default: null
    },
    onChange: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style>
.a-select,
.a-select__select {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 16px;
}

.a-select__select-wrapper {
  display: inline-block;
  position: relative;
  margin: 0 10px;
}

.a-select__select {
  width: 100%;
  appearance: none;
  border: 1px #ccc solid;
  height: 35px;
  background: #fff;
  padding: 0 45px 0 10px;
}

.a-select__select-arrow {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  border-left: 1px #ccc solid;
}
</style>
