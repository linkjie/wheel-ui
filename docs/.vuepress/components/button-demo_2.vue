<template>
  <div class="buttonWraaper">
    <div class="defaultButton">
      <w-button type="primary" icon="icon-edit"></w-button>
      <w-button type="primary" icon="icon-delete"></w-button>
      <w-button type="primary" icon="icon-share"></w-button>
      <w-button type="primary" icon="icon-search">搜索</w-button>
      <w-button type="primary" icon="icon-upload">上传</w-button>
    </div>
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
    > button {
      margin: 0 10px;
    }
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