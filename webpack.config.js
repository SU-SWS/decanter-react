const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'decanter-react.js',
    libraryTarget: 'umd',
    library: 'decanterReact',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              [
                "transform-react-remove-prop-types",
                {
                  mode: 'remove',
                  removeImport: true
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'propTypes'
  }
};
