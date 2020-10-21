---
title: 'Popover - 弹出框'
---
# Popover 弹出框
分隔内容上有关联但属于不同类别的数据集合。

## 激活方式
&nbsp;

<ClientOnly>
  <popover-demo-base></popover-demo-base>
</ClientOnly>

```vue
<wl-popover title="Title">
    <template slot="content">
        <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
    </template>
    <wl-button type="primary">click激活</wl-button>
</wl-popover>
<wl-popover title="Title" trigger="hover">
    <template slot="content">
        <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
    </template>
    <wl-button type="primary">hover激活</wl-button>
</wl-popover>


```

## 弹出位置

可以通过 popPosition 选择弹出位置

<ClientOnly>
  <popover-demo-popposition></popover-demo-popposition>
</ClientOnly>

```vue
<wl-popover title="Title" popPosition="left">
    <template slot="content">
        <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。<div>
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
```