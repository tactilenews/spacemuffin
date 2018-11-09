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
      :sounds="[
        { name: 'Frau - Astrid', url:'/quotes/woman-astrid.mp3' },
        { name: 'Frau - Franci', url:'/quotes/woman-franci.mp3' },
        { name: 'Mann - Robert', url: '/quotes/man-robert.mp3'},
        { name: 'Mann - Friedrich', url:'/quotes/man-friedrich.mp3' },
        { name: 'Junge - Matthias', url:'/quotes/boy-matthias.mp3' }
      ]"
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
    return {
      selectedSound: null
    }
  },
  methods: {
    confirm(type) {
      console.log({ ...this.selectedSound })
      this.$emit('add-marker', {
        'data-label': this.selectedSound.label,
        'data-file': this.selectedSound.url
      })
    }
  }
}
</script>
