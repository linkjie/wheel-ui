<template>
  <div class="Wraaper">
    <div class="position_button">
      <wl-button type="primary" @click="change('top')">top</wl-button>
      <wl-button type="primary" @click="change('left')">left</wl-button>
    </div>
    <div class="content">
      <wl-tabs
        class="tabs"
        :tabPosition="tabPosition"
        v-model="activeName"
        @tab_click="handleClick"
      >
        <wl-tab-pane label="个人主页" name="home">个人主页</wl-tab-pane>
        <wl-tab-pane label="关于" name="about">关于</wl-tab-pane>
        <wl-tab-pane label="个人档案" name="profile">个人档案</wl-tab-pane>
        <wl-tab-pane label="个人设置" name="edit">个人设置</wl-tab-pane>
      </wl-tabs>
    </div>
    <div
      class="attributes"
    >标签当前有两个方向的设置 tabPosition=" left | top " , 默认值为 top , 后续会增添 right | bottom</div>
  </div>
</template>

<script>
import Tabs from "../../../src/component/Tabs/tabs";
import TabPane from "../../../src/component/Tabs/tab-pane";
import Button from "../../../src/component/Button/button";
export default {
  components: {
    "wl-tabs": Tabs,
    "wl-tab-pane": TabPane,
    "wl-button": Button,
  },
  data() {
    return {
      activeName: "about",
      tabPosition: "top",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    change(position) {
      this.tabPosition = position;
    },
  },
};
</script>

<style lang="scss" scoped>
.Wraaper {
  border: 1px solid #ebebeb;
  padding: 10px;
  .position_button {
    margin: 10px 0;
    margin-left: 10px;
  }
  .content {
    margin-left: 10px;
    justify-content: space-around;
    min-height: 180px;
    .icon {
      margin-right: 20px;
      font-size: 18px;
    }
  }
  .attributes {
    border: 1px solid #ebebeb;
    background-color: #fafafa;
    margin: 20px 10px;
    font-size: 15px;
    padding: 10px;
  }
  .content > .wl-container {
    margin-bottom: 20px;
  }
  .wl-header,
  .wl-footer {
    line-height: 60px;
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
  }
  .wl-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .wl-aside {
    width: 200px;
    text-align: center;
    background-color: #d3dce6;
    line-height: 200px;
  }
}
</style>