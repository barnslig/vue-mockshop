# Web Apps

This folder contains all clever, logic-containing web app entries based on UI components.

A web app consists of multiple files:

-   At least one [Vue Single File Component](https://vuejs.org/v2/guide/single-file-components.html) that ties together UI components with Vuex logic. It might be a good idea to create a folder of glue components which connect your Vuex store with UI components.
-   An `index.js`-file which is the production entry file. It should check for the existence of the root element and, if present, lazy-loads the `app.js`-file
-   An `app.js`-file which should render the app into an element
-   A `stories.js`-file which renders your web app into the Storybook.

Vue components are named based on the pattern `ShopApp[Name][Glue Name]`.

Stories are named based on the pattern `Apps/[Name]`.

The separation of `index.js` and `app.js` is important to keep the main bundle as small as possible! For example, it is not necessary to load the JavaScript for the shopping cart page on the product list page.
