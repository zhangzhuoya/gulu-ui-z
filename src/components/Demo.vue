<template>
<div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
        <component :is="component" />
    </div>
    <div class="demo-actions">
        <Button @click="hideCode" size="small" v-if="codeVisible">隐藏代码</Button>
        <Button @click="showCode" size="small" v-else>查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
        <pre class="language-html" v-html="html"></pre>
    </div>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import "Prismjs";
import "Prismjs/themes/prism.css";
import {
    computed,
    ref
} from 'vue';
const Prism = (window as any).Prism
export default {
    components: {
        Button
    },
    props: {
        component: {
            type: Object
        }
    },
    setup(props) {
        let codeVisible = ref(true);

        const hideCode = () =>

            codeVisible.value = false
        const showCode = () =>

            codeVisible.value = true
        const html = computed(() => {
            return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
        })
        return {
            Prism,
            codeVisible,
            hideCode,
            showCode,
            html

        }

    }

}
</script>
