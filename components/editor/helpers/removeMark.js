export default type => {
  return (state, dispatch) => {
    const { selection } = state
    const { from, to } = selection
    if (selection.empty) return

    let transaction = state.tr
    transaction = transaction.removeMark(from, to, type)

    return dispatch(transaction)
  }
}
