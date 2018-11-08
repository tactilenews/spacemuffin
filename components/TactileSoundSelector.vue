<template>
  <div>
    <ul>
      <li
        v-for="sound in sounds"
        :key="sound.name">
        <div class="name">
          {{ sound.name }}
        </div>
        <div class="actions">
          <button @click="$emit('select', sound.name)">Auswählen</button>
          <tactile-audio-player :source="sound.url" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import TactileAudioPlayer from '~/components/TactileAudioPlayer.vue'
export default {
  components: {
    TactileAudioPlayer
  },
  model: {
    prop: 'selected',
    event: 'select'
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    sounds: {
      type: Array,
      default: () => []
    },
    selected: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

li {
  display: flex;
  list-style: none;
  padding: $spacing-small 0;
}

li + li {
  border-top: 1px solid #eee;
}

.actions {
  margin-left: auto;
}
</style>
