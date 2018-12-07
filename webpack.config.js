const webpack = require('webpack');

module.export = {
  entry: './web/js/script.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  }
}
