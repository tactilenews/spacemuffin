import { Mark } from 'tiptap'
import addMark from '~/components/editor/helpers/addMark'
import removeMark from '~/components/editor/helpers/removeMark'

export default class QuoteMark extends Mark {
  get name() {
    return 'quote'
  }

  get schema() {
    return {
      attrs: {
        class: { default: 'mark-quote' },
        'data-url': { default: null },
        'data-name': { default: null }
      },
      parseDOM: [{ tag: 'mark' }],
      toDOM: node => ['mark', { ...node.attrs }, 0]
    }
  }

  command({ type, attrs = {} }) {
    const { name, url } = attrs

    if (!name || !url) {
      return removeMark(type)
    }

    attrs = {
      'data-name': name,
      'data-url': url
    }

    return addMark(type, attrs, ' [ZITAT] ')
  }
}
