<template>
    <svg v-if='icon' class="icon" aria-hidden="true">
            <use :xlink:href=" '#'+icon "></use>
        </svg>
</template>

<script>
    export default {
        props:['icon']
    }
</script>

<style lang="scss" scoped>
   .icon{
       font-size: 14px;
   }
</style>