<template>
  <editor
    :extensions="extensions"
    :doc="doc"
    class="editor"
    @update="$emit('update', $event)">
    <div
      slot="menububble"
      slot-scope="{ marks, focus }"
      class="menububble">
      <template v-if="marks">
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
  HardBreakNode,
  BulletListNode,
  ListItemNode,
  BoldMark,
  CodeMark,
  ItalicMark,
  PlaceholderExtension,
  HistoryExtension
} from 'tiptap-extensions'
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
        new HardBreakNode(),
        new BulletListNode(),
        new ListItemNode(),
        new BoldMark(),
        new CodeMark(),
        new ItalicMark(),
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
$color-ambient-tone: rgba(#777776, 0.4);
$color-original-tone: rgba(#00f, 0.2);

mark {
  padding-left: 0.2em;
  padding-right: 0.2em;
  margin-left: -0.2em;
  margin-right: -0.2em;
}

mark.mark-ambient-tone {
  background-color: $color-ambient-tone;
}
mark.mark-original-tone {
  background-color: $color-original-tone;
}
</style>
