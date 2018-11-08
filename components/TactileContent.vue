<template>
  <main>
    <slot />
  </main>
</template>

<style lang="scss" scoped>
@import '~assets/styles/variables';

main {
  padding: 1.5 * $spacing-unit;
}
</style>
