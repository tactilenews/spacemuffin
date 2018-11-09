import { Mark } from 'tiptap'
import { toggleMark, updateMark, insertText } from 'tiptap-commands'

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

  command(ctx) {
    const { type, attrs } = ctx
    if (attrs && attrs['data-file']) {
      // TODO: THIS IS BROKEN; TRY TO GET IT WORKING FOR EMPTY SELECTIONS ONLY
      return [() => insertText(' [ZITAT] '), () => updateMark(type, attrs)]
    } else {
      return toggleMark(type, attrs)
    }
  }
}
