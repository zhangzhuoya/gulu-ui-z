<template>
<div class="markdown-body" v-html="install">

</div>
</template>

<script>
import install from "../markdown/install.md"
export default {
    data() {
        return {
            install
        }
    }

}
</script>
