import { Controller } from 'cerebral'
import Router from 'cerebral-router'
import { props } from 'cerebral/tags'
import Devtools from 'cerebral/devtools'
import HttpProvider from 'cerebral-provider-http'
import FormsProvider from 'cerebral-provider-forms'
import StorageProvider from 'cerebral-provider-storage'
import { ContextProvider } from 'cerebral/providers'
import config from 'config'
import uuid from 'uuid'

// import routes from './routes'
import app from './modules/app'
import authorization from './modules/authorization'
import localization from './modules/localization'

const jwtHeader = window.localStorage.getItem('jwtHeader')
  ? JSON.parse(window.localStorage.getItem('jwtHeader'))
  : null

const controller = Controller({
  devtools: config.cerebral && config.cerebral.debugger
    ? Devtools({ remoteDebugger: config.cerebral.remote || null })
    : null,
  state: {
    config,
  },
  modules: {
    app,
    router: Router({
      filterFalsy: true,
      routes: [
        {
          path: '/:view?',
          signal: 'app.viewChanged',
          map: { view: props`view` },
        },
      ],
    }),
    authorization,
    localization,
  },
  providers: [
    HttpProvider({
      baseUrl: '/api',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json',
        'Authorization': jwtHeader,
      },
      withCredentials: false, // true if CORS is required
    }),
    FormsProvider({
      errorMessages: {
        minLength (value, minLength) {
          return `${value} is too short - should be equal or more than ${minLength}`
        },
        isEmail (value) {
          return `${value} is not a valid email`
        },
        equalsField (value, field) {
          return `Not equal to ${field}`
        },
      },
    }),
    StorageProvider({ target: window.localStorage }),
    ContextProvider({ uuid }),
  ],
})

export default controller
