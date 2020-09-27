<template>
<div v-if="visible">
    <div class="dialog-content">
        <header>
            <slot name="text"></slot>
            <span @click="close">X</span>
        </header>
        <main>
            <slot name="content"></slot>

        </main>
        <footer>
            <button @click="cancel">取消</button>
            <button @click="ok">确定</button>

        </footer>

    </div>

</div>
</template>

<script lang="ts">
import Button from "./Button.vue"

export default {
    components: {
        Button: Button
    },
    props: {
        visible: {
            type: Boolean,
            default: true
        },
        ok: {
            type: Function
        },
        cancel: {
            type: Function
        }

    },
    setup(props, context) {

        const close = () => {
            context.emit('update:visible', false)
            console.log(props.visible)

        }
        const ok = () => {
            console.log("ok")
            if (props.ok?.() !== false) {
                close()
            }

        }
        const cancels = () => {
            props.cancel?.()
            close()
        }
        return {
            close,
            ok,
            cancels
        }

    }

}
</script>

<style lang="scss" scoped>
.dialog-content {
    background: rgba($color: #000000, $alpha: 0.4);
}
</style>
