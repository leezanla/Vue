const path = require('path');
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // npm install --save-dev css-loader
        //css loader只负责将css文件进行加载

        // npm install --save-dev style-loader
        //style loader负责将样式添加到dom中

        //如是有多个loader时，webpack是从右向左开始读取的
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader", // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader", // compiles Less to CSS
        }]
      },

      //url-loader
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: "img/[name].[hash:8].[ext]"
            },
          },
        ],
      },
      // {
      //   test: /\.m?js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['es2015']
      //     }
      //   }
      // }
    ],
  },
  resolve: {
    alias: {
      // 'vue$': '/vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归我所有'),
    // new terserWebpackPlugin()
  ],

}