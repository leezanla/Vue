import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

axios({
  url: 'http://httpbin.org/#/'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

axios.all([axios({
  url: 'http://httpbin.org/#/'
})], axios({
  url: 'http://httpbin.org/#/'
})).then(res => {
  console.log(res)
})

const obj = {
  name: 'kobe',
  age: 13,
  height: 1.99
}
const {name, age, height} = obj;
console.log(name);
console.log(age);
console.log(height);

const names = ['kobe', 'james', 'ali']
const [names1, names2, name3] = names;
