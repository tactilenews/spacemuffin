<template>
  <section class="dropzone">
    <input
      type="file"
      accept="audio/*"
      @change="handleFileChange">
    <div class="info">
      {{ info }}
    </div>
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

      reader.addEventListener('load', () => {
        const sizeInMB = Math.round(file.size / 1024 ** 2)
        this.info = `${file.name} (${sizeInMB} MB)`
        this.$emit('change', reader.result)
      })

      if (file) {
        reader.readAsDataURL(file)
      }
    }
  }
}
</script>

<style type="scss" scoped>
.dropzone {
  position: relative;
  z-index: 99;
  height: 200px;
  background: #eee;
  border: 5px dashed #ccc;
  border-radius: 3px;
  margin-bottom: 30px;
  color: #999;
  font-size: 1rem;
}

.info {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
