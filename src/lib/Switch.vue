<template>
<button @click="toggle" :class="[{ checked: value }, { disabl: disable }]">
    <span></span>
</button>
</template>

<script lang="ts">
import {
    ref
} from "vue";
export default {
    props: {
        value: Boolean,
        disable: Boolean,
    }, //校验父级传过来的值

    setup(props, context) {
        const toggle = () => {
            console.log(props.value);
            context.emit("update:value", !props.value); //事件名必须叫update:value
            //  update:value 前不能有空格符，否则不好使
            console.log(props.value);
        };
        return {
            toggle,
        };
    },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

button {
    height: $h;
    width: $h * 2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;

    &.disabl {
        cursor: not-allowed;

        &:hover {
            cursor: not-allowed;
        }
    }

    >span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: $h2 / 2;
        transition: all 250ms;
    }

    &.checked {
        background: #1890ff;

        >span {
            left: calc(100% - #{$h2} - 2px);
        }
    }

    &:focus {
        outline: none;
    }

    &:active {
        >span {
            width: $h2 + 4px;
        }
    }

    &.checked:active {
        >span {
            width: $h2 + 4px;
            margin-left: -4px;
        }
    }
}
</style>
