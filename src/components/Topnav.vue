<template>
<div class="topnav">
    <div class="logo">
        <svg class="icon logo-xin" aria-hidden="true">
            <use xlink:href="#icon-logo-xin"></use>
        </svg>
        <span>Fly UI</span>
    </div>
    <ul class="menu">
        <li>
            <router-link to="/doc">指南</router-link>
        </li>
        <li>
            <router-link to="/doc/switch">组件</router-link>
        </li>
        <li>
            <a href="">主题</a>
        </li>
        <li><a href="">资源</a></li>
        <li><a href="">1.0.0</a></li>
        <li>
            <a href="">
                <svg class="icon icon-git" aria-hidden="true">
                    <use xlink:href="#icon-github"></use>
                </svg>
            </a>
        </li>
    </ul>
    <span class="toggleAside">
        <svg class="icon" aria-hidden="true" @click="toggleMenu">
            <use xlink:href="#icon-menu"></use>
        </svg>
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
    position: fixed;
    justify-content: center;
    align-items: center;
    height: 80px;
    background-color: #fff;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 80px;
    z-index: 100;
    box-sizing: border-box;
    border-bottom: 1px solid #dcdfe6;
    box-shadow: 0 2px 8px #f0f1f2;

    >.logo {
        max-width: 15em;
        margin-right: auto;
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;

        span {
            color: black;
            width: 100px;
            display: inline-block;
        }

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
            margin-right: 19px;

            a {
                text-decoration: none;
                color: #1f39d8;

                .icon-git {
                    width: 22px;
                    height: 22px;
                    position: relative;
                    top: 4px;

                }
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
        top: 25%;
        transform: translateY(-50%);
        display: none;

        .icon {
            width: 30px;
            height: 30px;
        }
    }

    @media (max-width: 500px) {
        >.menu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }

        >.toggleAside {
            display: inline-block;
        }
    }
}
</style>
