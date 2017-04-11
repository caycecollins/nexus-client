import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'cerebral/react'
import { state, signal } from 'cerebral/tags'
import styled from 'styled-components'

import {
  BSListGroup,
  BSListGroupItem,
} from '../../../wrappers/bootstrap'

const menuItems = [
  { label: 'Home', route: 'main' },
  { label: 'Tournaments', route: 'tournaments' },
  { label: 'Teams', route: 'teams' },
  { label: 'FAQ', route: 'faq' },
]

const Sidebar = (props) => {
  return (
    <StyledSidebar>
      <User>
        <Avatar />
        User Nickname
      </User>
      <BSListGroup>
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
      </BSListGroup>
    </StyledSidebar>
  )
}

Sidebar.propTypes = {
  currentView: PropTypes.string,
  viewChanged: PropTypes.func,
}

export default connect(
  {
    currentView: state`app.currentView`,
    viewChanged: signal`app.viewChanged`,
  },
  Sidebar
)

const StyledSidebar = styled.div`
  position: absolute;
  width: 250px;
  height: 100%;
  left: 0;
  background-color: #353a45;
  transition: all .2s ease-in-out;
  z-index: 1000;
  @media (max-width: 575px) {
    left: -255px;
  }
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

const ListGroupItem = styled(BSListGroupItem)`
  border-radius: 0px !important;
  border: 0;
  border-left: 4px solid transparent;
  background-color: transparent;
  color: white;
  &.active {
    background-color: #1f5f8b;
    border-left: 4px solid #44799e;
  }
  &:hover:not(.active) {
    background-color: #454b59;
    cursor: pointer;
  }
`
