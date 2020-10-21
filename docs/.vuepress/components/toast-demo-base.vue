<template>
  <div class="Wraaper">
    <div class="content">
      <wl-button @click="open">打开消息提示</wl-button>
      <wl-button @click="open_duration">延迟时间</wl-button>
    </div>
    <div class="attributes">默认从顶部出现 , 3秒后关闭 . option : durtion参数设置延迟时间 , 单位(s)</div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "../../../src/component/Toast/index";
import Button from "../../../src/component/Button/button";
Vue.use(Toast);
export default {
  components: {
    "wl-button": Button,
  },
  methods: {
    open() {
      this.$toast("This is a normal message");
    },
    open_duration() {
      this.$toast({
        message: "This is a normal message",
        duration: 1,
      });
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
    button {
      margin-right: 10px;
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