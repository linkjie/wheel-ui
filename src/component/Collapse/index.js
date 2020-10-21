import Collapse from './Collapse'
import CollapseItem from './CollapseItem'

Collapse.install = function(Vue){
    Vue.component('wl-collapse',Collapse)
}
CollapseItem.install = function(Vue){
   Vue.component('wl-collapse-item',CollapseItem)
}


export {Collapse,CollapseItem}