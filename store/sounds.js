export const state = () => ({
  speakers: [
    {
      name: 'Basta',
      url: '/audio/speakers/basta.mp3'
    },
    {
      name: 'Franci',
      url: '/audio/speakers/franci.mp3'
    },
    {
      name: 'Friedrich',
      url: '/audio/speakers/friedrich.mp3'
    },
    {
      name: 'Giosue Tolu',
      url: '/audio/speakers/giosue-tolu.mp3'
    },
    {
      name: 'Katja',
      url: '/audio/speakers/katja.mp3'
    },
    {
      name: 'Martin',
      url: '/audio/speakers/martin.mp3'
    },
    {
      name: 'Matthias',
      url: '/audio/speakers/matthias.mp3'
    },
    {
      name: 'Milla',
      url: '/audio/speakers/milla.mp3'
    },
    {
      name: 'Stefanie',
      url: '/audio/speakers/stefanie.mp3'
    }
  ],
  voices: [
    {
      name: 'Frau 1',
      url: '/audio/voices/woman-astrid.mp3'
    },
    {
      name: 'Frau 2',
      url: '/audio/voices/woman-franci.mp3'
    },
    {
      name: 'Mann 1',
      url: '/audio/voices/man-friedrich.mp3'
    },
    {
      name: 'Mann 2',
      url: '/audio/voices/man-robert.mp3'
    },
    {
      name: 'Jungenstimme',
      url: '/audio/voices/boy-matthias.mp3'
    }
  ],
  sounds: [
    {
      name: 'Baby',
      url: '/audio/sounds/baby.mp3'
    },
    {
      name: 'Kinderlachen',
      url: '/audio/sounds/kinderlachen.mp3'
    },
    {
      name: 'Kindermusik',
      url: '/audio/sounds/kindermusik.mp3'
    },
    {
      name: 'Knall',
      url: '/audio/sounds/knall.mp3'
    },
    {
      name: 'Percussion',
      url: '/audio/sounds/percussion.mp3'
    },
    {
      name: 'Pferde',
      url: '/audio/sounds/pferde.wav'
    },
    {
      name: 'Platsch',
      url: '/audio/sounds/platsch.mp3'
    },
    {
      name: 'Regen',
      url: '/audio/sounds/regen.mp3'
    },
    {
      name: 'Schritte auf Eis',
      url: '/audio/sounds/schritte-auf-eis.mp3'
    },
    {
      name: 'Schwein',
      url: '/audio/sounds/schwein.mp3'
    },
    {
      name: 'Schwimmbad',
      url: '/audio/sounds/schwimmbad.mp3'
    },
    {
      name: 'Spannende Musik',
      url: '/audio/sounds/spannende-musik.mp3'
    },
    {
      name: 'Spielende Kinder',
      url: '/audio/sounds/spielende-kinder.mp3'
    },
    {
      name: 'Stalltür',
      url: '/audio/sounds/stalltür.wav'
    },
    {
      name: 'Wind',
      url: '/audio/sounds/wind.wav'
    },
    {
      name: 'Zeit vergeht',
      url: '/audio/sounds/zeit-vergeht.mp3'
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
