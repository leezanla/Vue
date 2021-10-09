import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: h => h(App)
  //上面这个可以写成下面这种形式
  render: function (createElement) {
    //creteElement('标签',{标签的属性}, ['标签中的内容'])
    return createElement('h2', {class: 'box'}, ['hello world',
    createElement('button', ['按钮']),
    ])
    //上面这个就相当于是
  }
})
