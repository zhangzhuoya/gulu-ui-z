<template>
<div class="gulu-tabs">
    这是tabs组件
    <!--可以这样展示-->
    <div class="gulu-tabs-nav" ref="containerItem">
        <div class="gulu-tabs-nav-item" @click="select(t)" v-for="(t, index) in titles" :key="index" :class="{ selected: selected === t }" :ref="
          (el) => {
            if (el) navItems[index] = el;
          }
        ">
            {{ t }}
        </div>
        <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <!--
    // <component :is="defaults[0]" />
    -->
    <div class="gulu-tabs-content">
        <!--
    显示被选中的内容:不能同时使用
    <component class="gulu-tabs-content-item" :is="current" />
        {{current}}
    -->
        <component class="gulu-tabs-content-items" :class="{ selected: c.props.title === selected }" :is="c" v-for="(c, index) in defaults" :key="index" />
    </div>
</div>
<!--
    {{defaults[0]}}
    {{defaults[1]}}
    -->
</template>

<script lang="ts">
import {
    computed,
    onMounted,
    onUpdated,
    ref
} from "vue";
import Tab from "./Tab.vue";
export default {
    props: {
        selected: {
            type: String,
        },
    },
    setup(props, context) {
        // 检查tabs里面的组件是否是tab组件
        // console.log({
        //     ...context.slots.default()[0], //通过这个获取外部传给我们的内容
        // })
        const defaults = context.slots.default();
        console.log(defaults);
        // console.log(defaults[0].type === Tab) //检查是否是Tab节点
        // 原理：每一个tab.vue都会导出成一个对象
        defaults.map((tags) => {
            if (tags.type !== Tab) {
                throw new Error("tabs子组件不是一个tab节点");
            }
        });
        const select = (title: string) => {
            context.emit("update:selected", title);
            console.log(title);
        };
        /***
                  根据selected的值选中内容
                  vue3 bug 不能渲染出来值
                 */
        // const current = computed(() => {
        //     return defaults.filter((tag) => {
        //         return tag.props.title === props.selected;
        //     })[0];
        // });
        const titles = defaults.map((tag) => {
            return tag.props.title;
        }); //遍历props.tilte属性的值
        /**
                根据导航宽度设置div的宽度
                 */
        const navItems = ref < HTMLDivElement[] > ([]); //ts参数是htmldiv的数组
        const indicator = ref < HTMLDivElement > (null);
        const containerItem = ref < HTMLDivElement > (null);
        // console.log(typeof divValue)
        const x = () => {
            const divValue = navItems.value;
            const divWidth = divValue.filter((div) => {
                // console.log(div.classList.value)
                return div.classList.contains("selected");
            })[0];
            const widths = divWidth.getBoundingClientRect().width; //获取div的dom的width
            // const indicatorValue = indicator.value;
            indicator.value.style.width = widths + "px";
            const left1 = divWidth.getBoundingClientRect().left;
            const left2 = containerItem.value.getBoundingClientRect().left;
            const left = left1 - left2;
            indicator.value.style.left = left + "px";
            console.log(indicator.value.style.left);
            console.log(containerItem.value.getBoundingClientRect().width);
        };
        onMounted(x);
        onUpdated(x);
        return {
            defaults,
            titles,
            // current,
            select,
            navItems,
            indicator,
            containerItem,
        };
    },
};
</script>

<style lang="scss">
//不能加scoped 出现bug
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
    &-nav {
        display: flex;
        // display: none;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;

        &-indicator {
            position: absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms linear;
        }

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
        &-items {
            display: none;

            &.selected {
                display: block;
            }
        }

        padding: 8px 0;
    }
}
</style>
