<template>
  <div class="selector">
    <SelectorInput :placeholder="placeholder" />
  </div>
</template>
<script>
import SelectorInput from "./input.vue";
export default {
  name: "Select",
  props: {
    placeholder: String,
  },
  components: {
    SelectorInput,
  },
};
</script>
<style lang="scss" scoped>
.selector {
  position: relative;
  width: 300px;
}
</style>
