<template>
    <div id="app">
        <w-button >默认按钮</w-button>
        <w-button type="primary" @click="add()" >主要按钮</w-button>
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
        <w-button type="primary" :loading='true' >加载中</w-button>
         <br>
         <button-group>
         <w-button type="primary" icon='icon-left'>上一页</w-button>
         <w-button type="primary" >更多</w-button>
         <w-button type="primary" >下一页<w-icon icon="icon-right"/></w-button>
        </button-group>
        <br>
        
        <w-input  v-model='value' placeholder='请输入内容'></w-input>
        <w-input  placeholder='请输入内容' disabled></w-input>
         <w-input v-model='value' placeholder='请输入内容'  clearable></w-input>
         <w-input  v-model='value' placeholder='请输入内容' icon="icon-delete"></w-input>
         <br>
         <br>
         基础
         <wl-row>
             <wl-col span='24' >
                 <div class="con " ></div>
             </wl-col>  
         </wl-row>
           <wl-row>
             <wl-col span='12' >
                 <div class="con " ></div>
             </wl-col>
             <wl-col span='12' >
                 <div class="con "></div>
             </wl-col> 
         </wl-row>
           <wl-row>
             <wl-col span='8' >
                 <div class="con" ></div>
             </wl-col>
             <wl-col  span='8'>
                 <div class="con" ></div>
             </wl-col>
            <wl-col  span='8'>
                 <div class="con" ></div>
             </wl-col>
         </wl-row>
          <wl-row>
             <wl-col span='6'>
                 <div class="con" ></div>
             </wl-col>
             <wl-col span='6'>
                 <div class="con" ></div>
             </wl-col>
             <wl-col span='6'>
                 <div class="con" ></div>
             </wl-col>
             <wl-col span='6'>
                 <div class="con" ></div>
             </wl-col>
         </wl-row>
         <wl-row>
             <wl-col span='4'>
                 <div class="con" ></div>
             </wl-col>
             <wl-col span='4'>
                 <div class="con" ></div>
             </wl-col>
              <wl-col span='4'>
                 <div class="con" ></div>
             </wl-col>
             <wl-col span='4'>
                 <div class="con" ></div>
             </wl-col>
             <wl-col span='4'>
                 <div class="con" ></div>
             </wl-col>
             <wl-col span='4'>
                 <div class="con" ></div>
         </wl-row>
         <wl-row>
             <wl-col span='4'>
                 <div class="con " ></div>
             </wl-col> 
              <wl-col span='20'>
                 <div class="con " ></div>
             </wl-col> 
         </wl-row>
         间隔
         <wl-row gutter='20'>
             <wl-col span='6'>
                 <div class="con" ></div>
             </wl-col>
             <wl-col span='6'>
                 <div class="con" ></div>
             </wl-col >
             <wl-col span='6'>
                 <div class="con" ></div>
             </wl-col>
             <wl-col span='6'>
                 <div class="con" ></div>
             </wl-col>
         </wl-row>
         <wl-row gutter='20'>
             <wl-col span='8'>
                 <div class="con" ></div>
             </wl-col>
             <wl-col span='8'>
                 <div class="con" ></div>
             </wl-col >
             <wl-col span='8'>
                 <div class="con" ></div>
             </wl-col >  
         </wl-row>
        混合布局
         <wl-row gutter='20'>
             <wl-col span='8'>
                 <div class="con" ></div>
             </wl-col>
             <wl-col span='8'>
                 <div class="con" ></div>
             </wl-col >
             <wl-col span='4'>
                 <div class="con" ></div>
             </wl-col >  
             <wl-col span='4'>
                 <div class="con" ></div>
             </wl-col >
         </wl-row>
         偏移
         <wl-row gutter='20'>
             <wl-col span='6'>
                 <div class="con" ></div>
             </wl-col>
             <wl-col span='6' offset='6'>
                 <div class="con" ></div>
             </wl-col >
            
         </wl-row>
          <wl-row gutter='20'>
             <wl-col span='6' offset='6'>
                 <div class="con" ></div>
             </wl-col>
             <wl-col span='6' offset='6'>
                 <div class="con" ></div>
             </wl-col >
         </wl-row>
          <wl-row gutter='20'>
             <wl-col span='12' offset='6'>
                 <div class="con" ></div>
             </wl-col>
         </wl-row>
         响应式
         <wl-row >
             <wl-col  xs='8' sm='6' md='4' lg='3' xl='1'>
                 <div class="con" ></div>
             </wl-col>
             <wl-col  xs='4' sm='6' md='8' lg='9' xl='11'>
                 <div class="con" ></div>
             </wl-col>
             <wl-col  xs='4' sm='6' md='8' lg='9' xl='11'>
                 <div class="con" ></div>
             </wl-col>
             <wl-col  xs='8' sm='6' md='4' lg='3' xl='1'>
                 <div class="con" ></div>
             </wl-col>
         </wl-row>
        <wl-row >
             <wl-col span='20' :xs="{span:8}"  :sm="{span:8}">
                 <div class="con" ></div>
             </wl-col>
             <wl-col span='4' :xs="{span:8,offset:8}" :sm="{span:8}">
                 <div class="con" ></div>
             </wl-col>
         </wl-row>
        <br>
        <br>
        
        <wl-container>
            <wl-header>Header</wl-header>
            <wl-main>Main</wl-main>
        </wl-container>
        <wl-container>
            <wl-header>Header</wl-header>
            <wl-main>Main</wl-main>
            <wl-footer>Footer</wl-footer>
        </wl-container>
        <wl-container>
            <wl-aside >Aside</wl-aside>
            <wl-main>Main</wl-main> 
        </wl-container>
        <wl-container>
            <wl-header>Header</wl-header>
            <wl-container>
            <wl-aside >Aside</wl-aside>
            <wl-main>Main</wl-main> 
             </wl-container>
            <wl-footer>Footer</wl-footer>
        </wl-container>
        <wl-container>
            <wl-container>
                <wl-aside >Aside</wl-aside>
                <wl-container>
                    <wl-header>Header</wl-header>
                    <wl-main>Main</wl-main> 
                </wl-container>
            </wl-container>
             <wl-footer>Footer</wl-footer>
        </wl-container>
         </div>    
</template>

<script>
    export default {
        methods:{
        add(){
            
           this.value +='a'
        }
        },
        data(){
            return{
                value:''
            }
        }
    }
</script>

<style lang="scss" >

 .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
#app{
    max-width: 1000px;
    margin: 0 auto;
    
}
.con{
    min-height: 36px;
    border-radius: 4px;
    background: #d3dce6;
    border: 1px solid #999;
    text-align: center;
    font-size: 20px;
     
}
.wl-row{
    margin-bottom: 10px;
    /* border:1px solid red */
}
#app>.wl-container{
    margin-bottom: 20px;
}
.wl-header,.wl-footer{
    line-height: 60px;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
}
.wl-main{
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}
.wl-aside{
    
    width: 200px;
    text-align: center;
    background-color: #D3DCE6;
    line-height: 200px;
}


</style>