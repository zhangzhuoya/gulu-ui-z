<template>
<div class="topnav">
    <div class="logo" @click="toggleMenu">
        <svg class="icon logo-xin" aria-hidden="true">
            <use xlink:href="#icon-logo-xin"></use>
        </svg>
    </div>
    <ul class="menu">
        <li>
            <a href="">菜单1</a>

        </li>
        <li> <a href="">菜单2</a>
        </li>
    </ul>
    <span class="toggleAside">

    </span>
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
    display: flex;
    padding: 16px;
    position: relative;
    z-index: 10;
    justify-content: center;
    align-items: center;

    >.logo {
        max-width: 6em;
        margin-right: auto;
        width: 50px;
        height: 50px;

        .icon {
            width: 1em;
            height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;

            &.logo-xin {
                width: 30px;
                height: 30px;
            }
        }
    }

    .menu {
        display: flex;

        li {
            list-style: none;
            margin-left: 10px;

            a {
                text-decoration: none;
                color: #008c8c;

            }

            &:hover {
                text-decoration: underline;
            }
        }
    }

    >.toggleMenu {}

    >.toggleAside {
        display: inline-block;
        width: 24px;
        height: 24px;
        // background: red;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
    }

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
