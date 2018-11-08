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
      <tactile-button
        :large="true"
        :primary="true"
        to="/review"
        tag="button"
      >
        Weiter
      </tactile-button>
    </div>
  </div>
</template>

<script>
import { Editor } from 'tiptap'
import TactileButton from '~/components/TactileButton'

export default {
  components: {
    editor: Editor,
    'tactile-button': TactileButton
  },
  asyncData({ store }) {
    return {
      json: store.getters['items/json']
    }
  },
  methods: {
    onUpdate({ getJSON, getHTML }) {
      this.$store.commit('items/saveJSON', getJSON())
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
