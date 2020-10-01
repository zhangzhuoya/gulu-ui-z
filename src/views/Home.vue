<template>
<div class="topnav-banner">
    <top-nav />
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

    .banner {
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h1 {
            color: $text-color;
        }

        h2 {
            color: $text-color;
        }

        >.actions {
            padding: 8px 0;

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
            }

            &:hover {
                text-decoration: none;
            }
        }
    }
}
</style>
