const superagent = require('superagent')

module.exports = ({
  host = 'http://localhost:8080',
  realm = 'master',
  client = 'admin-cli',
  grantType = 'password',
  clientSecret,
  username,
  password
} = {}) => superagent
.post(`${host}/auth/realms/${realm}/protocol/openid-connect/token`)
.type('form')
.send({
  client_id: client,
  grant_type: grantType,
  client_secret: clientSecret,
  username,
  password
})
.then(res => res.body.access_token)
