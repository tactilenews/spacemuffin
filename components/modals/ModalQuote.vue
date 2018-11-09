<template>
  <tactile-modal
    :show="show"
    @cancel="cancel"
    @close="close"
    @confirm="confirm"
  >
    <span slot="title">Zitat / O-Ton</span>
    <p>Füge ein Original Zitat Audio (O-Ton) ein.</p>
  </tactile-modal>
</template>

<script>
import TactileModal from '~/components/TactileModal.vue'
import ModalMixin from '~/components/modals/modalMixin.js'

export default {
  components: {
    TactileModal
  },
  mixins: [ModalMixin],
  props: {
    markerContext: { type: Object, default: null }
  },
  methods: {
    confirm(type) {
      let fileName = `${this.markerContext.key}-sound-${Math.round(
        Math.random() * 100
      )}.mp3`

      this.$emit('add-marker', {
        'data-file': fileName
      })
    }
  }
}
</script>
