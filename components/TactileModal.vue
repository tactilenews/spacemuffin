<template>
  <div>
    <transition name="fade">
      <div
        v-if="show"
        ref="backdrop"
        class="modal-backdrop"/>
    </transition>
    <div
      v-if="show"
      ref="modal"
      key="modal-key"
      class="modal"
      tableindex="-1"
      role="dialog"
      @click="backdropClickHandler">
      <div class="modal-header">
        <h2>
          <slot name="title" />
        </h2>
        <button
          class="close"
          aria-hidden="true"
          @click="cancel('close')"/>
      </div>
      <div
        ref="modalBody"
        class="modal-body">
        <slot />
      </div>
      <div class="modal-footer">
        <slot
          :cancel="cancel"
          :confirm="confirm"
          name="footer"
        >
          <tactile-button
            class="button-cancel"
            icon="times"
            @click="cancel('cancel')"
          >
            Abbrechen
          </tactile-button>
          <tactile-button
            :primary="true"
            class="button-confirm"
            icon="check"
            icon-position="right"
            @click="confirm('confirm')"
          >
            Einfügen
          </tactile-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import ModalMixin from '~/components/modals/modalMixin.js'
import TactileActionsFooter from '~/components/TactileActionsFooter.vue'
import TactileButton from '~/components/TactileButton.vue'

export default {
  components: {
    TactileActionsFooter,
    TactileButton
  },
  mixins: [ModalMixin],
  props: {
    cancelLabel: {
      type: String,
      default: 'Abbrechen'
    },
    confirmLabel: {
      type: String,
      default: 'Einfügen'
    }
  },
  watch: {
    show: {
      immediate: true,
      handler(show) {
        if (show) {
          this.$emit('opened')
        }
      }
    }
  },
  mounted() {
    // handle esc keyboard interaction to close modal
    const keydownListener = document.addEventListener('keydown', e => {
      if (this.show && e.keyCode === 27) {
        this.cancel('backdrop')
      }
    })
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', keydownListener)
    })

    if (this.show) {
      this.$emit('opened')
    }
  },
  methods: {
    backdropClickHandler(e) {
      if (e.target === this.$refs.modal) {
        this.cancel('backdrop')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.modal {
  position: fixed;
  z-index: 102;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);

  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 100%;
  max-height: 90vh;

  background: white;
  border-radius: $border-radius;
  padding: 0 $spacing-unit;
}

.modal-body {
  flex: 1;
  overflow-y: auto;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;

  background: rgba(0, 0, 0, 0.7);
}

.modal-footer {
  display: flex;
  padding: $spacing-small 0;
  flex-shrink: 0;
}
</style>
