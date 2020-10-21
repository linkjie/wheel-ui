<template>
  <div class="GridWrapper">
    <div class="content">
      <wl-row gutter="20">
        <wl-col span="6">
          <div class="grid-content"></div>
        </wl-col>
        <wl-col span="6" offset="6">
          <div class="grid-content"></div>
        </wl-col>
      </wl-row>
      <wl-row gutter="20">
        <wl-col span="6" offset="6">
          <div class="grid-content"></div>
        </wl-col>
        <wl-col span="6" offset="6">
          <div class="grid-content"></div>
        </wl-col>
      </wl-row>
      <wl-row gutter="20">
        <wl-col span="12" offset="6">
          <div class="grid-content"></div>
        </wl-col>
      </wl-row>
    </div>
    <div class="attributes">通过 Col 组件的 offset 属性可以指定分栏偏移的栏数。</div>
  </div>
</template>

<script>
import Row from "../../../src/component/Grid/row";
import Col from "../../../src/component/Grid/col";
export default {
  components: {
    "wl-row": Row,
    "wl-col": Col,
  },
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.GridWrapper {
  border: 1px solid #ebebeb;
  padding: 10px;
  .content {
    margin-left: 10px;
  }
  .attributes {
    border: 1px solid #ebebeb;
    background-color: #fafafa;
    margin: 20px 10px;
    font-size: 15px;
    padding: 10px;
  }
}
.grid-content {
  min-height: 36px;
  border-radius: 4px;
  background: #d3dce6;
  border: 1px solid #999;
  text-align: center;
}
.wl-row {
  margin-bottom: 10px;
}
</style>
