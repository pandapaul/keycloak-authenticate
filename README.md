# keycloak-authenticate

> Authenticate against a Keycloak service


## Install

```
$ npm install --save keycloak-authenticate
```


## Usage

```js
const auth = require('keycloak-authenticate')

auth({
  url: 'http://localhost:8080',
  username: 'user',
  password: 'pass'
}).then(token => {
  // Make use of the token
})
```


## API

### auth(params)

Returns a Promise that resolves to the access token returned by Keycloak.

#### params

##### url

Type: `string`  
Default: `http://localhost:8080`

Keycloak service URL.


## License

MIT
