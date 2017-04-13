import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'cerebral/react'
import { state, signal } from 'cerebral/tags'
import styled from 'styled-components'
import RTSideBar from 'react-toolbox/lib/layout/Sidebar'

// const menuItems = [
//   { label: 'Home', route: 'main' },
//   { label: 'Tournaments', route: 'tournaments' },
//   { label: 'Teams', route: 'teams' },
//   { label: 'FAQ', route: 'faq' },
// ]

const Sidebar = (props) => {
  return (
    <StyledSidebar
      active={props.sidebarActive}
      onOverlayClick={() => props.sidebarActiveToggled({ value: false })}
      width={5}
    >
      <div>
        Test
      </div>
    </StyledSidebar>
  )
}

Sidebar.propTypes = {
  sidebarActive: PropTypes.bool,
  sidebarActiveToggled: PropTypes.func,
}

export default connect(
  {
    sidebarActive: state`app.sidebarActive`,
    sidebarActiveToggled: signal`app.sidebarActiveToggled`,
  }, Sidebar
)

const StyledSidebar = styled(RTSideBar)`
  background-color: #fff;
`
