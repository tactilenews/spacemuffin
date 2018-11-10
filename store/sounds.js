export const state = () => ({
  speakers: [
    {
      name: 'Basta',
      url: '/audio/speakers/basta.mp3',
    },
    {
      name: 'Franci',
      url: '/audio/speakers/franci.mp3',
    },
    {
      name: 'Friedrich',
      url: '/audio/speakers/friedrich.mp3',
    },
    {
      name: 'Giosue Tolu',
      url: '/audio/speakers/giosue-tolu.mp3',
    },
    {
      name: 'Katja',
      url: '/audio/speakers/katja.mp3',
    },
    {
      name: 'Martin',
      url: '/audio/speakers/martin.mp3',
    },
    {
      name: 'Matthias',
      url: '/audio/speakers/matthias.mp3',
    },
    {
      name: 'Milla',
      url: '/audio/speakers/milla.mp3',
    },
    {
      name: 'Stefanie',
      url: '/audio/speakers/stefanie.mp3',
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
      url: '/audio/voices/baby.mp3'
    },
    {
      name: 'Kinderlachen',
      url: '/audio/voices/kinderlachen.mp3'
    },
    {
      name: 'Kindermusik',
      url: '/audio/voices/kindermusik.mp3'
    },
    {
      name: 'Knall',
      url: '/audio/voices/knall.mp3'
    },
    {
      name: 'Percussion',
      url: '/audio/voices/percussion.mp3'
    },
    {
      name: 'Pferde',
      url: '/audio/voices/pferde.wav'
    },
    {
      name: 'Platsch',
      url: '/audio/voices/platsch.mp3'
    },
    {
      name: 'Regen',
      url: '/audio/voices/regen.mp3'
    },
    {
      name: 'Schritte auf Eis',
      url: '/audio/voices/schritte-auf-eis.mp3'
    },
    {
      name: 'Schwein',
      url: '/audio/voices/schwein.mp3'
    },
    {
      name: 'Schwimmbad',
      url: '/audio/voices/schwimmbad.mp3'
    },
    {
      name: 'Spannende Musik',
      url: '/audio/voices/spannende-musik.mp3'
    },
    {
      name: 'Spielende Kinder',
      url: '/audio/voices/spielende-kinder.mp3'
    },
    {
      name: 'Stalltür',
      url: '/audio/voices/stalltür.wav'
    },
    {
      name: 'Wind',
      url: '/audio/voices/wind.wav'
    },
    {
      name: 'Zeit vergeht',
      url: '/audio/voices/zeit-vergeht.mp3'
    }
  ]
})

export const getters = {
  speakers(state) {
    return state.speakers
  }
}
