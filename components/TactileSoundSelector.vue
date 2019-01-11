<template>
  <div>
    <ul>
      <li
        v-for="sound in sounds"
        :key="sound.name"
        :class="{ 'is-active': sound.name === selected.name }"
        @click="$emit('select', sound)"

      >
        <div class="name">
          {{ sound.name }}
        </div>

        <div
          class="actions"
          @click.stop
        >
          <tactile-audio-player
            ref="players"
            :source="sound.url"
            @play="onPlay"
          />
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
      default: () => {}
    }
  },
  methods: {
    onPlay(playingPlayer) {
      this.$refs.players.forEach(player => {
        if (player !== playingPlayer) {
          player.stop()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

li {
  display: flex;
  align-items: center;
  margin: $spacing-tiny 0;
  padding: $spacing-tiny $spacing-small;

  list-style: none;
  border-radius: $border-radius;
}

li:hover,
li.is-active {
  background-color: $color-gray-light;
}

li.is-active {
  font-weight: 600;
}

.actions {
  margin-left: auto;
  opacity: 0.5;
}

li:hover .actions,
li.is-active .actions {
  opacity: 1;
}
</style>
