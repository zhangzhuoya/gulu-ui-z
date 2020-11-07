<template>
<div class="intro-container">
    <h2>安装使用</h2>
    <h4>使用 npm 或 yarn 安装</h4>
    <p>
        我们推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。
    </p>
    <div class="language-bash">
        <span class="token function">npm</span>
        <span class="install">install</span>
        Fly-Ui --save
    </div>
    <div class="language-bash">
        <span class="token function">yarn</span>
        <span class="install">add</span>
        Fly-Ui
    </div>
    <p>
        如果你的网络环境不佳，推荐使用 cnpm。</p>

</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.language-bash {
    background: #f5f5f5;
    display: flex;
    margin-bottom: 20px;
    padding: 10px 0px 10px 10px;

    span.token.function {
        color: #f81d22;
        margin-right: 9px;
    }

    span.install {
        margin-right: 10px;
    }

}

// pre[class*=language-] {
//     margin: 16px 0;
//     padding: 12px 20px;
//     overflow: auto;
// }
</style>
