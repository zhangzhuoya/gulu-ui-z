<template>
<div>
    <top-nav></top-nav>
    <div class="content">
        <aside v-if="menuVisible">
            <h2>组件列表</h2>
            <ol>
                <li>
                    <router-link to="/doc/switch">switch组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/button">button按钮</router-link>
                </li>
                <li>
                    <router-link to="/doc/dialog">dialog组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/tabs">tabs组件</router-link>
                </li>
            </ol>
        </aside>
        <main>主内容</main>
    </div>
</div>
</template>

<script lang="ts">
import TopNav from "../components/Topnav.vue";
import {
    Ref,
    inject
} from "vue"
export default {
    components: {
        TopNav,
    },
    setup() {
        const menuVisible = inject < Ref < Boolean >> ('menuVisible') //get
        console.log(menuVisible.value)
        return {
            menuVisible
        }
    }
};
</script>

<style lang="scss" scoped>
.content {
    margin-top: 20px;
    position: relative;
    top: 20px;

    aside {
        background: lightblue;
        width: 150px;
        padding: 16px;
        position: fixed;
        left: 0;
        padding-top: 70px;
        top: 73px;

        >h2 {
            margin-bottom: 4px;
        }

        >ol {
            >li {
                padding: 4px 0;
            }
        }
    }
}
</style>
