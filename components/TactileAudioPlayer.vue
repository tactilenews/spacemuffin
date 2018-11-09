<template>
  <tactile-circle-button
    :icon="isPlaying ? 'pause' : 'play'"
    @click="isPlaying ? stop() : play()"
  >
    {{ isPlaying ? 'Audio stoppen' : 'Audio starten' }}
  </tactile-circle-button>
</template>

<script>
import TactileCircleButton from '~/components/TactileCircleButton.vue'
export default {
  components: {
    TactileCircleButton
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

    this.element.addEventListener('play', this.onPlay)
    this.element.addEventListener('ended', this.onStop)
    this.element.addEventListener('pause', this.onStop)
  },
  methods: {
    play() {
      this.element.currentTime = 0
      this.element.play()
    },
    stop() {
      this.element.pause()
    },
    onPlay() {
      this.isPlaying = true
      this.$emit('play', this)
    },
    onStop() {
      this.isPlaying = false
      this.$emit('stop', this)
    }
  }
}
</script>
