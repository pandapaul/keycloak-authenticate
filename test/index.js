const tap = require('tap')
const auth = require('../')

tap.test('Should be able to get an access token with valid credentials', (t) => {
  return auth({ username: 'test', password: 'test' })
  .then((token) => {
    t.ok(token)
    t.type(token, 'string')
  })
})
