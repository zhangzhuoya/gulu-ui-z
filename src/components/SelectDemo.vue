<template>
  <h3 id="attributes">select</h3>
  <Select :placeholder="'请输入搜索内容'"></Select>
</template>

<script>
import Select from "../lib/Select.vue";
export default {
  components: {
    Select,
  },
};
</script>
