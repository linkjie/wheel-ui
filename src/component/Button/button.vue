<template>
  <button class="w-button" :class="[type,{disabled}]" :disabled="disabled" @click="handelClick">
    <w-icon class="icon_font" :icon="icon"></w-icon>
    <w-icon class="loading" v-if="loading === true " icon="icon-loadding"></w-icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Icon from "../C_Icon/icon";
export default {
  props: {
    type: {
      type: String,
    },
    icon: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  name: "w-button",
  components: {
    "w-icon": Icon,
  },
  methods: {
    handelClick() {
      this.$emit("click", "");
    },
  },
};
</script>

<style lang="scss" scoped>
$h_fcolor: #fff;
.w-button {
  .icon_font {
    margin-right: 3px;
  }
  display: inline-flex;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #409eff;
  }

  &.primary {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
    &:hover,
    &:focus {
      background: #409eff;
      color: $h_fcolor;
    }
    &.disabled {
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;
    }
  }
  &.success {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
    &:hover,
    &:focus {
      background: #67c23a;
      color: $h_fcolor;
    }
    &.disabled {
      color: #fff;
      background-color: #b3e19d;
      border-color: #b3e19d;
    }
  }
  &.info {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
    &:hover,
    &:focus {
      background: #909399;
      color: $h_fcolor;
    }
    &.disabled {
      color: #fff;
      background-color: #c8c9cc;
      border-color: #c8c9cc;
    }
  }
  &.warning {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
    &:hover,
    &:focus {
      background: #e6a23c;
      color: $h_fcolor;
    }
    &.disabled {
      color: #fff;
      background-color: #f3d19e;
      border-color: #f3d19e;
    }
  }
  &.danger {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
    &:hover,
    &:focus {
      background: #f56c6c;
      color: $h_fcolor;
    }
    &.disabled {
      color: #fff;
      background-color: #fab6b6;
      border-color: #fab6b6;
    }
  }
  &.disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  animation: spin 1s infinite linear;
  margin-right: 3px;
}
</style>