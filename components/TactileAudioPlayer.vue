<template>
  <button @click="isPlaying ? stop() : play()">
    {{ isPlaying ? 'Stop' : 'Play' }}
  </button>
</template>

<script>
export default {
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
