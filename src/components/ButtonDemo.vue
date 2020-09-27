<template>
<div>
    <Button theme="button">普通按钮</Button>
    <Button theme="link">link按钮</Button>
    <Button theme="text">文字按钮</Button>
    <Button size="big">大</Button>
    <Button size="nomal">中</Button>
    <Button size="small">小</Button>
    <Button :disabled="true">禁用按钮</Button>
    <Button :loading="true">禁用按钮</Button>

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
