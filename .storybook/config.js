import { configure } from "@storybook/vue";

// automatically import all files either named stories.js or ending in *.stories.js
const req = require.context("../src", true, /(^stories|.stories).js$/);

const loadStories = () => req.keys().forEach(filename => req(filename));

configure(loadStories, module);
