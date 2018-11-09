<template>
  <section class="dropzone">
    <div class="info">
      {{ info }}
    </div>
    <input
      type="file"
      accept="audio/*"
      @change="handleFileChange"
    >
  </section>
</template>

<script>
export default {
  data: () => ({
    info: 'Click to select a file and drag it in here!'
  }),
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0]
      const reader = new FileReader()

      if (file) {
        reader.readAsDataURL(file)
      }

      reader.addEventListener('load', () => {
        const sizeInMB = Math.round(file.size / 1024 ** 2)
        this.info = `${file.name} (${sizeInMB} MB)`
        this.$emit('change', reader.result)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.dropzone {
  position: relative;
  min-height: 6 * $spacing-unit;

  font-size: $font-size-large;
  color: #999;
  background: #eee;
  border: 5px dashed #ccc;
  border-radius: $border-radius;
}

.info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

input {
  opacity: 0;
  width: 100%;
  height: 100%;
}
</style>
