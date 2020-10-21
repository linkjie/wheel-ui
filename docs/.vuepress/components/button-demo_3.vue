<template>
  <div class="buttonWraaper">
    <div class="defaultButton">
      <w-button type="primary" :loading="true">加载中</w-button>
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
}
</style>