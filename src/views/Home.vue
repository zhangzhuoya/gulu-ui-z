<template>
<div class="container">
    <div class="topnav-banner">
        <div class="top-bar">
            <span class="logo">
                <svg class="icon logo-xin" aria-hidden="true">
                    <use xlink:href="#icon-logo-xin"></use>
                </svg>
            </span>
            <span class="doc">
                <router-link to="/doc">文档</router-link>
            </span>
        </div>
        <div class="banner">
            <h1>轱辘UI</h1>
            <h2>一个厉害的UI组件库</h2>
            <p class="actions">
                <a href="">Github</a>
                <router-link to="/doc">开始</router-link>
            </p>
            <p></p>
        </div>

    </div>
    <main class="textd">
        <div class="vue3">
            <svg class="icon icon-vue" aria-hidden="true">
                <use xlink:href="#icon-vue"></use>
            </svg>
            <div class="text-container">
                <h4>这是基于Vue3</h4>
                <p>这是基于Vue3编写的UI组件库</p>
            </div>

        </div>
        <div class="js3">
            <svg class="icon icon-js" aria-hidden="true">
                <use xlink:href="#icon-js"></use>
            </svg>
            <div class="text-container">
                <h4>这是基于Vue3</h4>
                <p>这是基于Vue3编写的UI组件库</p>
            </div>

        </div>
        <div class="ts3">

            <svg class="icon icon-ts" aria-hidden="true">
                <use xlink:href="#icon-typescript"></use>
            </svg>
            <div class="text-container">
                <h4>这是基于Vue3</h4>
                <p>这是基于Vue3编写的UI组件库</p>
            </div>

        </div>

    </main>
</div>
</template>

<script>
import TopNav from "../components/Topnav.vue";
import Button from "../lib/Button.vue"
export default {
    components: {
        TopNav,
    },
};
</script>

<style lang="scss" scoped>
$border-radius : 4px;
$text-color:#28d1c9;

.topnav-banner {
    background: linear-gradient(140deg, rgba(227, 255, 253, 1) 0%,
            rgba(183, 233, 230, 1) 100%,
            rgba(0, 212, 255, 1) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);

    .top-bar {
        // margin-top: 10px;
        position: relative;
        top: 10px;
        // display: flo;

        .logo {
            // position: relative;
            float: left;
            margin-left: 20px;

            .icon {
                height: 20px;
                width: 20px;

            }
        }

        .doc {
            float: right;
            margin-right: 20px;

            a {
                color: #00a5ae;

            }

        }

    }

    .banner {
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h1 {
            color: $text-color;
            margin-bottom: 10px;
        }

        h2 {
            margin-block-start: 0px;
            color: $text-color;
        }

        h4 {
            margin-block-start: 0em;
            margin-block-end: 0em;
        }

        >.actions {
            margin-block-start: 0px;

            padding: 0px 0;

            a {
                color: white;
                margin: 0 8px;
                background: #00a5ae;
                display: inline-block;
                $h: 28px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 8px;
                text-decoration: none;
                border-radius: $border-radius;

                &:hover {
                    text-decoration: underline;
                }

                &:active {
                    text-decoration: underline;
                }
            }

        }
    }

}

@media(max-width:500px) {
    .textd {
        display: block;
    }
}

.textd {
    margin-top: 30px;
    display: flex;
    justify-content: center;

    p {
        margin-block-start: 0px;
        margin-block-end: 0px;

    }

    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        margin-left: 20px;

    }

    .vue3 {
        display: flex;

        .text-container {
            margin-top: 4px;

            h4 {

                margin-block-start: 0em;
                margin-block-end: 0em;
            }
        }

        .icon-vue {
            width: 50px;
            height: 50px;
            margin-right: 5px;
        }
    }

    .js3 {
        display: flex;

        .text-container {
            margin-top: 4px;

            h4 {

                margin-block-start: 0em;
                margin-block-end: 0em;
            }
        }

        .icon-js {
            width: 50px;
            height: 50px;
            margin-right: 5px;
        }
    }

    .ts3 {
        display: flex;

        .text-container {
            margin-top: 4px;

            h4 {

                margin-block-start: 0em;
                margin-block-end: 0em;
            }
        }

        .icon-ts {
            width: 50px;
            height: 50px;
            margin-right: 5px;
        }
    }

}
</style>
