<template>
  <div
    v-if="isOpen"
    class="modal-wrapper"
    role="dialog"
    @click="close()"
  >

    <div
      class="modal"
      @click.stop
    >

      <header class="modal__header">
        <slot name="header" />
      </header>

      <div class="modal__body">
        <slot />
      </div>

      <TactileActionsFooter
        :is-compact="true"
        class="modal__footer"
      >
        <tactile-button
          slot="prev"
          @click="close()"
        >
          {{ cancelLabel }}
        </tactile-button>
        <tactile-button
          slot="next"
          :primary="true"
          icon="check"
          @click="confirm()"
        >
          {{ confirmLabel }}
        </tactile-button>
      </TactileActionsFooter>

    </div>
  </div>
</template>

<script>
import TactileButton from '~/components/TactileButton.vue'
import TactileActionsFooter from '~/components/TactileActionsFooter.vue'

export default {
  components: {
    TactileButton,
    TactileActionsFooter
  },
  props: {
    cancelLabel: {
      type: String,
      default: 'Abbrechen'
    },
    confirmLabel: {
      type: String,
      default: 'Ok'
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  mounted() {
    this.handleKey.bind(this)
    addEventListener('keyup', this.handleKey)
  },
  beforeDestroy() {
    removeEventListener('keyup', this.handleKey)
  },
  methods: {
    open() {
      this.isOpen = true
      document.body.style.overflow = 'hidden'
    },
    close() {
      this.isOpen = false
      document.body.style.overflow = null
    },
    confirm() {
      this.$emit('confirm')
      this.close()
    },
    handleKey(event) {
      if (event.key === 'Escape') {
        this.close()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.modal-wrapper {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  overflow: scroll;

  display: flex;
  width: 100%;
  height: 100%;

  background: rgba($color-gray-light, 0.9);
}

.modal {
  width: 100%;
  min-height: 100%;
  max-width: 32rem;
  margin: auto;

  background-color: $color-white;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.modal__body {
  padding: $spacing-small $spacing-unit;
}

.modal__header {
  padding: $spacing-unit $spacing-unit 0;
}

.modal__footer {
  position: sticky;
  bottom: 0;
  border-radius: 0 0 $border-radius $border-radius;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

@media screen and (min-width: 560px) {
  .modal-wrapper {
    padding: $spacing-unit;
  }

  .modal {
    min-height: 0;
    border-radius: $border-radius;
  }

  .modal__footer {
    bottom: -1 * $spacing-unit;
  }
}
</style>
