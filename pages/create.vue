<template>
  <div>
    <div class="form">
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
        type="text"
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

    </div>

    <tactile-button
      :primary="true"
      :large="true"
      to="/editor"
    >Inhalte einfügen</tactile-button>
  </div>
</template>

<script>
import TactileInput from '~/components/TactileInput.vue'
import TactileSelect from '~/components/TactileSelect.vue'
import TactileButton from '~/components/TactileButton.vue'

export default {
  components: {
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
