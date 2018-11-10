import { Mark } from 'tiptap'
import { toggleMark, insertText } from 'tiptap-commands'
import insertSound from '~/components/editor/commands/insertSound'

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
          default: 'ERROR - data-file missing'
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
      return insertSound(type, attrs)
    } else {
      return toggleMark(type, attrs)
    }
  }
}
