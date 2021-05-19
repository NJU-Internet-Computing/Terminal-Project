import Vue from 'vue'
import App from './App'
import store from './store'
import uView from 'uview-ui'
Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$store = store
Vue.use(uView) ;

const app = new Vue({
	store,
    ...App
})
app.$mount()
