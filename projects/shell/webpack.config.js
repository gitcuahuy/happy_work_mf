const TerserPlugin = require("terser-webpack-plugin");
const {ModuleFederationPlugin} = require('webpack').container;

/** @type {require('webpack').Configuration} */
module.exports = {
  output: {
    publicPath: 'auto', // we setup the `publicHost` in `angular.json` file
    uniqueName: 'shell',
  },
  optimization: {
    runtimeChunk: false,
    // minimize: true,
    // minimizer: [new TerserPlugin()],
    // splitChunks: {
    //   cacheGroups: {
    //     defaultVendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       chunks: 'all',
    //     },
    //   },
    // }
  },
  experiments: {
    // Allow output javascript files as module source type.
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      library: {
        // because Angular v14 will output ESModule
        type: 'module',
      },
      remotes: {
        mailbox: 'http://localhost:5300/remoteEntry.js', // dường dẫn đến file remoteEntry.js của front-end mailbox
        calendar: 'http://localhost:5400/remoteEntry.js', // dường dẫn đến file remoteEntry.js của front-end calendar
        iam: 'http://localhost:5500/remoteEntry.js', // dường dẫn đến file remoteEntry.js của front-end calendar
      },
      /**
       * shared can be an object of type SharedConfig
       * you can change this to select something can be shared
       */
      shared: {
        "@ngrx/store": {
          singleton: true,
          eager: false,
        },
        '@ngrx/router-store': {
          singleton: true,
          eager: false},
        'hp-share': {
          singleton: true,
          requiredVersion: '^0.0.1',
          import: 'projects/hp-share/src/public-api'
        },
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
    }),
  ],
};
