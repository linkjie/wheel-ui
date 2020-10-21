<template>
  <div class="buttonWraaper">
    <div class="defaultButton">
      <wl-button-group>
        <wl-button type="primary" icon="icon-left">上一页</wl-button>
        <wl-button type="primary">更多</wl-button>
        <wl-button type="primary">
          下一页
          <wl-icon icon="icon-right" />
        </wl-button>
      </wl-button-group>
    </div>
    <div class="attributes">使用 {{content}} 标签来嵌套你的按钮。</div>
  </div>
</template>

<script>
import Button from "../../../src/component/Button/button";
import ButtonGroup from "../../../src/component/Button/button-group";
import Icon from "../../../src/component/C_Icon/icon";
export default {
  components: {
    "wl-button": Button,
    "wl-button-group": ButtonGroup,
    "wl-icon": Icon,
  },
  data() {
    return {
      content: "<wl-button-group>",
    };
  },
};
</script>

<style lang="scss" scoped>
.buttonWraaper {
  border: 1px solid #ebebeb;
  padding: 10px;
  .defaultButton {
    margin-left: 10px;
    display: flex;
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