const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    myVendors: ['@angular/core', '@angular/common', 'rxjs'], // Thư viện Angular và RxJS
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].dll.js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, 'dist', '[name]-manifest.json'),
    }),
  ],
};
