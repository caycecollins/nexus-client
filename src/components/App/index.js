import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import RenderView from '../RenderView'

import Sidebar from './Sidebar'
import Header from './Header'
import theme from './theme'

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Sidebar />
        <View>
          <Header />
          <RenderView />
        </View>
      </div>
    </ThemeProvider>
  )
}

const View = styled.div`
  height: 100vh;
  margin-left: 250px;
  transition: all .2s ease-in-out;
  background-color: #f3f3f3;
  @media (max-width: 575px) {
    margin-left: 0;
  }
`
