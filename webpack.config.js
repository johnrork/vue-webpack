const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // Will nag if not set and defaults to prod, disabling Vue logging
  mode: 'development',
  // Point to the "compiler-included" build of Vue when referencing "vue"
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
}
