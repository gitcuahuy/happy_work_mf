// const {resolve, join} = require("path");
// const { ModuleFederationPlugin } = require('webpack').container;
// const TerserPlugin = require('terser-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const threadLoader = require('thread-loader');
// const webpack = require("webpack");
// /** @type {require('webpack').Configuration} */
// module.exports = {
//   devtool: 'cheap-module-source-map',
//   // entry: './src/index.js', // Thay đổi đường dẫn tới tệp chính của dự án của bạn
//   // entry: {
//   //   vendor: ['angular', 'rxjs'], // Các thư viện bạn muốn bao gồm trong DLL
//   // },
//   // entry: {
//     // myVendors: ['@angular/core', '@angular/common', 'rxjs'], // Thư viện Angular và RxJS
//   // },
//   output: {
//     publicPath: 'auto', // we setup the `publicHost` in `angular.json` file
//     uniqueName: 'iam',
//     path: resolve(__dirname, 'dist'),
//     filename: '[name].[contenthash].js', // Sử dụng [name] để lấy tên của chunk,
//   },
//   optimization: {
//     runtimeChunk: false,
//     minimize: true,
//     minimizer: [new TerserPlugin()],
//     splitChunks: {
//       cacheGroups: {
//         defaultVendors: {
//           test: /[\\/]node_modules[\\/]/,
//           chunks: 'all',
//         },
//       },
//     }
//   },
//   experiments: {
//     // Allow output javascript files as module source type.
//     outputModule: true,
//   },
//   plugins: [
//     // new BundleAnalyzerPlugin(),
//     // new webpack.DllReferencePlugin({
//     //   context: __dirname,
//     //   manifest: require(join(__dirname, 'dist', 'myVendors-manifest.json')),
//     // }),
//     new ModuleFederationPlugin({
//       name: 'iam',
//       filename: 'remoteEntry.js',
//       library: {
//         // because Angular v14 will output ESModule
//         type: 'module',
//       },
//       exposes: {
//         './IamModule': 'projects/iam/src/app/iam/iam.module.ts',
//       },
//       /**
//        * shared can be an object of type SharedConfig
//        * you can change this to select something can be shared
//        */
//        shared: ['@angular/core', '@angular/common', '@angular/router'],
//       // shared: {
//       //   "@angular/animations": {
//       //     singleton: true,
//       //     strictVersion: true,
//       //     requiredVersion: "^14.2.0",
//       //   },
//       //   "@angular/animations/browser": {
//       //     singleton: true,
//       //     strictVersion: true,
//       //     requiredVersion: "^14.2.0",
//       //   },
//       //   "@angular/common": {
//       //     eager: true,
//       //     singleton: true,
//       //     strictVersion: true,
//       //     requiredVersion: "^14.2.0",
//       //   },
//       //   "@angular/common/http": {
//       //     singleton: true,
//       //     strictVersion: true,
//       //     requiredVersion: "^14.2.0",
//       //   },
//       //   "@angular/core": {
//       //     eager: true,
//       //     singleton: true,
//       //     strictVersion: true,
//       //     requiredVersion: "^14.2.0",
//       //   },
//       //   "@angular/platform-browser": {
//       //     eager: true,
//       //     singleton: true,
//       //     strictVersion: true,
//       //     requiredVersion: "^14.2.0",
//       //   },
//       //   "@angular/platform-browser/animations": {
//       //     singleton: true,
//       //     strictVersion: true,
//       //     requiredVersion: "^14.2.0",
//       //   },
//       //   "@angular/router": {
//       //     singleton: true,
//       //     strictVersion: true,
//       //     requiredVersion: "^14.2.0",
//       //   },
//       //   "@angular/platform-browser-dynamic": {
//       //     eager: true,
//       //     singleton: true,
//       //     strictVersion: true,
//       //     requiredVersion: "^14.2.0",
//       //   },
//       // },
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: 'thread-loader', // Sử dụng thread-loader cho tệp JavaScript
//         exclude: /node_modules/,
//       },
//     ],
//   },
// };

const { ModuleFederationPlugin } = require('webpack').container;

/** @type {require('webpack').Configuration} */
module.exports = {
  output: {
    publicPath: 'auto', // we setup the `publicHost` in `angular.json` file
    uniqueName: 'iam',
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    // Allow output javascript files as module source type.
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'iam',
      library: {
        // because Angular v14 will output ESModule
        type: 'module',
      },
      filename: 'remoteEntry.js',
      exposes: {
        './IamModule': 'projects/iam/src/app/iam/iam.module.ts',
      },
      /**
       * shared can be an object of type SharedConfig
       * you can change this to select something can be shared
       */
      // shared: ['@angular/core', '@angular/common', '@angular/router'],
      shared: {
        "@ngrx/store": {
          singleton: true,
          eager: false,
        },
        '@ngrx/router-store': {
          singleton: true,
          eager: false},
        'hp-shared': {
          singleton: true,
          eager: false},
        "@angular/animations": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^14.2.0",
        },
        "@angular/animations/browser": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^14.2.0",
        },
        "@angular/common": {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: "^14.2.0",
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^14.2.0",
        },
        "@angular/core": {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: "^14.2.0",
        },
        "@angular/platform-browser": {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: "^14.2.0",
        },
        "@angular/platform-browser/animations": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^14.2.0",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^14.2.0",
        },
        "@angular/platform-browser-dynamic": {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: "^14.2.0",
        },
      },
      // shared: {
      //   "@angular/animations": {
      //     singleton: true,
      //     strictVersion: true,
      //     requiredVersion: "^14.2.0",
      //   },
      //   "@angular/animations/browser": {
      //     singleton: true,
      //     strictVersion: true,
      //     requiredVersion: "^14.2.0",
      //   },
      //   "@angular/common": {
      //     eager: true,
      //     singleton: true,
      //     strictVersion: true,
      //     requiredVersion: "^14.2.0",
      //   },
      //   "@angular/common/http": {
      //     singleton: true,
      //     strictVersion: true,
      //     requiredVersion: "^14.2.0",
      //   },
      //   "@angular/core": {
      //     eager: true,
      //     singleton: true,
      //     strictVersion: true,
      //     requiredVersion: "^14.2.0",
      //   },
      //   "@angular/platform-browser": {
      //     eager: true,
      //     singleton: true,
      //     strictVersion: true,
      //     requiredVersion: "^14.2.0",
      //   },
      //   "@angular/platform-browser/animations": {
      //     singleton: true,
      //     strictVersion: true,
      //     requiredVersion: "^14.2.0",
      //   },
      //   "@angular/router": {
      //     singleton: true,
      //     strictVersion: true,
      //     requiredVersion: "^14.2.0",
      //   },
      //   "@angular/platform-browser-dynamic": {
      //     eager: true,
      //     singleton: true,
      //     strictVersion: true,
      //     requiredVersion: "^14.2.0",
      //   },
      // },
    }),
  ],
};
