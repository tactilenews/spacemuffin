<template>
  <footer :class="{ 'is-compact': isCompact }">
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
  border-top: 1px solid $color-gray-light;
}

.is-compact {
  padding: $spacing-small $spacing-unit;
  background-color: $color-gray-light;
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

<script>
export default {
  props: {
    isCompact: {
      type: Boolean,
      default: false
    }
  }
}
</script>
