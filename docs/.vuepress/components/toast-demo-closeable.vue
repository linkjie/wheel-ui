<template>
  <div class="Wraaper">
    <div class="content">
      <wl-button type="info" @click="open">信息</wl-button>
      <wl-button type="success" @click="openSuccess">成功</wl-button>
      <wl-button type="warning" @click="openWarning">警告</wl-button>
      <wl-button type="danger" @click="openError">错误</wl-button>
    </div>
    <div
      class="attributes"
    >默认3秒自动关闭,设置选项 showClose 参数为 true 可手动关闭 , 选项 onClose 为关闭后执行的回调,回调参数为当前关闭的实例</div>
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
      this.$toast({
        message: "This is a normal message",
        type: "info",
        showClose: true,
        onClose: (instanse) => {
          console.log(instanse);
        },
      });
    },
    openSuccess() {
      this.$toast({
        message: "This is a success message",
        type: "success",
        showClose: true,
      });
    },
    openWarning() {
      this.$toast({
        message: "This is a warning message",
        type: "warning",
        showClose: true,
      });
    },
    openError() {
      this.$toast({
        message: "This is a error message",
        type: "error",
        showClose: true,
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
    button {
      margin-right: 10px;
    }
    margin-left: 10px;
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