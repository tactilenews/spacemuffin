<template>
  <div>
    <editor
      :extensions="extensions"
      class="editor">
      <div
        slot="content"
        slot-scope="props">
        <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
      </div>
    </editor>
    <div style="text-align: right">
      <nuxt-link
        to="/review"
        tag="button">Weiter</nuxt-link>
    </div>
  </div>
</template>

<script>
import { Editor } from 'tiptap'
import {
  HeadingNode,
  HardBreakNode,
  BulletListNode,
  ListItemNode,
  PlaceholderExtension,
  HistoryExtension
} from 'tiptap-extensions'
export default {
  components: {
    Editor
  },
  data() {
    return {
      extensions: [
        new HeadingNode({ maxLevel: 2 }),
        new HardBreakNode(),
        new BulletListNode(),
        new ListItemNode(),
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
  padding: 0.8rem 1rem;

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
</style>
