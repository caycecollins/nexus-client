import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'cerebral/react'
import { state, signal } from 'cerebral/tags'
import styled from 'styled-components'
import IconButton from 'react-toolbox/lib/button/IconButton'
import RTNavDrawer from 'react-toolbox/lib/layout/NavDrawer'
import RTPanel from 'react-toolbox/lib/layout/Panel'
import RTNavigation from 'react-toolbox/lib/navigation/Navigation'
import RTList from 'react-toolbox/lib/list/List'
import RTListItem from 'react-toolbox/lib/list/ListItem'

const menuItems = [
  { label: 'Home', route: 'home' },
  { label: 'Tournaments', route: 'tournaments' },
  { label: 'Teams', route: 'teams' },
  { label: 'FAQ', route: 'faq' },
]

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
          <Navigation
            type="vertical"
          >
            <RTList>
              {menuItems.map((item, index) => {
                return (
                  <ListItem
                    caption={item.label}
                    key={item.route}
                    onClick={() => props.viewChanged({ view: item.route })}
                    selectable
                    disabled={item.route === props.currentView}
                    ripple={false} // TODO: fix styles so ripple will work
                  />
                )
              })}
            </RTList>
          </Navigation>
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
  background-color: ${props => props.theme.colors.gray};
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

const Navigation = styled(RTNavigation)`
  padding: 0;
`

const ListItem = styled(RTListItem)`
  [data-react-toolbox="list-item-text"] {
    color: white !important;
  }
  > span {
    border-left: 5px solid transparent;
    transition: all .1s ease-in-out;
    &:hover {
      background-color: ${props => props.theme.colors.lightGray} !important;
    }
  }
  ${props => props.disabled && `
    > span {
      border-left: 5px solid ${props.theme.colors.lightBlue};
      opacity: 1 !important;
      background-color: ${props.theme.colors.blue};
      &:hover {
        cursor: default;
      }
    }
  `}
`
