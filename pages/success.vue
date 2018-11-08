<template>
  <div>
    <header>
      <h1>Herzlichen Glückwunsch!</h1>
      <p>Dein Beitrag wurde an {{ speaker }} versandt. In {{ days }} Tagen sollte alles eingesprochen worden sein.</p>
    </header>
    <main>
      <section class="muffin">
        <img
          src="~assets/img/muffin.svg"
          alt="Pinkes tactile.news Maskottchen"
        >
      </section>
      <section>
        <h2>Kontaktinfos</h2>
        Bei Fragen und Anregung kannst du dich gerne bei uns melden:
        <a href="mailto://support@tactile.news">support@tactile.news</a>
      </section>
    </main>
    <footer>
      <nuxt-link
        to="/"
        tag="button">Zum Dashboard</nuxt-link>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: 2,
      speaker: 'Ralph Caspers'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

main {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

footer {
  margin-top: $spacing-medium;
  display: flex;
  justify-content: flex-end;
}

.muffin {
  display: flex;
  justify-content: center;
}
</style>
