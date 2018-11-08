<template>
  <div>
    <button
      v-for="(name, key) in markNames"
      :key="name"
      :disabled="isDisabled(marks[key])"
      :class="[
        isActive(marks[key]) && 'is-active'
      ]"
      class="menubar__button"
      @click="onButtonClick(marks[key], name, key)"
    >
      {{ name }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    marks: { type: Object, default: () => {} },
    focus: { type: Function, default: () => {} }
  },
  data() {
    return {
      markNames: {
        voice: 'Sprecher',
        ambientTone: 'Geräusch',
        originalTone: 'O-Ton'
      }
    }
  },
  methods: {
    isActive(mark) {
      return mark.active()
    },
    isDisabled(mark) {
      let disabled = false
      Object.keys(this.marks).forEach(key => {
        if (this.marks[key] !== mark && this.isActive(this.marks[key])) {
          disabled = true
        }
      })
      return disabled
    },
    onButtonClick(mark, name, key) {
      if (!mark.active()) {
        this.$emit('dialog', { mark, name, key, focus: this.focus })
      } else {
        mark.command() // remove mark
        this.$emit('removed', { mark, name, key })
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/editorMenuBar';
</style>
