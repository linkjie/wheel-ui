<template>
  <div class="w-input">
    <input
      type="text"
      :style="[icon?{paddingRight:'30px'}:{}]"
      :value="innerValue"
      :placeholder="placeholder"
      @input="handelInput"
      :disabled="disabled"
    />
    <span
      class="clearable suffix"
      v-if="clearable === true && innerValue!='' "
      @click="clear"
      @mousedown.prevent
    >
      <Icon icon="icon-Clear" />
    </span>
    <span class="suffix">
      <Icon :icon="icon" />
    </span>
  </div>
</template>

<script>
import Icon from "../C_Icon/icon";
export default {
  components: {
    Icon,
  },
  name: "wl-input",
  data() {
    return {
      innerValue: this.value || "",
    };
  },
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
    icon: {
      type: String,
    },
  },
  methods: {
    handelInput(event) {
      this.innerValue = event.target.value;
      this.$emit("input", event.target.value);
    },
    clear() {
      this.innerValue = "";
      this.$emit("input", "");
    },
  },
  watch: {
    value: function (newValue) {
      console.log(this.value);
      if (this.value !== false) {
        this.innerValue = this.value;
        console.log(this.innerValue);
      }
    },
  },
};
</script>

<style lang="scss" scoped >
$border-color: #dcdfe6;
$border-color-hover: #c0c4cc;
.w-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 180px;
  color: #606266;
  > input {
    &::-webkit-input-placeholder {
      color: #c0c4cc;
    }
    display: inline-block;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 15px;
    line-height: 1;
    font-size: inherit;
    color: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &[disabled] {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  > .suffix {
    display: block;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #c0c4cc;
    font-size: 18px;
    &.clearable {
      font-size: 12px;
      display: none;
    }
    &.clearable:hover {
      display: block;
      color: #999;
    }
  }
  input:hover ~ .clearable,
  input:focus ~ .clearable {
    display: block;
  }
}
</style>