
import {environment as prod } from './environment.prod'
import {environment as dev } from './environment.dev'

const config = {
    // Add common config values here
    // both strings, e.g. 'color': 'green',
    'loadText': 'lstning...'
}

const configEnv = process.env.NODE_ENV === 'production'
? prod
: dev

export default {
// Add common config values here
  ...config,
  ...configEnv
}
