<template>
  <div>
    <tactile-content>
      <h1>Herzlichen Glückwunsch!</h1>
      <p>Dein Beitrag wurde an <b>{{ speaker }}</b> versandt. In <b>{{ days }} Tagen</b> ist er fertig produziert. Du bekommst ihn dann per E-Mail zugeschickt.
      <span v-if="recipientEmail"> Wir schicken die Audio-Datei an <b>{{ recipientEmail }}</b>.</span></p>

      <img
        src="~assets/img/muffin.svg"
        alt="Pinkes tactile.news Maskottchen"
      >

      <h2>Noch Fragen?</h2>
      <p>Melde dich gerne bei uns: <a href="mailto:astrid@tactile.news">astrid@tactile.news</a></p>
    </tactile-content>

    <tactile-actions-footer>
      <tactile-button
        slot="next"
        :primary="true"
        to="/"
        icon="chevron-right"
        icon-position="right"
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
      speaker: 'items/speaker',
      recipientEmail: 'items/recipientEmail',
      days: 'items/daysToDeadline'
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
