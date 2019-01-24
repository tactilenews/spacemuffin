export default (type, attrs, defaultText = ' [SOUND] ') => {
  return (state, dispatch) => {
    const { selection } = state
    // Resolved/absolute selection position in the doc
    const pos = selection.$from.pos
    // Create an instance of the given mark type
    const mark = type.create(attrs)

    // Relative selection start/end
    let { from, to } = selection
    let transaction = state.tr

    // If the selection is empty, i. e. the editor is focus but
    // not text is selected, add the default text at the
    // cursor position first
    if (selection.empty) {
      transaction = transaction.insertText(defaultText, pos)
      to = from + defaultText.length
    }

    // Mark the selected (or previously inserted) text
    transaction = transaction.addMark(pos, to, mark)
    return dispatch(transaction)
  }
}
