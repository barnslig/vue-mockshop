<template>
  <ShopAtomSelect
    id="order"
    label="Reihenfolge:"
    :options="options"
    :onChange="onChange"
    :value="computedValue"
  />
</template>

<script>
import { mapState } from "vuex";

import ShopAtomSelect from "../../../00_components/atoms/select/ShopAtomSelect.vue";
import {
  PRODUCT_ACTION_UPDATE,
  PRODUCT_DEL_FILTER,
  PRODUCT_SET_FILTER
} from "../store/constants/products";

export default {
  components: {
    ShopAtomSelect
  },

  data: () => ({
    options: [
      { value: "default", label: "Standard" },
      { value: "pi", label: "Preis aufsteigend" },
      { value: "pd", label: "Preis absteigend" }
    ]
  }),

  methods: {
    onChange(ev) {
      if (ev.target.value === "default") {
        this.$store.commit(PRODUCT_DEL_FILTER, { key: "order" });
      } else {
        this.$store.commit(PRODUCT_SET_FILTER, {
          key: "order",
          value: ev.target.value
        });
      }
      window.scroll({
        top: 0
      });
      this.$store.dispatch(PRODUCT_ACTION_UPDATE);
    }
  },

  computed: mapState({
    computedValue: state => state.products.filters.order || "default"
  })
};
</script>
