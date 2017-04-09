import React from 'react'
import { connect } from 'cerebral/react'
import { FormattedMessage } from 'react-intl'
import styled, { ThemeProvider } from 'styled-components'

import {
  BSContainer,
  BSCard,
  BSCardBlock,
  BSCardHeader,
} from '../../wrappers/bootstrap'
import Login from '../Login'
import LanguageSelector from '../LanguageSelector'

const primaryTheme = {
  colors: {
    blue: {
      primary: 'rgba(64,161,233,1)',
    },
    gray: {
      primary: '#555',
    },
    green: {
      primary: 'rgba(36,173,120,1)',
    },
    orange: {
      primary: 'rgba(248,150,14,1)',
    },
    red: {
      primary: '#882200',
    },
  },
}

export default connect(
  {
  },
  function Main () {
    return (
      <ThemeProvider theme={primaryTheme}>
        <Container>
          <br />
          <BSCard>
            <BSCardHeader>
              <FormattedMessage id={'i18n.Main.LanguageSelector.header'} />
            </BSCardHeader>
            <BSCardBlock>
              <LanguageSelector />
            </BSCardBlock>
          </BSCard>
          <br />
          <BSCard>
            <BSCardHeader>
              <FormattedMessage id={'i18n.Main.Login.header'} />
            </BSCardHeader>
            <BSCardBlock>
              <Login />
            </BSCardBlock>
          </BSCard>
        </Container>
      </ThemeProvider>
    )
  }
)

const Container = styled(BSContainer)`
  padding-bottom: 160px;
`
