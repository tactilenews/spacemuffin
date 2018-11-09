<template>
  <div>
    <ul>
      <li
        v-for="sound in sounds"
        :key="sound.name"
        :class="{ 'is-active': sound.name === selected }"

      >
        <div class="name">
          {{ sound.name }}
        </div>

        <div class="actions">
          <tactile-audio-player :source="sound.url" />
          <tactile-circle-button
            icon="check"
            @click="$emit('select', sound.name)"
          >
            Sound verwenden
          </tactile-circle-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import TactileAudioPlayer from '~/components/TactileAudioPlayer.vue'
import TactileCircleButton from '~/components/TactileCircleButton.vue'
export default {
  components: {
    TactileAudioPlayer,
    TactileCircleButton
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
  align-items: center;
  list-style: none;
  padding: $spacing-small;
}

li + li {
  border-top: 1px solid #eee;
}

.is-active {
  background-color: #eee;
}

.actions {
  margin-left: auto;
}
</style>
