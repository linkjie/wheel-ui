<template>
  <div>
    <wl-popover title="Title" trrigger="hover" position="left">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <w-button>xxx</w-button>
    </wl-popover>
    <wl-popover title="Title" trrigger="hover" position="top">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <w-button>xxx</w-button>
    </wl-popover>

    <wl-popover title="Title" trrigger="hover" position="right" trigger="hover">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <w-button>xxx</w-button>
    </wl-popover>

    <wl-popover title="Title" trrigger="hover" position="bottom" trigger="click">
      <template slot="content">
        <div>popover内容</div>
      </template>
      <w-button>xxx</w-button>
    </wl-popover>
  </div>
</template>

<script>
import Popover from "./component/Popover/popover";
export default {
  components: {
    "wl-popover": Popover,
  },
};
</script>

<style lang="scss" scoped>
</style>