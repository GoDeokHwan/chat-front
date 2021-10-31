import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueAxios from 'vue-axios'
import http from './http'
import {store} from './store/store'

Vue.use(VueAxios, http)

Object.defineProperties(Vue.prototype, {
    $eventBus: {
        get: function () {
            return eventBus
        }
    }
})

new Vue({
    el: '#app',
    store,
    render: h => h(App),
    router
});