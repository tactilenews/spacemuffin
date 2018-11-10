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
      :sounds="voices"
    />
  </tactile-modal>
</template>

<script>
import TactileModal from '~/components/TactileModal.vue'
import TactileSoundSelector from '~/components/TactileSoundSelector.vue'
import ModalMixin from '~/components/modals/modalMixin.js'
import { mapGetters } from 'vuex'

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
      selectedSound: this.$store.getters['sounds/voices'][0]
    }
  },
  computed: {
    ...mapGetters({
      voices: 'sounds/voices'
    })
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
