<template>
  <button @click="$emit('click', $event)">
    <tactile-icon
      v-if="icon"
      :icon="icon"
    />
    <span class="visually-hidden">
      <slot />
    </span>
  </button>
</template>

<script>
import TactileIcon from '~/components/TactileIcon.vue'
export default {
  components: {
    TactileIcon
  },
  props: {
    icon: {
      type: String,
      default: null
    },
    primary: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

button {
  width: 1.25 * $spacing-unit;
  height: 1.25 * $spacing-unit;

  font-size: $spacing-small;
  color: #444;
  background-color: transparent;
  border: 1px solid;
  border-radius: 50%;
}

.primary {
  background-color: $color-brand;
  color: #fff;
}
</style>
