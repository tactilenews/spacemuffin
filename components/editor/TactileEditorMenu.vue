<template>
  <div>
    <button
      :disabled="marks.ambientTone.active() || marks.originalTone.active()"
      :class="{ 'is-active': marks.bold.active() }"
      class="menububble__button"
      @click="marks.bold.command"
    >
      Sprecher
      <!--<icon name="bold" />-->
    </button>
    <button
      :class="{ 'is-active': marks.italic.active() }"
      class="menububble__button"
      @click="marks.ambientTone.command"
    >
      Geräusch
      <!--<icon name="italic" />-->
    </button>
    <button
      :class="{ 'is-active': marks.code.active() }"
      class="menububble__button"
      @click="marks.originalTone.command"
    >
      O-Ton
      <!--<icon name="code" />-->
    </button>
  </div>
</template>

<script>
export default {
  props: {
    marks: { type: Object, default: () => {} }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/editorMenuBubble';
@import '~assets/styles/editorMenuBar';
</style>
