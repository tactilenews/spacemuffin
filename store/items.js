import { setMinutes, format, differenceInHours } from 'date-fns'

export const state = () => ({
  author: '',
  title: '',
  format: '',
  tonie: '',
  speaker: '',
  comment: '',
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
    return state.speaker
  },
  meta(state) {
    return {
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
  costs(state, getters) {
    const expressFee = 50
    let costs =
      getters.counts.chars * 0.04 +
      (getters.counts.quotes + getters.counts.sounds) * 9
    if (differenceInHours(getters.deadline, new Date()) > 48) {
      costs += expressFee
    }
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
  doc(state, { json, html }) {
    const node = document.createElement('div')
    node.innerHTML = html
    state.json = json
    state.counts = {
      chars: node.innerText.length,
      words: node.innerText.split(/\s+/).length,
      quotes: node.getElementsByClassName('mark-original-tone').length,
      sounds: node.getElementsByClassName('mark-ambient-tone').length
    }
  },
  saveMeta(state, meta) {
    state.author = meta.author
    state.title = meta.title
    state.format = meta.format
    state.tonie = meta.tonie
  },
  deadline(state, deadline) {
    state.deadline = deadline
  }
}
