<template>
<div class="tab-container">
    <h1>Tabs标签页</h1>
    <p>分隔内容上有关联但属于不同类别的数据集合。</p>
    <h2 class="yf">基础用法</h2>
    <p> 使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Tabs</span>组件,指定默认<span>Tab</span></p>
    <Demo :component="Tab1Demo"></Demo>
    <tab-attribute></tab-attribute>
</div>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
import Tab1Demo from "./Tab1.demo.vue"
import Demo from "./Demo.vue"

import TabAttribute from "./TabAttribute.vue";

export default {
    components: {
        Demo,
        TabAttribute
    },
    setup() {
        return {
            Tab1Demo
        }
    }
}
</script>
<style lang="scss" scoped>
.tab-container {
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