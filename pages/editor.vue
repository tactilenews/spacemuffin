<template>
  <div>
    <tactile-sound-selector
      :sounds="speakers"
      title="Speaker"
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
import { mapGetters } from 'vuex'

export default {
  components: {
    'tactile-editor': TactileEditor,
    'tactile-sound-selector': TactileSoundSelector
  },
  computed: {
    ...mapGetters({
      speakers: 'sounds/speakers'
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
    }
  }
}
</script>
