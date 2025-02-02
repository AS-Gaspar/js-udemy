const path = require('path')
const axios = require('axios')
const { Pessoa } = require('./mod1')
const p1 = new Pessoa('Alexandre')
console.log(p1)

axios('htts://www.')
  .then(response => console.log(response.data))
  .catch(e => console.log(e))