import Tabs from './tabs'

import Tab_pane from './tab-pane'

Tabs.install = function(Vue){
    Vue.component('wl-tabs',Tabs)
}
Tab_pane.install = function(Vue){
    Vue.component('wl-tab-pane',Tab_pane)
}



export {Tabs,Tab_pane}