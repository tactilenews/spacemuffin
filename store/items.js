import { setMinutes, format, differenceInHours } from 'date-fns'

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
  deadline: new Date(),
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
    return {
      quotes: 5,
      sounds: 4,
      chars: 2000
    }
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
    const averageWordLength = 1.52 // https://de.wikipedia.org/wiki/Wortl%C3%A4nge#Durchschnittliche_Wortl%C3%A4nge_in_verschiedenen_Textgruppen
    const words = getters.counts.chars / averageWordLength
    const minutes = words / 130.0 // http://speechinminutes.com/
    const time = new Date(minutes * 60 * 1000)
    return format(time, 'mm:ss')
  }
}
export const mutations = {
  comment(state, comment) {
    state.comment = comment
  },
  saveJSON(state, json) {
    state.json = json
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
