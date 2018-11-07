export const state = () => ({
  content: {}
})

export const mutations = {
  save(state, content) {
    state.content = content
  }
}
