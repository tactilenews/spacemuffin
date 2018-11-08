<template>
  <div>

    <tactile-content class="form">
      Du willst

      <tactile-select
        :options="{
          reportage: 'eine Reportage',
          latenight: 'eine Latenight',
          qa: 'ein Q&A',
          protokoll: 'ein Protokoll',
          buchtipp: 'einen Buchtipp',
          interview: 'ein Interview'
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
          karl: 'Karl Klimabär',
          ralph: 'Ralph',
          krake: 'Krake',
          newspirat: 'Newspirat'
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
        Zurück zur Übersicht
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
