<template>
  <div>
    {{activeName}}
    <wl-collapse v-model="activeName">
      <wl-collapse-item title="用户" name="user">用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户</wl-collapse-item>
      <wl-collapse-item title="姓名" name="name">姓名用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户</wl-collapse-item>
      <wl-collapse-item title="密码" name="pwd">密码用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户</wl-collapse-item>
      <wl-collapse-item name="about">
        <template slot="title">
          关于
          <w-icon icon="icon-info" class="title_icon"></w-icon>
        </template>
        密码用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户
      </wl-collapse-item>
    </wl-collapse>
  </div>
</template>

<script>
import Collapse from "./component/Collapse/collapse";
import CollapseItem from "./component/Collapse/collapseItem";
export default {
  components: {
    "wl-collapse": Collapse,
    "wl-collapse-item": CollapseItem,
  },
  data() {
    return {
      activeName: ["pwd", "user"],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>