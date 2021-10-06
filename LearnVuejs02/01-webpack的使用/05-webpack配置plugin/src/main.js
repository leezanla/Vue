// import {sum, mul} from './js/mathUtils'
// sum(2,5);
// mul(2, 5)
//
// //引入css的文件
require('./css/normal.css')
// require('./css/special.less')
// document.writeln('你好吗？')
import Vue from 'vue';

const app = new Vue({
  el: '#app',
  template: '<button>按钮</button>',
  data: {
    message: '我很好',
  }
})