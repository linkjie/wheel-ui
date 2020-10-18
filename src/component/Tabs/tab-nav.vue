<template>
    <div class="wl-tab-nav">
        <div class="wl-tab-nav-wrapper">
           <slot></slot>
        </div>
        
    </div>
</template>

<script>
    export default {
        inject:['eventbus'],
        props:{
            value:{
                type:String
            }
        },
        mounted(){
             this.eventbus.$emit('initValue',this.value) 
           
        },
        created(){
            this.eventbus.$on('selectLabel',(value)=>{
               this.$emit('input',value)
               
           }) 
        }
      
    }
</script>

<style lang="scss" scoped>
    .wl-tab-nav{
        
      position: relative;
       box-sizing: border-box;
       border-bottom: 1px solid #999;
        &::before,
         &::after{
           content: '';
           display: table;
           clear: both;
       }
       margin-bottom: 20px;
       &-wrapper{
           
        /* border:1px solid red; */
        box-sizing: border-box;
        position: relative;
        float: left;
        margin-left: -20px;
       }

    }
</style>