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
      @click="marks[key].command"
    >
      {{ name }}
      <!--<icon name="bold" />-->
    </button>
  </div>
</template>

<script>
export default {
  props: {
    marks: { type: Object, default: () => {} }
  },
  data() {
    return {
      markNames: {
        bold: 'Sprecher',
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
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/editorMenuBar';
</style>
