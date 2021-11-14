const path = require('path');
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: 'dist/img/'
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
              limit: 11000,
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
  }
}