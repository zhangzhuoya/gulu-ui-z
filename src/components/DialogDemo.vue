<template>
<div class="dialog-container">
 <h1>Dialog 示例</h1>
  <p>Dialog 弹出一个对话框，使用者可自行添Dialog中的内容</p>
<h2 class="yf">常规用法</h2>
  一句话就可以打开dialog
<p></p>
  <Demo :component="Dialog1Demo"></Demo>
  <h2 class="yf">基础用法</h2>
  <p> 使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Dialog</span>组件 </p>
  <Demo :component="Dialog2Demo"></Demo>
  <dialog-attribute></dialog-attribute>
</div>
 
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";

import DialogAttribute from "./DialogAttribute.vue";

import Demo from "./Demo.vue";
import { ref, h } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: {
    Dialog,
    Button,
    Demo,
    // Dialog1Demo
    DialogAttribute,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return {
      x,
      toggle,
      f1,
      f2,
      showDialog,
      Dialog1Demo,
      Dialog2Demo,
    };
  },
};
</script>
<style lang="scss" scoped>
.dialog-container {
  h1 {
    margin-top: 20px;
    margin-bottom: 8px;
  }
  p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .yf::before {
    content: "#";
    display: block;
    position: absolute;
    left: 198px;
    font-weight: 700;
    color: #0d92ff;
    font-weight: 700;
  }
  p {
    span {
      color: #0d92ff;
    }
  }
}
</style>