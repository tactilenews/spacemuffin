export default function postEmail(data) {
  const to = {
    name: data.user.name,
    email: data.user.email
  }

  const from = {
    name: 'Lisa von tactile.news',
    email: 'service@tactile.news'
  }

  const subject = 'Auftrag erteilt'
  const text = `Liebe/r ${
    data.user.name
  },<br><br>du hast bei tactile.news die Vertonung des Beitrags ${
    data.title
  } bestellt. ${data.speaker} wird deinen Beitrag bis zum ${
    data.deadline
  } für dich vertonen und abmischen. Du bekommst das fertige Audiofile von uns per eMail zugeschickt.<br><br>Unter diesem Link kannst du jederzeit den Status deiner Bestellung einsehen: <a href="${
    location.href
  }">Beitragsübersicht</a><br><br>Wenn du in der Zwischenzeit Fragen hast, wende dich gerne an unser Team unter <a href="mailto:support@tactile.news">support@tactile.news</a>.<br><br>Wir freuen uns über deinen Auftrag!<br><br>Herzliche Grüße von deinem<br>tactile.news-Team<br>`

  const options = {
    method: 'POST',
    body: JSON.stringify({
      to,
      from,
      subject,
      html: text
    })
  }

  fetch(
    'https://europe-west1-spacemuffin-mailserver.cloudfunctions.net/postConfirmationMail',
    options
  ).catch(e => console.error(e))
}
