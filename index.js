const superagent = require('superagent')

module.exports = ({
  url = 'http://localhost:8080',
  realm = 'master',
  client = 'admin-cli',
  clientSecret,
  username,
  password
} = {}) => superagent
.post(`${url}/auth/realms/${realm}/protocol/openid-connect/token`)
.type('form')
.send({
  client_id: client,
  grant_type: 'password',
  client_secret: clientSecret,
  username,
  password
})
.then(res => res.body.access_token)
