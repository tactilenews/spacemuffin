import {
  addDays,
  setMinutes,
  format,
  differenceInHours,
  differenceInDays
} from 'date-fns'

const initialState = () => ({
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
  status: null,
  deadline: new Date(),
  timerange: 5,
  counts: {
    chars: 0,
    words: 0,
    quotes: 0,
    sounds: 0
  },
  json: null
})

export const state = initialState

export const getters = {
  json(state) {
    return state.json
  },
  speaker(state) {
    return state.speaker
  },
  recipientEmail(state) {
    return state.recipientEmail
  },
  meta(state) {
    return {
      user: state.user,
      author: state.author || 'Autor',
      title: state.title,
      format: state.format,
      tonie: state.tonie
    }
  },
  status(state) {
    return state.status
  },
  comment(state) {
    return state.comment
  },
  counts(state) {
    return state.counts
  },
  timerange(state) {
    return state.timerange
  },
  deadline(state, getters) {
    return addDays(new Date(), getters.timerange)
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

    // TODO: serious race condition here! Open for suggestions!
    if (differenceInHours(getters.deadline, new Date()) < 48) {
      costs += expressFee
    }

    return Math.round(costs)
  },
  estimatedDuration(state, getters) {
    const words = getters.counts.words
    const minutes = words / 130.0 // http://speechinminutes.com/
    const time = new Date(minutes * 60 * 1000)
    return format(time, 'mm:ss')
  }
}
export const mutations = {
  reset(state) {
    // https://github.com/vuejs/vuex/issues/1118#issuecomment-356286218
    const s = initialState()
    Object.keys(s).forEach(key => {
      state[key] = s[key]
    })
  },
  comment(state, comment) {
    state.comment = comment
  },
  recipientEmail(state, email) {
    state.recipientEmail = email
  },
  doc(state, { getJSON, getHTML }) {
    const node = document.createElement('div')
    node.innerHTML = getHTML()
    state.json = getJSON()
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
  timerange(state, timerange) {
    state.timerange = Number(timerange)
  },
  saveDraft(state) {
    state.status = 'draft'
  },
  order(state) {
    state.status = 'ordered'
  }
}
