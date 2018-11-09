export default {
  props: {
    show: { type: Boolean, default: false },
    data: { default: null }
  },
  model: {
    prop: 'show',
    event: 'update:show'
  },
  methods: {
    confirm(type = 'confirm') {
      this.$emit('confirm')
      this.close(type)
    },
    cancel(type = 'cancel') {
      this.$emit('cancel')
      this.close(type)
    },
    close(type) {
      this.$emit('update:show', false)
      this.$emit('close', type)
    }
  }
}
