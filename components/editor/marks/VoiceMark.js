import { Mark } from 'tiptap'
import { toggleMark } from 'tiptap-commands'

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
          default: 'männlich'
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
      // 'Mod-o': toggleMark(type)
    }
  }

  command({ type }) {
    return toggleMark(type)
  }
}
