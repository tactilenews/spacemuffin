<template>
  <tr>
    <td class="title">{{ item.meta.title }}</td>
    <td>{{ item.meta.format.split(' ')[1] }}</td>
    <td>{{ item.meta.tonie }}</td>
    <td>{{ item.speaker && item.speaker.name }}</td>
    <td>
      <tactile-status-badge :status="item.status" />
    </td>
    <td class="actions">
      <tactile-items-actions
        :status="item.status"
        @edit="$emit('edit')"
        @delete="$emit('delete')"
      />
    </td>
  </tr>
</template>

<script>
import TactileStatusBadge from '~/components/TactileStatusBadge.vue'
import TactileItemsActions from '~/components/TactileItemsActions.vue'

export default {
  components: {
    TactileStatusBadge,
    TactileItemsActions
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

td {
  margin: 0;
  border: 0;
  padding: $spacing-small;
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
  text-align: right;
}
</style>
