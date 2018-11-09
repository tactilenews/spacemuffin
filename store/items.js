import {
  setMinutes,
  format,
  differenceInHours,
  differenceInDays
} from 'date-fns'

export const state = () => ({
  user: {
    name: 'Astrid Csuraji',
    email: 'astrid@tactile.news',
    office: 'Open Data Journal'
  },
  author: '',
  title: '',
  format: '',
  tonie: '',
  speaker: '',
  comment: '',
  recipientEmail: '',
  deadline: new Date(),
  counts: {
    chars: 0,
    words: 0,
    quotes: 0,
    sounds: 0
  },
  json: null
})

export const getters = {
  json(state) {
    return state.json
  },
  speaker(state) {
    return state.speaker || 'Max Sprechermann'
  },
  recipientEmail(state) {
    return state.recipientEmail
  },
  meta(state) {
    return {
      user: state.user,
      author: state.author,
      title: state.title,
      format: state.format,
      tonie: state.tonie
    }
  },
  comment(state) {
    return state.comment
  },
  counts(state) {
    return state.counts
  },
  deadline(state) {
    return state.deadline
  },
  daysToDeadline(state) {
    return differenceInDays(state.deadline, new Date())
  },
  costs(state, getters) {
    const expressFee = 50
    const costPerChar = 0.04
    const costPerQuote = 9
    const costPerSound = 9
    let costs =
      getters.counts.chars * costPerChar +
      getters.counts.quotes * costPerQuote +
      getters.counts.sounds * costPerSound
    if (differenceInHours(getters.deadline, new Date()) > 48) {
      costs += expressFee
    }
    costs = Math.round(costs)
    return costs
  },
  estimatedDuration(state, getters) {
    const words = getters.counts.words
    const minutes = words / 130.0 // http://speechinminutes.com/
    const time = new Date(minutes * 60 * 1000)
    return format(time, 'mm:ss')
  }
}
export const mutations = {
  comment(state, comment) {
    state.comment = comment
  },
  recipientEmail(state, email) {
    state.recipientEmail = email
  },
  doc(state, { json, html }) {
    const node = document.createElement('div')
    node.innerHTML = html
    state.json = json
    state.counts = {
      chars: node.innerText.length,
      words: node.innerText.split(/\s+/).length,
      quotes: node.getElementsByClassName('mark-quote').length,
      sounds: node.getElementsByClassName('mark-sound').length
    }
  },
  saveMeta(state, meta) {
    state.author = meta.author
    state.title = meta.title
    state.format = meta.format
    state.tonie = meta.tonie
  },
  setSpeaker(state, speaker) {
    state.speaker = speaker
  },
  deadline(state, deadline) {
    state.deadline = deadline
  }
}
