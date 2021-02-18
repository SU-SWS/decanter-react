const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'decanter-react.js',
    libraryTarget: 'umd',
    library: 'decanterReact'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()],
  externals: [
    'react',
    'react-dom',
    'prop-types',
    'react-hero-icon'
  ]
};
