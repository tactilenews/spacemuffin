export default function postEmail(data) {
  const to = {
    name: 'Astrid',
    email: 'astrid@tactile.news'
  }

  const from = {
    name: 'Lisa',
    email: 'service@tactile.news'
  }

  const subject = 'Auftrag erteilt'
  const text = `Liebe/r ${
    data.username
  },\n\ndu hast bei tactile.news die Vertonung des Beitrags ${
    data.title
  } bestellt. ${data.speaker} wird deinen Beitrag bis zum ${
    data.deadline
  } für dich vertonen und abmischen. Du bekommst das fertige Audiofile im ${
    data.format
  } von uns per eMail zugeschickt.\n\nUnter diesem Link kannst du jederzeit den Status deiner Bestellung einsehen: <a href="${
    location.href
  }">Beitragsübersicht</a>\n\nWenn du in der Zwischenzeit Fragen hast, wende dich gerne an uns unter support@tactile.news.\n\nWir freuen uns über deinen Auftrag!\n\nHerzliche Grüße von deinem\ntactile.news-Team\n`

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_KEY}`
    },
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
