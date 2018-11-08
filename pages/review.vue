<template>
  <div>
    <tactile-content>
      <div class="header">
        <h1>Fast Geschafft!</h1>
        <p><b>{{ speaker.name }}</b> freut sich schon darauf, dein Manuskript einzusprechen. Wirf noch einen letzten Blick auf deine Bestellung und schicke sie dann ab.</p>
      </div>
      <div class="data">
        <section>
          <h2>Beiträgsübersicht</h2>
          <p>Dein Manuskript ist bereit zur Vertonung. Es ist <b>{{ meta.format }}</b> mit dem Titel <b>{{ meta.title }}</b> von <b>{{ meta.author }}</b> für die Tonie-Figur <b>{{ meta.tonie }}</b>. In <b>{{ counts.chars }} Zeichen</b> hast du <b>{{ counts.quotes }} O-Töne</b> und <b>{{ counts.sounds }} Geräusche</b> untergebracht. Wir schätzen die gesprochene Länge auf <b>{{ minutes }} Minuten</b>. Das wird sich bestimmt toll anhören!</p>
        </section>
        <section>
          <div>
            <h2>Deadline</h2>
            <p>Ich möchte den Beitrag vertont zurück bis zum</p>
            <v-date-picker
              v-model="deadline"
              :min-date="new Date()"
              mode="single"
            />
          </div>
          <div>
            <h2>Preis</h2>
            <span>{{ costs }} Euro</span>
          </div>
          <div>
            <h2>Kommentar</h2>
            <TactileInput
              v-model="comment"
              placeholder="Möchtest du dem Sprecher was sagen?"
            />
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
          to="/success"
        >
          Produktion beauftragen
        </tactile-button>
      </template>
    </tactile-actions-footer>
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapGetters } from 'vuex'
import { format, addDays, startOfDay } from 'date-fns'
import TactileContent from '~/components/TactileContent.vue'
import TactileActionsFooter from '~/components/TactileActionsFooter.vue'
import TactileButton from '~/components/TactileButton.vue'
import TactileInput from '~/components/TactileInput.vue'
import { setupCalendar, DatePicker } from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'

export default {
  components: {
    TactileContent,
    TactileActionsFooter,
    TactileButton,
    TactileInput,
    'v-date-picker': DatePicker
  },
  computed: {
    ...mapGetters({
      meta: 'items/meta',
      comment: 'items/comment',
      counts: 'items/counts',
      speaker: 'items/speaker',
      minutes: 'items/estimatedDuration',
      costs: 'items/costs'
    }),
    comment: {
      get() {
        return this.$store.getters['items/comment']
      },
      set(comment) {
        this.$store.commit('items/comment', comment)
      }
    },
    deadline: {
      get() {
        return this.$store.getters['items/deadline']
      },
      set(date) {
        this.$store.commit('items/deadline', date)
      }
    }
  },
  created() {
    setupCalendar({ firstDayOfWeek: 2 })
    this.$store.commit('items/deadline', addDays(startOfDay(new Date()), 3))
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
