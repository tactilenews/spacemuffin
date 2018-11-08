<template>
  <div>
    <tactile-sound-selector
      :sounds="speakers"
      :selected="speaker"
      title="Speaker"
      @selectSound="setSpeaker"
    />
    <tactile-editor
      :doc="json"
      @update="onUpdate" />
    <div style="text-align: right">
      <nuxt-link
        to="/review"
        tag="button"
      >
        Weiter
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import TactileEditor from '~/components/editor/TactileEditor'
import TactileSoundSelector from '~/components/TactileSoundSelector.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    'tactile-editor': TactileEditor,
    'tactile-sound-selector': TactileSoundSelector
  },
  computed: {
    ...mapGetters({
      speakers: 'sounds/speakers',
      speaker: 'items/speaker'
    })
  },
  asyncData({ store }) {
    return {
      json: store.getters['items/json']
    }
  },
  methods: {
    onUpdate({ getJSON, getHTML }) {
      this.$store.commit('items/saveJSON', getJSON())
    },
    ...mapMutations({
      setSpeaker: 'items/setSpeaker'
    })
  }
}
</script>
