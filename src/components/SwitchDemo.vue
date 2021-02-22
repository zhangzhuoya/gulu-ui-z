<template>
  <div class="switch-container">
    <h1>Switch 开关</h1>
    <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>

    <h2 class="yf">基础用法</h2>
    <p> 使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Switch</span>组件 </p>
    <Demo :component="Switch1Demo"></Demo>
    <h2 class="yf">支持disabled</h2>
   <p> 在<span>Switch</span>组件中添加<span>disabled</span>属性，以此来<span>禁用Switch</span>组件 </p>
    <Demo :component="Switch2Demo"></Demo>
    <switch-attribute> </switch-attribute>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Demo from "./Demo.vue";
import Switch from "../lib/Switch.vue";
import SwitchAttribute from "./SwitchAttribute.vue";
export default {
  components: {
    Demo,
    Switch,
    SwitchAttribute,
  },

  setup() {
    const bool = ref(false);
    return {
      Switch1Demo,
      Switch2Demo,
      Switch,
      bool,
      SwitchAttribute,
    };
  },
};
</script>

<style lang="scss">
$border-color: #d9d9d9;
.switch-container {
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
h1{
  margin-top: 20px;
}
.demo {
  border: 1px solid $border-color;
  margin: 20px 0 32px;

  > h1 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
