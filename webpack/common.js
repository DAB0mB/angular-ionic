var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');

var pack = require('../package.json');

var common = {
  // the entry point for the bundle
  entry: {
    // output              // input
    'dist/angular-ionic': './entry.js'
  },
  output: {
    // point to root directory so we can avoid using ../../
    path: path.join(__dirname, '../'),
    library: 'angularIonic',
    libraryTarget: 'umd'
  },
  target: 'web',
  // global variables
  externals: {
    angular: 'angular'
  },
  plugins: [
    // add information about name and version of angular-meteor package
    new webpack.BannerPlugin(pack.name + ' v' + pack.version)
  ],
  resolve: {
    extensions: ['', '.js']
  }
};

// merge provided configuration with common things
module.exports = function(config) {
  return _.merge({}, common, config);
};