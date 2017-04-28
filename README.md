# keycloak-authenticate

> Authenticate against a [Keycloak](http://www.keycloak.org/) service

[![Build Status](https://travis-ci.org/pandapaul/keycloak-authenticate.svg?branch=master)](https://travis-ci.org/pandapaul/keycloak-authenticate)


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

##### username

Type: `string`  

Username of the Keycloak user through which you'd like to authenticate.

##### password

Type: `string`  

Password for the Keycloak user through which you'd like to authenticate.  Note that this (along with all the other params for that matter) is just passed along to your Keycloak server.

##### realm

Type: `string`  
Default: `master`

Keycloak authentication relies on knowing what realm you want to access.  If you're just authenticating against the default `master` realm, feel free to leave it out.

##### client

Type: `string`  
Default: `admin-cli`

Name of the Keycloak client through which you'd like to authenticate.

##### clientSecret

Type: `string`  

Optional client secret for non-public Keycloak clients that may require one.


## License

MIT
