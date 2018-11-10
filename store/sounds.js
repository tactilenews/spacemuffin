export const state = () => ({
  speakers: [
    {
      name: 'Basta',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/speakers/basta.mp3'
    },
    {
      name: 'Franci',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/speakers/franci.mp3'
    },
    {
      name: 'Friedrich',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/speakers/friedrich.mp3'
    },
    {
      name: 'Giosue Tolu',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/speakers/giosue-tolu.mp3'
    },
    {
      name: 'Katja',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/speakers/katja.mp3'
    },
    {
      name: 'Martin',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/speakers/martin.mp3'
    },
    {
      name: 'Matthias',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/speakers/matthias.mp3'
    },
    {
      name: 'Milla',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/speakers/milla.mp3'
    },
    {
      name: 'Stefanie',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/speakers/stefanie.mp3'
    }
  ],
  voices: [
    {
      name: 'Frau 1',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/woman-astrid.mp3'
    },
    {
      name: 'Frau 2',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/woman-franci.mp3'
    },
    {
      name: 'Mann 1',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/man-friedrich.mp3'
    },
    {
      name: 'Mann 2',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/man-robert.mp3'
    },
    {
      name: 'Jungenstimme',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/boy-matthias.mp3'
    }
  ],
  sounds: [
    {
      name: 'Baby',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/baby.mp3'
    },
    {
      name: 'Kinderlachen',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/kinderlachen.mp3'
    },
    {
      name: 'Kindermusik',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/kindermusik.mp3'
    },
    {
      name: 'Knall',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/knall.mp3'
    },
    {
      name: 'Percussion',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/percussion.mp3'
    },
    {
      name: 'Pferde',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/pferde.wav'
    },
    {
      name: 'Platsch',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/platsch.mp3'
    },
    {
      name: 'Regen',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/regen.mp3'
    },
    {
      name: 'Schritte auf Eis',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/schritte-auf-eis.mp3'
    },
    {
      name: 'Schwein',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/schwein.mp3'
    },
    {
      name: 'Schwimmbad',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/schwimmbad.mp3'
    },
    {
      name: 'Spannende Musik',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/spannende-musik.mp3'
    },
    {
      name: 'Spielende Kinder',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/spielende-kinder.mp3'
    },
    {
      name: 'Stalltür',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/stalltür.wav'
    },
    {
      name: 'Wind',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/wind.wav'
    },
    {
      name: 'Zeit vergeht',
      url:
        'https://raw.githubusercontent.com/tactilenews/spacemuffin/master/static/audio/voices/zeit-vergeht.mp3'
    }
  ]
})

export const getters = {
  speakers(state) {
    return state.speakers
  },
  sounds(state) {
    return state.sounds
  },
  voices(state) {
    return state.voices
  }
}
