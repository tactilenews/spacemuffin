<template>
  <tactile-modal
    :show="show"
    @cancel="cancel"
    @close="close"
    @confirm="confirm"
  >
    <template slot="title">Sprecher wählen</template>
    <p>Hier kannst du den Sprecher auswählen, der deinen Text vertonen soll.</p>
    <tactile-sound-selector
      v-model="selectedSpeaker"
      :sounds="speakers"
    />
  </tactile-modal>
</template>

<script>
import TactileModal from '~/components/TactileModal.vue'
import TactileSoundSelector from '~/components/TactileSoundSelector.vue'
import ModalMixin from '~/components/modals/modalMixin.js'

export default {
  components: {
    'tactile-modal': TactileModal,
    'tactile-sound-selector': TactileSoundSelector
  },
  mixins: [ModalMixin],
  data() {
    const speakers = this.$store.getters['sounds/speakers']
    return {
      speakers,
      selectedSpeaker: speakers[0]
    }
  },
  methods: {
    confirm(type) {
      this.$emit('selectSpeaker', this.selectedSpeaker)
    }
  }
}
</script>
