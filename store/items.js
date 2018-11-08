export const state = () => ({
  author: '',
  title: '',
  format: '',
  tonie: '',
  speaker: '',
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
  }
}
export const mutations = {
  saveJSON(state, json) {
    state.json = json
  },
  saveMeta(state, meta) {
    state.author = meta.author
    state.title = meta.title
    state.format = meta.format
    state.tonie = meta.tonie
  }
}
