import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import Firebase from 'firebase'
import VueFire from 'vuefire'

Vue.use(VueFire)

new Vue({
  el: 'body',
  store,
  components: { App }
})
