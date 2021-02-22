<template>
  <h1>Dialog 示例</h1>
  <p>Dialog 弹出一个对话框，使用者可自行添Dialog中的内容</p>
  <Demo :component="Dialog1Demo"></Demo>
  <Demo :component="Dialog2Demo"></Demo>
  <dialog-attribute></dialog-attribute>
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
