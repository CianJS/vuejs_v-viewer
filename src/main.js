import Vue from 'vue'
import App from './App.vue'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.config.productionTip = false

Vue.use(Viewer)

new Vue({
  render: h => h(App)
}).$mount('#app')
