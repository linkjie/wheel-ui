<template>
  <div class="wl-popover">
    <div class="wl-popover_content_wrapper" ref="content" v-show="visiable" :class="[popPosition]">
      <div class="wl-popover_content">
        <div class="wl-popover_title">{{title}}</div>
        <div class="wl-popover_inner">
          <slot name="content"></slot>
        </div>
      </div>
      <div class="wl-popover_arrow"></div>
    </div>
    <div class="wl-popover_trigger" ref="trigger">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    popPosition: {
      type: String,
      default: "top",
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      },
    },
  },

  methods: {
    clickHandle() {
      event.stopPropagation();
      this.visiable = !this.visiable;
      if (this.visiable) {
        document.addEventListener("click", this.close);
      }
    },
    close() {
      if (this.$refs.content.contains(event.target)) {
        return;
      }
      this.visiable = false;
    },

    mouseEnter() {
      this.visiable = true;
    },
    mouseLeave() {
      this.visiable = false;
    },
  },
  destroyed() {
    if (this.trigger === "click") {
      this.$refs.trigger.removeEventListener("click", this.clickHandle);
    } else if (this.trigger === "hover") {
      this.$refs.trigger.removeEventListener("mouseenter", this.mouseEnter);
      this.$refs.trigger.removeEventListener("mouseleave", this.mouseLeave);
      this.$refs.content.removeEventListener("mouseenter", this.mouseEnter);
      this.$refs.content.removeEventListener("mouseleave", this.mouseLeave);
    }
  },
  mounted() {
    if (this.trigger === "click") {
      this.$refs.trigger.addEventListener("click", this.clickHandle);
    } else if (this.trigger === "hover") {
      this.$refs.trigger.addEventListener("mouseenter", this.mouseEnter);
      this.$refs.trigger.addEventListener("mouseleave", this.mouseLeave);
      this.$refs.content.addEventListener("mouseenter", this.mouseEnter);
      this.$refs.content.addEventListener("mouseleave", this.mouseLeave);
    }

    document.body.appendChild(this.$refs.content);
    const {
      left,
      top,
      right,
      bottom,
      width,
      height,
    } = this.$refs.trigger.getBoundingClientRect();
    if (this.popPosition === "top") {
      this.$refs.content.style.left = left + width / 2 + window.scrollX + "px";
      this.$refs.content.style.top = top + window.scrollY + "px";
    } else if (this.popPosition === "left") {
      this.$refs.content.style.left = left + window.scrollX + "px";
      this.$refs.content.style.top = top + height / 2 + window.scrollY + "px";
    } else if (this.popPosition === "right") {
      this.$refs.content.style.left = left + width + window.scrollX + "px";
      this.$refs.content.style.top = top + height / 2 + window.scrollY + "px";
    } else if (this.popPosition === "bottom") {
      this.$refs.content.style.left = left + width / 2 + window.scrollX + "px";
      this.$refs.content.style.top = top + height + window.scrollY + "px";
    }
  },
  data() {
    return {
      visiable: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.wl-popover {
  display: inline-block;
  box-sizing: border-box;
}
.wl-popover_content_wrapper {
  box-sizing: border-box;
  position: absolute;
  font-size: 14px;
  line-height: 1.5;
  .wl-popover_arrow {
    box-sizing: border-box;
    width: 6.5px;
    height: 6.5px;
    position: absolute;
    background-color: #fff;

    /*  */
    /* border-bottom: 5px solid yellowgreen; */
  }
  &.top {
    transform: translate(-50%, -100%);
    padding-bottom: 10px;
    .wl-popover_content {
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
    }
    .wl-popover_arrow {
      left: 50%;
      transform: translateX(-50%) translateY(-50%) rotateZ(45deg);
      border-color: transparent #fff #fff transparent;
      box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
    }
  }
  &.left {
    transform: translate(-100%, -50%);
    padding-right: 10px;
    .wl-popover_content {
      box-shadow: 3px 0px 8px rgba(0, 0, 0, 0.15);
    }
    .wl-popover_arrow {
      /* border: 1px solid red; */
      right: 0;
      bottom: 50%;
      transform: translate(-100%, 50%) rotateZ(45deg);
      border-color: #fff #fff transparent transparent;
      box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
    }
  }
  &.right {
    transform: translateY(-50%);
    padding-left: 10px;
    .wl-popover_content {
      box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.15);
    }
    .wl-popover_arrow {
      left: 0;
      bottom: 50%;
      transform: translate(100%, 50%) rotateZ(45deg);
      border-color: transparent transparent #fff #fff;
      box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
    }
  }
  &.bottom {
    transform: translate(-50%);
    padding-top: 10px;
    .wl-popover_content {
      box-shadow: 0px -3px 8px rgba(0, 0, 0, 0.15);
    }
    .wl-popover_arrow {
      left: 50%;
      /* bottom: 50%; */
      top: 0;
      transform: translate(-50%, 80%) rotateZ(45deg);
      border-color: #fff transparent transparent #fff;
      box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
    }
  }
  .wl-popover_content {
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 4px;

    .wl-popover_title {
      box-sizing: border-box;
      min-width: 10em;
      min-height: 32px;

      padding: 5px 16px 4px;
      color: rgba(0, 0, 0, 0.85);
      border-bottom: 1px solid #e8e8e8;
    }
    .wl-popover_inner {
      box-sizing: border-box;
      padding: 12px 16px;

      max-width: 13em;
      color: rgba(0, 0, 0, 0.65);
    }
  }
}
</style>