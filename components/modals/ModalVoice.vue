<template>
  <tactile-modal
    :show="show"
    @cancel="cancel"
    @close="close"
    @confirm="confirm"
  >
    <span slot="title">Stimme wählen</span>
    <p>Wähle eine Stimme für den Markierten Abschnitt.</p>
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
