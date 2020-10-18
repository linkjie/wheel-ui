import Vue from 'vue'
import Button from './component/button.vue'

Vue.component('w-button',Button)
import Icon from './component/icon.vue'
Vue.component('w-icon',Icon)

import ButtonGroup from './component/button-group'
Vue.component('button-group',ButtonGroup)

import Input from './component/input'
Vue.component('w-input',Input)

import Row from './component/row'
Vue.component('wl-row',Row)
import Col from './component/col'
Vue.component('wl-col',Col)

import Container from './component/Container/container'
import Header from './component/Container/header'
import Main from './component/Container/main'
import Footer from './component/Container/footer'
import Aside from './component/Container/Aside'

Vue.component('wl-container',Container)
Vue.component('wl-header',Header)
Vue.component('wl-main',Main)
Vue.component('wl-footer',Footer)
Vue.component('wl-aside',Aside)

import App from './App3.vue'
new Vue({
    render:(h)=>h(App)
}).$mount('#app')
