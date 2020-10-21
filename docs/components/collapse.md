---
title: 'Collapse - 折叠面板'
---
# Collapse 折叠面板
通过折叠面板收纳内容区域

## 基础用法
可同时展开多个面板，面板之间不影响

<ClientOnly>
  <collapse-demo-base></collapse-demo-base>
</ClientOnly>

```vue
<wl-collapse v-model="activeNames">
    <wl-collapse-item title="This is panel header 1" name="key1">
        这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
    </wl-collapse-item>
    <wl-collapse-item title="This is panel header 2" name="key2">
        这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
    </wl-collapse-item>
    <wl-collapse-item title="This is panel header 3" name="key3">
        这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
    </wl-collapse-item>
    <wl-collapse-item title="This is panel header 4" name="key4">
        这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
    </wl-collapse-item>
</wl-collapse>

<script>
export default {
  data() {
    return {
      activeNames: ["key2"],
    };
  },
};
</script>
```

## 手风琴效果

每次只能展开一个面板

<ClientOnly>
  <collapse-demo-accordion></collapse-demo-accordion>
</ClientOnly>

```vue
<wl-collapse v-model="activeNames" accordion>
    <wl-collapse-item title="This is panel header 1" name="key1">
        这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
    </wl-collapse-item>
    <wl-collapse-item title="This is panel header 2" name="key2">
        这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
    </wl-collapse-item>
    <wl-collapse-item title="This is panel header 3" name="key3">
        这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
    </wl-collapse-item>
    <wl-collapse-item title="This is panel header 4" name="key4">
        这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
    </wl-collapse-item>
</wl-collapse>

<script>
export default {
  data() {
    return {
      activeNames: "key2",
    };
  },
};
</script>
```

## 自定义标题
除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。

<ClientOnly>
  <collapse-demo-drytitle></collapse-demo-drytitle>
</ClientOnly>

```vue
<wl-collapse v-model="activeNames" accordion>
    <wl-collapse-item title="This is panel header 1" name="key1">
        这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
    </wl-collapse-item>
    <wl-collapse-item  name="key2">
        <template slot="title">
            This is panel header 4
            <wl-icon icon="icon-info" class="title_icon"><wl-icon>
        </template>
        这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
    </wl-collapse-item>
    <wl-collapse-item title="This is panel header 3" name="key3">
        这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
    </wl-collapse-item>
    <wl-collapse-item title="This is panel header 4" name="key4">
        这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
    </wl-collapse-item>
</wl-collapse>

<script>
export default {
  data() {
    return {
      activeNames: "key2",
    };
  },
};
</script>
```
