<template>
  <div>
    <!-- {{activeName}}
    <wl-collapse single v-model="activeName">
      <wl-collapse-item title="用户" name="user">用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户</wl-collapse-item>
      <wl-collapse-item title="姓名" name="name">姓名用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户</wl-collapse-item>
      <wl-collapse-item title="密码" name="pwd">密码用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户</wl-collapse-item>
      <wl-collapse-item name="about">
        <template slot="title">
          关于
          <wl-icon icon="icon-info" class="title_icon"></wl-icon>
        </template>
        密码用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户用户
      </wl-collapse-item>
    </wl-collapse>

    <wl-container>
      <wl-header>Header</wl-header>
      <wl-main>Main</wl-main>
    </wl-container>

    <wl-popover title="Title" trrigger="hover" position="top">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <wl-button>xxx</wl-button>
    </wl-popover>

    <wl-popover title="Title" trrigger="hover" position="right" trigger="hover">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <wl-button>xxx</wl-button>
    </wl-popover>

    <wl-popover title="Title" trrigger="hover" position="bottom" trigger="click">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <wl-button>xxx</wl-button>
    </wl-popover>

    <wl-popover title="Title" trrigger="hover" position="left">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <wl-button>xxx</wl-button>
    </wl-popover>
    {{activeA}}
    <wl-tabs class="tabs" v-model="activeA" tabPosition="left">
      <wl-tab-pane label="个人主页" name="home">Home</wl-tab-pane>
      <wl-tab-pane label="关于" name="about">About</wl-tab-pane>
      <wl-tab-pane label="个人档案" name="profile">Profile</wl-tab-pane>
      <wl-tab-pane label="hello" name="hello">Hello</wl-tab-pane>
    </wl-tabs>

    <wl-button type="success" @click="aa">xxx</wl-button>-->
    <!-- <wl-icon icon="icon-edit"></wl-icon>
    <wl-icon icon="icon-delete"></wl-icon>
    <wl-icon icon="icon-upload"></wl-icon>
    <wl-button type="primary" icon="icon-search">搜索</wl-button>

    <wl-button disabled>默认按钮</wl-button>
    <wl-button disabled type="primary">主要按钮</wl-button>
    <wl-button type="success" disabled>成功按钮</wl-button>
    <wl-button type="info" disabled>信息按钮</wl-button>
    <wl-button type="warning" disabled>警告按钮</wl-button>
    <wl-button type="danger" disabled>危险按钮</wl-button>
    <br />
    <wl-button type="primary" icon="icon-edit"></wl-button>
    <wl-button type="success" icon="icon-delete"></wl-button>
    <wl-button type="primary" icon="icon-share"></wl-button>
    <wl-button type="primary" icon="icon-search">搜索</wl-button>
    <wl-button type="primary" icon="icon-upload">上传</wl-button>

    <wl-button type="primary" :loading="true">加载中</wl-button>-->
    {{value}}
    <wl-input v-model="value" placeholder="请输入内容"></wl-input>
    <wl-input placeholder="请输入内容" disabled></wl-input>
    <wl-input v-model="value" placeholder="请输入内容" clearable></wl-input>
    <wl-input v-model="value" placeholder="请输入内容" icon="icon-delete"></wl-input>
    <wl-row gutter="20">
      <wl-col span="6">
        <div class="con"></div>
      </wl-col>
      <wl-col span="6">
        <div class="con"></div>
      </wl-col>
      <wl-col span="6">
        <div class="con"></div>
      </wl-col>
      <wl-col span="6">
        <div class="con"></div>
      </wl-col>
    </wl-row>
    <wl-row gutter="20">
      <wl-col span="8">
        <div class="con"></div>
      </wl-col>
      <wl-col span="8">
        <div class="con"></div>
      </wl-col>
      <wl-col span="8">
        <div class="con"></div>
      </wl-col>
    </wl-row>
  </div>
</template>

<script>
import { Button, Icon, Input, Col, Row } from "../index";
import Vue from "vue";

// Vue.use(wheel);
Vue.use(Button);
Vue.use(Input);
Vue.use(Col);
Vue.use(Row);
// Vue.component("wl-button", Button);
export default {
  data() {
    return {
      activeName: "user",
      activeA: "home",
      value: "home",
    };
  },
  methods: {
    aa() {
      this.$Toast({
        message: "ssss",
        type: "success",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
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
.con {
  min-height: 36px;
  border-radius: 4px;
  background: #d3dce6;
  border: 1px solid #999;
  text-align: center;
  font-size: 20px;
}
.wl-row {
  margin-bottom: 10px;
  /* border:1px solid red */
}
</style>