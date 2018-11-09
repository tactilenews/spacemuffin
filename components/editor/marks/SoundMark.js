import { Mark } from 'tiptap'
import { toggleMark, updateMark } from 'tiptap-commands'

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
      return updateMark(type, attrs)
    } else {
      return toggleMark(type, attrs)
    }
  }
}
