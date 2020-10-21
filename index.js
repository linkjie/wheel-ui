import {Collapse,CollapseItem} from './src/component/Collapse/index'
import {Container,Header,Main,Aside,Footer} from './src/component/Container/index'
import {Popover} from './src/component/Popover/index'
import {Tabs,Tab_pane} from './src/component/Tabs/index'
import {Toast} from './src/component/Toast/index'
import {Button,ButtonGroup} from './src/component/Button/index'
import {Icon} from './src/component/C_Icon/index'
import {Input} from './src/component/Input/index'
import {Col,Row} from './src/component/Grid/index'

const wheel_UI = {Input,Col,Row,Icon,Button,ButtonGroup,Toast,Tabs,Tab_pane,Popover,Collapse,CollapseItem,Container,Header,Main,Aside,Footer}

wheel_UI.install = function(Vue){
    Object.keys(wheel_UI).forEach(item=>{
        console.log(item);
        if(item === 'install'){
            return
        }
        Vue.use(wheel_UI[item])
    })
 
}

export default wheel_UI
export {Input,Col,Row,Icon,Button,ButtonGroup,Toast,Tabs,Tab_pane,Popover,Collapse,CollapseItem,Container,Header,Main,Aside,Footer}