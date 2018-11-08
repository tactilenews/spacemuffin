<template>
  <div>
    <tactile-content>
      <h1>Herzlichen Glückwunsch!</h1>
      <p>Dein Beitrag wurde an {{ speaker }} versandt. In {{ days }} Tagen sollte alles eingesprochen worden sein.</p>

      <img
        src="~assets/img/muffin.svg"
        alt="Pinkes tactile.news Maskottchen"
      >

      <h2>Kontaktinfos</h2>
      Bei Fragen und Anregung kannst du dich gerne bei uns melden:

      <a href="mailto://support@tactile.news">support@tactile.news</a>
    </tactile-content>

    <tactile-actions-footer>
      <tactile-button
        slot="next"
        :primary="true"
        to="/"
      >
        Zum Dashboard
      </tactile-button>
    </tactile-actions-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TactileContent from '~/components/TactileContent.vue'
import TactileActionsFooter from '~/components/TactileActionsFooter.vue'
import TactileButton from '~/components/TactileButton.vue'

export default {
  components: {
    TactileContent,
    TactileActionsFooter,
    TactileButton
  },
  computed: {
    ...mapGetters({
      speaker: 'items/speaker'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.muffin {
  display: flex;
  justify-content: center;
}
</style>
