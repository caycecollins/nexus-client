/**
 * webpack.local-example.js
 *
 * Provides an object to webpack.config.babel.js which can be used as local overrides
 * (see webpack.config.babel.js > devServer.host or devServer.port properties for example)
 *
 * Rename this file to webpack.local.js and it will be automatically picked up.
 */

export default {
  port: 3000,
}
