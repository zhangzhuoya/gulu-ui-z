<template>
<div>
    这是tabs组件
    <!--可以这样展示-->
    <component :is="defaults[0]" />
    <component :is="defaults[1]" />

    <!--
    {{defaults[0]}}
    {{defaults[1]}}
    -->

</div>
</template>

<script lang="ts">
import Tab from "./Tab.vue"
export default {
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

        return {
            defaults
        }

    }

}
</script>
