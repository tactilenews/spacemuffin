import { Mark } from 'tiptap'
import { toggleMark, updateMark } from 'tiptap-commands'

export default class QuoteMark extends Mark {
  get name() {
    return 'quote'
  }

  get schema() {
    return {
      attrs: {
        class: {
          default: 'mark-quote'
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
