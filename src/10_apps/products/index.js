const $app = document.querySelector("[data-shop-app-products]");
if ($app) {
  import(/* webpackChunkName: "ShopAppProducts" */ "./app.js").then(
    ({ default: App }) => App($app)
  );
}
