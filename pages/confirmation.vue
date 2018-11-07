<template>
  <div>
    <header>
      <h1>Geschafft!</h1>
      <p>Dirk freut sich schon darauf deinen Manuskript einzusprechen. Wirf noch einen letzten Blick und schicke ihm den Auftrag.</p>
    </header>
    <main>
      <section>
        <h1>Metadaten</h1>
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
        <h1>Manuskript Zusammenfassung</h1>
        <p>Dein Manuskript ist bereit zur Vertonung! Es ist <b>eine Reportage</b> für die Tonie-Figur <b>Karla Klimabär</b> In <b>1200 Zeichen</b> hast du <b>5 Töne</b> und <b>4 Geräusche</b> untergebracht.</p>
        <div>
          <span>Ich schätze die gesprochene Länge auf <b>2:30 Minuten</b>. Das wird sich bestimmt toll anhören!</span>
        </div>
      </section>
      <section>
        <div>
          <h1>Deadline</h1>
          <input type="date">
        </div>
        <div>
          <h1>Preis</h1>
          <span>152 Euro</span>
        </div>
        <div>
          <h1>Kommentar</h1>
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

<style lang="scss">
main {
  display: flex;
  justify-content: space-between;
}

section {
  width: calc(50% - 1em);
}

footer {
  margin-top: 1em;
  float: right;
}

textarea {
  width: 100%;
  min-height: 8em;
}

.label {
  font-weight: bold;
}

.buttongroup {
  align-self: bottom;
}
</style>
