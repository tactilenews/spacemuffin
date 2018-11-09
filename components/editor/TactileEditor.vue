<template>
  <editor
    :extensions="extensions"
    :doc="doc"
    class="editor"
    @update="$emit('update', $event)">
    <div
      slot="menubar"
      slot-scope="{ nodes, marks, focus }"
      class="menubar">
      <template v-if="nodes && marks">
        <tactile-editor-menu
          :marks="marks"
          :focus="focus"
          @dialog="onDialog" />
      </template>
    </div>
    <div
      slot="content"
      slot-scope="props"
    />
  </editor>
</template>

<script>
import TactileEditorMenu from '~/components/editor/TactileEditorMenu.vue'
import { Editor } from 'tiptap'
import {
  HeadingNode,
  ListItemNode,
  PlaceholderExtension,
  HistoryExtension
} from 'tiptap-extensions'
import VoiceMark from '~/components/editor/marks/VoiceMark'
import QuoteMark from '~/components/editor/marks/QuoteMark'
import SoundMark from '~/components/editor/marks/SoundMark'

export default {
  components: {
    TactileEditorMenu,
    editor: Editor
  },
  props: {
    doc: { type: Object, default: () => {} }
  },
  data() {
    return {
      extensions: [
        new HeadingNode({ maxLevel: 2 }),
        new ListItemNode(),
        new VoiceMark(),
        new QuoteMark(),
        new SoundMark(),
        new PlaceholderExtension({
          emptyNodeClass: 'is-empty'
        }),
        new HistoryExtension()
      ]
    }
  },
  methods: {
    onDialog({ mark, key, name, focus }) {
      focus() // focus the editor if not already done to get the needed context
      this.$emit('dialog', { mark, key, name, focus })
    },
    onUpdate(e) {
      this.$emit('update', e)
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/variables';
@import '~assets/styles/marker';

.ProseMirror {
  margin-left: 1 - $spacing-small;
  margin-right: 1 - $spacing-small;
  margin-top: 1px;
  padding: $spacing-unit $spacing-unit;

  &:focus {
    outline: 1px solid rgba($color-brand, 0.5);
  }

  line-height: 1.3em;

  p,
  h1,
  h2,
  h3 {
    padding-bottom: 0.5 * $spacing-unit;

    &:last-child {
      padding-bottom: 0;
    }
  }
}
.editor p.is-empty:first-child::before {
  content: 'Füge hier dein Manuskript per Copy&Paste ein. Dann kannst Du es mit Geräuschen und Originaltönen ausstatten.';
  float: left;
  color: #aaa;
  pointer-events: none;
  height: auto;
  width: auto;
  padding-bottom: $spacing-unit;
  font-style: italic;
}

.editor {
  position: relative;
  margin-top: -$spacing-unit;
  margin-left: -$spacing-unit;
  margin-right: -$spacing-unit;
  margin-bottom: -1.5 * $spacing-unit;
}

mark {
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-left: -0.25em;
  margin-right: -0.25em;
  border-radius: 1rem;

  &::before {
    display: inline-block;
    content: '[' attr(data-label) '] ';
    opacity: 0.5;
    font-size: 0.5em;
    color: $color-text;
  }
}

.mark-voice {
  background-color: $color-marker-voice;
  font-style: italic;
  color: rgba($color-text, 0.7);
  text-decoration: underline double;
  text-underline-position: under;
}
.mark-sound {
  background-color: $color-marker-sound;
  text-decoration: underline dashed;
  text-underline-position: under;
}
.mark-quote {
  background-color: $color-marker-quote;
  text-decoration: underline dotted;
  text-underline-position: under;
}
</style>
