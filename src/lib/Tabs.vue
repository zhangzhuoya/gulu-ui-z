<template>
<div class="gulu-tabs">
    这是tabs组件
    <!--可以这样展示-->
    <div class="gulu-tabs-nav">
        <div class="gulu-tabs-nav-item" v-for="(t,index) in titles" :key="index" :class="{selected:selected===t}"> {{t}}</div>
    </div>
    <!--
    // <component :is="defaults[0]" />
    -->
    <div class="gulu-tabs-content">
        <component class="gulu-tabs-content-item" :is="c" v-for="(c,index) in defaults" :key="index" />
    </div>
    <!--
    {{defaults[0]}}
    {{defaults[1]}}
    -->
</div>
</template>

<script lang="ts">
import Tab from "./Tab.vue"
export default {
    props: {
        selected: {
            type: String,
        }
    },
    setup(props, context) {
        // 检查tabs里面的组件是否是tab组件
        // console.log({
        //     ...context.slots.default()[0], //通过这个获取外部传给我们的I内容

        // })
        const defaults = context.slots.default()
        console.log(defaults[0].type === Tab) //检查是否是Tab节点
        // 原理：每一个tab.vue都会导出成一个对象
        console.log(defaults[0].type)
        defaults.map((tags) => {
            if (tags.type !== Tab) {
                throw new Error("tabs子组件不是一个tab节点")
            }
        })
        console.log(defaults[0].props.title)
        const titles = defaults.map((tag) => {
            return tag.props.title
        }) //遍历props.tilte属性的值

        /**
        制作导航切换内容
         */
        return {
            defaults,
            titles
        }

    }

}
</script>

<style lang="scss" scoped>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $blue;
            }
        }
    }

    &-content {
        padding: 8px 0;
    }
}
</style>
