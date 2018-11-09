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
    outline: 1px dashed rgba($color-brand, 0.2);
  }

  line-height: 1.2em;

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
  content: 'Füge hier deinen Text ein…';
  position: absolute;
  color: #aaa;
  pointer-events: none;
  font-style: italic;
}

.editor {
  position: relative;
  margin-top: -$spacing-unit;
  margin-left: -$spacing-unit;
  margin-right: -$spacing-unit;
  margin-bottom: $spacing-unit;
}

mark {
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin-left: -0.25em;
  margin-right: -0.25em;
  border-radius: 1rem;

  &::before {
    display: inline-block;
    content: '[' attr(data-file) '] ';
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
}
.mark-sound {
  background-color: $color-marker-sound;
  text-decoration: underline dashed;
}
.mark-quote {
  background-color: $color-marker-quote;
  text-decoration: underline dotted;
}
</style>
