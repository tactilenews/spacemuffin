<template>
  <tactile-content>
    <tactile-empty-state to="/create">
      Du hast noch keine Beiträge angelegt. Willst du jetzt anfangen?
      <template slot="action">Beitrag erstellen</template>
    </tactile-empty-state>
  </tactile-content>
</template>

<script>
import TactileContent from '~/components/TactileContent.vue'
import TactileEmptyState from '~/components/TactileEmptyState.vue'
export default {
  components: {
    TactileContent,
    TactileEmptyState
  }
}
</script>
