<template>
  <div class="wl-toast" :class="['wl-toast-'+type,'wl-toast-'+position]">
    <span class="wl-icon-type">
      <Icon :icon="'icon-'+type" />
    </span>
    <span class="wl-message-content" :class="{closeable:showClose}">{{message}}</span>
    <span v-if="showClose" class="wl-icon-close" @click="close">
      <Icon icon="icon-close" />
    </span>
  </div>
</template>

<script>
import Icon from "../C_Icon/icon";
export default {
  components: {
    Icon,
  },
  props: {
    message: {
      type: String,
    },
    duration: {
      type: Number,
      default: 3,
    },
    showClose: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "info",
      validator: function (value) {
        const arr = ["success", "warning", "error", "info"];
        return arr.includes(value);
      },
    },
    onClose: {
      type: Function,
    },
    position: {
      type: String,
      default: "top",
      validator: function (value) {
        return ["top", "center", "bottom"].includes(value);
      },
    },
  },
  data() {
    return {
      a: "1",
    };
  },
  mounted() {
    setTimeout(() => {
      this.$el.remove();
      this.$destroy();
    }, this.duration * 1000);
  },
  methods: {
    close() {
      this.onClose(this);
      this.$el.remove();
      this.$destroy();
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes fade-top {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
@keyframes fade-center {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-bottom {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
.wl-toast {
  background-color: #edf2fc;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #ebeef5;
  padding: 15px 15px 15px 20px;
  min-width: 380px;
  position: fixed;
  z-index: 9999;
  display: flex;
  color: #909399;
  /* position */
  &-top {
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    animation: fade-top 0.5s;
  }
  &-center {
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    animation: fade-center 0.5s;
  }
  &-bottom {
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    animation: fade-bottom 0.5s;
  }
  /* type */
  &-success {
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    .wl-icon-type {
      color: #67c23a;
    }
    .wl-message-content {
      color: #67c23a;
    }
  }
  &-warning {
    background-color: #fdf6ec;
    border-color: #faecd8;
    .wl-icon-type {
      color: #e6a23c;
    }
    .wl-message-content {
      color: #e6a23c;
    }
  }
  &-error {
    background-color: #fef0f0;
    border-color: #fde2e2;
    .wl-icon-type {
      color: #f56c6c;
    }
    .wl-message-content {
      color: #f56c6c;
    }
  }
  /* icon */
  .wl-icon-type {
    font-size: 14px;
    font-weight: 400;
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
  > .wl-message-content {
    line-height: 1;
    font-size: 14px;
    padding: 0;
    &.closeable {
      padding-right: 20px;
    }
  }
  .wl-icon-close {
    position: absolute;
    top: 50%;
    display: flex;
    transform: translateY(-50%);
    right: 15px;
    cursor: pointer;
    color: #c0c4cc;
    font-size: 16px;

    &:hover {
      color: #909399;
    }
  }
}
</style>