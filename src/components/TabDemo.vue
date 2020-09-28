<template>
<Tabs selected="标题一">
    <Tab title="标题一">内容1</Tab>
    <Tab title="标题二">内容二</Tab>
</Tabs>
</template>

<script lang="ts">
import Tab from "../lib/Tab.vue"
import Tabs from "../lib/Tabs.vue"
export default {
    components: {
        Tab,
        Tabs
    }

}
</script>
