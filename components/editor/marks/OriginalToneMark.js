import { Mark } from 'tiptap'
import { toggleMark } from 'tiptap-commands'

export default class OriginalToneMark extends Mark {
  get name() {
    return 'originalTone'
  }

  get schema() {
    return {
      attrs: {
        class: {
          default: 'mark-original-tone'
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
      'Mod-o': toggleMark(type)
    }
  }

  command({ type }) {
    return toggleMark(type)
  }
}
