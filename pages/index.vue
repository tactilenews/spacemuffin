<template>
  <div>
    <p>Du hast noch keine Beitrage</p>
    <nuxt-link
      to="/create"
      tag="button">Beitrag erstellen</nuxt-link>
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
