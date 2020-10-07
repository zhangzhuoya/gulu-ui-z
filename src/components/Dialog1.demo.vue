<demo>
基础用法
<p>通过添加v-model:value="bool"来实现开启关闭</p>
</demo>
<template>
<Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import {
    ref,
    h
} from 'vue'
import Button from '../lib/Button.vue'
import {
    openDialog
} from '../lib/openDialog'
export default {
    components: {
        Button,
        // Dialog
    },
    setup() {
        const x = ref(false)
        const toggle = () => {
            x.value = !x.value
        }
        const f1 = () => {
            return false
        }
        const f2 = () => {}
        const showDialog = () => {
            openDialog({
                title: h('strong', {}, '标题'),
                content: '你好',
                ok() {
                    console.log('ok')
                },
                cancel() {
                    console.log('cancel')
                }
            })
        }
        return {
            x,
            toggle,
            f1,
            f2,
            showDialog
        }
    }

}
</script>

<style lang="scss" scoped>
.button-show {
    display: flex;

    .button-container {
        margin-right: 10px;

    }
}
</style>
