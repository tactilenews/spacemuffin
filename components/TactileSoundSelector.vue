<template>
  <div>
    <h1>{{ title }}</h1>
    <ul id="example-1">
      <li
        v-for="sound in sounds"
        :key="sound.name">
        {{ sound.name }}
        <audio controls>
          <source
            :src="sound.url"
            type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
        <button v-if="sound.name === speaker">
          Ausgewählt
        </button>
        <button
          v-else
          @click="setSpeaker(sound.name)">
          Auswählen
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    sounds: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters({
      speaker: 'items/speaker'
    })
  },
  methods: {
    ...mapMutations({
      setSpeaker: 'items/setSpeaker'
    })
  }
}
</script>
