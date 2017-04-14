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

import './transitions.scss'

const views = {
  home: Home,
  login: Login,
  tournaments: Tournaments,
  teams: Teams,
  faq: FAQ,
  notifications: Notifications,
  settings: Settings,
}

export default connect({
  currentView: state`app.currentView`,
  lastVisited: state`app.lastVisited`,
},
function RenderView ({ currentView, lastVisited }) {
  views[currentView]
    ? console.log(`Routing to view: ${currentView}`)
    : console.log(`The route "${currentView}" does not exist, routing to login instead.`)
  const Component = views[currentView] || views['home']
  return (
    <div>
      <CSSTransitionGroup
        transitionName="test"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <FullWidthHeight key={currentView}>
          <Component/>
        </FullWidthHeight>
      </CSSTransitionGroup>
    </div>
  )
})

const FullWidthHeight = styled.div`
  position: absolute;
  height: calc(100vh - 64px);
  width: calc(100% - 256px);
  padding: 24px;
`
