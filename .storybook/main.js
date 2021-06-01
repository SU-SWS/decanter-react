module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "./stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    // Default core extention
    "@storybook/addon-essentials",
    // This came out of the box. Better find out what it is.
    "@storybook/addon-links",
    // https://storybook.js.org/addons/@whitespace/storybook-addon-html
    "@whitespace/storybook-addon-html",
    // https://storybook.js.org/addons/storybook-addon-designs
    "storybook-addon-designs",
    // https://www.npmjs.com/package/@storybook/addon-a11y
    "@storybook/addon-a11y",
    // https://storybook.js.org/addons/storybook-dark-mode
    "storybook-dark-mode",
    // https://storybook.js.org/addons/storybook-addon-pseudo-states
    "storybook-addon-pseudo-states",
    // https://storybook.js.org/addons/@storybook/addon-postcss
    "@storybook/addon-postcss"
  ],
  reactOptions: {
    fastRefresh: true,
  }
}
