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

    <!-- load current modal component based on the selected mark type `modal-quote, modal-sound, modal-voice` -->
    <component
      :is="`modal-${markType}`"
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
import ModalSound from '~/components/modals/ModalSound'
import ModalQuote from '~/components/modals/ModalQuote'

export default {
  components: {
    TactileContent,
    TactileActionsFooter,
    TactileButton,
    TactileEditor,
    ModalVoice,
    ModalSound,
    ModalQuote
  },
  asyncData({ store }) {
    return {
      json: store.getters['items/json']
    }
  },
  data() {
    return {
      markType: 'voice',
      showModal: false,
      lastEditorContext: {}
    }
  },
  methods: {
    onVoice(meta) {
      this.lastEditorContext.mark.command(meta)
    },
    onUpdate({ getJSON, getHTML }) {
      this.$store.commit('items/doc', {
        json: getJSON(),
        html: getHTML()
      })
    },
    onDialog({ mark, key, name, focus }) {
      let fileName
      this.lastEditorContext = { mark, key, name, focus }
      this.markType = key
      this.showModal = true
    }
  }
}
</script>
