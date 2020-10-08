<demo>
基础用法
</demo>
<template>
<Button theme="link" @click="showDialog">一句话打开Dialog对话框</Button>
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
