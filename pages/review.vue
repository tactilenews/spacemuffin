<template>
  <div>
    <tactile-content>
      <div class="header">
        <h1>Fast Geschafft!</h1>
        <p>Dirk freut sich schon darauf, dein Manuskript einzusprechen. Wirf noch einen letzten Blick auf deine Bestellung und schicke sie dann ab.</p>
      </div>
      <div class="data">
        <section>
          <h2>Beiträgsübersicht</h2>
          <p>Dein Manuskript ist bereit zur Vertonung. Es ist <b>{{ format }}</b> mit dem <b>{{ meta.title }}</b> von <b>{{ meta.author }}</b> für die Tonie-Figur <b>{{ figure }}</b>. In <b>{{ charCount }} Zeichen</b> hast du <b>{{ tonesCount }} Töne</b> und <b>{{ soundsCount }} Geräusche</b> untergebracht. Wir schätzen die gesprochene Länge auf <b>{{ minutes }} Minuten</b>. Das wird sich bestimmt toll anhören!</p>
        </section>
        <section>
          <div>
            <h2>Deadline</h2>
            <p>Ich möchte den Beitrag vertont zurück bis zum</p>
            <input
              v-model="deadline"
              :min="minDeadline"
              type="date">
          </div>
          <div>
            <h2>Preis</h2>
            <span>{{ costs }} Euro</span>
          </div>
          <div>
            <h2>Kommentar</h2>
            <textarea placeholder="Möchtest du dem Sprecher was sagen?"/>
          </div>
        </section>
      </div>
    </tactile-content>
    <tactile-actions-footer>
      <tactile-button
        slot="prev"
        to="/editor"
      >
        Beitrag bearbeiten
      </tactile-button>
      <template slot="next">
        <tactile-button
          to="/"
        >
          Entwurf speichern
        </tactile-button>
        <tactile-button
          :primary="true"
          @click="() => sendMail()"
        >
          Produktion beauftragen
        </tactile-button>
      </template>
    </tactile-actions-footer>
  </div>
</template>

<script>
// eslint-disable-next-line
import {mapGetters} from 'vuex'

import postEmailApi from '../apis/post-email'

import TactileContent from '~/components/TactileContent.vue'
import TactileActionsFooter from '~/components/TactileActionsFooter.vue'
import TactileButton from '~/components/TactileButton.vue'

const hour = 60 * 60 * 1000
const dateIn48Hours = new Date().getTime() + 48 * hour
const expressFee = 50

function getDateString(date = new Date()) {
  return new Date(date).toISOString().slice(0, 10)
}

export default {
  components: {
    TactileContent,
    TactileActionsFooter,
    TactileButton
  },
  data() {
    return {
      deadline: getDateString(dateIn48Hours),
      charCount: 1200,
      tonesCount: 5,
      soundsCount: 4,
      minDeadline: getDateString(),
      minutes: '2:30',
      format: 'eine Reportage',
      figure: 'Karl Klimabär'
    }
  },
  computed: {
    costs() {
      const deadline = new Date(this.deadline).getTime()
      const costs =
        this.charCount * 0.04 + (this.tonesCount + this.soundsCount) * 9
      const totalCosts = deadline > dateIn48Hours ? costs : costs + expressFee
      return totalCosts
    },
    ...mapGetters({
      meta: 'items/meta'
    })
  },
  methods: {
    sendMail: () => {
      const data = {
        username: 'me',
        title: this.meta.title,
        speaker: this.meta.speaker,
        deadline: this.deadline,
        format: this.meta.format
      }

      postEmailApi(data)
      this.$router.push('success')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.data {
  display: flex;
  margin: -$spacing-unit;
  padding: 0.5 * $spacing-unit;
}

section {
  width: 50%;
  padding: 0.5 * $spacing-unit;
}

textarea {
  width: 100%;
  min-height: $spacing-unit * 5;
}
</style>
