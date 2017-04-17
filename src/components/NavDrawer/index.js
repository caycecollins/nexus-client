import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'cerebral/react'
import { state, signal } from 'cerebral/tags'
import styled from 'styled-components'
import IconButton from 'react-toolbox/lib/button/IconButton'
import RTNavDrawer from 'react-toolbox/lib/layout/NavDrawer'
import RTNavigation from 'react-toolbox/lib/navigation/Navigation'
import RTList from 'react-toolbox/lib/list/List'
import RTListItem from 'react-toolbox/lib/list/ListItem'
import RTListSubheader from 'react-toolbox/lib/list/ListSubheader'

const menuItems = [
  { label: 'Home', route: 'home', icon: 'home' },
  { label: 'Tournaments', route: 'tournaments', icon: 'stars' },
  { label: 'Teams', route: 'teams', icon: 'group' },
  { label: 'FAQ', route: 'faq', icon: 'help' },
]

const adminItems = [
  { label: 'Admin', route: 'admin', icon: 'build' },
]

const NavDrawer = props => {
  const closeButtonClicked = () => {
    props.toggleDrawerActive({ value: false })
    props.toggleDrawerPinned({ value: false })
  }
  const navigationItemClicked = (item) => {
    props.toggleDrawerActive({ value: false })
    props.viewChanged({ view: item.route })
  }
  return (
    <div>
      <StyledNavDrawer
        active={props.drawerActive}
        pinned={props.drawerPinned}
        permanentAt="sm"
        onOverlayClick={() => props.toggleDrawerActive({ value: false })}
      >
        <StyledIconButton
          icon="close"
          onClick={() => closeButtonClicked()}
        />
        <StyledUser>
          <StyledAvatar />
          User Nickname
        </StyledUser>
        <StyledNavigation type="vertical">
          <RTList>
            {menuItems.map((item, index) => {
              const showDivider = item.label === 'Admin' && <RTListDivider />
              return (
                <div key={item.route}>
                  {showDivider}
                  <StyledListItem
                    caption={item.label}
                    leftIcon={item.icon}
                    onClick={() => navigationItemClicked(item)}
                    disabled={item.route === props.currentView}
                    ripple={false} // TODO: fix styles so ripple will work
                    selectable
                  />
                </div>
              )
            })}
            <br />
            <RTListSubheader caption="Administration"/>
            {adminItems.map((item, index) => {
              return (
                <div key={item.route}>
                  <StyledListItem
                    caption={item.label}
                    leftIcon={item.icon}
                    onClick={() => navigationItemClicked(item)}
                    disabled={item.route === props.currentView}
                    ripple={false} // TODO: fix styles so ripple will work
                    selectable
                  />
                </div>
              )
            })}
          </RTList>
        </StyledNavigation>
      </StyledNavDrawer>
    </div>
  )
}

NavDrawer.propTypes = {
  currentView: PropTypes.string,
  viewChanged: PropTypes.func,
  drawerActive: PropTypes.bool,
  toggleDrawerActive: PropTypes.func,
  drawerPinned: PropTypes.bool,
  toggleDrawerPinned: PropTypes.func,
  drawerMinimal: PropTypes.bool,
}

export default connect(
  {
    currentView: state`app.currentView`,
    viewChanged: signal`app.viewChanged`,
    drawerActive: state`app.drawerActive`,
    toggleDrawerActive: signal`app.drawerActiveToggled`,
    drawerPinned: state`app.drawerPinned`,
    toggleDrawerPinned: signal`app.drawerPinnedToggled`,
    drawerMinimal: state`app.drawerMinimal`,
  },
  NavDrawer
)

const StyledNavDrawer = styled(RTNavDrawer)`
  background-color: ${props => props.theme.colors.gray};
  transition-delay: 0ms !important;
  border-right: 0 !important;
`

const StyledIconButton = styled(IconButton)`
  color: white !important;
`

const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 180px;
  width: 100%;
  padding: 24px;
  color: white;
  margin-bottom: 16px;
`

const StyledAvatar = styled.div`
  margin: 0 auto 10px auto;
  width: 90px;
  height: 90px;
  background-color: #eee;
  border-radius: 50%;
`

const StyledNavigation = styled(RTNavigation)`
  padding: 0;
`

const StyledListItem = styled(RTListItem)`
  [data-react-toolbox="font-icon"],
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
