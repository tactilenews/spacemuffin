<template>
  <tactile-content>
    <tactile-dropzone />
    <tactile-empty-state to="/create">
      Du hast noch keine Beiträge angelegt. Willst du jetzt anfangen?
      <template slot="action">Beitrag erstellen</template>
    </tactile-empty-state>
  </tactile-content>
</template>

<script>
import TactileContent from '~/components/TactileContent.vue'
import TactileEmptyState from '~/components/TactileEmptyState.vue'
import TactileDropzone from '~/components/TactileDropzone.vue'
export default {
  components: {
    TactileContent,
    TactileEmptyState,
    TactileDropzone
  }
}
</script>
