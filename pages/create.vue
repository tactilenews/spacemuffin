<template>
  <form>
    <p>
      <input v-model="meta.author">
      möchte eine
      <input v-model="meta.format">
      mit dem Titel
      <input v-model="meta.title">
      für die Tonie-Figur
      <input v-model="meta.tonie">
      erstellen
    </p>
    <nuxt-link
      to="/editor"
      tag="button" >
      Weiter
    </nuxt-link>
  </form>
</template>

<script>
export default {
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

<style>
</style>
