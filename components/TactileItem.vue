<template>
  <div class="wrapper">
    <div class="meta">
      <h2> {{ meta.title }}</h2>
      <p> {{ meta.format }} </p>
    </div>
    <div
      v-if="status === 'draft'"
      class="actions" >
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
    },
    status: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';
.wrapper {
  align-items: center;
  width: 100%;
  display: flex;
}

h2 {
  margin: 0;
}

.actions {
  margin-left: auto;
}
</style>
