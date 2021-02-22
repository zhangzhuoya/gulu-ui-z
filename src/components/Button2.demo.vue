<demo>
禁用状态
</demo>
<template>
  <div class="button-show">
    <div class="button-container">
      <Button level="main" disabled>主要按钮</Button>
    </div>
    <div class="button-container">
      <Button level="danger" disabled>危险按钮</Button>
    </div>
    <div class="button-container">
      <Button level="success" disabled>成功按钮</Button>
    </div>
    <div class="button-container">
      <Button level="warning" disabled>警告按钮</Button>
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
