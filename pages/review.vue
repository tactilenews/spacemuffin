<template>
  <div>
    <header>
      <h1>Fast Geschafft!</h1>
      <p>Dirk freut sich schon darauf, dein Manuskript einzusprechen. Wirf noch einen letzten Blick auf deine Bestellung und schicke sie dann ab.</p>
    </header>
    <main>
      <section>
        <h2>Titel & Autor</h2>
        <div>
          <label
            class="label"
            for="title">Titel</label>
          <input
            type="text"
            placeholder="Titel des Beitrages">
        </div>
        <div>
          <label
            class="label"
            for="author">Autor</label>
          <input
            type="text"
            placeholder="Name des Autoren">
        </div>
        <h2>Beiträgsübersicht</h2>
        <p>Dein Manuskript ist bereit zur Vertonung. Es ist <b>{{ format }}</b> mit dem $TITLE von $AUTHOR für die Tonie-Figur <b>{{ figure }}</b>. In <b>{{ charCount }} Zeichen</b> hast du <b>{{ tonesCount }} Töne</b> und <b>{{ soundsCount }} Geräusche</b> untergebracht. Wir schätzen die gesprochene Länge auf <b>{{ minutes }} Minuten</b>. Das wird sich bestimmt toll anhören!</p>
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
    </main>
    <footer>
      <nuxt-link
        to="#"
        tag="button">Jetzt produzieren</nuxt-link>
      <nuxt-link
        to="#"
        tag="button">Für später speichern</nuxt-link>
    </footer>
  </div>
</template>

<script>
const hour = 60 * 60 * 1000
const dateIn48Hours = new Date().getTime() + 48 * hour
const expressFee = 50

function getDateString(date = new Date()) {
  return new Date(date).toISOString().slice(0, 10)
}

export default {
  name: 'Review',
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

main {
  display: flex;
  justify-content: space-between;
}

section {
  width: calc(50% - 1em);
}

footer {
  margin-top: $spacing-medium;
  display: flex;
  justify-content: flex-end;
}

footer > button {
  margin-left: $spacing-small;
}

textarea {
  width: 100%;
  min-height: $spacing-unit * 5;
}

.label {
  font-weight: bold;
}

.buttongroup {
  align-self: bottom;
}
</style>
