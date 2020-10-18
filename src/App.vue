<template>
    <div id='app'>
        默认
        <br>
        <w-button @click="open" >消息提示</w-button>
        <!-- <button @click="log">xxx</button> -->
        <br>
        状态
        
        <div class="statu">
            <w-button type="success"  @click="openSuccess">成功</w-button>
            <w-button type="warning"  @click="openWarning">警告</w-button>
            <w-button type="danger"  @click="openError">错误</w-button>
        </div>
        close
        <div class="close">
            <w-button @click="open('close')" >提示</w-button>
            <w-button type="success"  @click="openSuccess('close')">成功</w-button>
            <w-button type="warning"  @click="openWarning('close')">警告</w-button>
            <w-button type="danger"  @click="openError('close')">错误</w-button>
        </div>
 
        
    </div>
</template>

<script>
    import Vue from 'vue'
    import Message from './component/Toast/plugin'
    Vue.use(Message)
    import Messages from 'element-ui'
    Vue.use(Messages)
    import 'element-ui/lib/theme-chalk/index.css'
   
    export default {
        data(){
            return {
                
            }
        },
        methods:{
            open(close){
                 this.$messages({
                    message:"这是一条消息提示",
                    showClose:true,
                    
                    onClose:(instanse)=>{
                       console.log(instanse);
                    },  
                })
            },
            openSuccess(close){
                this.$messages({
                    message:"这是一个成功提示",
                    type:'success',
                    showClose:close ==='close' && true
                
                })
            },
             openWarning(close){
                this.$messages({
                    message:"这是一个警告提示",
                    type:'warning',
                    showClose:close ==='close' && true
                    ,position:'center'
               })
            },
             openError(close){
                this.$messages({
                    message:"这是一个错误提示",
                    type:'error',
                    showClose:close ==='close' && true
                    ,position:'bottom'
               })
            },
        

        },
        
    
    }
</script>

<style lang="scss" scoped>
    .statu{
        display: flex;
     button{
        margin-right: 10px;
        
    }
    }
</style>