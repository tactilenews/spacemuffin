<template>
  <div>
    <editor
      ref="editor"
      :extensions="extensions"
      :doc="doc"
      class="editor"
      @update="$emit('update', $event)"
    >
      <tactile-editor-menu
        v-if="marks"
        slot="menubar"
        slot-scope="{ marks }"
        :marks="marks"
        @toggleMark="toggleMark($event)"
      />
      <div
        slot="content"
        slot-scope="props"
        class="content"
      />
    </editor>

    <tactile-sound-selector-modal
      ref="modalSound"
      :sounds="sounds"
      heading="Geräusch einfügen"
      help-text="Hier kannst du ein Geräusch in deinen Beitrag einfügen."
      action="einfügen"
      @select="addMark('sound', $event)"
    />
    <tactile-sound-selector-modal
      ref="modalQuote"
      :sounds="voices"
      heading="Zitat einfügen"
      help-text="Hier kannst du eine Stimme auswählen, die dein Zitat einspricht. Dadurch gestaltest du deinen Beitrag interessanter."
      @select="addMark('quote', $event)"
    />
  </div>
</template>

<script>
import { Editor } from 'tiptap'
import {
  HeadingNode,
  ListItemNode,
  PlaceholderExtension,
  HistoryExtension
} from 'tiptap-extensions'

import addMark from '~/components/editor/helpers/addMark'
import removeMark from '~/components/editor/helpers/removeMark'

import QuoteMark from '~/components/editor/marks/QuoteMark'
import SoundMark from '~/components/editor/marks/SoundMark'

import TactileEditorMenu from '~/components/editor/TactileEditorMenu.vue'
import TactileSoundSelectorModal from '~/components/TactileSoundSelectorModal.vue'

export default {
  components: {
    TactileEditorMenu,
    TactileSoundSelectorModal,
    editor: Editor
  },
  props: {
    doc: { type: Object, default: () => {} }
  },
  data() {
    return {
      sounds: this.$store.getters['sounds/sounds'],
      voices: this.$store.getters['sounds/voices'],
      extensions: [
        new HeadingNode({ maxLevel: 2 }),
        new ListItemNode(),
        new QuoteMark(),
        new SoundMark(),
        new PlaceholderExtension({ emptyNodeClass: 'is-empty' }),
        new HistoryExtension()
      ]
    }
  },
  methods: {
    toggleMark(type) {
      const mark = this.$refs.editor.menuActions.marks[type]

      if (mark.active()) {
        return this.removeMark(type)
      }

      const modals = {
        sound: this.$refs.modalSound,
        quote: this.$refs.modalQuote
      }

      modals[type].open()
    },
    addMark(type, data) {
      const command = this.$refs.editor.commands[type]
      if (command) command(data)
    },
    removeMark(type) {
      const command = this.$refs.editor.commands[type]
      if (command) command()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.editor {
  position: relative;
  border: 1px solid #ddd;
  border-radius: $border-radius;
  line-height: 1.75;
}

.editor:focus-within {
  border: 1px solid rgba($color-brand, 0.5);
}
</style>

<style lang="scss">
@import '~assets/styles/variables';

.ProseMirror {
  padding: $spacing-small;
  min-height: 5 * $spacing-unit;
}

.ProseMirror:focus {
  outline: none;
}

.ProseMirror .is-empty:first-child::before {
  content: 'Füge hier deinen Text ein…';
  position: absolute;
  color: #aaa;
  pointer-events: none;
  height: auto;
  width: auto;
  padding-bottom: $spacing-unit;
  font-style: italic;
}

.editor :matches(p, h1, h2, h3):not(:last-child) {
  padding-bottom: 0.5 * $spacing-unit;
}

.mark-sound,
.mark-quote {
  padding-left: 0.5em;
  padding-right: 0.5em;
  border-radius: 1rem;

  &::before {
    display: inline-block;
    content: '[' attr(data-name) '] ';
    opacity: 0.5;
    color: $color-text;
  }
}

.mark-sound {
  background-color: rgba($color-marker-sound, 0.5);
}

.mark-quote {
  background-color: rgba($color-marker-quote, 0.5);
}
</style>
