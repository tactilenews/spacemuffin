import { Mark } from 'tiptap'
import { toggleMark, updateMark } from 'tiptap-commands'
import insertSound from '~/components/editor/commands/insertSound'

export default class SoundMark extends Mark {
  get name() {
    return 'sound'
  }

  get schema() {
    return {
      attrs: {
        class: {
          default: 'mark-sound'
        },
        'data-file': {
          default: 'selecting...'
        },
        'data-label': {
          default: 'ERROR - data-label missing'
        }
      },
      parseDOM: [
        {
          tag: 'mark'
        }
      ],
      toDOM: node => [
        'mark',
        {
          ...node.attrs
        },
        0
      ]
    }
  }

  command({ type, attrs }) {
    if (attrs && attrs['data-file']) {
      return insertSound(type, attrs, 'SOUND')
    } else {
      return toggleMark(type, attrs)
    }
  }
}
