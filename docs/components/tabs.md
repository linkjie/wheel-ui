---
title: 'Tabs - 标签页'
---
# Tabs 标签页
分隔内容上有关联但属于不同类别的数据集合。

## 基础用法

基础的、简洁的标签页。

<ClientOnly>
  <tabs-demo-base></tabs-demo-base>
</ClientOnly>

```vue
<wl-tabs class="tabs"  v-model="activeName"
  @tab_click="handleClick">
    <wl-tab-pane label="个人主页" name="home">个人主页</wl-tab-pane>
    <wl-tab-pane label="关于" name="about">关于</wl-tab-pane>
    <wl-tab-pane label="个人档案" name="profile">个人档案<wl-tab-pane>
    <wl-tab-pane label="个人设置" name="edit">个人设置<wl-tab-pane>
</wl-tabs>

<script>
export default {
  data() {
    return {
      activeName: "about",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
```

## 位置

可以通过 tabPosition 设置标签的位置

<ClientOnly>
  <tabs-demo-position></tabs-demo-position>
</ClientOnly>

```vue
<wl-tabs class="tabs" :tabPosition="tabPosition" v-model="activeName" 
@tab_click="handleClick">
    <wl-tab-pane label="个人主页" name="home">个人主页<wl-tab-pane>
    <wl-tab-pane label="关于" name="about">关于</wl-tab-pane>
    <wl-tab-pane label="个人档案" name="profile">个人档案<wl-tab-pane>
    <wl-tab-pane label="个人设置" name="edit">个人设置<wl-tab-pane>
</wl-tabs>

<script>
export default {
  data() {
    return {
      activeName: "about",
      tabPosition: "left",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
```
