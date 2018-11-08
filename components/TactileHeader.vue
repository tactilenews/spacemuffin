<template>
  <header>
    <div class="wrapper">
      <nuxt-link to="/">
        <img
          src="~assets/img/logo.svg"
          alt="Tactile News"
        >
      </nuxt-link>
      <tactile-nav />
    </div>
  </header>
</template>

<script>
import TactileNav from './TactileNav.vue'
export default {
  components: {
    TactileNav
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

header {
  padding: 0.5 * $spacing-unit $spacing-unit;
  background: #fff;
}

.wrapper {
  display: flex;
  margin: auto;
  max-width: $grid-max-width;
}

a {
  margin-right: auto;
}

img {
  height: 1.5 * $spacing-unit;
}
</style>
