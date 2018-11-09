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
    <modal-voice
      :show.sync="showModal"
      :marker-context="lastEditorContext"
      @add-marker="onVoice" />
  </div>
</template>

<script>
import TactileContent from '~/components/TactileContent.vue'
import TactileActionsFooter from '~/components/TactileActionsFooter.vue'
import TactileButton from '~/components/TactileButton.vue'
import TactileEditor from '~/components/editor/TactileEditor'
import ModalVoice from '~/components/modals/ModalVoice'

export default {
  components: {
    TactileContent,
    TactileActionsFooter,
    TactileButton,
    TactileEditor,
    ModalVoice
  },
  asyncData({ store }) {
    return {
      json: store.getters['items/json']
    }
  },
  data() {
    return {
      showModal: false,
      lastEditorContext: null
    }
  },
  methods: {
    onVoice(meta) {
      this.lastEditorContext.mark.command(meta)
    },
    onUpdate({ getJSON, getHTML }) {
      this.$store.commit('items/saveJSON', getJSON())
    },
    onDialog({ mark, key, name, focus }) {
      let fileName
      this.lastEditorContext = { mark, key, name, focus }

      // switch (key) {
      //   case 'voice': {
      //     // simulate voice selection
      //     fileName = [
      //       'Mann',
      //       'Frau',
      //       'Mädchien (6)',
      //       'Junge (6)',
      //       'Mädchien (12)',
      //       'Junge (12)'
      //     ][Math.round(Math.random() * 5)]
      //     break
      //   }
      //   default: {
      //     // simulate random mp3 filename
      //     fileName = `${key}-sound-${Math.round(Math.random() * 100)}.mp3`
      //   }
      // }

      this.showModal = true
    }
  }
}
</script>
