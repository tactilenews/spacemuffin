<template>
  <div>
    <button
      v-for="(meta, key) in markMeta"
      :key="key"
      :disabled="isDisabled(marks[key])"
      :class="[
        `mark-button-${key}`,
        isActive(marks[key]) && 'is-active'
      ]"
      :title="meta.description"
      class="menubar__button"
      @click="onButtonClick(marks[key], meta.label, key)"
    >
      <TactileIcon
        :icon="meta.icon"
        class="icon"
      /> {{ meta.label }}
    </button>
  </div>
</template>

<script>
import TactileIcon from '~/components/TactileIcon.vue'

export default {
  components: {
    TactileIcon
  },
  props: {
    marks: { type: Object, default: () => {} },
    focus: { type: Function, default: () => {} }
  },
  data() {
    return {
      markMeta: {
        voice: {
          label: 'Stimme',
          icon: 'user',
          description: 'Ändere die Stimme für den markierten Text.'
        },
        ambient: {
          label: 'Geräusch',
          icon: 'microphone',
          description: 'Lege ein Geräusch unter den markierten Text.'
        },
        oton: {
          label: 'O-Ton',
          icon: 'headphones-alt',
          description: 'Lege einen O-Ton zum über den markierten Text.'
        }
      }
    }
  },
  methods: {
    isActive(mark) {
      return mark.active()
    },
    isDisabled(mark) {
      let disabled = false
      // Object.keys(this.marks).forEach(key => {
      //   if (this.marks[key] !== mark && this.isActive(this.marks[key])) {
      //     disabled = true
      //   }
      // })
      return disabled
    },
    onButtonClick(mark, name, key) {
      if (!mark.active()) {
        this.$emit('dialog', { mark, name, key, focus: this.focus })
      } else {
        mark.command() // remove mark
        this.$emit('removed', { mark, name, key })
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/variables';
@import '~assets/styles/marker';

.menubar {
  position: sticky;
  top: 0;
  z-index: 99;
  background: $color-white;
  margin-left: -$spacing-small;
  margin-right: -$spacing-small;
  padding: $spacing-small 0.7 * $spacing-unit;
  border-bottom: 1px solid #ccc6;

  &__button {
    $padding-vertical: $spacing-tiny;
    $padding-horizontal: 1 + $spacing-tiny;

    display: inline-flex;
    background: transparent;
    border: 0;
    color: $color-text;
    padding: $padding-vertical $padding-horizontal;
    margin-right: 0.2 * $spacing-small;
    border-radius: $border-radius;
    cursor: pointer;

    &:hover {
      background-color: rgba($color-text, 0.05);
    }

    &.is-active {
      background-color: rgba($color-text, 0.1);
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    .icon {
      font-size: 0.7em;
      margin-top: 0.5em;
      margin-right: 0.5em;
      color: $color-text;
    }
  }

  .mark-button-voice {
    text-decoration: underline double;
    background-color: rgba($color-marker-voice, 0.1);

    &:hover {
      background-color: rgba($color-marker-voice, 0.3);
    }
    &.is-active {
      background-color: rgba($color-marker-voice, 0.7);
    }
  }
  .mark-button-ambient {
    text-decoration: underline dashed;
    background-color: rgba($color-marker-ambient, 0.1);

    &:hover {
      background-color: rgba($color-marker-ambient, 0.3);
    }
    &.is-active {
      background-color: rgba($color-marker-ambient, 0.7);
    }
  }
  .mark-button-oton {
    text-decoration: underline dotted;
    background-color: rgba($color-marker-oton, 0.1);

    &:hover {
      background-color: rgba($color-marker-oton, 0.3);
    }
    &.is-active {
      background-color: rgba($color-marker-oton, 0.7);
    }
  }
}
</style>
