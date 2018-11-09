export default function postOrderEmail(data) {
  // TODO: needs to be changed to real values from the store
  const to = {
    name: 'Ralph Caspers',
    email: 'astrid@tactile.news'
  }

  const from = {
    name: 'Franziska von tactile.news',
    email: 'studio@tactile.news'
  }

  const subject = 'Auftrag eingegangen'
  const text = `Liebe/r ${data.speaker},<br><br>
  du bist bei tactile.news als Sprecherin registriert. Die Redaktion ${
    data.user.office
  } möchte, dass du ${data.format} zum Thema ${data.title} bis zum ${
    data.deadline
  } vertonst. Zum Beitrag gehören ${data.tonesCount} O-Töne, ${
    data.atmoCount
  } atmosphärische Töne und Geräusche, die du im Anhang dieser eMail / unter folgendem Link findest. Das zu vertonende Manuskript findest du im Anhang.
  <br><br>Bitte schicke uns den fertig vertonten Beitrag bis zum ${
    data.deadline
  }.<br><br>Wenn du in der Zwischenzeit Fragen hast, wende dich gerne an unser Team unter <a href="mailto:studio@tactile.news">studio@tactile.news</a>.<br><br>Wir freuen uns auf deine Mitarbeit!<br><br>Herzliche Grüße von deinem<br>tactile.news-Team<br>`

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
