import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueScrollReveal from 'vue-scroll-reveal'

Vue.config.productionTip = false

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 600,
  scale: 0.5,
  distance: '10px',
  mobile: true
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
