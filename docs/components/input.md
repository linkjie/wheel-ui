---
title: 'Input - 输入框'
---
# Input 输入框
通过鼠标或键盘输入字符

## 基础用法
&nbsp;
<ClientOnly>
  <input-demo-base></input-demo-base>
</ClientOnly>

```vue
<wl-input v-model="input" placeholder="请输入内容"></wl-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
## 禁用状态
&nbsp;
<ClientOnly>
  <input-demo-disabled></input-demo-disabled>
</ClientOnly>
```vue
<wl-input v-model="input" placeholder="请输入内容" disabled></wl-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
## 可清空 
&nbsp;
<ClientOnly>
  <input-demo-clearable></input-demo-clearable>
</ClientOnly>
```vue
 <wl-input v-model="input" placeholder="请输入内容" clearable></wl-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
## 带 icon 的输入框
&nbsp;
<ClientOnly>
  <input-demo-icon></input-demo-icon>
</ClientOnly>
```vue
<wl-input v-model="input" placeholder="请输入内容" icon="icon-upload"></wl-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```