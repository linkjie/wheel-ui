import Col from './col'
import Row from './row'

Col.install = function(Vue){
    Vue.component('wl-col',Col)
}
Row.install = function(Vue){
    Vue.component('wl-row',Row)
}

export{Col,Row}