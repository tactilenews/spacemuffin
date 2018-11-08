<template>
  <div>
    <tactile-header />
    <nuxt class="wrapper" />
  </div>
</template>

<script>
import TactileHeader from '~/components/TactileHeader.vue'
export default {
  components: {
    TactileHeader
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.wrapper {
  max-width: $grid-max-width;
  margin: $spacing-unit auto;
  background: #fff;
}
</style>
