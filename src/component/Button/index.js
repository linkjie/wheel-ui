import Button from './button'
import ButtonGroup from './button-group'


Button.install = function(Vue){
    Vue.component('wl-button',Button)
}
ButtonGroup.install = function(Vue){
    Vue.component('wl-button-group',ButtonGroup)
}
export {Button,ButtonGroup}