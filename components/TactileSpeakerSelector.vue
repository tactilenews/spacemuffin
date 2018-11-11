<template>
  <div>
    <tactile-button
      icon="user"
      @click="showSpeakerSelectorModal = true"
    >
      {{ selectedSpeaker ? 'Dein Sprecher: ' + selectedSpeaker.name : 'Sprecher wählen' }}
    </tactile-button>
    <modal-speaker
      :show.sync="showSpeakerSelectorModal"
      @selectSpeaker="$emit('selectSpeaker', $event)"
    />
  </div>
</template>

<script>
import TactileButton from '~/components/TactileButton.vue'
import ModalSpeaker from '~/components/modals/ModalSpeaker.vue'
export default {
  components: {
    TactileButton,
    ModalSpeaker
  },
  model: {
    prop: 'selectedSpeaker',
    event: 'selectSpeaker'
  },
  props: {
    selectedSpeaker: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      showSpeakerSelectorModal: false
    }
  }
}
</script>
