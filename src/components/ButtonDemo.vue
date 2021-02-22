<template>
  <div class="button-container">
    <h1>Button按钮</h1>
    <p>常用的操作按钮。</p>
    <h2 class="yf">基础用法</h2>
    <p>
      使用<span>level</span>属性改变<span>Button</span>组件的颜色，以此突显<span>Button</span>组件的重要等级
    </p>
    <Demo :component="Button1Demo"></Demo>
    <h2 class="yf">支持disabled</h2>
    <p>
      使用<span>disabled</span>属性改变<span>Button</span>组件的状态，以此<span>禁止点击Button</span>组件
    </p>
    <p>使用<span>size</span>属性改变<span>Button</span>组件的大小</p>
    <Demo :component="Button2Demo"></Demo>
    <h2 class="yf">支持文字按钮</h2>
    <p>使用<span>theme</span>属性改变<span>Button</span>，使其变为文字按钮</p>
    <Demo :component="Button3Demo"></Demo>
    <h2 class="yf">支持size按钮大小</h2>
    <p>使用<span>size</span>属性改变<span>Button</span>组件的大小</p>
    <Demo :component="Button5Demo"></Demo>
    <h2 class="yf">支持loading</h2>
    <p>使用<span>loading</span>属性表示<span>Button</span>组件正在加载</p>
    <Demo :component="Button4Demo"></Demo>
    <button-attribute> </button-attribute>
  </div>
</template>

<script lang="ts">
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
import Demo from "./Demo.vue";
import ButtonAttribute from "./ButtonAttribute.vue";

// import Switch from "../lib/Switch.vue"
import Button from "../lib/Button.vue";
export default {
  components: {
    Demo,
    Button,
    ButtonAttribute,
  },

  setup() {
    // const bool = ref(false)
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
      Button,
      ButtonAttribute,
    };
  },
};
</script>

<style lang="scss">
$border-color: #d9d9d9;
.button-container {
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
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
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
