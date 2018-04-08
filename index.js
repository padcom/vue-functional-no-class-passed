import Vue from 'vue'
import App from './App'

console.log(Vue.version)

new Vue({
  el: '#app',
  render: h => h(App)
})
