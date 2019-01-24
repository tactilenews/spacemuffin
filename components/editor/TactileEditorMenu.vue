<template>
  <div class="menubar">
    <small>{{ helpText }}</small>
    <div class="buttons">
      <tactile-button
        v-for="(data, type) in meta"
        :key="type"
        :icon="data.icon"
        :class="[`mark-button-${type}`, marks[type].active() && 'is-active']"
        @mouseover="helpText = data.helpText"
        @mouseout="helpText = null"
        @click="$emit('toggleMark', type)"
      >
        {{ data.label }}
      </tactile-button>
    </div>

  </div>
</template>

<script>
import TactileButton from '~/components/TactileButton.vue'

const meta = {
  sound: {
    label: 'Geräusch',
    icon: 'volume-up',
    helpText: 'Lege ein Geräusch unter den markierten Text.'
  },
  quote: {
    label: 'Zitat',
    icon: 'microphone',
    helpText: 'Lege einen Zitat (O-Ton) über den markierten Text.'
  }
}

export default {
  components: {
    TactileButton
  },
  props: {
    marks: { type: Object, default: () => {} }
  },
  data() {
    return {
      meta,
      helpText: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.menubar {
  position: sticky;
  top: 0;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: $border-radius 0;
  padding: $spacing-small;

  background: $color-white;
  border-bottom: 1px solid #ddd;
}

small {
  color: $color-text-light;
}

.icon {
  font-size: 0.75em;
  margin-right: 0.5em;
}

.mark-button-sound,
.mark-button-quote,
.mark-button-sound:hover,
.mark-button-quote:hover {
  border: none;
  color: $color-text;
}

.mark-button-sound {
  background-color: rgba($color-marker-sound, 0.25);

  &:hover,
  &.is-active {
    background-color: rgba($color-marker-sound, 0.75);
  }
}

.mark-button-quote {
  background-color: rgba($color-marker-quote, 0.25);

  &:hover,
  &.is-active {
    background-color: rgba($color-marker-quote, 0.75);
  }
}
</style>
