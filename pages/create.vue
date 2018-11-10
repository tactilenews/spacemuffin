<template>
  <div>

    <tactile-content class="form">
      Du willst

      <tactile-select
        :options="{
          'eine Reportage': 'eine Reportage',
          'eine Latenight': 'eine Latenight',
          'ein Q&A': 'ein Q&A',
          'ein Protokoll': 'ein Protokoll',
          'ein Buchtipp': 'einen Buchtipp',
          'ein Interview': 'ein Interview'
        }"
        v-model="meta.format"
        placeholder="Format wählen"
      />

      <br>

      zu dem Thema

      »<tactile-input
        v-model="meta.title"
        placeholder="Titel eingeben"
      />«

      <br>

      für die tonies-Figur

      <tactile-select
        :options="{
          'Karl Klimabär': 'Karl Klimabär',
          'Ralph': 'Ralph',
          'Krake': 'Krake',
          'Newspirat': 'Newspirat'
        }"
        v-model="meta.tonie"
        placeholder="Figur wählen"
      />

      vertonen.
    </tactile-content>

    <tactile-actions-footer>
      <tactile-button
        slot="prev"
        to="/"
        icon="chevron-left"
      >
        Zurück zum Dashboard
      </tactile-button>
      <tactile-button
        slot="next"
        :primary="true"
        to="/editor"
        icon="chevron-right"
        icon-position="right"
      >
        Loslegen
      </tactile-button>
    </tactile-actions-footer>

  </div>
</template>

<script>
import TactileContent from '~/components/TactileContent.vue'
import TactileActionsFooter from '~/components/TactileActionsFooter.vue'
import TactileInput from '~/components/TactileInput.vue'
import TactileSelect from '~/components/TactileSelect.vue'
import TactileButton from '~/components/TactileButton.vue'

export default {
  components: {
    TactileContent,
    TactileActionsFooter,
    TactileInput,
    TactileSelect,
    TactileButton
  },
  data() {
    return {
      meta: this.$store.getters['items/meta']
    }
  },
  watch: {
    meta: {
      deep: true,
      handler(meta) {
        this.$store.commit('items/saveMeta', meta)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/styles/variables';

.form {
  font-size: 2 * $font-size;
  line-height: 1.5 * $line-height;
}
</style>
