<template>
  <div>
    <tactile-button
      icon="user"
      @click="$refs.modal.open()"
    >
      {{ selected ? 'Dein Sprecher: ' + selected.name : 'Sprecher wählen' }}
    </tactile-button>
    <tactile-sound-selector-modal
      ref="modal"
      :sounds="speakers"
      :selected="selected"
      v-model="temporarilySelected"
      heading="Sprecher wählen"
      help-text="Wer soll deinen Text vertonen?"
      @select="$emit('select', temporarilySelected)"
    />
  </div>
</template>

<script>
import TactileButton from '~/components/TactileButton.vue'
import TactileSoundSelectorModal from '~/components/TactileSoundSelectorModal.vue'
export default {
  components: {
    TactileButton,
    TactileSoundSelectorModal
  },
  model: {
    prop: 'selected',
    event: 'select'
  },
  props: {
    selected: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      speakers: this.$store.getters['sounds/speakers'],
      temporarilySelected: this.selected
    }
  }
}
</script>
