<template>
  <div class="buttonWraaper">
    <div class="defaultButton">
      <w-button>默认按钮</w-button>
      <w-button type="primary">主要按钮</w-button>
      <w-button type="success">成功按钮</w-button>
      <w-button type="info">信息按钮</w-button>
      <w-button type="warning">警告按钮</w-button>
      <w-button type="danger">危险按钮</w-button>
    </div>
    <div class="attributes">根据不同的type属性来选择代表不同状态的button</div>
  </div>
</template>

<script>
import Button from "../../../src/component/Button/button";
export default {
  components: {
    "w-button": Button,
  },
};
</script>

<style lang="scss" scoped>
.buttonWraaper {
  border: 1px solid #ebebeb;
  padding: 10px;
  .defaultButton {
    display: flex;
    justify-content: space-around;
  }
  .attributes {
    border: 1px solid #ebebeb;
    background-color: #fafafa;
    margin: 20px 10px;
    font-size: 15px;
    padding: 10px;
  }
}
</style>