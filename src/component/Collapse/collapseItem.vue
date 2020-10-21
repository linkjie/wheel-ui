<template>
  <div class="wl-collapse_item" :class="{isActive}" :key="name">
    <div class="wl-collapse_title" @click="active">
      <slot name="title">{{title}}</slot>

      <Icon class="wl-collapse_arrow" icon="icon-right" />
    </div>
    <div class="wl-collapse_content">
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "../C_Icon/icon";
export default {
  components: {
    Icon,
  },
  inject: ["eventBus", "accordion", "defaultName"],
  created() {
    if (this.accordion) {
      this.eventBus.$on("accordion_trigger", (item) => {
        if (item === this) {
          return;
        }
        this.isActive = false;
      });
    }
    if (this.defaultName) {
      if (!this.accordion && this.defaultName.indexOf(this.name) >= 0) {
        this.isActive = true;
      }
      if (this.accordion && this.defaultName === this.name) {
        this.isActive = true;
      }
    }
  },
  props: {
    title: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    active() {
      if (this.isActive === false && this.accordion) {
        this.eventBus.$emit("accordion_trigger", this);
        this.eventBus.$emit("selectItem", "change", this.name);
      } else if (this.isActive === false && !this.accordion) {
        this.eventBus.$emit("selectItem", "push", this.name);
      } else if (this.isActive === true && !this.accordion) {
        this.eventBus.$emit("selectItem", "del", this.name);
      }
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss" scoped>
.wl-collapse_item {
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;
  .wl-collapse_title {
    box-sizing: border-box;

    font-size: 14px;
    height: 48px;
    line-height: 48px;
    background-color: #fff;
    color: #303133;
    cursor: pointer;
    .wl-collapse_arrow {
      box-sizing: border-box;
      float: right;
      font-size: 14px;
      height: 48px;
      line-height: 48px;
      margin-right: 10px;
      transition: all 0.3s;
    }
  }
  &.isActive {
    .wl-collapse_title {
      .wl-collapse_arrow {
        transform: rotate(90deg);
      }
    }
    .wl-collapse_content {
      height: auto;
      padding-bottom: 25px;
    }
  }
  .wl-collapse_content {
    box-sizing: border-box;
    height: 0px;
    /* padding-bottom: 0px; */
    font-size: 14px;
    color: #303133;
    line-height: 1.5;
    box-sizing: border-box;
    background-color: #fff;
    overflow: hidden;
    transition: all 0.3s;
  }
}
</style>