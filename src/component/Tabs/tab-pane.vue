<template>
    <div class="wl-tab-pane" :id='name'
        v-if="currentLabel === name"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        inject:['eventbus','tabContent'],
        props:{
            name:{
                type:String
            }
        },
        data(){
            return{
                currentLabel : ''
            }
           
        },
        created(){
            this.eventbus.$on('selectLabel',(value)=>{
                this.currentLabel = value
                if(value === this.name){
                    this.tabContent.$emit('tab-selected',this,event)
                }
            })
             this.eventbus.$on('initValue',(value)=>{
               
                this.currentLabel = value
              
          })
       }
    }
</script>

<style lang="scss" scoped>

    .wl-tab-pane{
        border:1px solid red;
        display: block;
    }
   
</style>