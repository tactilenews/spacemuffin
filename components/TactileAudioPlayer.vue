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
    // only create one audio element to prevent multiple sounds playing
    if (!window.audioElement) {
      this.element = document.createElement('audio')
      window.audioElement = this.element
    }
    this.element = window.audioElement
    this.element.addEventListener('play', this.onPlay)
    this.element.addEventListener('ended', this.onStop)
    this.element.addEventListener('pause', this.onStop)
  },
  beforeDestroy() {
    // cleanup events
    this.element.removeEventListener('play', this.onPlay)
    this.element.removeEventListener('ended', this.onStop)
    this.element.removeEventListener('pause', this.onStop)
  },
  methods: {
    play() {
      this.element.src = this.source
      this.element.currentTime = 0
      this.element.play()
    },
    stop() {
      this.element.pause()
      this.element.currentTime = 0
    },
    onPlay() {
      this.isPlaying = this.element.src.indexOf(this.source) >= 0
    },
    onStop() {
      this.isPlaying = this.element.src.indexOf(this.source) < 0
    }
  }
}
</script>
