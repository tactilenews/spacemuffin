<template>
  <editor
    :extensions="extensions"
    :doc="doc"
    class="editor"
    @update="$emit('update', $event)">
    <div
      slot="menubar"
      slot-scope="{ nodes, marks }"
      class="menubar">
      <template v-if="nodes && marks">
        <tactile-editor-menu :marks="marks" />
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
import OriginalToneMark from '~/components/editor/marks/OriginalToneMark'
import AmbientToneMark from '~/components/editor/marks/AmbientToneMark'

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
        new OriginalToneMark(),
        new AmbientToneMark(),
        new PlaceholderExtension({
          emptyNodeClass: 'is-empty'
        }),
        new HistoryExtension()
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/variables';

.ProseMirror {
  padding: $spacing-unit $spacing-unit;

  &:focus {
    outline: 1px dashed rgba($color-brand, 0.2);
  }

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
  content: 'Füge hier deinen Beitrag ein…';
  float: left;
  color: #aaa;
  pointer-events: none;
  height: 0;
  font-style: italic;
}

.editor {
  position: relative;
  margin-top: -$spacing-unit;
  margin-left: -$spacing-unit;
  margin-right: -$spacing-unit;
  margin-bottom: $spacing-unit;
}

$color-white: #fff;
$color-black: #000;
$color-voice: rgba(#ed553b, 0.4);
$color-ambient-tone: rgba(#08bcbf, 0.4);
$color-original-tone: rgba(#f2b134, 0.4);

mark {
  padding-left: 0.2em;
  padding-right: 0.2em;
  margin-left: -0.2em;
  margin-right: -0.2em;
  border-radius: $border-radius;

  &::before {
    display: inline-block;
    content: '[' attr(data-file) '] ';
    opacity: 0.5;
    font-size: 0.5em;
  }
}

mark.mark-voice {
  background-color: $color-voice;
}
mark.mark-ambient-tone {
  background-color: $color-ambient-tone;
}
mark.mark-original-tone {
  background-color: $color-original-tone;
}
</style>
