// ./routes/index.js
const products = require('./products');
const users = require('./users');

module.exports = (app) => {
  app.use('/api/products', products)
}

module.exports = (app) => {
  app.use('/api/users', users)
}
