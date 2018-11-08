<template>
  <footer>
    <div class="next">
      <slot name="next" />
    </div>
    <div class="prev">
      <slot name="prev" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '~assets/styles/variables';

footer {
  display: flex;
  width: 100%;
  padding: $spacing-unit 1.5 * $spacing-unit;
  border-top: 1px solid #eee;
}

.prev {
  order: 1;
  margin-right: auto;
}

.next {
  order: 2;
  margin-left: auto;
}
</style>
