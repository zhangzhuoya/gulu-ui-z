<demo>
文字按钮
<p>通过添加v-model:value="bool"来实现开启关闭</p>
</demo>
<template>
  <div class="button-show">
    <div class="button-container">
      <Button theme="link">文字按钮</Button>
    </div>
    <div class="button-container">
      <Button theme="text">文字按钮</Button>
    </div>
    <div class="button-container">
      <Button theme="link" disabled>文字按钮</Button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.button-show {
  display: flex;

  .button-container {
    margin-right: 10px;
  }
}
</style>
