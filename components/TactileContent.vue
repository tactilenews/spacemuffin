<template>
  <main>
    <header v-if="$slots.header">
      <slot name="header" />
    </header>
    <slot />
  </main>
</template>

<style lang="scss" scoped>
@import '~assets/styles/variables';

main {
  padding: $spacing-unit;
}

header {
  padding: $spacing-small 0;
}
</style>
