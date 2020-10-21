<template>
  <div class="wl-tabs">
    <wl-tab-nav :tabPosition="tabPosition">
      <wl-tab-item
        :tabPosition="tabPosition"
        v-for="item in nav_items"
        :key="item[0]"
        :label="item[0]"
        :disabled="item[2]"
        :tabName="item[1]"
      >{{item[0]}}</wl-tab-item>
    </wl-tab-nav>
    <wl-tab-content :tabPosition="tabPosition">
      <slot name="label"></slot>
      <slot></slot>
    </wl-tab-content>
  </div>
</template>

<script>
import Vue from "vue";
import Nav from "./tab-nav";
import Item from "./tab-item";
import Content from "./tab-content";
export default {
  components: {
    "wl-tab-nav": Nav,
    "wl-tab-content": Content,
    "wl-tab-item": Item,
  },
  data() {
    return {
      eventbus: new Vue(),
      nav_items: [],
    };
  },

  props: {
    value: {
      type: String,
    },
    tabPosition: {
      type: String,
      default: "top",
    },
  },
  provide() {
    return {
      eventbus: this.eventbus,
      // tabPosition: this.tabPosition,
    };
  },
  created() {
    this.eventbus.$on("create_nav_item", (label) => {
      this.nav_items.push(label);
    });
    this.eventbus.$on("changeValue", (name) => {
      this.$emit("input", name);
    });
    this.eventbus.$on("tab_click", (tab) => {
      this.$emit("tab_click", tab, event);
    });
  },
  updated() {
    if (this.value) {
      this.eventbus.$emit("default_tab", this.value);
    } else {
      this.eventbus.$emit("default_tab", this.nav_items[0][1]);
    }
  },
};
</script>

<style lang="scss" scoped>
.wl-tabs {
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