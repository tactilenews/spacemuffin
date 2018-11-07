<template>
  <nuxt-link
    :to="to"
    :tag="tag"
    :class="[ 'button', modifier ]"
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
    modifier: {
      type: String,
      default: 'primary'
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
</style>
