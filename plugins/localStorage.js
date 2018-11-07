import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'spacemuffin',
    paths: ['items']
  })(store)
}
