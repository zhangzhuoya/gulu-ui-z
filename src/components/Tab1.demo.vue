<demo>
Tab组件的使用
</demo>
<template>
<Tabs v-model:selected="x">
    <Tab title="标题一">内容1</Tab>
    <Tab title="标题二">内容二</Tab>
</Tabs>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
import Tab from "../lib/Tab.vue"
import Tabs from "../lib/Tabs.vue"
export default {
    components: {
        Tab,
        Tabs
    },
    setup() {

        const x = ref("标题一");
        return {
            x
        }

    }

}
</script>
