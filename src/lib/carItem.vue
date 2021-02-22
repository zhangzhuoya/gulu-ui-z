<template>
  <div class="car-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CarItem",
};
</script>

<style lang="scss" scoped>
.car-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
  }
}
</style>
