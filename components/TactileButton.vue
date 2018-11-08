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
  margin: $spacing-tiny 0;
  padding: $spacing-tiny $spacing-small;

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
  margin: 0;
  padding: $spacing-small $spacing-unit;
  font-size: 1.25rem;
  font-size: $font-size-large;
}
</style>
