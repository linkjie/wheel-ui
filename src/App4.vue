<template>
  <div>
    {{activeName}}
    <wl-tabs class="tabs" v-model="activeName">
      <wl-tab-pane label="个人主页" name="home">Home</wl-tab-pane>
      <wl-tab-pane label="关于" name="about">About</wl-tab-pane>
      <wl-tab-pane label="个人档案" name="profile">Profile</wl-tab-pane>
      <wl-tab-pane label="hello" name="hello">Hello</wl-tab-pane>
    </wl-tabs>
  </div>
</template>

<script>
import Tabs from "./component/Tabs/tabs";
import Nav from "./component/Tabs/tab-nav";
import Item from "./component/Tabs/tab-item";
import Content from "./component/Tabs/tab-content";
import Pane from "./component/Tabs/tab-pane";
export default {
  components: {
    "wl-tabs": Tabs,
    "wl-tab-nav": Nav,
    "wl-tab-item": Item,
    "wl-tab-content": Content,
    "wl-tab-pane": Pane,
  },
  data() {
    return {
      activeName: "home",
    };
  },
  methods: {
    handelClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" >
/* * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
} */
.tabs {
  /* margin: 20px; */
}
</style>