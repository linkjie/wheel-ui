<template>
  <div>
    默认
    <br />
    <wl-button @click="open">消息提示</wl-button>
    <br />状态
    <div class="statu">
      <wl-button type="success" @click="openSuccess">成功</wl-button>
      <wl-button type="warning" @click="openWarning">警告</wl-button>
      <wl-button type="danger" @click="openError">错误</wl-button>
    </div>close
    <div class="close">
      <wl-button @click="open('close')">提示</wl-button>
      <wl-button type="success" @click="openSuccess('close')">成功</wl-button>
      <wl-button type="warning" @click="openWarning('close')">警告</wl-button>
      <wl-button type="danger" @click="openError('close')">错误</wl-button>
    </div>
  </div>
</template>

<script>
import Button from "../../../index.js";
export default {};
</script>

<style lang="scss" scoped>
</style>