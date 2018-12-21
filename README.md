# Vue Mock-Shop

Totally not dayjob-related mockup of an API—based webshop to help me learning Vue.

## Goals

-   Create a pattern library
    -   Organized in an atomic design structure
    -   Based on as-dumb-as-possible Vue components
    -   Rendered with example data for development, discussion, client approval
    -   Optional: Find out whether we should use templates, JSX or a mix
    -   Optional: i18n?
-   Create a product listing, search, shopping cart
    -   They are individual web apps so we can leverage code splitting/…
    -   Based on dumb patterns. It should contain as little as possible actual HTML
    -   Using a Vuex-Store
    -   Loads data asynchronously from a JSON REST API
    -   Optional: Initial data is provided from a `<script>`-tag
    -   Optional: Use Facebook-Style loading cards
    -   Optional: Experiment with hydration so loading cards are visible before Vue is ready
-   Document the learning process

## Setup
