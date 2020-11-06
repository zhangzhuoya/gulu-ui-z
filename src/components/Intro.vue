<template>
<div class="intro-container">
    <h2>Fly UI</h2>
    <p>
        <code class="sp">Fly UI</code>是基于Vue3 TypeScript 及Vite 编写的 Vue UI
        组件库，主要用于研发企业级中后台产品。
    </p>
    <p>
        这款组件库其实是我为了总结自己这几年的技术经验而写的，全程亲手编写，尽量不采用第三方库，包括你现在看到的这个官网也几乎都是我自己写的。
    </p>
    <p>
        如果你是抱着看源代码的目的来的，那么这个库还是值得一看的。源代码放在了 github.com/frankfang/xxxxxxx，历史提交信息非常规范，你可以按提交的顺序逐个查看；你也可以直接查看每个组件的源代码和示例，运行方法见 README.md。

    </p>
    <div class="img-container">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-vue"></use>
        </svg>
        <span>+</span>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-ts"></use>
        </svg>
        <span>+</span>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-js"></use>
        </svg>
    </div>
    <section class="markdown">
        <h2 class="tx">
            <svg class="icon icon-tx" aria-hidden="true">
                <use xlink:href="#icon-xx"></use>
            </svg>
            <span>特性</span>
        </h2>

        <ol class="feature">
            <li>
                <span></span> <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-tq"></use>
                </svg>
                <p>Vue3打造的较早的UI组件库</p>
            </li>
            <li>
                <span></span> <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-dg"></use>
                </svg>
                <p>开箱即用的高质量Vue3组件。</p>
            </li>
            <li>
                <span></span> <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xch"></use>
                </svg>
                <p>使用 TypeScript 开发。</p>
            </li>
            <li>
                <span></span> <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-logo-xin"></use>
                </svg>
                <p> 深入每个细节的主题定制能力。</p>
            </li>
        </ol>
    </section>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.intro-container {
    .sp {
        margin: 0 1px;
        padding: 0.2em 0.4em;
        font-size: 0.9em;
        background: #f2f4f5;
        border: 1px solid #f0f0f0;
        border-radius: 3px;
    }

    .img-container {
        .icon {
            width: 150px;
            height: 150px;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
        }

        span {
            font-size: 30px;
            color: #aaa;
            margin: 0 20px;
            position: relative;
            top: -65px;
        }
    }

    .markdown {
        .tx {
            .icon.icon-tx {
                width: 31px;
                height: 31px;
            }

            span {
                margin-left: 3px;
                position: relative;
                top: -5px;
            }
        }

        .feature {
            padding-inline-start: 5px !important;

            li {
                display: flex;
                align-items: center;

                span {
                    width: 3px;
                    height: 3px;
                    border: 1px solid;
                    border-radius: 50%;
                    margin-right: 10px;
                }

                .icon {
                    margin-right: 7px;
                    width: 20px;
                    height: 20px;
                }
            }

        }
    }
}
</style>
