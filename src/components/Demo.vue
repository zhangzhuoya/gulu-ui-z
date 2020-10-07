<template>
<div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
        <component :is="component" />
    </div>
    <div class="demo-actions">
        <Button @click="toggleShow" size="small">查看代码</Button>
    </div>
    <div class="demo-code" v-if="visiable">
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
        let visiable = ref(true);
        const toggleShow = () =>
            visiable.value = !visiable.value;
        const html = computed(() => {
            return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
        })
        return {
            Prism,
            visiable,
            toggleShow,
            html

        }

    }

}
</script>
