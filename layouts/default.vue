<template>
  <div>
    <tactile-header />
    <main>
      <nuxt class="content" />
    </main>
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

main {
  max-width: $grid-max-width;
  margin: $spacing-unit auto;

  & > .content {
    padding: $spacing-unit;
    background: #fff;
  }
}
</style>
