import Vue from 'vue'
import App from './App.vue'

/**
 * Simple directive
 */
Vue.directive('highlight', {
  bind(el, binding, vNode) {
    el.style.background = 'yellow'
  }
})

/**
 *  use binding and get value from directive
 */
Vue.directive('highlight-binding', {
  bind(el, binding, vNode) {
    el.style.background = binding.value
  }
})

/**
 *  use binding and  and argument get value from directive
 */
Vue.directive('highlight-argument', {
  bind(el, binding, vNode) {
    if(binding.arg == 'background') {
      el.style.backgroundColor= binding.value;
    } else {
      el.style.color = binding.value
    }
  }
})

/**
 *  use binding and  and argument and modifier get value from directive
 */
Vue.directive('highlight-modifier', {
  bind(el, binding, vNode) {

    let delay = 0;
    if( binding.modifiers['delayed']) {
      delay = 3000;
    }

    setTimeout(() => {
      if(binding.arg == 'background') {
        el.style.backgroundColor= binding.value;
      } else {
        el.style.color = binding.value
      }
    }, delay)
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
