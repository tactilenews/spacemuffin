<template>
  <div :class="{ isActive }">
    <span class="value">{{ value }}</span>
    <span
      v-if="!value"
      class="placeholder"
    >
      {{ placeholder }}
    </span>
    <input
      :type="type"
      :value="value"
      :class="{ isEmpty: !value }"
      @focus="isActive = true"
      @blur="isActive = false"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
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

div,
input {
  font-weight: 700;
  border: none;
  padding: 0.25 * $spacing-unit 0;
}

div {
  position: relative;
  display: inline-block;
  border-bottom: 2px dashed $color-brand;
}

.isActive {
  border-bottom-style: solid;
}

input {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

  -webkit-text-fill-color: transparent;
  background-color: transparent;
}

input:focus {
  outline: none;
}

.value {
  white-space: pre;
}

.placeholder {
  font-weight: 400;
  color: #aaa;
}
</style>
