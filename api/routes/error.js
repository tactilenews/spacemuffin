export default (req, res) => {
  const response = {
    status: 'error',
    message: 'There was an error processing your request.'
  }

  res.end(JSON.stringify(response))
}
