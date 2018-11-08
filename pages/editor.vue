<template>
  <div>
    <tactile-content>
      <editor
        :doc="json"
        @update="onUpdate"
      >
        <div
          slot="content"
          slot-scope="props"
        />
      </editor>
    </tactile-content>
    <tactile-actions-footer>
      <template slot="next">
        <tactile-button
          to="/"
        >
          Entwurf speichern
        </tactile-button>
        <tactile-button
          :primary="true"
          to="/review"
        >
          Übersicht anzeigen
        </tactile-button>
      </template>
    </tactile-actions-footer>
  </div>
</template>

<script>
import TactileContent from '~/components/TactileContent.vue'
import TactileActionsFooter from '~/components/TactileActionsFooter.vue'
import TactileButton from '~/components/TactileButton.vue'
import { Editor } from 'tiptap'

export default {
  components: {
    TactileContent,
    TactileActionsFooter,
    TactileButton,
    Editor
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

<style lang="scss">
.ProseMirror {
  padding: 1rem 1.5rem;
  // outline: none;
}
</style>
