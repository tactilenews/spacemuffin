import { Mark } from 'tiptap'
import { toggleMark } from 'tiptap-commands'

export default class AmbientToneMark extends Mark {
  get name() {
    return 'ambientTone'
  }

  get schema() {
    return {
      attrs: {
        class: {
          default: 'mark-ambient-tone'
        },
        'data-file': {
          default: 'file-1.mp3'
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

  keys({ type }) {
    return {
      'Mod-g': toggleMark(type)
    }
  }

  command({ type }) {
    return toggleMark(type)
  }
}
