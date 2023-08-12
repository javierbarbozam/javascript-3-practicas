const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/customize-form.html',
      filename: 'customize-form.html',
    }),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.html$/, use: ['html-loader'] },
      {
        test: /\.(svg|png|jpeg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets',
          },
        },
      },
    ],
  },
};
