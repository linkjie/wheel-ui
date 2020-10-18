<template>
    <div class="wl-tab-item" 
        @click="select" 
       :class="{select:currentLabel === label}" 
    >   
        <span class="wl-label-wrapper"><slot></slot></span>
        
    </div>
</template>

<script>
    export default {
        inject:['eventbus'],
        
        props:{
            label:{
                type:String,
                required: true,     
            }
        },
        data(){
            return{
                currentLabel:''
            }
            
        },
        methods:{
           select(){
              this.eventbus.$emit('selectLabel',this.label) 
           }
        },
       created(){     
          this.eventbus.$on('selectLabel',(value)=>{
              this.currentLabel = value
              
          })
          this.eventbus.$on('initValue',(value)=>{
              
              this.currentLabel = value
              
          })
       }
    }
</script>

<style lang="scss" scoped>
     .wl-tab-item{
       
        box-sizing: border-box;
        line-height: 40px;
        cursor: pointer;
        float: left;
        padding: 0 20px;
        height: 40px;
        &.select{
            .wl-label-wrapper{
             display: block;
             border-bottom:2px solid blue;
        }
        }
       
    }
</style>