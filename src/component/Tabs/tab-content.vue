<template>
    <div class="wl-tab-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"wl-tab-content",
       provide(){
           return{
               tabContent:this
           }
       }
        
    }
</script>

<style lang="sass" scoped>

</style>