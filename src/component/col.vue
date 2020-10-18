<template>
    <div class="wl-col" 
    :class="classList"
    :style="{
        paddingLeft:gutter/2+'px',
        paddingRight:gutter/2+'px'
        }">
        <slot></slot>
    
    </div>
</template>

<script>
    function getClass(props){
        const arr = ['xs','sm','md','lg','xl']
        return  arr.reduce((newArr,item)=>{
            if(props[item]){
             return newArr.concat(typeof props[item] === 'string'
             ?[`wl-span-${item}-${props[item]}`]
             :[`wl-span-${item}-${props[item].span}`,`wl-offset-${item}-${props[item].offset}`]) 
            }else{
                return newArr
            }
        },[])
    }
    export default {
        props:{
            span:{
                type:[Number,String],
                validator:function(value){
                   const val = parseInt(value)
                   return val<=24 && val%1 === 0
                } 
            },
          
            offset:{type:[Number,String],  },
            xs:{ type:[Number,String,Object], },
            sm:{ type:[Number,String,Object], },
            md:{ type:[Number,String,Object], },
            lg:{ type:[Number,String,Object], },
            xl:{ type:[Number,String,Object], }
    
        },
        created(){
            this.gutter = this.$parent.gutter 
        },
        computed:{
          classList(){
              
              return [
                  this.span && 'wl-span-'+this.span,
                  this.offset && 'wl-offset-'+this.offset,
                  ...getClass(this),
                
                  
              ]
          }  
        },
    }
</script>

<style lang="scss" >
    .wl-col{    
        box-sizing: border-box;
        float: left;
        

        @for $n from 1 through 24{
            &.wl-span-#{$n}{
                width: $n/24*100%;
            }
        }
         @for $n from 1 through 24{
            &.wl-offset-#{$n}{   
                margin-left: $n/24*100%;
            }
        }
        //>1920 xl
         @media (min-width: 1920px) {
               @for $n from 1 through 24{
                &.wl-span-xl-#{$n}{
                    width: $n/24*100%;
                }
                 &.wl-offset-xl-#{$n}{
                    margin-left: $n/24*100%;
                }
            }
        }
        // 0 1920
          @media (max-width: 1920px) {
               @for $n from 1 through 24{
                 &.wl-span-lg-#{$n}{
                    width: $n/24*100%;
                }
                 &.wl-offset-lg-#{$n}{
                    margin-left: $n/24*100%;
                }
            }
        }
        // 0 1200 
         @media (max-width:1200px) {
               @for $n from 1 through 24{
                 &.wl-span-md-#{$n}{
                    width: $n/24*100%;
                }
                 &.wl-offset-md-#{$n}{
                    margin-left: $n/24*100%;
                }
            }
        }
        //0 992
         @media (max-width:992px) {
               @for $n from 1 through 24{
                &.wl-span-sm-#{$n}{
                    width: $n/24*100%;
                }
                &.wl-offset-sm-#{$n}{
                    margin-left: $n/24*100%;
                }
            }
        }
        // 0 768
         @media (max-width:768px){
            @for $n from 1 through 24{
                &.wl-span-xs-#{$n}{
                    width: $n/24*100%;
                }
                &.wl-offset-xs-#{$n}{
                    margin-left: $n/24*100%;
                }
            }
        }
       
             
    }
</style>