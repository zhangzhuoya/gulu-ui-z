<template>
<div>
    <button v-bind="$attrs">
        <slot></slot>
    </button>
</div>
</template>

<script lang="ts">
export default {
    inheritAttrs: false,
    props: {
        theme: String
    },
    setup(props, context) {
        const {
            focus,
            onClick
        } = context.attrs;
        console.log({
            ...props
        }) //props传递的值需要声明类型，才可以使用，不包含事件
        console.log({
            ...context.attrs
        }) //attrs传递的值不需要声明类型，包含事件，
        // props声明过得不会出现在attrs中
        return {
            focus,
            onClick
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
