import { updateMark } from 'tiptap-commands'

export default function(type, attrs, text = 'SOUND') {
  return (state, dispatch) => {
    const { $from, empty } = state.selection
    const { pos } = $from.pos
    const { from, to } = state.selection

    if (empty) {
      let transaction = state.tr.insertText(text, pos)
      transaction = transaction.addMark(
        from,
        to + text.length,
        type.create(attrs)
      )
      return dispatch(transaction)
    } else {
      return updateMark(type, attrs)(state, dispatch)
    }
  }
}
