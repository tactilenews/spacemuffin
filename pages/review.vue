<template>
  <div>
    <tactile-content>
      <div class="header">
        <h1>Fast Geschafft!</h1>
      </div>
      <div class="data">
        <section class="summary">
          <p><b>{{ speaker }}</b> freut sich schon darauf, dein Manuskript einzusprechen.</p>
          <p>Es ist <b>{{ meta.format }}</b> mit dem Titel <b>{{ meta.title }}</b> von <b>{{ meta.author }}</b> für die Tonie-Figur <b>{{ meta.tonie }}</b>. In <b>{{ counts.chars }} Zeichen</b> und <b>{{ counts.words }} Wörtern</b> hast du <b>{{ counts.quotes }} O-Töne</b> und <b>{{ counts.sounds }} Geräusche</b> untergebracht. Wir schätzen die gesprochene Länge auf <b>{{ minutes }} Minuten</b>. Das wird sich bestimmt toll anhören!</p>
          <br>
          <p>Wir senden dir den fertigen Beitrag per E-Mail.</p>
        </section>
        <section>
          <div>
            <h2>Liefertermin</h2>
            <p>Ich möchte den Beitrag vertont zurück</p>
            <div class="list">
              <form
                ref="timerangeForm"
                @change="setTimerange">
                <div>
                  <input
                    id="timerange-2days"
                    name="timerange"
                    type="radio"
                    value="172800000">
                  <label for="timerange-2days">Express in 2 Werktagen</label>
                </div>
                <div>
                  <input
                    id="timerange-5days"
                    name="timerange"
                    type="radio"
                    value="432000000"
                    checked>
                  <label for="timerange-5days">Standard in 5 Werktagen</label>
                </div>
              </form>
            </div>
            <p>bis zum <b>{{ formattedDate }}</b>.</p>
          </div>
          <div>
            <h2>Preis</h2>
            <span>{{ costs }} Euro</span>
          </div>
          <div>
            <h2>Nachricht an den Sprecher</h2>
            <textarea
              v-model="comment"
              placeholder="Hier kannst du Wünsche zur Vertonung mitteilen, zum Beispiel, ob du den Text in einer bestimmten Stimmung haben möchtest (wie naiv, allwissend, nachdenklich, euphorisch)." />
          </div>
        </section>
      </div>
    </tactile-content>
    <tactile-actions-footer>
      <tactile-button
        slot="prev"
        to="/editor"
        icon="chevron-left"
      >
        Beitrag bearbeiten
      </tactile-button>
      <template slot="next">
        <tactile-button
          @click="saveDraft"
        >
          Entwurf speichern
        </tactile-button>
        <tactile-button
          :primary="true"
          icon="check"
          icon-position="right"
          @click="orderProduction"
        >
          Produktion beauftragen
        </tactile-button>
      </template>
    </tactile-actions-footer>
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapGetters, mapMutations } from 'vuex'
import { format, addDays, startOfDay } from 'date-fns'

import postEmailApi from '../apis/post-email'
import postOrderEmailApi from '../apis/post-order-email'

import TactileContent from '~/components/TactileContent.vue'
import TactileActionsFooter from '~/components/TactileActionsFooter.vue'
import TactileButton from '~/components/TactileButton.vue'
import TactileInput from '~/components/TactileInput.vue'
import { setupCalendar, DatePicker } from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'

function getDeadline(date, timerange) {
  return new Date(date).getTime() + Number(timerange)
}

export default {
  components: {
    TactileContent,
    TactileActionsFooter,
    TactileButton,
    TactileInput,
    DatePicker
  },
  computed: {
    ...mapGetters({
      meta: 'items/meta',
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
    recipientEmail: {
      get() {
        return this.$store.getters['items/recipientEmail']
      },
      set(email) {
        this.$store.commit('items/recipientEmail', email)
      }
    },
    timerange: {
      get() {
        return this.$store.getters['items/timerange']
      },
      set(timerange) {
        this.$store.commit('items/timerange', timerange)
      }
    },
    deadline: {
      get() {
        return this.$store.getters['items/deadline']
      }
    },
    formattedDate() {
      return new Date(this.deadline).toLocaleDateString('de')
    }
  },
  created() {
    setupCalendar({ firstDayOfWeek: 2 })
    this.$store.commit('items/deadline', addDays(startOfDay(new Date()), 3))
  },
  methods: {
    setTimerange() {
      const timerangeString = new FormData(this.$refs.timerangeForm).get(
        'timerange'
      )
      this.timerange = Number(timerangeString)
    },
    orderProduction() {
      this.order()
      this.sendMail()
    },
    sendMail() {
      const data = {
        deadline: this.formattedDate,
        tonesCount: this.tonesCount,
        soundsCount: this.soundsCount,
        user: this.meta.user,
        title: this.meta.title,
        format: this.meta.format,
        speaker: this.meta.speaker
      }

      postEmailApi(data)
      postOrderEmailApi(data)

      this.$router.push('success')
    },
    saveDraft() {
      this.$store.commit('items/saveDraft')
      this.$router.push('/')
    },
    ...mapMutations({
      order: 'items/order'
    })
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

.summary {
  margin-top: $spacing-medium;
}

.list {
  padding: $spacing-small;
}

textarea {
  width: 100%;
  min-height: $spacing-unit * 5;
}
</style>
