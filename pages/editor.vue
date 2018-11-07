<template>
  <div>
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
export default {
  components: {
    TactileEditor
  },
  asyncData({ store }) {
    return {
      json: store.getters['items/json']
    }
  },
  methods: {
    onUpdate({ getJSON, getHTML }) {
      this.$store.commit('items/save', getJSON())
    }
  }
}
</script>
