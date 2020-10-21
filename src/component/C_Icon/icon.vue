<template>
  <svg v-if="icon" class="icon" aria-hidden="true">
    <use :xlink:href=" '#'+icon " />
  </svg>
</template>

<script>
import "./svg";
export default {
  props: ["icon"],
  name: "w-icon",
};
</script>

<style lang="scss" >
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: baseline;
  line-height: 1;
  fill: currentColor;
  overflow: hidden;
  font-size: inherit;
}
</style>

