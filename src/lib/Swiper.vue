<template>
  <div class="swiper">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
};
</script>
<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
  .inner{
      position: relative;
      width: 100%;
      height: 100%;
  }
}
</style>
