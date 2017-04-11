import React from 'react'
import { connect } from 'cerebral/react'
import { state } from 'cerebral/tags'

import Login from '../Login'
import Main from '../Main'
import Tournaments from '../Tournaments'
import Teams from '../Teams'
import FAQ from '../FAQ'
import Notifications from '../Notifications'
import Settings from '../Settings'

const views = {
  main: Main,
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
  const ViewComponent = views[currentView] || views['main']
  return (
    <ViewComponent />
  )
})
