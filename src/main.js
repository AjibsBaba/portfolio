import Vue from 'vue'
import App from './App.vue'
import './index.css'
import VueMeta from "vue-meta";

Vue.use(VueMeta)

Vue.config.productionTip = false
Vue.config.silent = true

new Vue({
  render: h => h(App),
}).$mount('#app')
