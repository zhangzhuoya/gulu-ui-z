<demo>
基础用法
<p>通过添加v-model:value="bool"来实现开启关闭</p>
</demo>
<template>
<Button loading level="primary">加载中</Button>
</template>

<script>
import {
    ref
} from 'vue'
import Button from '../lib/Button.vue'
export default {
    components: {
        Button
    },
}
</script>

<style lang="scss" scoped>
</style>
