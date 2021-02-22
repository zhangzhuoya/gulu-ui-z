<demo>
文字按钮
<p>通过添加v-model:value="bool"来实现开启关闭</p>
</demo>
<template>
  <div class="button-show">
    <div class="button-container">
      <Button theme="primary" size="big">大型按钮</Button>
    </div>
    <div class="button-container">
      <Button theme="primary" size="normal">中等按钮</Button>
    </div>
    <div class="button-container">
      <Button theme="primary" size="small">小型按钮</Button>
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
  align-items: center;

  .button-container {
    margin-right: 10px;
  }
}
</style>
