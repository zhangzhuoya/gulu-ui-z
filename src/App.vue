<template>
<router-view />
</template>

<script lang="ts">
import {
    ref,
    provide
} from 'vue'
import {
    router
} from "./router"
export default {
    name: "App",
    setup() {
        const width = document.documentElement.clientWidth;
        console.log(width)
        const menuVisible = ref(width <= 500 ? false : true);
        provide("menuVisible", menuVisible); //使用provide标记可以让它的后代子组件都可以使用
        router.afterEach(() => {
            if (width <= 500) {
                menuVisible.value = false;
            }
        })
    },
};
</script>

<style lang="scss" scoped>

</style>
