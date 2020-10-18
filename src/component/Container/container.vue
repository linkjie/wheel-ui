<template>
    <section class="wl-container" :class="{isHasAside:hasAside}">
        <slot ></slot>
     
    </section>
</template>

<script>
    export default {
        data(){
            return{
                hasAside:false
            }
        },
        mounted(){
     
            this.$children.forEach((vm)=>{
                if(vm.$options.name === "wl-aside"){
                    this.hasAside = true
                }
            })
        }
    }
</script>

<style lang="scss" >
    .wl-container{
        display: flex;
        flex-direction: column;
        flex: 1;
        box-sizing: border-box;  
        &.isHasAside{
            flex-direction: row;
        }  
    }
</style>