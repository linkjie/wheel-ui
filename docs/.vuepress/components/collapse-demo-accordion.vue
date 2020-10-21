<template>
  <div class="Wraaper">
    <div class="content">
      <wl-collapse v-model="activeNames" accordion>
        <wl-collapse-item title="This is panel header 1" name="key1">这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容</wl-collapse-item>
        <wl-collapse-item title="This is panel header 2" name="key2">这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容</wl-collapse-item>
        <wl-collapse-item title="This is panel header 3" name="key3">这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容</wl-collapse-item>
        <wl-collapse-item title="This is panel header 4" name="key4">这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容</wl-collapse-item>
      </wl-collapse>
    </div>
    <div class="attributes">通过 accordion 属性来设置是否以手风琴模式显示 , 当为手风琴模式时 , 参数 value 类型为一个字符串</div>
  </div>
</template>

<script>
import Collapse from "../../../src/component/Collapse/collapse";
import CollapseItem from "../../../src/component/Collapse/collapseItem";
export default {
  components: {
    "wl-collapse": Collapse,
    "wl-collapse-item": CollapseItem,
  },

  data() {
    return {
      activeNames: "key2",
    };
  },
};
</script>

<style lang="scss" scoped>
.Wraaper {
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