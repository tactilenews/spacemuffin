<template>
  <div>
    <ds-page-title heading="Editor"/>
    <editor>
      <div
        slot="content"
        slot-scope="props">
        <p>Hi, I'm just a boring paragraph</p>
      </div>
    </editor>
  </div>
</template>

<script>
import { Editor } from 'tiptap'
export default {
  components: {
    Editor
  }
}
</script>
