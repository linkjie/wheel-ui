---
title: 'Grid - 栅格布局'
---
# Grid 栅格布局
通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局
使用单一分栏创建基础的栅格布局。

<ClientOnly>
  <grid-demo-base></grid-demo-base>
</ClientOnly>

```vue
<wl-row>
  <wl-col span="24"><div class="grid-content"></div></wl-col>
</wl-row>
<wl-row>
  <wl-col span="12"><div class="grid-content"></div></wl-col>
  <wl-col span="12"><div class="grid-content"></div></wl-col>
</wl-row>
<wl-row>
  <wl-col span="8"><div class="grid-content"></div></wl-col>
  <wl-col span="8"><div class="grid-content"></div></wl-col>
  <wl-col span="8"><div class="grid-content"></div></wl-col>
</wl-row>
  <wl-col span="6"><div class="grid-content"></div></wl-col>
  <wl-col span="6"><div class="grid-content"></div></wl-col>
  <wl-col span="6"><div class="grid-content"></div></wl-col>
  <wl-col span="6"><div class="grid-content"></div></wl-col>
</wl-row>
  <wl-col span="4"><div class="grid-content"></div></wl-col>
  <wl-col span="4"><div class="grid-content"></div></wl-col>
  <wl-col span="4"><div class="grid-content"></div></wl-col>
  <wl-col span="4"><div class="grid-content"></div></wl-col>
  <wl-col span="4"><div class="grid-content"></div></wl-col>
  <wl-col span="4"><div class="grid-content"></div></wl-col>
</wl-row>
<wl-row>
  <wl-col span="4"><div class="grid-content"></div></wl-col>
  <wl-col span="20"><div class="grid-content"></div></wl-col>
</wl-row>

<style>
  .wl-row {
    margin-bottom: 10px;
  }
  .grid-content {
    min-height: 36px;
    border-radius: 4px;
    background: #d3dce6;
    border: 1px solid #999;
    text-align: center;
    font-size: 20px;
  }
</style>
```

## 分栏间隔
分栏之间存在间隔。

<ClientOnly>
  <grid-demo-gutter></grid-demo-gutter>
</ClientOnly>

```vue
<wl-row gutter="20">
  <wl-col span="6"><div class="grid-content"></div></wl-col>
  <wl-col span="6"><div class="grid-content"></div></wl-col>
  <wl-col span="6"><div class="grid-content"></div></wl-col>
  <wl-col span="6"><div class="grid-content"></div></wl-col>
</wl-row>
<wl-row gutter="20">
  <wl-col span="8"><div class="grid-content"></div></wl-col>
  <wl-col span="8"><div class="grid-content"></div></wl-col>
  <wl-col span="8"><div class="grid-content"></div></wl-col>
</wl-row>

<style>
  .wl-row {
    margin-bottom: 10px;
  }
  .grid-content {
    min-height: 36px;
    border-radius: 4px;
    background: #d3dce6;
    border: 1px solid #999;
    text-align: center;
    font-size: 20px;
  }
</style>
```
## 混合布局
通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<ClientOnly>
  <grid-demo-mix></grid-demo-mix>
</ClientOnly>

```vue
<wl-row gutter="20">
  <wl-col :span="4"><div class="grid-content"></div></wl-col>
  <wl-col :span="16"><div class="grid-content"></div></wl-col>
  <wl-col :span="4"><div class="grid-content"></div></wl-col>
</wl-row>
<wl-row gutter="20">
  <wl-col :span="16"><div class="grid-content"></div></wl-col>
  <wl-col :span="8"><div class="grid-content"></div></wl-col>
</wl-row>
<wl-row gutter="20">
  <wl-col span="8"><div class="grid-content"></div></wl-col>
  <wl-col span="8"><div class="grid-content"></div></wl-col>
  <wl-col span="4"><div class="grid-content"></div></wl-col>
  <wl-col span="4"><div class="grid-content"></div></wl-col>
</wl-row>

<style>
  .wl-row {
    margin-bottom: 10px;
  }
  .grid-content {
    min-height: 36px;
    border-radius: 4px;
    background: #d3dce6;
    border: 1px solid #999;
    text-align: center;
    font-size: 20px;
  }
</style>
```
## 分栏偏移
支持偏移指定的栏数。

<ClientOnly>
  <grid-demo-offset></grid-demo-offset>
</ClientOnly>

```vue
<wl-row gutter="20">
  <wl-col span="6"><div class="grid-content"></div></wl-col>
  <wl-col span="6" offset="6"><div class="grid-content"></div></wl-col>
</wl-row>
<wl-row gutter="20">
  <wl-col span="6" offset="6"><div class="grid-content"></div></wl-col>
  <wl-col span="6" offset="6"><div class="grid-content"></div></wl-col>
</wl-row>
<wl-row gutter="20">
  <wl-col span="12" offset="6"><div class="grid-content"></div></wl-col>
</wl-row>

<style>
  .wl-row {
    margin-bottom: 10px;
  }
  .grid-content {
    min-height: 36px;
    border-radius: 4px;
    background: #d3dce6;
    border: 1px solid #999;
    text-align: center;
    font-size: 20px;
  }
</style>
```
## 响应式布局
预设了五个响应尺寸：xs、sm、md、lg 和 xl。

<ClientOnly>
  <grid-demo-media></grid-demo-media>
</ClientOnly>

```vue
<wl-row>
  <wl-col xs="8" sm="6" md="4" lg="3" xl="1"><div class="grid-content"></div></wl-col>
  <wl-col xs="4" sm="6" md="8" lg="9" xl="11"><div class="grid-content"></div></wl-col>
  <wl-col xs="4" sm="6" md="8" lg="9" xl="11"><div class="grid-content"></div></wl-col>
  <wl-col xs="8" sm="6" md="4" lg="3" xl="1"><div class="grid-content"></div></wl-col>
</wl-row>
<wl-row>
  <wl-col span="20" :xs="{span:8}" :sm="{span:8}"><div class="grid-content"></div></wl-col>
  <wl-col span="4" :xs="{span:8,offset:8}" :sm="{span:8}"><div class="grid-content">
  </div></wl-col>
</wl-row>
```
