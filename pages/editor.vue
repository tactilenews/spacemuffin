<template>
  <div>
    <tactile-content>
      <tactile-editor
        :doc="json"
        @update="onUpdate"
      />
    </tactile-content>
    <tactile-actions-footer>
      <tactile-button
        slot="prev"
        to="/create"
        icon="chevron-left"
      >
        Infos bearbeiten
      </tactile-button>
      <template slot="next">
        <tactile-button
          to="/"
        >
          Entwurf speichern
        </tactile-button>
        <tactile-button
          :primary="true"
          to="/review"
          icon="chevron-right"
          icon-position="right"
        >
          Auftrag überprüfen
        </tactile-button>
      </template>
    </tactile-actions-footer>
  </div>
</template>

<script>
import TactileContent from '~/components/TactileContent.vue'
import TactileActionsFooter from '~/components/TactileActionsFooter.vue'
import TactileButton from '~/components/TactileButton.vue'
import TactileEditor from '~/components/editor/TactileEditor'

export default {
  components: {
    TactileContent,
    TactileActionsFooter,
    TactileButton,
    TactileEditor
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
