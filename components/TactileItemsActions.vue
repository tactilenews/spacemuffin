<template>
  <div v-if="status === 'draft'">
    <TactileButton
      :link="true"
      icon="edit"
      @click="$emit('edit')"
    >
      Bearbeiten
    </TactileButton>
    <TactileButton
      :link="true"
      icon="trash"
      @click="$emit('delete')"
    >
      Löschen
    </TactileButton>
  </div>
</template>

<script>
import TactileButton from '~/components/TactileButton.vue'

export default {
  components: {
    TactileButton
  },
  props: {
    status: {
      type: String,
      default: null
    }
  }
}
</script>
