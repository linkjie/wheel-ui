<template>
  <div class="wl-tab-content" :class="tabPosition">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wl-tab-content",

  props: {
    tabPosition: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.wl-tab-content {
  &.left {
    overflow: hidden;
  }
}
</style>