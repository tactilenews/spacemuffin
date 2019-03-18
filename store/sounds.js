export const state = () => ({
  speakers: [
    {
      name: 'Basta',
      url: 'https://static.tactile.news/audio/speakers/basta.mp3'
    },
    {
      name: 'Clarissa da Silva',
      url: 'https://static.tactile.news/audio/speaker/clarissa-da-silva.mp3'
    },
    {
      name: 'Franci',
      url: 'https://static.tactile.news/audio/speakers/franci.mp3'
    },
    {
      name: 'Friedrich',
      url: 'https://static.tactile.news/audio/speakers/friedrich.mp3'
    },
    {
      name: 'Giosue Tolu',
      url: 'https://static.tactile.news/audio/speakers/giosue-tolu.mp3'
    },
    {
      name: 'Katja',
      url: 'https://static.tactile.news/audio/speakers/katja.mp3'
    },
    {
      name: 'Martin',
      url: 'https://static.tactile.news/audio/speakers/martin.mp3'
    },
    {
      name: 'Matthias',
      url: 'https://static.tactile.news/audio/speakers/matthias.mp3'
    },
    {
      name: 'Milla',
      url: 'https://static.tactile.news/audio/speakers/milla.mp3'
    },
    {
      name: 'Ralph Caspers',
      url: 'https://static.tactile.news/audio/speakers/ralph-caspers.mp3'
    },
    {
      name: 'Stefanie',
      url: 'https://static.tactile.news/audio/speakers/stefanie.mp3'
    }
  ],
  voices: [
    {
      name: 'Frau 1',
      url: 'https://static.tactile.news/audio/voices/woman-astrid.mp3'
    },
    {
      name: 'Frau 2',
      url: 'https://static.tactile.news/audio/voices/woman-franci.mp3'
    },
    {
      name: 'Mann 1',
      url: 'https://static.tactile.news/audio/voices/man-friedrich.mp3'
    },
    {
      name: 'Mann 2',
      url: 'https://static.tactile.news/audio/voices/man-robert.mp3'
    },
    {
      name: 'Jungenstimme',
      url: 'https://static.tactile.news/audio/voices/boy-matthias.mp3'
    }
  ],
  sounds: [
    {
      name: 'Baby',
      url: 'https://static.tactile.news/audio/sounds/baby.mp3'
    },
    {
      name: 'Kinderlachen',
      url: 'https://static.tactile.news/audio/sounds/kinderlachen.mp3'
    },
    {
      name: 'Kindermusik',
      url: 'https://static.tactile.news/audio/sounds/kindermusik.mp3'
    },
    {
      name: 'Knall',
      url: 'https://static.tactile.news/audio/sounds/knall.mp3'
    },
    {
      name: 'Percussion',
      url: 'https://static.tactile.news/audio/sounds/percussion.mp3'
    },
    {
      name: 'Pferde',
      url: 'https://static.tactile.news/audio/sounds/pferde.wav'
    },
    {
      name: 'Platsch',
      url: 'https://static.tactile.news/audio/sounds/platsch.mp3'
    },
    {
      name: 'Regen',
      url: 'https://static.tactile.news/audio/sounds/regen.mp3'
    },
    {
      name: 'Schritte auf Eis',
      url: 'https://static.tactile.news/audio/sounds/schritte-auf-eis.mp3'
    },
    {
      name: 'Schwein',
      url: 'https://static.tactile.news/audio/sounds/schwein.mp3'
    },
    {
      name: 'Schwimmbad',
      url: 'https://static.tactile.news/audio/sounds/schwimmbad.mp3'
    },
    {
      name: 'Spannende Musik',
      url: 'https://static.tactile.news/audio/sounds/spannende-musik.mp3'
    },
    {
      name: 'Spielende Kinder',
      url: 'https://static.tactile.news/audio/sounds/spielende-kinder.mp3'
    },
    {
      name: 'Stalltür',
      url: 'https://static.tactile.news/audio/sounds/stalltür.wav'
    },
    {
      name: 'Wind',
      url: 'https://static.tactile.news/audio/sounds/wind.wav'
    },
    {
      name: 'Zeit vergeht',
      url: 'https://static.tactile.news/audio/sounds/zeit-vergeht.mp3'
    }
  ]
})

export const getters = {
  speakers(state) {
    return state.speakers
  },
  voices(state) {
    return state.voices
  },
  sounds(state) {
    return state.sounds
  }
}
