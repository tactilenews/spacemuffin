import { Mark } from 'tiptap'
import { toggleMark, updateMark } from 'tiptap-commands'

export default class VoiceMark extends Mark {
  get name() {
    return 'voice'
  }

  get schema() {
    return {
      attrs: {
        class: {
          default: 'mark-voice'
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
