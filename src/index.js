import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Controller } from 'cerebral'
import { Container } from 'cerebral/react'
import Devtools from 'cerebral/devtools'
import config from 'config'
import { injectGlobal } from 'styled-components'

import HotSwappingIntlProvider from './components/HotSwappingIntlProvider'
import Main from './components/Main'
import authorization from './modules/authorization'
import localization from './modules/localization'

// Cerebral state contoller setup
const controller = Controller({
  devtools: config.cerebral && config.cerebral.debugger
    ? Devtools({ remoteDebugger: config.cerebral.remote || null }) : null,
  state: {
    config,
  },
  modules: {
    authorization,
    localization,
  },
})

// Use Styled Components to inject global styles
injectGlobal`
  * {
    &:focus { outline: none; }
  }
  ::-ms-clear { display: none; }
  ::-ms-reveal { display: none; }
  body { overflow-y: scroll; }
`

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Container controller={controller}>
        <HotSwappingIntlProvider>
          <Component />
        </HotSwappingIntlProvider>
      </Container>
    </AppContainer>,
    document.getElementsByTagName('main')[0]
  )
}

render(Main)

if (module.hot) {
  module.hot.accept('./components/Main', () => {
    const App = require('./components/Main').default // required to force the module to re-render properly
    render(App)
  })
}
