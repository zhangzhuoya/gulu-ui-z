<template>
<div>hi</div>
<Frank />
<div>导航栏|
    <router-link to="/">Frank1</router-link>
    <router-link to="/xxx">Frank2</router-link>
</div>
<router-view></router-view>
</template>

<script>
import Frank from "./components/Frank.vue";

export default {
    name: "App",
    components: {
        Frank,
    },
};
</script>
