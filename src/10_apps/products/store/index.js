import Vue from "vue";
import Vuex from "vuex";

import products from "./modules/products";
import { PRODUCT_ACTION_UPDATE } from "./constants/products";

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",

  modules: {
    products
  }
});

store.dispatch(PRODUCT_ACTION_UPDATE);

export default store;
