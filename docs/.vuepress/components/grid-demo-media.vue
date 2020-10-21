<template>
  <div class="GridWrapper">
    <div class="content">
      <wl-row>
        <wl-col xs="8" sm="6" md="4" lg="3" xl="1">
          <div class="grid-content"></div>
        </wl-col>
        <wl-col xs="4" sm="6" md="8" lg="9" xl="11">
          <div class="grid-content"></div>
        </wl-col>
        <wl-col xs="4" sm="6" md="8" lg="9" xl="11">
          <div class="grid-content"></div>
        </wl-col>
        <wl-col xs="8" sm="6" md="4" lg="3" xl="1">
          <div class="grid-content"></div>
        </wl-col>
      </wl-row>
      <wl-row>
        <wl-col span="20" :xs="{span:8}" :sm="{span:8}">
          <div class="grid-content"></div>
        </wl-col>
        <wl-col span="4" :xs="{span:8,offset:8}" :sm="{span:8}">
          <div class="grid-content"></div>
        </wl-col>
      </wl-row>
    </div>
    <div class="attributes">通过预设的响应尺寸传入参数 , 参数类型为Number或者Object</div>
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
