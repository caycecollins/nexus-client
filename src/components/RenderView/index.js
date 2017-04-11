import React from 'react'
import { connect } from 'cerebral/react'
import { state } from 'cerebral/tags'

import Login from '../Login'
import Main from '../Main'

const views = {
  main: Main,
  login: Login,
}

export default connect({
  currentView: state`app.currentView`,
  lastVisited: state`app.lastVisited`,
},
function RenderView ({ currentView, lastVisited }) {
  views[currentView]
    ? console.log(`Routing to view: ${currentView}`)
    : console.log(`The route "${currentView}" does not exist, routing to login instead.`)
  const ViewComponent = views[currentView] || views['login']
  return (
    <ViewComponent />
  )
})
