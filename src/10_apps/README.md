# Web Apps

This folder contains all clever, logic-containing web app entries based on UI components.

A web app consists of multiple files:

-   At least one [Vue Single File Component](https://vuejs.org/v2/guide/single-file-components.html) that ties together UI components with Vuex logic. It might be a good idea to create a folder of glue components that tie together your Vuex store with UI components.
-   An `app.js`-file which can be used as production entry file. It should render your root Vue component into an element selectable with `[data-app]`.
-   A `stories.js`-file which renders your web app into the Storybook.

Vue components are named based on the pattern `ShopApp[Name][Glue Name]`.

Stories are named based on the pattern `Apps/[Name]`.
