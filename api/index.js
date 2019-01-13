import ordersCreate from './routes/orders/create.js'
import errorHandler from './routes/error.js'

// remove leading and trailing slashes
const normalizePath = path => path.replace(/^\/|\/$/g, '')
const normalizeMethod = method => method.toLowerCase()

const routes = [
  {
    path: 'orders',
    method: 'post',
    handler: ordersCreate
  }
]

export default (req, res, next) => {
  const reqPath = normalizePath(req.url)
  const reqMethod = normalizeMethod(req.method)

  // Select the handler to use for this route
  const route = routes.find(route => {
    return (
      normalizePath(route.path) == reqPath &&
      normalizeMethod(route.method) == reqMethod
    )
  })

  if(route && route.handler) {
    route.handler(req, res)
  }

  // If there is no matching handler for this route,
  // or if the handler has not sent a response, call the
  // erorr handler
  errorHandler(req, res)
}
