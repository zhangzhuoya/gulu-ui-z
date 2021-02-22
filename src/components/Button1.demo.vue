<demo>
常规使用
</demo>
<template>
  <div class="button-show">
    <div class="button-container">
      <Button level="main">主要按钮</Button>
    </div>
    <div class="button-container">
      <Button level="danger">危险按钮</Button>
    </div>
    <div class="button-container">
      <Button level="success">成功按钮</Button>
    </div>
    <div class="button-container">
      <Button level="warning">警告按钮</Button>
    </div>
  </div>
</template>

<script>
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
