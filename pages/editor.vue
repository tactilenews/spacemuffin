<template>
  <div>
    <tactile-content>
      <div class="meta">
        <input
          v-model="meta.title"
          class="title"
          type="text"
        >
        <tactile-button
          icon="user"
          @click="showSpeakerSelectorModal = true"
        >
          {{ speaker ? 'Dein Sprecher: ' + speaker.name : 'Sprecher wählen' }}
        </tactile-button>
        <modal-speaker
          :show.sync="showSpeakerSelectorModal"
          @selectSpeaker="onSelectSpeaker"
        />
      </div>

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
          @click="saveDraft"
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
      @add-marker="onAddMark"
    />
  </div>
</template>

<script>
import TactileContent from '~/components/TactileContent.vue'
import TactileActionsFooter from '~/components/TactileActionsFooter.vue'
import TactileButton from '~/components/TactileButton.vue'
import TactileEditor from '~/components/editor/TactileEditor'
import ModalSpeaker from '~/components/modals/ModalSpeaker'
import ModalSound from '~/components/modals/ModalSound'
import ModalQuote from '~/components/modals/ModalQuote'

export default {
  components: {
    TactileContent,
    TactileActionsFooter,
    TactileButton,
    TactileEditor,
    ModalSpeaker,
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
      markType: 'quote',
      showModal: false,
      lastEditorContext: {},
      meta: this.$store.getters['items/meta'],
      showSpeakerSelectorModal: false
    }
  },
  computed: {
    speaker: {
      get() {
        return this.$store.getters['items/speaker']
      },
      set(speaker) {
        return this.$store.commit('items/setSpeaker', speaker)
      }
    }
  },
  watch: {
    meta: {
      deep: true,
      handler(meta) {
        this.$store.commit('items/saveMeta', meta)
      }
    }
  },
  methods: {
    onAddMark(meta) {
      this.lastEditorContext.mark.command(meta)
    },
    saveDraft() {
      this.$store.commit('items/saveDraft')
      this.$router.push('/')
    },
    onUpdate(editorState) {
      this.$store.commit('items/doc', editorState)
    },
    onDialog({ mark, key, name, focus }) {
      let fileName
      this.lastEditorContext = { mark, key, name, focus }
      this.markType = key
      this.showModal = true
    },
    onSelectSpeaker(speaker) {
      this.speaker = speaker
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.meta {
  margin-bottom: $spacing-unit;
}

.title {
  width: 100%;
  margin-bottom: $spacing-small;
  padding: 0;
  font-size: 2 * $font-size;
  line-height: $spacing-unit;
  border: none;
}

.title:focus {
  outline: none;
}
</style>
