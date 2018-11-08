<template>
  <button @click="isPlaying ? stop() : play()">
    <tactile-icon :icon="isPlaying ? 'pause' : 'play'" />
    <span class="visually-hidden">
      {{ isPlaying ? 'Audio stoppen' : 'Audio starten' }}
    </span>
  </button>
</template>

<script>
import TactileIcon from '~/components/TactileIcon.vue'
export default {
  components: {
    TactileIcon
  },
  props: {
    source: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isPlaying: false
    }
  },
  watch: {
    source(source) {
      this.element.src = source
    }
  },
  created() {
    this.element = document.createElement('audio')
    this.element.src = this.source

    this.element.addEventListener('play', () => {
      this.isPlaying = true
    })

    this.element.addEventListener('ended', () => {
      this.isPlaying = false
    })

    this.element.addEventListener('pause', () => {
      this.isPlaying = false
    })
  },
  methods: {
    play() {
      this.element.play()
    },
    stop() {
      this.element.pause()
      this.element.currentTime = 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

button {
  width: 1.5 * $spacing-unit;
  height: 1.5 * $spacing-unit;

  color: #fff;
  background-color: $color-brand;
  border: none;
  border-radius: 50%;
}
</style>
