<template>
        <button class="w-button" :class="[type]" @click="handelClick" >
            <w-icon :icon='icon'></w-icon>
            <w-icon class="loading" v-if="loading === true " icon='icon-loadding'>
                </w-icon><span><slot></slot></span> 
            </button>

</template>

<script>
    import Icon from './icon.vue'
    export default {
    props:['type','icon','loading'],
    name:'w-button',
    components:{
       'w-icon':Icon 
    },
    methods:{
        handelClick(){
            this.$emit('click','')
        }
    }
    }
</script>

<style lang="scss" scoped>
 $h_fcolor:#fff;
.w-button{
   
    display: inline-flex;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
   &:hover{
       color:#409eff;
       border-color: #409eff;;
   }
   &.primary{
        color: #409eff;
        background: #ecf5ff;
        border-color: #b3d8ff;
      &:hover{
       background:  #409eff;
       color:$h_fcolor;
    }
   }
    &.success{
        color: #67c23a;
        background: #f0f9eb;
        border-color: #c2e7b0;
      &:hover{
        background:#67c23a;
        color:$h_fcolor;
    }
   }
    &.warning{
        color: #e6a23c;
        background: #fdf6ec;
        border-color: #f5dab1;
      &:hover{
        background:#e6a23c;
        color:$h_fcolor;
    }
   }
    &.danger{
        color: #f56c6c;
        background: #fef0f0;
        border-color: #fbc4c4;
      &:hover{
        background: #f56c6c;
        color:$h_fcolor;
    }
   }


}
@keyframes spin{
    0%{
        transform: rotate(0deg);
    }
    100%{
         transform: rotate(360deg);
    }
}
.loading{
    animation: spin 1s infinite linear;
}

</style>