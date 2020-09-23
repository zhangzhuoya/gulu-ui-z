<template>
<div class="topnav">
    <div class="logo" @click="toggleMenu">logo</div>
    <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
    </ul>
    <span class="toggleAside"></span>
</div>
<br />
</template>

<script lang="ts">
import {
    inject,
    Ref
} from "vue";
export default {
    setup() {
        const menuVisible = inject < Ref < Boolean >> ("menuVisible"); //get
        const toggleMenu = () => {
            menuVisible.value = !menuVisible.value;
            console.log("a");
            console.log(menuVisible.value);
        };
        return {
            toggleMenu,
        };
    },
};
</script>

<style lang="scss" scoped>
.topnav {
    background: pink;
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;
    justify-content: center;
    align-items: center;

    >.logo {
        max-width: 6em;
        margin-right: auto;
    }

    .menu {
        li {
            list-style: none;
        }
    }

    >.toggleMenu {}

    @media(max-width:500px) {
        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }
    }
}
</style>
