<template>
  <section class="dropzone">
    <input
      type="file"
      accept="audio/*"
      @change="handleFileChange">
    <div class="placeholder">
      Click to select a file and drag it in here!
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0]
      const reader = new FileReader()

      reader.addEventListener(
        'load',
        () => (this.fileString = reader.result),
        false
      )

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

.placeholder {
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
