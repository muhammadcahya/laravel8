require('./bootstrap');

// VUE - https://vuejs.org
import Vue from 'vue'
import App from './modules/App.vue'

// VUEX - https://vuex.vuejs.org
import store from './store'

// VUE-ROUTER - https://router.vuejs.org
import router from './router'

// PLUGINS
import i18n from './plugins/vue-i18n'
import vuetify from './plugins/vuetify'

// Set this to false to prevent the production tip on Vue startup.
Vue.config.productionTip = false

/*
|---------------------------------------------------------------------
| Main Vue Instance
|---------------------------------------------------------------------
|
| Render the vue application on the <div id="app"></div> in index.html
|
| https://vuejs.org/v2/guide/instance.html
|
*/
export default new Vue({
    i18n,
    vuetify,
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')