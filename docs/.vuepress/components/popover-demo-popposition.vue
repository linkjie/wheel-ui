<template>
  <div class="Wraaper">
    <div class="content">
      <wl-popover title="Title" popPosition="left">
        <template slot="content">
          <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
        </template>
        <wl-button type="primary">left</wl-button>
      </wl-popover>
      <wl-popover title="Title" popPosition="top">
        <template slot="content">
          <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
        </template>
        <wl-button type="primary">top</wl-button>
      </wl-popover>
      <wl-popover title="Title" popPosition="bottom">
        <template slot="content">
          <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
        </template>
        <wl-button type="primary">bottom</wl-button>
      </wl-popover>
      <wl-popover title="Title" popPosition="right">
        <template slot="content">
          <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
        </template>
        <wl-button type="primary">right</wl-button>
      </wl-popover>
    </div>
    <div class="attributes">使用 popPosition 属性选择弹出方式 trigger=" top | right | bottom | left " 默认值为 top</div>
  </div>
</template>

<script>
import Popover from "../../../src/component/Popover/popover";
import Button from "../../../src/component/Button/button";
export default {
  components: {
    "wl-popover": Popover,
    "wl-button": Button,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.Wraaper {
  border: 1px solid #ebebeb;
  padding: 10px;
  button {
    margin: 0 20px;
  }
  .content {
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
  .content > .wl-container {
    margin-bottom: 20px;
  }
  .wl-header,
  .wl-footer {
    line-height: 60px;
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
  }
  .wl-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .wl-aside {
    width: 200px;
    text-align: center;
    background-color: #d3dce6;
    line-height: 200px;
  }
}
</style>