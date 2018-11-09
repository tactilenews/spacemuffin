<template>
  <tactile-modal
    :show="show"
    confirm-label="Sprecher auswählen"
    @cancel="cancel"
    @close="close"
    @confirm="confirm"
  >
    <span slot="title">Sprecher wählen</span>
    <p>Wähle einen Sprecher aus, der deinen Text vertonen soll.</p>
    <tactile-sound-selector
      v-model="selectedSpeaker"
      :sounds="$store.getters['sounds/speakers']"
    />
  </tactile-modal>
</template>

<script>
import TactileModal from '~/components/TactileModal.vue'
import ModalMixin from '~/components/modals/modalMixin.js'
import TactileSoundSelector from '~/components/TactileSoundSelector.vue'

export default {
  components: {
    TactileModal,
    TactileSoundSelector
  },
  mixins: [ModalMixin],
  props: {
    markerContext: { type: Object, default: null }
  },
  methods: {
    confirm(type) {
      let fileName = [
        'Mann',
        'Frau',
        'Mädchien (6)',
        'Junge (6)',
        'Mädchien (12)',
        'Junge (12)'
      ][Math.round(Math.random() * 5)]

      this.$emit('add-marker', {
        'data-file': fileName
      })
    }
  }
}
</script>
