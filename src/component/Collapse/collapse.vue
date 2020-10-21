<template>
  <div class="wl-collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: {
    accordion: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Array, String],
    },
  },
  provide() {
    return {
      eventBus: this.eventBus,
      accordion: this.accordion,
      defaultName: this.value,
    };
  },
  created() {
    if (!this.accordion && typeof this.value === "string") {
      throw new Error("非手风琴模式 value必须为一个字符串");
    }
    if (this.accordion && this.value instanceof Array) {
      throw new Error("手风琴模式 value必须为一个字符串");
    }
  },
  mounted() {
    if (this.value) {
      this.eventBus.$on("selectItem", (action, value) => {
        let newvalue;
        if (action === "push") {
          this.value.push(value);
          newvalue = this.value;
        } else if (action === "del") {
          newvalue = this.value.filter((item) => {
            return item != value;
          });
        } else {
          newvalue = value;
        }
        this.$emit("input", newvalue);
      });
    }
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
};
</script>

<style lang="scss" scoped>
.wl-collapse {
  border-top: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
}
</style>