import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import store from './store/index'

Vue.config.productionTip = false
// Use
Vue.use(VueResource)
// Configuration
Vue.http.options.root = "http://localhost:3000/"
// Interceptor
Vue.http.interceptors.push(request => {
    request.headers.set('Auth', 'Rand Token ' + Math.random())
})

new Vue({
    render: h => h(App),
    store
}).$mount('#app')
