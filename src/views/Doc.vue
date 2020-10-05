<template>
<div>
    <top-nav></top-nav>
    <div class="content">
        <aside v-if="menuVisible">
            <h4>文档</h4>
            <ul>
                <li>
                    <router-link to="/doc/intro">介绍</router-link>
                </li>
                <li>
                    <router-link to="/doc/install">安装</router-link>
                </li>
            </ul>
            <h4>组件列表</h4>
            <ul>
                <li>
                    <router-link to="/doc/switch">Switch组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/button">Button按钮</router-link>
                </li>
                <li>
                    <router-link to="/doc/dialog">Dialog组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/tabs">Tabs组件</router-link>
                </li>
            </ul>
        </aside>
        <main>
            <router-view></router-view>

        </main>
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
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    >.nav {
        flex-shrink: 0;
    }

    >.content {
        flex-grow: 1;
        padding-top: 60px;
        padding-left: 156px;

        @media (max-width: 500px) {
            padding-left: 0;
        }
    }
}

.content {
    display: flex;

    >aside {
        flex-shrink: 0;
    }

    >main {
        flex-grow: 1;
        padding: 16px;
    }
}

aside {
    background: lightblue;
    width: 150px;
    padding: 16px 0px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    padding-top: 70px;

    ul {
        padding-inline-start: 0px;
        margin-block-start: 0px;
        margin-block-end: 0px;

        li {
            list-style: none;
            margin-bottom: 10px;

            a {
                text-decoration: none;
                color: black;
                display: block;
                padding: 4px 16px;
                // 设置a标签的宽高需要变成块盒
            }

            .router-link-active {
                background: white;

            }

            &:hover {
                text-decoration: underline;
            }
        }
    }

    >h4 {
        margin-block-start: 0px;
        margin-block-end: 0px;
        margin-left: 20px;
        margin-bottom: 10px;

    }

    aside {
        padding: 4px 0;

    }
}

main {
    overflow: auto;
    margin-left: 180px;
    background: burlywood;

}
</style>
