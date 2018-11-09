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
      let fileName
      try {
        switch (this.markerContext.key) {
          case 'voice':
            // simulate voice selection
            fileName = [
              'Mann',
              'Frau',
              'Mädchien (6)',
              'Junge (6)',
              'Mädchien (12)',
              'Junge (12)'
            ][Math.round(Math.random() * 5)]
            break
          default:
            // simulate random mp3 filename
            fileName = `${key}-sound-${Math.round(Math.random() * 100)}.mp3`
        }
      } catch (err) {}
      this.$emit('add-marker', {
        'data-file': fileName
      })
    }
  }
}
</script>
