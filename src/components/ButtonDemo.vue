<template>
<div>
    <h1>Button按钮</h1>
    <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
    <Demo :component="Button1Demo"></Demo>
    <Demo :component="Button2Demo"></Demo>
    <Demo :component="Button3Demo"></Demo>
    <Demo :component="Button4Demo"></Demo>
    <Demo :component="Button5Demo"></Demo>

</div>
</template>

<script lang="ts">
import {
    ref
} from "vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
import Demo from "./Demo.vue";
// import Switch from "../lib/Switch.vue"
import Button from "../lib/Button.vue"
export default {
    components: {
        Demo,
        Button
    },

    setup() {
        // const bool = ref(false)
        return {
            Button1Demo,
            Button2Demo,
            Button3Demo,
            Button4Demo,
            Button5Demo,
            Button,
        };
    },
};
</script>

<style lang="scss">
$border-color: #d9d9d9;

.demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;

    >h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
    }

    &-component {
        padding: 16px;
    }

    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
    }

    &-code {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;

        >pre {
            line-height: 1.1;
            font-family: Consolas, "Courier New", Courier, monospace;
            margin: 0
        }
    }
}
</style>
