<template>
    <div id="app">
        <w-button >默认按钮</w-button>
        <w-button type="primary" >主要按钮</w-button>
        <w-button type="success">成功按钮</w-button>
        <w-button type="warning">警告按钮</w-button>
        <w-button type="danger">危险按钮</w-button>
        <br>
        <w-button type="primary"  icon="icon-edit"></w-button>
        <w-button type="primary" icon="icon-search">搜索</w-button>
        <w-button type="primary" icon="icon-delete"></w-button>
        <w-button type="primary"  icon="icon-upload">上传</w-button>
        <w-button type="primary"  icon="icon-share"></w-button>
        <br>
        <w-button type="primary" :loadding='true' >加载中</w-button>
         <br>
         <w-button-group>
         <w-button type="primary" icon='icon-left'>上一页</w-button>
         <w-button type="primary" >更多</w-button>
         <w-button type="primary" >下一页<w-icon icon="icon-right"/></w-button>
        </w-button-group>
         </div>
</template>

<script>
    export default {
        methods:{
            add(){
                console.log('aaa');
            }
        }
    }
</script>

<style lang="scss" >
button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
}
 .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
#app{
    width: 1000px;
    margin: 0 auto;
}

</style>