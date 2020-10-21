<template>
  <div
    class="wl-tab-item"
    @click="select"
    :class="[{ select: currentLabel === label,disabled, },tabPosition]"
  >
    <span class="wl-label-wrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  inject: ["eventbus"],

  props: {
    label: {
      type: String,
    },
    tabName: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    tabPosition: {
      type: String,
    },
  },
  data() {
    return {
      currentLabel: "",
      // position: this.tabPosition,
    };
  },
  methods: {
    select() {
      if (this.disabled) {
        return;
      }
      this.eventbus.$emit("update:label", this.label);
    },
  },
  created() {
    this.eventbus.$on("update:label", (label) => {
      this.currentLabel = label;
      if (this.currentLabel === this.label) {
        this.eventbus.$emit("item_click", this);
      }
    });
    this.eventbus.$on("initlabel", (label) => {
      this.currentLabel = label;
      if (this.currentLabel === this.label && !this.disabled) {
        this.eventbus.$emit("item_click", this);
      }
      // this.eventbus.$off("initlabel");
    });
  },
};
</script>

<style lang="scss" scoped>
.wl-tab-item {
  box-sizing: border-box;
  line-height: 40px;
  cursor: pointer;
  float: left;
  padding: 0 20px;
  height: 40px;
  .wl-label-wrapper {
    display: block;
    box-sizing: border-box;
  }
  &.left {
    float: none;
  }
  &.select {
    .wl-label-wrapper {
      display: block;
      color: #409eff;
      font-weight: 400;
    }
  }
  &.disabled {
    .wl-label-wrapper {
      color: rgba(0, 0, 0, 0.25);
      cursor: not-allowed;
    }
  }
}
</style>
