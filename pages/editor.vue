<template>
  <div>
    <tactile-content>
      <tactile-editor
        :doc="json"
        @update="onUpdate"
        @dialog="onDialog"
      />
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
    },
    onDialog({ mark, key, name, focus }) {
      let fileName

      switch (key) {
        case 'voice': {
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
        }
        default: {
          // simulate random mp3 filename
          fileName = `${key}-sound-${Math.round(Math.random() * 100)}.mp3`
        }
      }

      // Simulate async dialoge selection
      setTimeout(() => {
        mark.command({
          'data-file': fileName
        })
        focus()
      }, 200)
    }
  }
}
</script>
