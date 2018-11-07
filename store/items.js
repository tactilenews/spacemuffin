export const state = () => ({
  json: {}
})

export const getters = {
  json(state) {
    return state.json
  }
}
export const mutations = {
  save(state, json) {
    state.json = json
  }
}
