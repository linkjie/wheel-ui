---
title: 'Container - 容器布局'
---
# Container 容器布局
用于布局的容器组件，方便快速搭建页面的基本结构：

## 常见布局
&nbsp;
<ClientOnly>
  <Container-demo></Container-demo>
</ClientOnly>

```vue
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
```