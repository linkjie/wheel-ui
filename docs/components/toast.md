---
title: 'Toast - 消息提示'
---
# Toast 消息提示
提供操作后的反馈信息。

## 基础用法
Toast组件为 Vue.prototype 添加了全局方法 $toast , 参数为消息体字符串或对象 Object{option}

<ClientOnly>
  <toast-demo-base></toast-demo-base>
</ClientOnly>

```vue
<wl-button @click="open">打开消息提示</wl-button>
<wl-button @click="open_duration">延迟时间</wl-button>

<script>
import Vue from 'vue'
import {Toast} from 'lkj-wheel-ui'
Vue.use(Toast)
export default {
  methods: {
    open() {
      this.$toast("This is a normal message");
    },
    open_duration() {
      this.$toast({
        message: "This is a normal message",
        duration: 1,
      });
    },
  },
};
</script>
```

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

<ClientOnly>
  <toast-demo-status></toast-demo-status>
</ClientOnly>

```vue
<wl-button type="info" @click="open">信息</wl-button>
<wl-button type="success" @click="openSuccess">成功</wl-button>
<wl-button type="warning" @click="openWarning">警告</wl-button>
<wl-button type="danger" @click="openError">错误</wl-button>

<script>
import Vue from 'vue'
import {Toast} from 'lkj-wheel-ui'
Vue.use(Toast)
export default {
  methods: {
    open() {
      this.$toast({
        message: "This is a normal message",
        type: "info",
      });
    },
    openSuccess() {
      this.$toast({
        message: "This is a success message",
        type: "success",
      });
    },
    openWarning() {
      this.$toast({
        message: "This is a warning message",
        type: "warning",
      });
    },
    openError() {
      this.$toast({
        message: "This is a error message",
        type: "error",
      });
    },
  },
};
</script>
```

## 可关闭
可以添加关闭按钮。

<ClientOnly>
  <toast-demo-closeable></toast-demo-closeable>
</ClientOnly>

```vue
<wl-button type="info" @click="open">信息</wl-button>
<wl-button type="success" @click="openSuccess">成功</wl-button>
<wl-button type="warning" @click="openWarning">警告</wl-button>
<wl-button type="danger" @click="openError">错误</wl-button>

<script>
import Vue from 'vue'
import {Toast} from 'lkj-wheel-ui'
Vue.use(Toast)
export default {
  methods: {
    open() {
      this.$toast({
        message: "This is a normal message",
        type: "info",
        showClose: true,
        onClose: (instanse) => {
          console.log(instanse);
        },
      });
    },
    openSuccess() {
      this.$toast({
        message: "This is a success message",
        type: "success",
        showClose: true,
      });
    },
    openWarning() {
      this.$toast({
        message: "This is a warning message",
        type: "warning",
        showClose: true,
      });
    },
    openError() {
      this.$toast({
        message: "This is a error message",
        type: "error",
        showClose: true,
      });
    },
  },
};
</script>
```
## 弹出位置
可以设置提示从屏幕上方、中间、底部弹出

<ClientOnly>
  <toast-demo-position></toast-demo-position>
</ClientOnly>

```vue
<wl-button @click="topOpen">top</wl-button>
<wl-button @click="centerOpen">center</wl-button>
<wl-button @click="bottomOpen">bottom</wl-button>

<script>
import Vue from 'vue'
import {Toast} from 'lkj-wheel-ui'
Vue.use(Toast)
export default {
  methods: {
    topOpen() {
      this.$toast({
        message: "This is a normal message",
        position: "top",
      });
    },
    centerOpen() {
      this.$toast({
        message: "This is a normal message",
        position: "center",
      });
    },
    bottomOpen() {
      this.$toast({
        message: "This is a normal message",
        position: "bottom",
      });
    },
  },
};
</script>
    
```