<template>
  <div>
    <h1>{{ title }}</h1>
    <ul id="example-1">
      <li
        v-for="sound in sounds"
        :key="sound.name">
        {{ sound.name }}
        {{ sound.url }}
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
    }
  }
}
</script>
