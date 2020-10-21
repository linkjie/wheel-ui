<template>
  <div class="Wraaper">
    <div class="content">
      <wl-tabs class="tabs" v-model="activeName" @tab_click="handleClick">
        <wl-tab-pane label="个人主页" name="home">个人主页</wl-tab-pane>
        <wl-tab-pane label="关于" name="about">关于</wl-tab-pane>
        <wl-tab-pane label="个人档案" name="profile">个人档案</wl-tab-pane>
        <wl-tab-pane label="个人设置" name="edit">个人设置</wl-tab-pane>
      </wl-tabs>
    </div>
    <div class="attributes">可以通过 value 属性来指定当前选中的标签页(默认为第一个)。tab 被选中时触发tab-click事件,回调参数为选中的标签页实例</div>
  </div>
</template>

<script>
import Tabs from "../../../src/component/Tabs/tabs";
import TabPane from "../../../src/component/Tabs/tab-pane";

export default {
  components: {
    "wl-tabs": Tabs,
    "wl-tab-pane": TabPane,
  },
  data() {
    return {
      activeName: "about",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.Wraaper {
  border: 1px solid #ebebeb;
  padding: 10px;

  .content {
    margin-left: 10px;
    justify-content: space-around;
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