const path = require('path');
module.export = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'main.js'
  }
}