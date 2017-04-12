import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'cerebral/react'
import { state, signal } from 'cerebral/tags'
import styled from 'styled-components'
import IconButton from 'react-toolbox/lib/button/IconButton'
import RTNavDrawer from 'react-toolbox/lib/layout/NavDrawer'
import RTPanel from 'react-toolbox/lib/layout/Panel'

// const menuItems = [
//   { label: 'Home', route: 'main' },
//   { label: 'Tournaments', route: 'tournaments' },
//   { label: 'Teams', route: 'teams' },
//   { label: 'FAQ', route: 'faq' },
// ]

const NavDrawer = props => {
  return (
    <div>
      <StyledNavDrawer
        active={props.drawerActive}
        pinned={props.drawerPinned}
        permanentAt="sm"
        onOverlayClick={() => props.toggleDrawerPinned({ value: false })}
      >
        <RTPanel>
            <StyledIconButton
            icon="close"
            onClick={() => props.toggleDrawerPinned({ value: false })}
          />
          <User>
            <Avatar />
            User Nickname
          </User>
          {/* <BSListGroup>
            {menuItems.map((item, index) => {
              return (
                <ListGroupItem
                  key={index}
                  active={props.currentView === item.route}
                  onClick={() => props.viewChanged({ view: item.route })}
                >
                  {item.label}
                </ListGroupItem>
              )
            })}
          </BSListGroup> */}
        </RTPanel>
      </StyledNavDrawer>
    </div>
  )
}

NavDrawer.propTypes = {
  currentView: PropTypes.string,
  viewChanged: PropTypes.func,
  drawerActive: PropTypes.bool,
  drawerPinned: PropTypes.bool,
  toggleDrawerActive: PropTypes.func,
  toggleDrawerPinned: PropTypes.func,
  toggleSidebarPinned: PropTypes.func,
}

export default connect(
  {
    currentView: state`app.currentView`,
    viewChanged: signal`app.viewChanged`,
    drawerActive: state`app.drawerActive`,
    drawerPinned: state`app.drawerPinned`,
    toggleDrawerPinned: signal`app.drawerPinnedToggled`,
  },
  NavDrawer
)

const StyledNavDrawer = styled(RTNavDrawer)`
  background-color: #353a45;
  transition-delay: 0ms !important;
  ${props => props.pinned && 'border-right: 0 !important;'}
`

const StyledIconButton = styled(IconButton)`
  color: white !important;
`

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 180px;
  width: 100%;
  padding: 24px;
  color: white;
`

const Avatar = styled.div`
  margin: 0 auto 10px auto;
  width: 90px;
  height: 90px;
  background-color: #eee;
  border-radius: 50%;
`

// const ListGroupItem = styled(BSListGroupItem)`
//   border-radius: 0px !important;
//   border: 0;
//   border-left: 4px solid transparent;
//   background-color: transparent;
//   color: white;
//   &.active {
//     background-color: #1f5f8b;
//     border-left: 4px solid #44799e;
//   }
//   &:hover:not(.active) {
//     background-color: #454b59;
//     cursor: pointer;
//   }
// `
