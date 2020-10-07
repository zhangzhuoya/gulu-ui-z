<demo>
常用语法
<p>通过添加v-model:value="bool"来实现开启关闭</p>
</demo>
<template>
<Switch v-model:value="bool"></Switch>
</template>

<script>
import {
    ref
} from 'vue'
import Switch from '../lib/Switch.vue'
export default {
    components: {
        Switch
    },
    setup() {
        const bool = ref(false);
        return {
            bool
        }
    }

}
</script>
