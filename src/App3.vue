<template>
    <div>
        {{activeName}}
        <wl-tabs class="tabs" >
            <wl-tab-nav v-model='activeName' >
                <wl-tab-item label='home'>Home</wl-tab-item>
                <wl-tab-item label='about'>About</wl-tab-item>
                <wl-tab-item label='profile'>Profile</wl-tab-item>
                
            </wl-tab-nav>
            
            <wl-tab-content @tab-selected ="handelClick">
                <wl-tab-pane name='home' >Home</wl-tab-pane>
                <wl-tab-pane name='about'>About</wl-tab-pane>
                <wl-tab-pane name='profile'>Profile</wl-tab-pane>
        </wl-tabs>
    </div>
</template>

<script>
import Tabs from './component/Tabs/tabs'
import Nav from './component/Tabs/tab-nav'
import Item from './component/Tabs/tab-item'
import Content from './component/Tabs/tab-content'
import Pane from './component/Tabs/tab-pane'
    export default {
        components:{
            'wl-tabs':Tabs,
            'wl-tab-nav':Nav,
            'wl-tab-item':Item,
            'wl-tab-content':Content,
            'wl-tab-pane':Pane
        },
        data(){
            return{
                activeName : 'about',
            }
        },
        methods:{
            handelClick(tab,event){
               
               console.log(tab, event);     
            },
        }
          
        
    }
</script>

<style lang="scss" scoped>
    .tabs{
        
        margin: 20px;
        
    }
</style>