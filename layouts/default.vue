<template>
  <div>
    <tactile-header />
    <nuxt class="wrapper" />
    <tactile-footer />
  </div>
</template>

<script>
import TactileHeader from '~/components/TactileHeader.vue'
import TactileFooter from '~/components/TactileFooter.vue'
export default {
  components: {
    TactileHeader,
    TactileFooter
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.wrapper {
  max-width: $grid-max-width;
  margin: $spacing-unit auto 0;
  background: #fff;
}
</style>
