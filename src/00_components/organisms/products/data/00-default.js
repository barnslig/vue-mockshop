/**
 * Create an Array filled with some value
 * @param {number} size - Size of the Array
 * @param {*} obj - To-Be-Repeated value
 * @returns {Array} Array of length size where every item is a copy of obj
 */
const repeat = (size, obj) => {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr.push(obj);
  }
  return arr;
};

module.exports = {
  headline: require("../../../atoms/headline/data/00-default.js"),
  products: repeat(10, require("../../../molecules/product/data/00-default.js"))
};
