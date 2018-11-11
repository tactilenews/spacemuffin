<template>
  <tactile-modal
    :show="show"
    @cancel="cancel"
    @close="close"
    @confirm="confirm"
  >
    <template slot="title">Zitat einfügen</template>
    <p>Hier kannst du eine Stimme auswählen, die dein Zitat einspricht. Dadurch gestaltest du deinen Beitrag interessanter.</p>
    <tactile-sound-selector
      v-model="selectedVoice"
      :sounds="voices"
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
  props: {
    markerContext: { type: Object, default: null }
  },
  data() {
    const voices = this.$store.getters['sounds/voices']
    return {
      voices,
      selectedVoice: voices[0]
    }
  },
  methods: {
    confirm(type) {
      this.$emit('add-marker', {
        'data-label': this.selectedVoice.name,
        'data-file': this.selectedVoice.url
      })
    }
  }
}
</script>
