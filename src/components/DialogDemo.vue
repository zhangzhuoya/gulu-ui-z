<template>
<div class="show-dialog" @click="toggle">dialog</div>
<Dialog v-model:visible="x" :ok="fn1" :cancel="fn2">
    <template v-solt:content>
        <strong>hhh</strong>
    </template>
    <template v-solt:text>
        <strong> 加粗的标题</strong>
    </template>
</Dialog>
<button @click="showDialog">show</button>
</template>

<script lang="ts">
import {
    ref
} from "vue";
import Dialog from "../lib/Dialog.vue";
import {
    openDialog
} from "../lib/openDialog";
export default {
    components: {
        Dialog: Dialog,
    },
    setup() {
        const showDialog = () => {
            openDialog({
                text: "标题",
                content: "nihaoh",
                ok() {
                    console.log("ok");
                },
                cancel() {
                    console.log("cancel");
                },
            });
        };
        const x = ref(false);
        const toggle = () => {
            x.value = !x.value;
            console.log(x.value);
        };
        const fn1 = () => {
            return true;
        };
        const fn2 = () => {
            return false;
        };
        return {
            toggle,
            x,
            fn1,
            fn2,
            showDialog
        };
    },
};
</script>
