import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'cerebral/react'
import { state, signal } from 'cerebral/tags'
import styled from 'styled-components'
import RTSideBar from 'react-toolbox/lib/layout/Sidebar'
import IconButton from 'react-toolbox/lib/button/IconButton'

import SidebarNotifications from '../SidebarNotifications'

const views = {
  notifications: SidebarNotifications,
}

const Sidebar = (props) => {
  const SidebarComponent = props.sidebarView ? views[props.sidebarView] : views['notifications']
  return (
    <StyledSidebar
      active={props.sidebarActive}
      onOverlayClick={() => props.sidebarActiveToggled({ value: false })}
      width={5}
    >
      <StyledIconButton
        icon="close"
        onClick={() => props.sidebarActiveToggled({ value: false })}
      />
      <SidebarComponent />
    </StyledSidebar>
  )
}

Sidebar.propTypes = {
  sidebarActive: PropTypes.bool,
  sidebarActiveToggled: PropTypes.func,
  sidebarView: PropTypes.string,
}

export default connect(
  {
    sidebarActive: state`app.sidebarActive`,
    sidebarActiveToggled: signal`app.sidebarActiveToggled`,
    sidebarView: state`app.sidebarView`,
  }, Sidebar
)

const StyledSidebar = styled(RTSideBar)`
  background-color: #fff;
  border-left: 0px !important;
`
const StyledIconButton = styled(IconButton)`
  position: absolute;
  right: 0;
`
