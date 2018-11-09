<template>
  <tactile-content>
    <tactile-item
      v-if="status"
      :meta="meta"
      :status="status"
      to="create"
      @edit="editItem"
      @delete="clearStorage"
    />
    <tactile-empty-state
      v-else
      to="/create">
      Du hast noch keine Beiträge angelegt. Willst du jetzt anfangen?
      <template slot="action">Beitrag erstellen</template>
    </tactile-empty-state>
  </tactile-content>
</template>

<script>
import { mapGetters } from 'vuex'
import TactileContent from '~/components/TactileContent.vue'
import TactileEmptyState from '~/components/TactileEmptyState.vue'
import TactileItem from '~/components/TactileItem'

export default {
  components: {
    TactileContent,
    TactileEmptyState,
    TactileItem
  },
  computed: {
    ...mapGetters({
      status: 'items/status',
      meta: 'items/meta'
    })
  },
  methods: {
    editItem() {
      this.$router.push('create')
    },
    clearStorage() {
      this.$store.commit('items/reset')
    }
  }
}
</script>
