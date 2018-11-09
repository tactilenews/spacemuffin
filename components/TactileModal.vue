<template>
  <div>
    <div
      v-if="show"
      ref="backdrop"
      class="modal-backdrop">&nbsp;</div>
    <transition name="modal-transition">
      <div
        v-if="show"
        ref="modal"
        class="modal"
        tableindex="-1"
        role="dialog"
        @click="backdropClickHandler">
        <div class="modal-dialog">
          <div class="modal-content">
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
                name="footer">
                <tactile-actions-footer class="modal-footer">
                  <tactile-button
                    slot="prev"
                    icon="chevron-left"
                    @click="cancel('cancel')"
                  >
                    Abbrechen
                  </tactile-button>
                  <tactile-button
                    slot="next"
                    :primary="true"
                    icon="check"
                    icon-position="right"
                    @click="confirm('confirm')"
                  >
                    Einfügen
                  </tactile-button>
                </tactile-actions-footer>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
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

<style lang="scss">
@import '~assets/styles/variables';
// @import '~assets/styles/modal';

.modal-dialog {
  /* This way it could be display flex or grid or whatever also. */
  display: block;
  /* Probably need media queries here */
  width: 600px;
  max-width: 100%;
  min-height: 200px;
  max-height: 100%;
  position: fixed;
  z-index: 102;
  left: 50%;
  top: 50%;
  /* Use this for centering if unknown width/height */
  transform: translate3d(-50%, -50%, 0);
  background: white;
  border-radius: $border-radius;
  padding: $spacing-unit $spacing-unit 150px;
  box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.3);
}

.modal-header {
  margin-top: -$spacing-unit;
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
  padding-left: $spacing-unit !important;
  padding-right: $spacing-unit !important;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
