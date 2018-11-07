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
        v-model="format"
        placeholder="Format wählen"
      />

      <br>

      zu dem Thema

      »<tactile-input
        v-model="title"
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
        v-model="figure"
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
      format: '',
      title: '',
      figure: ''
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
