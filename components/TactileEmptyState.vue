<template>
  <div>
    <div class="muffin">
      <img
        src="~assets/img/muffin.svg"
        alt=""
      >
    </div>
    <p><slot /></p>
    <TactileButton
      :primary="true"
      :large="true"
      :to="to"
    >
      <slot name="action" />
    </TactileButton>
  </div>
</template>

<script>
import TactileButton from './TactileButton.vue'
export default {
  components: {
    TactileButton
  },

  props: {
    to: {
      type: [String, Object],
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

div {
  padding: 2 * $spacing-unit;
  text-align: center;
}

.muffin {
  position: relative;

  width: 3 * $spacing-unit;
  height: 3 * $spacing-unit;
  margin: auto;

  background-color: #eee;
  border-radius: 50%;
}

p {
  max-width: 500px;
  margin: auto;
  padding-top: $spacing-unit;
  padding-bottom: 0.5 * $spacing-unit;
  font-size: $font-size-large;
}

img {
  position: absolute;
  top: -0.5 * $spacing-unit;
  left: -0.5 * $spacing-unit;
  width: 4.5 * $spacing-unit;
  height: 4.5 * $spacing-unit;
}
</style>
