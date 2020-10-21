<template>
  <div class="wl-tab-pane" v-show="label === currentLabel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  inject: ["eventbus"],
  props: {
    name: {
      type: String,
    },
    label: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentLabel: "",
      active: false,
      tabName: this.name,
    };
  },
  mounted() {},
  created() {
    this.eventbus.$emit("create_nav_item", [
      this.label,
      this.name,
      this.disabled,
    ]);
    this.eventbus.$on("update:label", (label) => {
      this.currentLabel = label;
      if (this.currentLabel === this.label) {
        this.eventbus.$emit("changeValue", this.tabName);
        this.eventbus.$emit("tab_click", this);
      }
    });

    this.eventbus.$on("default_tab", (name) => {
      if (this.tabName === name) {
        this.currentLabel = this.label;
        this.eventbus.$emit("initlabel", this.label);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.wl-tab-pane {
  display: block;
}
</style>