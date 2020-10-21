# 一个自制的简易Vue UI库 - wheel UI


## 介绍


## 开始使用
1. 安装
    ```
    npm i --save lkj-wheel-ui
    ```
2. 引入wheel UI

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

引入部分组件

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


## 文档