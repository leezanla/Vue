const path = require('path');
module.export = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'index.js'
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
    ],
  }
}