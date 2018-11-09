<template>
  <tactile-modal
    :show="show"
    @cancel="cancel"
    @close="close"
    @confirm="confirm"
  >
    <span slot="title">Zitat / O-Ton</span>
    <p>Füge ein Original Zitat Audio (O-Ton) ein.</p>
    <tactile-sound-selector
      v-model="selectedSound"
      :sounds="sounds"
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
    const data = {
      selectedSound: {},
      sounds: [
        { name: 'Frauenstimme 1', url: '/quotes/woman-astrid.mp3' },
        { name: 'Frauenstimme 2', url: '/quotes/woman-franci.mp3' },
        { name: 'Männerstimme 1', url: '/quotes/man-robert.mp3' },
        { name: 'Männerstimme 2', url: '/quotes/man-friedrich.mp3' },
        { name: 'Jungestimme 1', url: '/quotes/boy-matthias.mp3' }
      ]
    }
    data.selectedSound = data.sounds[0]
    return data
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
