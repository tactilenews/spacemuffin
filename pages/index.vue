<template>
  <tactile-content>

    <template v-if="status">
      <h1 slot="header">Deine Beiträge</h1>
      <tactile-items
        v-if="status"
        :items="[{ meta, status, speaker }]"
        @edit="editItem"
        @delete="clearStorage"
      />
    </template>

    <tactile-empty-state
      v-else
      to="/create"
    >
      Du hast noch keine Beiträge angelegt. Willst du jetzt anfangen?
      <template slot="action">Beitrag erstellen</template>
    </tactile-empty-state>

  </tactile-content>
</template>

<script>
import { mapGetters } from 'vuex'
import TactileContent from '~/components/TactileContent.vue'
import TactileEmptyState from '~/components/TactileEmptyState.vue'
import TactileItems from '~/components/TactileItems'

export default {
  components: {
    TactileContent,
    TactileEmptyState,
    TactileItems
  },
  computed: {
    ...mapGetters({
      status: 'items/status',
      meta: 'items/meta',
      speaker: 'items/speaker',
      status: 'items/status'
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
