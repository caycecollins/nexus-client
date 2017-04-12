import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'cerebral/react'
import { state, signal } from 'cerebral/tags'
import styled, { ThemeProvider as CerebralThemeProvider } from 'styled-components'
import RTThemeProvider from 'react-toolbox/lib/ThemeProvider'
import RTAppBar from 'react-toolbox/lib/app_bar/AppBar'
import RTLayout from 'react-toolbox/lib/layout/Layout'
import RTPanel from 'react-toolbox/lib/layout/Panel'

import RenderView from '../RenderView'
import toolboxTheme from '../../../dist/react-toolbox/theme'

import NavDrawer from './NavDrawer'
import Sidebar from './Sidebar'
import cerebralTheme from './theme'

const App = props => {
  return (
    <RTThemeProvider theme={toolboxTheme}>
      <CerebralThemeProvider theme={cerebralTheme}>
        <RTLayout>
          <NavDrawer/>
          <RTPanel>
            <View isDrawerPinned={props.drawerPinned}>
              <RTAppBar
                leftIcon={!props.drawerPinned ? 'menu' : null}
                title="Nexus Gaming"
                onLeftIconClick={() => props.drawerActiveToggled({ value: !props.drawerActive })}
              />
              <Padding>
                <RenderView />
              </Padding>
            </View>
          </RTPanel>
          <Sidebar/>
        </RTLayout>
      </CerebralThemeProvider>
    </RTThemeProvider>
  )
}

App.propTypes = {
  drawerActive: PropTypes.bool,
  drawerActiveToggled: PropTypes.func,
  drawerPinned: PropTypes.bool,
  drawerPinnedToggled: PropTypes.func,
}

export default connect(
  {
    drawerActive: state`app.drawerActive`,
    drawerActiveToggled: signal`app.drawerActiveToggled`,
    drawerPinned: state`app.drawerPinned`,
    drawerPinnedActive: signal`app.drawerPinnedToggled`,
  }, App
)

const View = styled.div`
  ${props => props.isDrawerPinned ? 'margin-left: 256px; transition-delay: 50ms !important;' : 'transition-delay: 0ms !important;'}
  height: 100vh;
  transition: all .3s cubic-bezier(.4,0,.2,1);
  background-color: #f3f3f3;
  @media (max-width: 575px) {
    margin-left: 0;
  }
`

const Padding = styled.div`
  padding: 24px;
`
