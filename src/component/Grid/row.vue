<template>
  <div
    class="wl-row"
    :style="{
            marginLeft:-gutter/2+'px',
            marginRight:-gutter/2+'px'
            }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: [Number, String],
      default: 0,
    },
  },
};
</script>

<style lang="scss"  scoped>
.wl-row {
  box-sizing: border-box;
  position: relative;
  &::before,
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}
</style>