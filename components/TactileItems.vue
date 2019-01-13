<template>
  <table>
    <thead>
      <tr>
        <th>Titel</th>
        <th>Format</th>
        <th>Figur</th>
        <th>Sprecher</th>
        <th>Status</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tactile-items-row
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        @edit="$emit('edit')"
        @delete="$emit('delete')"
      />
    </tbody>
  </table>
</template>

<script>
import TactileItemsRow from './TactileItemsRow.vue'

export default {
  components: {
    TactileItemsRow
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';
table {
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow-y: scroll;
  border-collapse: collapse;
}

th,
td {
  margin: 0;
  border: 0;
  padding: $spacing-small;
}

th {
  background: #f0f3f5;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  text-align: left;

  font-size: 0.9 * $font-size-small;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

td {
  border-bottom: 1px solid #f0f3f5;
}

.title {
  max-width: 0;
  width: 30%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-weight: 600;
}

.actions {
  width: 30%;
  font-size: $font-size-small;
}
</style>
