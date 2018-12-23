/* eslint-disable no-param-reassign */
import Axios from "axios";

import * as types from "../constants/products";

/**
 * Turn an object into a query string
 * @param {Object} obj - Input object
 * @returns {string} Query string, e.g. a=b&c=d
 */
const objToQuery = obj =>
  Object.entries(obj)
    .reduce((acc, cur) => `${acc}&${cur[0]}=${cur[1]}`, "")
    .slice(1);

/**
 * Wait for a timeout, then resolve a promise. Used for demo purposes
 * @param {number} timeout - Milliseconds to wait until resolving
 * @returns {Promise} Promise that resolves after timeout milliseconds
 */
const awaitTimeout = timeout =>
  new Promise(resolve => setTimeout(resolve, timeout));

export default {
  state: {
    isErroneous: false,
    isLoading: true,
    data: {},
    filters: {}
  },

  mutations: {
    [types.PRODUCT_DATA_FAILURE](state) {
      state.isErroneous = true;
      state.isLoading = false;
    },

    [types.PRODUCT_DATA_REQUEST](state) {
      state.data = {};
      state.isErroneous = false;
      state.isLoading = true;
    },

    [types.PRODUCT_DATA_SUCCESS](state, payload) {
      state.isErroneous = false;
      state.isLoading = false;
      state.data = payload.data;
    },

    [types.PRODUCT_DEL_FILTER](state, payload) {
      delete state.filters[payload.key];
    },

    [types.PRODUCT_SET_FILTER](state, payload) {
      state.filters[payload.key] = payload.value;
    }
  },

  actions: {
    async [types.PRODUCT_ACTION_UPDATE]({ commit, state }) {
      commit(types.PRODUCT_DATA_REQUEST);

      const filterQuery = objToQuery(state.filters);

      try {
        if (process.env.NODE_ENV !== "production") {
          await awaitTimeout(1500);
        }

        const { data } = await Axios.get(`/products.json?${filterQuery}`);
        commit(types.PRODUCT_DATA_SUCCESS, { data });
      } catch (e) {
        commit(types.PRODUCT_DATA_FAILURE);
      }
    }
  }
};
