const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: ['./**/*.js'],
      safelist: ['bg-{color}', 'text-{color}'],
      // To preserve special characters in Tailwind class names
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }),
  ]
};