<template>
  <div>
    <editor
      :doc="json"
      @update="onUpdate"
    >
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

export default {
  components: {
    editor: Editor
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
.ProseMirror {
  padding: 1rem 1.5rem;
  // outline: none;
}
</style>
