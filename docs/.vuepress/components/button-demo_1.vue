<template>
  <div class="buttonWraaper">
    <div class="defaultButton">
      <w-button disabled>默认按钮</w-button>
      <w-button type="primary" disabled>主要按钮</w-button>
      <w-button type="success" disabled>成功按钮</w-button>
      <w-button type="info" disabled>信息按钮</w-button>
      <w-button type="warning" disabled>警告按钮</w-button>
      <w-button type="danger" disabled>危险按钮</w-button>
    </div>
    <div class="attributes">使用disabled属性来定义按钮是否可用 , 接受一个Boolean值</div>
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