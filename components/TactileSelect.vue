<template>
  <div :class="{ isActive }">
    {{ options[value] }}
    <span
      v-if="!value"
      class="placeholder"
    >
      {{ placeholder }}
    </span>
    <select
      :value="value"
      @focus="isActive = true"
      @blur="isActive = false"
      @input="$emit('input', $event.target.value)"
    >
      <option
        v-if="placeholder"
        :selected="!value"
        disabled
      >
        {{ placeholder }}
      </option>
      <option
        v-for="(label, key) in options"
        :key="key"
        :value="key"
        :selected="key === value"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

div {
  position: relative;
  display: inline-block;
  padding: 0.25 * $spacing-unit 0 * $spacing-unit;

  font-weight: 700;
  border-bottom: 2px dashed $color-brand;
}

select {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: $font-size;
}

.isActive {
  border-bottom-style: solid;
}

.placeholder {
  color: #aaa;
  font-weight: 400;
}
</style>
