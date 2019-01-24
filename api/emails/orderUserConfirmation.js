export default data => {
  const to = {
    name: data.user.name,
    email: data.user.email
  }

  const from = {
    name: 'Lisa von tactile.news',
    email: 'service@tactile.news'
  }

  const subject = 'Dein Auftrag bei tactile.news'

  /* eslint-disable */
  const html = `
    Liebe/r ${ data.user.name },<br><br>

    du hast bei tactile.news die Vertonung des Beitrags <strong>„${ data.title }”</strong> bestellt.
    <strong>${ data.speaker }</strong> wird deinen Beitrag <strong>bis zum ${ data.deadline }</strong> für dich vertonen und abmischen.
    Du bekommst das fertige Audiofile von uns per E-Mail zugeschickt.<br><br>

    Unter diesem Link kannst du jederzeit den Status deiner Bestellung einsehen:
    <a href="https://spacemuffin.now.sh">Beitragsübersicht</a><br><br>

    Solltest du in der Zwischenzeit Fragen haben, wende dich gerne an unser Team unter <a href="mailto:support@tactile.news">support@tactile.news</a>.<br><br>
    Wir freuen uns über deinen Auftrag!<br><br>

    Herzliche Grüße von deinem<br>
    tactile.news-Team
  `
  /* eslint-eanble */

  return { to, from, subject, html }
}
