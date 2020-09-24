<template>
<div>
    <Button @click="onClick" @focus="onFocus" @mouseover="onMouse">
        点击
    </Button>
    <Button theme="button">普通按钮</Button>
    <Button theme="link">link按钮</Button>
    <Button theme="font">文字按钮</Button>

</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
export default {
    components: {
        Button
    },
    setup() {
        const onClick = () => {
            console.log("点击了")
        }
        const onFocus = () => {
            console.log("focus")
        }
        const onMouse = () => {
            console.log("mouse了")
        }
        return {
            onClick,
            onFocus,
            onMouse
        }
    }
}
</script>
