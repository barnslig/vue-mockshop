# UI Pattern Library

This folder contains all as-dumb-as-possible Vue components.

A component consists of multiple files:

-   The [Vue Single File Component](https://vuejs.org/v2/guide/single-file-components.html) which links together template, JavaScript and styles
-   A `stories.js`-file or multiple `*.stories.js`-files containing [Storybook stories](https://storybook.js.org/basics/writing-stories/)
-   A `data/`-folder containing example props data for as much as possible variations of the Vue component. These files should be used by your Storybook stories

Vue components are named based on the pattern `Shop[Atom|Molecule|Organism|Template][Name]`.

Stories are named based on the pattern `Styleguide|[Atom|Molecule|Organism|Template]/[Name]`.
