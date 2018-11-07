<template>
  <div>
    <editor
      :extensions="extensions"
      :doc="json"
      class="editor"
      @update="onUpdate">
      <div
        slot="menububble"
        slot-scope="{ marks, focus }"
        class="menububble">
        <template v-if="marks">
          <button
            :class="{ 'is-active': marks.bold.active() }"
            class="menububble__button"
            @click="marks.bold.command"
          >
            Sprecher
            <!--<icon name="bold" />-->
          </button>
          <button
            :class="{ 'is-active': marks.italic.active() }"
            class="menububble__button"
            @click="marks.italic.command"
          >
            Geräusch
            <!--<icon name="italic" />-->
          </button>
          <button
            :class="{ 'is-active': marks.code.active() }"
            class="menububble__button"
            @click="marks.code.command"
          >
            O-Ton
            <!--<icon name="code" />-->
          </button>
        </template>
      </div>
      <div
        slot="content"
        slot-scope="props"
      />
    </editor>
    <div style="text-align: right">
      <nuxt-link
        to="/review"
        tag="button"
      >
        Weiter
      </nuxt-link>
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
  BoldMark,
  CodeMark,
  ItalicMark,
  PlaceholderExtension,
  HistoryExtension
} from 'tiptap-extensions'
export default {
  components: {
    editor: Editor
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
        new PlaceholderExtension({
          emptyNodeClass: 'is-empty'
        }),
        new HistoryExtension()
      ]
    }
  },
  asyncData({ store }) {
    return {
      json: store.getters['items/json']
    }
  },
  methods: {
    onUpdate({ getJSON, getHTML }) {
      this.$store.commit('items/save', getJSON())
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

.menubar {
  display: flex;
  margin-bottom: 1rem;
  transition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;

  &.is-hidden {
    visibility: hidden;
    opacity: 0;
  }

  &.is-focused {
    visibility: visible;
    opacity: 1;
    transition: visibility 0.2s, opacity 0.2s;
  }

  &__button {
    font-weight: bold;
    display: inline-flex;
    background: transparent;
    border: 0;
    color: $color-black;
    padding: 0.2rem 0.5rem;
    margin-right: 0.2rem;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: rgba($color-black, 0.05);
    }

    &.is-active {
      background-color: rgba($color-black, 0.1);
    }
  }
}
.menububble {
  position: absolute;
  display: flex;
  z-index: 20;
  background: $color-black;
  border-radius: 5px;
  padding: 0.3rem;
  margin-bottom: 0.5rem;
  transform: translateX(-50%);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0.2s;

  &__button {
    display: inline-flex;
    background: transparent;
    border: 0;
    color: $color-white;
    padding: 0.2rem 0.5rem;
    margin-right: 0.2rem;
    border-radius: 3px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background-color: rgba($color-white, 0.1);
    }

    &.is-active {
      background-color: rgba($color-white, 0.2);
    }
  }

  &__form {
    display: flex;
    align-items: center;
  }

  &__input {
    font: inherit;
    border: none;
    background: transparent;
    color: $color-white;
  }
}
</style>
