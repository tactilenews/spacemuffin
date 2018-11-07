<template>
  <nuxt-link
    :to="to"
    :tag="tag"
    :class="{ button: true, primary, large }"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    tag: {
      type: String,
      default: 'a'
    },
    primary: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.button {
  display: inline-block;
  margin: 0.25 * $spacing-unit 0;
  padding: 0.25 * $spacing-unit 0.5 * $spacing-unit;

  text-decoration: none;
  color: $color-text;
  border: 1px solid;
  border-radius: 3px;
}

.primary {
  background-color: $color-brand;
  color: #fff;
  font-weight: 500;
}

.large {
  font-size: $font-size-large;
}
</style>
