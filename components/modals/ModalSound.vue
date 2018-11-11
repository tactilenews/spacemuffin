<template>
  <tactile-modal
    :show="show"
    @cancel="cancel"
    @close="close"
    @confirm="confirm"
  >
    <template slot="title">Geräusch einfügen</template>
    <p>Hier kannst du ein Geräusch in deinen Beitrag einfügen.</p>
    <tactile-sound-selector
      v-model="selectedSound"
      :sounds="sounds"
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
  data() {
    const sounds = this.$store.getters['sounds/sounds']
    return {
      sounds,
      selectedSound: sounds[0]
    }
  },
  methods: {
    confirm(type) {
      this.$emit('add-marker', {
        'data-label': this.selectedSound.name,
        'data-file': this.selectedSound.url
      })
    }
  }
}
</script>
