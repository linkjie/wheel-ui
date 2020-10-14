<template>
    <div class="btn-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted(){
            for(let node of this.$el.children)
            if(node.nodeName.toLowerCase() !== 'button'){
                console.warn('w-button-group的子元素应全为button')
            }
        }
    }
</script>

<style lang="scss" scoped>
.btn-group{
    display: inline-flex;
}
</style>