<template>
  <tactile-content class="guide">

    <div class="section">
      <h2>Dein Schnellstart mit Spacemuffin</h2>
      <p>Spacemuffin ist dieser kleine Helfer hier. Er sorgt dafür, dass deine Texte auf der Toniebox landen und sich dort gut anhören. Spacemuffin lässt sich einfach benutzen:</p>
    </div>

    <div class="section">
      <h3>Text kopieren:</h3>
      <p>Du hast einen Text geschrieben und möchtest ihn zum Klingen bringen? Dazu einfach auf "Beitrag erstellen" klicken, die drei Felder ausfüllen und "Loslegen" drücken. Dann deinen Artikel kopieren und ins freie Feld einfügen.</p>
    </div>

    <div class="section">
      <h3>Sprecher wählen</h3>
      <p>Wenn du den Text eingefügt hast, suche dir eine Sprecherin oder einen Sprecher aus. Für deine Beiträge bieten wir dir verschiedene Stimmen zur Vertonung an. Wenn du auf den blauen Button "Sprecher" klickst, kannst du aus Frauen- und Männer- und Kinderstimmen wählen. Du kannst testhören, indem du auf die Lautsprechersymbole neben den Namen klickst. Du wählst Sprecher aus, indem du den Haken neben dem Namen anklickst. Der ausgewählte Sprecher spricht den gesamten Text ein und sorgt auch für die richtige Mischung mit Geräuschen, wenn du welche aussuchst. Ganz schön komfortabel, was?</p>
    </div>

    <div class="section">
      <h3>Geräusche wählen</h3>
      <p>Du kannst Töne unter Wörter legen, um Kino im Kopf deiner Hörer zu erzeugen. Dazu musst du die entsprechenden Passagen im Text markieren und den grünen Button "Geräusch" klicken. Dort kannst du aus unserer Soundbibliothek ein Geräusch aussuchen<!--oder eigene Geräusche hochladen-->. Keine Sorgen: Wenn du ein Geräusch unter eine Textpassage legst, sorgen unsere Profis dafür, dass Sprechertext und Geräusch gut abgemischt werden. Du kannst Geräusche auch als freistehendes Element zwischen zwei Wörtern nutzen. Dazu klickst du mit dem Cursor an die entsprechende Stelle im Text, dann drückst du den Button "Geräusch". Sound aussuchen, fertig. Klingt bestimmt gut.</p>
    </div>

    <div class="section">
      <h3>Zitate hervorheben</h3>
      <p>Zitate machen nicht nur deinen geschriebenen Text lebendig, sondern auch deinen Hörbeitrag. Entweder hast du das Zitat im Original bei der Recherche aufgenommen und fügst das anstelle des geschriebenen in den Text ein. Oder du lässt Zitate von unseren Sprechern nachvertonen. Zum Einfügen eines Originaltons markierst du das geschriebene Zitat und klickst dann auf den gelben Button "Zitat". Dort öffnet sich ein Fenster, in das du rechts eigene Töne per <em>drag and drop</em> hochladen kannst. Oder du lässt es von einer Frauenstimme, Männerstimme oder Kinderstimme nachsprechen, die du links auswählen kannst. Das eignet sich zum Beispiel gut für übersetzte Zitate oder Zitate aus Büchern. Du möchtest testhören? Dann einfach neben der Stimme auf <em>play</em> drücken.</p>
    </div>

    <div class="section">
      <h3>Fast geschafft!</h3>
      <p>Du bist fertig? Dann drücke "Auftag überprüfen". Hier bekommst du eine Bestellübersicht, kannst den Liefertermin bestimmen und siehst den Preis. Unseren Sprechern kannst du hier auch noch weitere Wünsche zur Vertonung aufschreiben, zum Beispiel, ob du den Text in einer besonderen Stimmung vertont haben möchtest. Jetzt kannst du uns mit der Produktion beauftragen. Das Studio steht bereit.</p>
    </div>

    <div class="section">
      <h3>Noch Fragen?</h3>
      <p>Wenn du nicht weiter weißt oder eine Anregung für uns hast, schreib uns einfach eine E-Mail an <a href="mailto:astrid@tactile.news">astrid@tactile.news</a> oder <a href="mailto:jacob@tactile.news">jakob@tactile.news</a></p>
    </div>

    <div class="section section--create">
      <p>Erstelle jetzt deinen ersten Beitrag:</p>
      <tactile-button
        :large="true"
        :primary="true"
        icon="plus"
        icon-position="right"
        to="/create"
      >
        Beitrag erstellen
      </tactile-button>
    </div>

  </tactile-content>
</template>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.guide {
  counter-reset: sections;
}

.section + .section {
  margin-top: $spacing-unit;
  padding-top: $spacing-unit;
  border-top: 1px solid $color-gray;
}

.section h3::before {
  content: counter(sections) ': ';
  counter-increment: sections;
}

.section--create {
  text-align: center;
}

.section--create p {
  margin-bottom: $spacing-small;
}
</style>

<script>
import TactileContent from '~/components/TactileContent.vue'
import TactileButton from '~/components/TactileButton.vue'

export default {
  components: {
    TactileContent,
    TactileButton
  }
}
</script>
