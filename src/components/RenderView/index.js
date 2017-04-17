import React from 'react'
import { connect } from 'cerebral/react'
import { state } from 'cerebral/tags'
import styled from 'styled-components'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import Login from '../Login'
import Home from '../Home'
import Tournaments from '../Tournaments'
import Teams from '../Teams'
import FAQ from '../FAQ'
import Notifications from '../Notifications'
import Settings from '../Settings'
import Admin from '../Admin'

import './transitions.scss'

const views = {
  home: Home,
  login: Login,
  tournaments: Tournaments,
  teams: Teams,
  faq: FAQ,
  notifications: Notifications,
  settings: Settings,
  admin: Admin,
}

export default connect({
  currentView: state`app.currentView`,
  lastVisited: state`app.lastVisited`,
  drawerPinned: state`app.drawerPinned`,
},
function RenderView ({ currentView, lastVisited, drawerPinned }) {
  views[currentView]
    ? console.log(`Routing to view: ${currentView}`)
    : console.log(`The route "${currentView}" does not exist, routing to login instead.`)
  const Component = views[currentView] || views['home']
  return (
    <div>
      <CSSTransitionGroup
        transitionName="view"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <FullWidthHeight key={currentView} drawerPinned={drawerPinned}>
          <Component />
        </FullWidthHeight>
      </CSSTransitionGroup>
    </div>
  )
})

const FullWidthHeight = styled.div`
  position: absolute;
  ${props => {
    const transitionDelay = props.drawerPinned ? 'transition-delay: 50ms !important;' : 'transition-delay: 0ms !important;'
    const width = document.documentElement.clientWidth
    const subtractWidth = props.drawerPinned ? '256px' : '0px'
    const subtractHeight = width <= 480 && '56px' ||
      width > 480 && width < 600 && '48px' ||
      width > 600 && '64px'
    return `
      width: calc(100% - ${subtractWidth});
      height: calc(100% - ${subtractHeight});
      ${transitionDelay}
    `
  }})
  overflow: auto;
  transition: all .3s cubic-bezier(.4,0,.2,1);
`
