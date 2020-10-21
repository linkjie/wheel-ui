<template>
  <div class="wl-tab-nav" :class="tabPosition">
    <div class="wl-tab-nav-wrapper" ref="wrapper">
      <div class="line" ref="line"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["eventbus"],
  props: {
    value: {
      type: String,
    },
    tabPosition: {
      type: String,
    },
  },

  mounted() {
    this.eventbus.$on("item_click", (tab) => {
      const {
        left,
        top,
        right,
        bottom,
        width,
        height,
      } = tab.$el.children[0].getBoundingClientRect();

      const {
        left: l,
        width: w,
        top: t,
        height: h,
      } = this.$refs.wrapper.getBoundingClientRect();

      if (this.tabPosition === "top") {
        this.$refs.line.style.width = width + "px";
        this.$refs.line.style.left = left - l + "px";
        this.$refs.line.style.top = "auto";
      } else if (this.tabPosition === "left") {
        this.$refs.line.style.left = "auto";
        this.$refs.line.style.height = height + "px";
        this.$refs.line.style.top = top - t + "px";
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.wl-tab-nav {
  /* float: left; */

  position: relative;
  box-sizing: border-box;
  border-bottom: 2px solid #e4e7ed;
  &::before,
  &::after {
    content: "";
    display: table;
    clear: both;
  }

  margin-bottom: 20px;
  .wl-tab-nav-wrapper {
    /* border: 1px solid blue; */

    box-sizing: border-box;
    position: relative;
    float: left;
    margin-left: -20px;
    .line {
      box-sizing: border-box;
      left: 20px;
      transition: all 0.5s;
      position: absolute;
      bottom: -2px;
      border-bottom: 2px solid #409eff;
    }
  }
  &.left {
    float: left;
    border-right: 2px solid #e4e7ed;
    border-bottom: none;

    margin-right: 10px;
    .wl-tab-nav-wrapper {
      /* margin-left: 0px; */
      text-align: right;
      .line {
        top: 0px;
        bottom: auto;
        border-right: 2px solid #409eff;
        border-bottom: none;
        left: auto;
        right: -2px;
      }
    }
  }
}
</style>