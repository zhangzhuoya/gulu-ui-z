<template>
<div>
    <Switch v-model:value="bool" />
</div>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
import Switch from "../lib/Switch.vue"
export default {
    components: {
        Switch
    },
    // 通过外部控制switch组件的开关
    setup() {
        const bool = ref(false); //设置值

        return {
            bool
        }
    }
}
</script>
