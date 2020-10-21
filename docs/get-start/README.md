---
title: '快速上手'
---
### 快速上手
本节将介绍如何在项目中使用 wheel-ui. 需引入css文件

## 使用vue-cli
```shell script
> npm i -g vue-cli
> mkdir my-project && cd my-project
> vue create webpack
> npm i lkj-wheeel-ui 
```

### 引入wheel UI
你可以引入整个 Wheel，或是根据需要仅引入部分组件。

## 完整引入

在 main.js 中写入以下内容：
```javascript
import Vue from 'vue'
import Wheel from 'lkj-wheel-ui'
import "lkj-wheel-ui/dist/index.css";
import App from './App.vue'

Vue.use(Wheel)

new Vue({
  el: '#app',
  render: h => h(App)
})

```

## 引入部分组件

```javascript
import Vue from 'vue'
import {Button,Icon} from 'lkj-wheel-ui'
import "lkj-wheel-ui/dist/index.css";
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)
/* 或写为
 * Vue.use(Button)
 * Vue.use(Icon)
 */
new Vue({
  el: '#app',
  render: h => h(App)
})

```

## 开始使用
一个基于 Vue 和 Wheel 的开发环境已经搭建完毕，现在就可以编写代码了。启动开发模式：
```shell script
# 执行如下命令后访问 localhost:8086
npm run serve
```
打包:
```shell script
npm run build
```