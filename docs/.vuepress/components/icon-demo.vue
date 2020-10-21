<template>
  <div class="IconsWraaper">
    <div class="defaultIcon">
      <wl-icon icon="icon-edit"></wl-icon>
      <wl-icon icon="icon-delete"></wl-icon>
      <wl-icon icon="icon-upload"></wl-icon>
      <wl-button type="primary" icon="icon-search">搜索</wl-button>
    </div>
  </div>
</template>

<script>
import Button from "../../../src/component/Button/button";
import Icon from "../../../src/component/C_Icon/icon";
export default {
  components: {
    "wl-button": Button,
    "wl-icon": Icon,
  },
};
</script>

<style lang="scss" scoped>
.IconsWraaper {
  border: 1px solid #ebebeb;
  padding: 10px;
  .defaultIcon {
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