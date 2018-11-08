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
        <button v-if="sound.name === selected.name">
          Ausgewählt
        </button>
        <button
          v-else
          @click="$emit('selectSound', sound)">
          Auswählen
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
