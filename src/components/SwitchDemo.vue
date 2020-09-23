<template>
<div>
    <Switch :value="y" @input="y=$event" />
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
        const y = ref(false);

        return {
            y
        }
    }
}
</script>
