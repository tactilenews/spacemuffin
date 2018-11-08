<template>
  <nuxt-link
    :to="to"
    :tag="tag"
    :class="{ button: true, primary, large }"
  >
    <TactileIcon
      v-if="icon"
      :class="{ 'icon': true, 'icon-right': iconPosition === 'right' }"
      :icon="icon"
    />
    <slot />
  </nuxt-link>
</template>

<script>
import TactileIcon from '~/components/TactileIcon.vue'
export default {
  components: {
    TactileIcon
  },
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
    },
    icon: {
      type: String,
      default: null
    },
    iconPosition: {
      type: String,
      default: 'left'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.button {
  display: inline-flex;
  align-items: center;
  padding: $spacing-tiny $spacing-small;

  text-decoration: none;
  color: $color-text;
  border: 1px solid;
  border-radius: $border-radius;
}

.button + .button {
  margin-left: $spacing-tiny;
}

.primary {
  background-color: $color-brand;
  color: #fff;
  font-weight: 500;
}

.large {
  padding: $spacing-small $spacing-unit;
  font-size: 1.25rem;
  font-size: $font-size-large;
}

.icon {
  margin-right: 0.5em;
}

.icon-right {
  order: 2;
  margin-right: 0;
  margin-left: 0.5em;
}
</style>
