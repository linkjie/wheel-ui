---
title: 'Button - 按钮'

---
# Button 按钮
常用的操作按钮。


## 基础用法

基础的按钮用法

<ClientOnly>
  <button-demo></button-demo>
</ClientOnly>

```vue
<wl-button>默认按钮</wl-button>
<wl-button type="primary">主要按钮</wl-button>
<wl-button type="success">成功按钮</wl-button>
<wl-button type="info">信息按钮</wl-button>
<wl-button type="warning">警告按钮</wl-button>
<wl-button type="danger">危险按钮</wl-button>
```
## 禁用按钮

按钮不可用状态。

<ClientOnly>
  <button-demo_1></button-demo_1>
</ClientOnly>

```vue
<wl-button>默认按钮</wl-button>
<wl-button type="primary" disabled>主要按钮</wl-button>
<wl-button type="success" disabled>成功按钮</wl-button>
<wl-button type="info" disabled>信息按钮</wl-button>
<wl-button type="warning" disabled>警告按钮</wl-button>
<wl-button type="danger" disabled>危险按钮</wl-button>
```
## 图标按钮

带图标的按钮

<ClientOnly>
  <button-demo_2></button-demo_2>
</ClientOnly>

```vue
<wl-button type="primary" icon="icon-edit"></wl-button>
<wl-button type="primary" icon="icon-delete"></wl-button>
<wl-button type="primary" icon="icon-share"></wl-button>
<wl-button type="primary" icon="icon-search">搜索</wl-button>
<wl-button type="primary" icon="icon-upload">上传</wl-button>
```
## 加载按钮

在按钮上显示加载状态

<ClientOnly>
  <button-demo_3></button-demo_3>
</ClientOnly>

```vue
<wl-button type="primary" :loading="true">加载中</wl-button>
```
## 按钮组
以按钮组的方式出现
<ClientOnly>
  <buttongroup></buttongroup>
</ClientOnly>

```vue
 <wl-button-group>
    <wl-button type="primary" icon="icon-left">上一页</wl-button>
    <wl-button type="primary">更多</wl-button>
    <wl-button type="primary">下一页<wl-icon icon="icon-right" /></wl-button>
</wl-button-group>
```

