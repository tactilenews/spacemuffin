<template>
  <tactile-empty-state to="/create">
    Du hast noch keine Beiträge angelegt. Willst du jetzt anfangen?
    <template slot="action">Beitrag erstellen</template>
  </tactile-empty-state>
</template>

<script>
import TactileEmptyState from '~/components/TactileEmptyState.vue'
export default {
  components: {
    TactileEmptyState
  }
}
</script>
