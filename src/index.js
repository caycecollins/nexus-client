import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Container as CerebralController } from 'cerebral/react'
import { injectGlobal } from 'styled-components'

import controller from './controller'
import HotSwappingIntlProvider from './components/HotSwappingIntlProvider'
import App from './components/App'

// Using styled-components to inject global styles
injectGlobal`
  * {
    &:focus { outline: none; }
  }
  ::-ms-clear { display: none; }
  ::-ms-reveal { display: none; }
  body {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
`

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <CerebralController controller={controller}>
        <HotSwappingIntlProvider>
          <Component />
        </HotSwappingIntlProvider>
      </CerebralController>
    </AppContainer>,
    document.getElementsByTagName('main')[0]
  )
}

// If browser doesn't support Intl (i.e. Safari), then we manually import the intl polyfill and locale data.
if (!window.intl && !window.Intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/en.js',
  ], () => {
    require('intl')
    require('intl/locale-data/jsonp/en.js')
    render(App)
  }, 'Intl')
} else {
  render(App)
}

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const App = require('./components/App').default // required to force the module to re-render properly
    render(App)
  })
}
