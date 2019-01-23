<template>
  <nuxt-link
    v-if="to"
    :to="to"
    :tag="tag"
    :class="{ button: true, primary, secondary: !primary, large, link }"
    v-on="$listeners"
  >
    <tactile-icon
      v-if="icon"
      :class="{ 'icon': true, 'icon-right': iconPosition === 'right' }"
      :icon="icon"
    />
    <slot />
  </nuxt-link>
  <button
    v-else
    :class="{ button: true, primary, secondary: !primary, large, link }"
    v-on="$listeners"
  >
    <tactile-icon
      v-if="icon"
      :class="{ 'icon': true, 'icon-right': iconPosition === 'right' }"
      :icon="icon"
    />
    <slot />
  </button>
</template>

<script>
import TactileIcon from '~/components/TactileIcon.vue'
export default {
  components: {
    'tactile-icon': TactileIcon
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
    link: {
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
  font-size: inherit;
  line-height: inherit;
  align-items: center;
  padding: $spacing-tiny $spacing-small;
  text-decoration: none;
  color: $color-text;
  background-color: transparent;
  border: 1px solid;
  border-radius: $border-radius;
  cursor: pointer;
}

.button + .button {
  margin-left: $spacing-tiny;
}

.primary {
  background-color: $color-brand;
  color: #fff;
  font-weight: 500;
}

.primary:hover {
  background-color: darken($color-brand, 10);
}

.secondary:hover {
  background-color: $color-text;
  color: $color-white;
}

.large {
  padding: $spacing-small $spacing-unit;
  font-size: 1.25rem;
  font-size: $font-size-large;
}

.link,
.link:hover {
  padding-left: 0;
  padding-right: 0;
  background: none;
  border-color: transparent;
  color: $color-text;
  font-weight: 600;
  opacity: 0.75;
}

.link:hover {
  opacity: 1;
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
