<template>
  <div>
    <p>
      Du hast noch keine Projekte
    </p>
    <tactile-button to="/create">
      Beitrag erstellen
    </tactile-button>
  </div>
</template>

<script>
import TactileButton from '~/components/TactileButton.vue'
export default {
  components: {
    TactileButton
  }
}
</script>
