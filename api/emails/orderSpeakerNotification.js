export default data => {
  const to = {
    name: 'Ralph Caspers',
    email: 'astrid@tactile.news'
  }

  const from = {
    name: 'Franziska von tactile.news',
    email: 'studio@tactile.news'
  }

  /* eslint-disable */
  const subject = `Neuer Auftrag von ${ data.user.office } über tactile.news`

  const comment = `
    Die Redaktion hat dir außerdem eine persönliche Nachricht mit Hinweisen zur Vertonung gesandt:<br>
    <em>„${ data.comment }”</em>
    <br><br>
  `

  const html = `
    Liebe/r ${ data.speaker },<br><br>

    du bist bei tactile.news als Sprecherin registriert.
    Die <strong>Redaktion ${ data.user.office }</strong> möchte, dass du ${ data.format } mit dem Titel <strong>„${ data.title }”</strong> bis zum <strong>${ data.deadline }</strong> vertonst.
    Zum Beitrag gehören mehrere O-Töne, atmosphärische Töne und Geräusche, die du im Anhang dieser E-Mail findest.
    Das zu vertonende Manuskript selbst findest du ebenfalls im Anhang.<br><br>

    ${ data.comment && comment }

    Bitte schicke uns den fertig vertonten Beitrag <b>bis zum ${ data.deadline }</b>.<br><br>

    Wenn du in der Zwischenzeit Fragen hast, wende dich gerne an unser Team unter <a href="mailto:studio@tactile.news">studio@tactile.news</a>.<br><br>

    Wir freuen uns auf deine Mitarbeit!<br><br>

    Herzliche Grüße von deinem<br>
    tactile.news-Team
  `
  /* eslint-enable */

  return { to, from, subject, html }
}
