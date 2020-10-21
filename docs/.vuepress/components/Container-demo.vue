<template>
  <div class="Wraaper">
    <div class="content">
      <wl-container>
        <wl-header>Header</wl-header>
        <wl-main>Main</wl-main>
      </wl-container>
      <wl-container>
        <wl-header>Header</wl-header>
        <wl-main>Main</wl-main>
        <wl-footer>Footer</wl-footer>
      </wl-container>
      <wl-container>
        <wl-aside>Aside</wl-aside>
        <wl-main>Main</wl-main>
      </wl-container>
      <wl-container>
        <wl-header>Header</wl-header>
        <wl-container>
          <wl-aside>Aside</wl-aside>
          <wl-main>Main</wl-main>
        </wl-container>
        <wl-footer>Footer</wl-footer>
      </wl-container>
      <wl-container>
        <wl-container>
          <wl-aside>Aside</wl-aside>
          <wl-container>
            <wl-header>Header</wl-header>
            <wl-main>Main</wl-main>
          </wl-container>
        </wl-container>
        <wl-footer>Footer</wl-footer>
      </wl-container>
    </div>
    <div class="attributes">当子元素有 Aside 组件时会水平排列</div>
  </div>
</template>

<script>
import Container from "../../../src/component/Container/container";
import Header from "../../../src/component/Container/header";
import Main from "../../../src/component/Container/main";
import Footer from "../../../src/component/Container/footer";
import Aside from "../../../src/component/Container/aside";
export default {
  components: {
    "wl-container": Container,
    "wl-header": Header,
    "wl-footer": Footer,
    "wl-main": Main,
    "wl-aside": Aside,
  },
};
</script>

<style lang="scss" scoped>
.Wraaper {
  border: 1px solid #ebebeb;
  padding: 10px;
  .content {
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