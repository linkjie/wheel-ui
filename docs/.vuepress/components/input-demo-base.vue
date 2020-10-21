<template>
  <div class="InputWrapper">
    <div class="defaultInput">
      <wl-input v-model="input" placeholder="请输入内容"></wl-input>
    </div>
  </div>
</template>

<script>
import Input from "../../../src/component/Input/input";

export default {
  components: {
    "wl-input": Input,
  },
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.InputWrapper {
  border: 1px solid #ebebeb;
  padding: 10px;
  .defaultInput {
    margin-left: 10px;
    justify-content: space-around;
    .icon {
      margin-right: 20px;
      font-size: 18px;
    }
  }
}
</style>