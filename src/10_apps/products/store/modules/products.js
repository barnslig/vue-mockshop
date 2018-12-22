/* eslint-disable no-param-reassign */
import Axios from "axios";

import * as types from "../constants/products";

export default {
  state: {
    isErroneous: false,
    isLoading: true,
    data: {}
  },

  mutations: {
    [types.PRODUCT_DATA_FAILURE](state) {
      state.isErroneous = true;
      state.isLoading = false;
    },

    [types.PRODUCT_DATA_REQUEST](state) {
      state.isErroneous = false;
      state.isLoading = true;
    },

    [types.PRODUCT_DATA_SUCCESS](state, payload) {
      state.isErroneous = false;
      state.isLoading = false;
      state.data = payload.data;
    }
  },

  actions: {
    async [types.PRODUCT_ACTION_UPDATE]({ commit }) {
      commit(types.PRODUCT_DATA_REQUEST);

      try {
        const { data } = await Axios.get("/products.json");
        commit(types.PRODUCT_DATA_SUCCESS, { data });
      } catch (e) {
        commit(types.PRODUCT_DATA_FAILURE);
      }
    }
  }
};
