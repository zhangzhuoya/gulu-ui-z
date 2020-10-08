<template>
<div>
    <h1>Tabs标签页</h1>
    <p>分隔内容上有关联但属于不同类别的数据集合。</p>
    <Demo :component="Tab1Demo"></Demo>
</div>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
import Tab1Demo from "./Tab1.demo.vue"
import Demo from "./Demo.vue"
export default {
    components: {
        Demo
    },
    setup() {
        return {
            Tab1Demo
        }
    }
}
</script>
