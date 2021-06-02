const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    purgecss({
      content: ["./**/*.js"],
      safelist: {
        deep: [
          /su-bg-[A-Za-z0-9]*(-)?([A-Za-z0-9]*)?/,
          /su-text-[A-Za-z0-9]*(-)?([A-Za-z0-9]*)?/,
        ],
      },
      // To preserve special characters in Tailwind class names
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
