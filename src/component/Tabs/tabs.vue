<template>
    <div class="wl-tabs">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
    export default {
        
        provide(){
            return{
                eventbus :new Vue()
            }
        },
       
        
    }
</script>

<style lang="sass" scoped>

</style>