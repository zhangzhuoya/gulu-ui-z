<demo>
基础用法
<p>通过添加v-model:value="bool"来实现开启关闭</p>
</demo>
<template>
<div class="button-show">
    <div class="button-container">
        <Button level="main">主要按钮</Button>
    </div>
    <div class="button-container">
        <Button level="danger">危险按钮</Button>
    </div>
    <div class="button-container">
        <Button level="success">成功按钮</Button>
    </div>
    <div class="button-container">
        <Button level="warning">警告按钮</Button>
    </div>
</div>
</template>

<script>
import {
    ref
} from 'vue'
import Button from '../lib/Button.vue'
export default {
    components: {
        Button
    },
    setup() {
        const bool = ref(false);
        return {
            bool
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
