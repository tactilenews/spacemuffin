export const state = () => ({
  speakers: [
    {
      name: 'Greg',
      url: '/sounds/test.mp3'
    },
    {
      name: 'Astrid',
      url: '/sounds/test.mp3'
    },
    {
      name: 'Franciska',
      url: '/sounds/test.mp3'
    },
    {
      name: 'Till',
      url: '/sounds/test.mp3'
    },
    {
      name: 'Friedrich',
      url: '/sounds/test.mp3'
    }
  ]
})

export const getters = {
  speakers(state) {
    return state.speakers
  }
}
