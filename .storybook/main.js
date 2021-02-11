module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    // https://storybook.js.org/addons/@whitespace/storybook-addon-html
    "@whitespace/storybook-addon-html",
    // https://storybook.js.org/addons/storybook-addon-designs
    "storybook-addon-designs",
    // https://storybook.js.org/addons/storybook-dark-mode
    "storybook-dark-mode"
  ]
}
