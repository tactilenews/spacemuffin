<template>
  <span
    :class="status"
  >
    {{ label }}
  </span>
</template>

<style lang="scss" scoped>
@import '~assets/styles/variables';

span {
  padding: $spacing-tiny $spacing-small;
  background-color: #f0f3f5;
  border-radius: $line-height;

  font-size: 0.9 * $font-size-small;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
}

.draft {
  background-color: $color-blue-light;
  color: $color-blue-dark;
}

.ordered {
  background-color: $color-orange-light;
  color: $color-orange-dark;
}
</style>

<script>
export default {
  props: {
    status: {
      type: String,
      default: null
    }
  },
  computed: {
    label() {
      const labels = {
        draft: 'Entwurf',
        ordered: 'In Produktion'
      }

      return labels[this.status]
    }
  }
}
</script>
