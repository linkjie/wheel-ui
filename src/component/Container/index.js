import Container from './container'

import Header from './header'

import Main from './main'

import Aside from './aside'
import Footer from './footer'



Container.install = function(Vue){
    Vue.component('wl-container',Container)
}
Header.install = function(Vue){
    Vue.component('wl-header',Header)
}
Main.install = function(Vue){
    Vue.component('wl-main',Main)
}
Aside.install = function(Vue){
    Vue.component('wl-aside',Aside)
}
Footer.install = function(Vue){
    Vue.component('wl-footer',Footer)
}

export {Container,Header,Main,Aside,Footer}

