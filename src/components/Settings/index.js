import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'cerebral/react'
import { state, signal } from 'cerebral/tags'
import styled from 'styled-components'
import {
  RTCheckbox,
  RTCard,
  RTCardTitle,
  RTCardText,
} from 'wrappers/react-toolbox'

import Logout from '../Logout'

const Settings = props => {
  return (
    <Container>
      <RTCard>
        <RTCardTitle title="Settings" />
        <RTCardText>
          <br />
          <RTCheckbox
            label="Show drawer"
            checked={props.drawerActive}
            onChange={value => props.drawerActiveToggled({ value: value })}
          />
          <RTCheckbox
            label="Pin drawer"
            checked={props.drawerPinned}
            onChange={value => props.drawerPinnedToggled({ value: value })}
          />
          <RTCheckbox
            label="Show sidebar"
            checked={props.sidebarActive}
            onChange={value => props.sidebarActiveToggled({ value: value })}
          />
          <br />
          <Logout />
        </RTCardText>
      </RTCard>
    </Container>
  )
}

Settings.propTypes = {
  drawerActive: PropTypes.bool,
  drawerActiveToggled: PropTypes.func,
  drawerPinned: PropTypes.bool,
  drawerPinnedToggled: PropTypes.func,
  sidebarActive: PropTypes.bool,
  sidebarActiveToggled: PropTypes.func,
}

export default connect(
  {
    drawerActive: state`app.drawerActive`,
    drawerActiveToggled: signal`app.drawerActiveToggled`,
    drawerPinned: state`app.drawerPinned`,
    drawerPinnedToggled: signal`app.drawerPinnedToggled`,
    sidebarActive: state`app.sidebarActive`,
    sidebarActiveToggled: signal`app.sidebarActiveToggled`,
  }, Settings
)

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: #bbb;
`
