<template>
  <div class="selector-input" v-focus>
    <label class="placeholder">{{ placeholder }}</label>
    <input type="text" class="input" />
    <span class="iconfont icon-arrow-down"></span>
  </div>
</template>
<script>
import focus from "./focus.js";
export default {
  directives: {
    focus,
  },
  props: {
    placeholder: {
      type: String,
      default: "请选择",
    },
  },
};
</script>
<style lang="scss" scoped></style>
