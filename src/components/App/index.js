import React from 'react'
import { ThemeProvider } from 'styled-components'

import SideBar from '../SideBar'
import RenderView from '../RenderView'

import theme from './theme'

export default function App () {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <SideBar />
        <RenderView />
      </ThemeProvider>
    </div>
  )
}
