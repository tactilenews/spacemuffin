export const state = () => ({
  speakers: [
    {
      name: 'Greg',
      url: '~assets/sounds/test.mp3'
    },
    {
      name: 'Astrid',
      url: '~assets/sounds/test.mp3'
    },
    {
      name: 'Franciska',
      url: '~assets/sounds/test.mp3'
    },
    {
      name: 'Till',
      url: '~assets/sounds/test.mp3'
    },
    {
      name: 'Friedrich',
      url: '~assets/sounds/test.mp3'
    }
  ]
})

export const getters = {
  speakers(state) {
    return state.speakers
  }
}
