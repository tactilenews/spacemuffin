<template>
  <tactile-modal
    ref="modal"
    :confirm-label="confirmLabel"
    @confirm="$emit('select', temporarilySelected)"
  >
    <template slot="header">
      <h2>{{ heading }}</h2>
      <p>{{ helpText }}</p>
    </template>

    <tactile-sound-selector
      v-model="temporarilySelected"
      :sounds="sounds"
      class="selector"
    />
  </tactile-modal>
</template>

<script>
import TactileModal from '~/components/TactileModal.vue'
import TactileSoundSelector from '~/components/TactileSoundSelector.vue'

export default {
  components: {
    TactileModal,
    TactileSoundSelector
  },
  model: {
    prop: 'selected',
    event: 'select'
  },
  props: {
    heading: {
      type: String,
      default: 'Sound wählen'
    },
    helpText: {
      type: String,
      default: 'Wähle einen Sound aus.'
    },
    action: {
      type: String,
      default: 'wählen'
    },
    sounds: {
      type: Array,
      default: () => []
    },
    selected: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      temporarilySelected: this.selected || this.sounds[0]
    }
  },
  computed: {
    confirmLabel() {
      if (this.temporarilySelected) {
        return `${this.temporarilySelected.name} ${this.action}`
      }
    }
  },
  methods: {
    open() {
      this.$refs.modal.open()
    },
    close() {
      this.$refs.modal.close()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.selector {
  margin: 0 -1 * $spacing-small;
}
</style>
