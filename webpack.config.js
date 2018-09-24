const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('./dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      include: [path.resolve(__dirname, './src')],
      test: /\.(jsx|js)$/,
      use: [{ loader: 'babel-loader' }],
    }, {
      include: [path.resolve(__dirname, './node_modules/')],
      test: /^(?!.*?\.module).*\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192',
    }, {
      include: [path.resolve(__dirname, './src')],
      test: /\.(css|sass|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              modules: true,
              sourceMap: true,
            },
          },
          { loader: 'sass-loader' },
          { loader: 'postcss-loader' },
        ],
      }),
    }],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      res: path.resolve(__dirname, './res'),
    },
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('styles.css'),
  ],
};
