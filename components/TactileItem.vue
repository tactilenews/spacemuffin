<template>
  <div>
    <h1> {{ meta.title }} <em v-if="meta.author"> von {{ meta.author }} </em> </h1>
    <p> {{ meta.format }} </p>
    <TactileButton
      icon="edit"
      icon-position="right"
      @click="$emit('edit')"
    >
      Bearbeiten
    </TactileButton>
    <TactileButton
      icon="trash"
      icon-position="right"
      @click="$emit('delete')"
    >
      Löschen
    </TactileButton>
  </div>
</template>

<script>
import TactileButton from './TactileButton.vue'

export default {
  components: {
    TactileButton
  },
  props: {
    meta: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';
</style>
