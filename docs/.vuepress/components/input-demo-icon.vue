<template>
  <div class="InputWrapper">
    <div class="defaultInput">
      <wl-input v-model="value" placeholder="请输入内容" icon="icon-upload"></wl-input>
    </div>
    <div class="attributes">使用 icon 属性在input组件尾部增加显示图标</div>
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
  .attributes {
    border: 1px solid #ebebeb;
    background-color: #fafafa;
    margin: 20px 10px;
    font-size: 15px;
    padding: 10px;
  }
}
</style>