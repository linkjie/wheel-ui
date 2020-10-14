import Vue from 'vue'
import Button from './component/button.vue'
import App from './App.vue'
Vue.component('w-button',Button)
import Icon from './component/icon.vue'
Vue.component('w-icon',Icon)

import ButtonGroup from './component/button-group'
Vue.component('w-button-group',ButtonGroup)
new Vue({
    render:(h)=>h(App)
}).$mount('#app')
